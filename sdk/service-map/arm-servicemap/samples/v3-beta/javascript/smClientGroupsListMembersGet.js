/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Returns the members of the client group during the specified time interval.
 *
 * @summary Returns the members of the client group during the specified time interval.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/ClientGroups/SMClientGroupsListMembersGet.json
 */
const { ServiceMap } = require("@azure/arm-servicemap");
const { DefaultAzureCredential } = require("@azure/identity");

async function smClientGroupsListMembersGet() {
  const subscriptionId = "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName = "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const clientGroupName = "m!m-12bc33c3-31ad-42e0-a08b-bd1c2531776b!b!b-c0a8010a_8000";
  const startTime = new Date("2018-01-08T21:51:48.301Z");
  const endTime = new Date("2018-01-08T21:52:03.301Z");
  const options = { startTime: startTime, endTime: endTime };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.clientGroups.listMembers(
    resourceGroupName,
    workspaceName,
    clientGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

smClientGroupsListMembersGet().catch(console.error);