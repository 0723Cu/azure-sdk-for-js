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
 * This sample demonstrates how to Get all the IoT Central Applications in a resource group.
 *
 * @summary Get all the IoT Central Applications in a resource group.
 * x-ms-original-file: specification/iotcentral/resource-manager/Microsoft.IoTCentral/stable/2021-06-01/examples/Apps_ListByResourceGroup.json
 */
const { IotCentralClient } = require("@azure/arm-iotcentral");
const { DefaultAzureCredential } = require("@azure/identity");

async function appsListByResourceGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "resRg";
  const credential = new DefaultAzureCredential();
  const client = new IotCentralClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.apps.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

appsListByResourceGroup().catch(console.error);