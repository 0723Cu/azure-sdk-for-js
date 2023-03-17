// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as dotenv from "dotenv";
import { isNode } from "@azure/core-util";
import { Recorder, RecorderStartOptions, env, assertEnvironmentVariable } from "@azure-tools/test-recorder";
import { Test } from "mocha";
import { generateToken } from "./connectionUtils";
import { CommunicationIdentityClient } from "@azure/communication-identity";
import { CommunicationUserIdentifier, CommunicationIdentifier, serializeCommunicationIdentifier } from "@azure/communication-common";
import { CallAutomationClient, CallAutomationClientOptions, CallAutomationEvent, CallAutomationEventParser } from "../../../src";
import { CommunicationIdentifierModel } from "../../../src/generated/src";
import { assert } from "chai";
import fetch from "node-fetch";
import { ServiceBusClient, ServiceBusReceiver, ServiceBusReceivedMessage, ProcessErrorArgs } from "@azure/service-bus";


if (isNode) {
  dotenv.config();
}

const envSetupForPlayback: { [k: string]: string } = {
  COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING: "endpoint=https://endpoint/;accesskey=redacted",
};

const fakeToken = generateToken();

export const dispatcherCallback: string = assertEnvironmentVariable("DISPATCHER_ENDPOINT") + "/api/servicebuscallback/events";
export let serviceBusReceivers: Map<string, ServiceBusReceiver> = new Map<string, ServiceBusReceiver>();
export let incomingCallContexts: Map<string, string> = new Map<string, string>();
export let events: Map<string, Map<string, CallAutomationEvent>> = new Map<string, Map<string, CallAutomationEvent>>();
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function removeAllNonChar(input: string): string {
  const regex = new RegExp("[^a-zA-Z0-9_-]", 'g');
  return input.replace(regex, '');
}

function parseIdsFromIdentifier(identifier: CommunicationIdentifier): string {
  const communicationIdentifierModel: CommunicationIdentifierModel = serializeCommunicationIdentifier(identifier);
  assert.isDefined(communicationIdentifierModel?.rawId);
  return communicationIdentifierModel?.rawId ? removeAllNonChar(communicationIdentifierModel.rawId) : "";

}

function createServiceBusClient(): ServiceBusClient {
  return new ServiceBusClient(assertEnvironmentVariable("SERVICEBUS_STRING"));
}

export const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback,
  sanitizerOptions: {
    connectionStringSanitizers: [
      {
        fakeConnString: envSetupForPlayback["COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING"],
        actualConnString: env["COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING"] || undefined,
      },
    ],
    bodyKeySanitizers: [{ jsonPath: "$.accessToken.token", value: fakeToken }],
  },
};

export async function createRecorder(context: Test | undefined): Promise<Recorder> {
  const recorder = new Recorder(context);
  await recorder.start(recorderOptions);
  await recorder.setMatcher("HeaderlessMatcher");
  return recorder;
}

export async function createTestUser(recorder: Recorder): Promise<CommunicationUserIdentifier> {
  const identityClient = new CommunicationIdentityClient(
    assertEnvironmentVariable("COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING"),
    recorder.configureClientOptions({})
  );
  return identityClient.createUser();
}

export async function deleteTestUser(testUser: CommunicationUserIdentifier): Promise<void> {
  if (testUser) {
    const identityClient = new CommunicationIdentityClient(
      assertEnvironmentVariable("COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING")
    );
    await identityClient.deleteUser(testUser);
  }
}

export function createCallAutomationClient(recorder: Recorder, sourceIdentity: CommunicationUserIdentifier): CallAutomationClient {
  const connectionString = assertEnvironmentVariable("COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING");
  let options: CallAutomationClientOptions = {
    sourceIdentity: sourceIdentity
    }
  return new CallAutomationClient(
    connectionString,
    recorder.configureClientOptions(options)
  );
}

export async function serviceBusWithNewCall(caller: CommunicationIdentifier, receiver: CommunicationIdentifier): Promise<string> {
  const callerId: string = parseIdsFromIdentifier(caller);
  const receiverId: string = parseIdsFromIdentifier(receiver);
  const uniqueId: string = callerId + receiverId;

  //subscribe to event dispatcher
  const dispatcherUrl: string = assertEnvironmentVariable("DISPATCHER_ENDPOINT") + `/api/servicebuscallback/subscribe?q=${uniqueId}`;

  try {
    await fetch(dispatcherUrl, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  } catch (e) {
    console.log('Error occurred', e);
  }

  //create a service bus processor
  const serviceBusClient = createServiceBusClient();
  const serviceBusReceiver: ServiceBusReceiver = serviceBusClient.createReceiver(uniqueId);

  // function to handle messages
  const messageHandler = async (messageReceived: ServiceBusReceivedMessage) => {
    if (messageReceived.body.incomingCallContext) {
      const incomingCallContext: string = messageReceived.body.incomingCallContext;
      const callerRawId: string = messageReceived.body.from.rawId;
      const calleeRawId: string = messageReceived.body.to.rawId;
      const uniqueId: string = removeAllNonChar(callerRawId + calleeRawId);
      incomingCallContexts.set(uniqueId, incomingCallContext);
    }
    else {
      const eventParser: CallAutomationEventParser = new CallAutomationEventParser();
      const event: CallAutomationEvent = await eventParser.parse(messageReceived.body);

      if (event.callConnectionId) {
        if (events.has(event.callConnectionId)) {
          events.get(event.callConnectionId)?.set(event.kind, event);
        }
        else {
          let temp: Map<string, CallAutomationEvent> = new Map<string, CallAutomationEvent>();
          temp.set(event.kind, event);
          events.set(event.callConnectionId, temp);
        }
      }
    }
  };

  // function to handle any errors
  const errorHandler = async (error: ProcessErrorArgs) => {
    console.log(error);
  };

  // subscribe and specify the message and error handlers
  serviceBusReceiver.subscribe({
    processMessage: messageHandler,
    processError: errorHandler
  });

  serviceBusReceivers.set(uniqueId, serviceBusReceiver);

  return uniqueId;
}

export async function waitForIncomingCallContext(uniqueId: string, timeOut: number): Promise<string | undefined> {
  console.log("looking for id: " + uniqueId);
  let currentTime = new Date().getTime();
  const timeOutTime = currentTime + timeOut;
  while (currentTime < timeOutTime) {
    let incomingCallContext = incomingCallContexts.get(uniqueId);
    if (incomingCallContext) {
      console.log("found the context");
      return incomingCallContext;
    }
    console.log("looking for incomingcall context");
    await sleep(1000);
    currentTime += 1000;
  }
  return "";
}

export async function waitForEvent(eventName: string, callConnectionId: string, timeOut: number): Promise<CallAutomationEvent | undefined> {
  console.log("looking for id: " + callConnectionId);
  let currentTime = new Date().getTime();
  const timeOutTime = currentTime + timeOut;
  while (currentTime < timeOutTime) {
    let eventGroup = events.get(callConnectionId);
    if (eventGroup && eventGroup.has(eventName)) {
      console.log("found the event" + eventName);
      return eventGroup.get(eventName);
    }
    console.log("looking for event" + eventName);
    await sleep(1000);
    currentTime += 1000;
  }
  return undefined;
}