/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete dismiss alert rule for this subscription.
 *
 * @summary Delete dismiss alert rule for this subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/AlertsSuppressionRules/DeleteAlertsSuppressionRule_example.json
 */
async function deleteSuppressionRuleDataForASubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const alertsSuppressionRuleName = "dismissIpAnomalyAlerts";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.alertsSuppressionRules.delete(alertsSuppressionRuleName);
  console.log(result);
}

deleteSuppressionRuleDataForASubscription().catch(console.error);
