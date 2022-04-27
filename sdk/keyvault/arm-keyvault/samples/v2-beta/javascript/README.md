# client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                                                                               | **Description**                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [keysCreateIfNotExistSample.js][keyscreateifnotexistsample]                                                 | Creates the first version of a new key if it does not exist. If it already exists, then the existing key is returned without any write operations being performed. This API does not create subsequent versions, and does not update existing keys. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/createKey.json |
| [keysGetSample.js][keysgetsample]                                                                           | Gets the current version of the specified key from the specified key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/getKey.json                                                                                                                                                                            |
| [keysGetVersionSample.js][keysgetversionsample]                                                             | Gets the specified version of the specified key in the specified key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/getKeyVersion.json                                                                                                                                                                     |
| [keysListSample.js][keyslistsample]                                                                         | Lists the keys in the specified key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listKeys.json                                                                                                                                                                                                           |
| [keysListVersionsSample.js][keyslistversionssample]                                                         | Lists the versions of the specified key in the specified key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listKeyVersions.json                                                                                                                                                                           |
| [managedHsmsCreateOrUpdateSample.js][managedhsmscreateorupdatesample]                                       | Create or update a managed HSM Pool in the specified subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_CreateOrUpdate.json                                                                                                                                                                  |
| [managedHsmsDeleteSample.js][managedhsmsdeletesample]                                                       | Deletes the specified managed HSM Pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_Delete.json                                                                                                                                                                                                     |
| [managedHsmsGetDeletedSample.js][managedhsmsgetdeletedsample]                                               | Gets the specified deleted managed HSM. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/DeletedManagedHsm_Get.json                                                                                                                                                                                                 |
| [managedHsmsGetSample.js][managedhsmsgetsample]                                                             | Gets the specified managed HSM Pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_Get.json                                                                                                                                                                                                           |
| [managedHsmsListByResourceGroupSample.js][managedhsmslistbyresourcegroupsample]                             | The List operation gets information about the managed HSM Pools associated with the subscription and within the specified resource group. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_ListByResourceGroup.json                                                                                      |
| [managedHsmsListBySubscriptionSample.js][managedhsmslistbysubscriptionsample]                               | The List operation gets information about the managed HSM Pools associated with the subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_ListBySubscription.json                                                                                                                               |
| [managedHsmsListDeletedSample.js][managedhsmslistdeletedsample]                                             | The List operation gets information about the deleted managed HSMs associated with the subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/DeletedManagedHsm_List.json                                                                                                                                   |
| [managedHsmsPurgeDeletedSample.js][managedhsmspurgedeletedsample]                                           | Permanently deletes the specified managed HSM. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/DeletedManagedHsm_Purge.json                                                                                                                                                                                        |
| [managedHsmsUpdateSample.js][managedhsmsupdatesample]                                                       | Update a managed HSM Pool in the specified subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_Update.json                                                                                                                                                                                    |
| [mhsmPrivateEndpointConnectionsDeleteSample.js][mhsmprivateendpointconnectionsdeletesample]                 | Deletes the specified private endpoint connection associated with the managed hsm pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_deletePrivateEndpointConnection.json                                                                                                                            |
| [mhsmPrivateEndpointConnectionsGetSample.js][mhsmprivateendpointconnectionsgetsample]                       | Gets the specified private endpoint connection associated with the managed HSM Pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_getPrivateEndpointConnection.json                                                                                                                                  |
| [mhsmPrivateEndpointConnectionsListByResourceSample.js][mhsmprivateendpointconnectionslistbyresourcesample] | The List operation gets information about the private endpoint connections associated with the managed HSM Pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_ListPrivateEndpointConnectionsByResource.json                                                                                          |
| [mhsmPrivateEndpointConnectionsPutSample.js][mhsmprivateendpointconnectionsputsample]                       | Updates the specified private endpoint connection associated with the managed hsm pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_putPrivateEndpointConnection.json                                                                                                                               |
| [mhsmPrivateLinkResourcesListByMhsmResourceSample.js][mhsmprivatelinkresourceslistbymhsmresourcesample]     | Gets the private link resources supported for the managed hsm pool. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_listPrivateLinkResources.json                                                                                                                                                       |
| [operationsListSample.js][operationslistsample]                                                             | Lists all of the available Key Vault Rest API operations. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listOperations.json                                                                                                                                                                                      |
| [privateEndpointConnectionsDeleteSample.js][privateendpointconnectionsdeletesample]                         | Deletes the specified private endpoint connection associated with the key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/deletePrivateEndpointConnection.json                                                                                                                                              |
| [privateEndpointConnectionsGetSample.js][privateendpointconnectionsgetsample]                               | Gets the specified private endpoint connection associated with the key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/getPrivateEndpointConnection.json                                                                                                                                                    |
| [privateEndpointConnectionsListByResourceSample.js][privateendpointconnectionslistbyresourcesample]         | The List operation gets information about the private endpoint connections associated with the vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listPrivateEndpointConnection.json                                                                                                                           |
| [privateEndpointConnectionsPutSample.js][privateendpointconnectionsputsample]                               | Updates the specified private endpoint connection associated with the key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/putPrivateEndpointConnection.json                                                                                                                                                 |
| [privateLinkResourcesListByVaultSample.js][privatelinkresourceslistbyvaultsample]                           | Gets the private link resources supported for the key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listPrivateLinkResources.json                                                                                                                                                                         |
| [secretsCreateOrUpdateSample.js][secretscreateorupdatesample]                                               | Create or update a secret in a key vault in the specified subscription. NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/createSecret.json                         |
| [secretsGetSample.js][secretsgetsample]                                                                     | Gets the specified secret. NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/getSecret.json                                                                         |
| [secretsListSample.js][secretslistsample]                                                                   | The List operation gets information about the secrets in a vault. NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listSecrets.json                                |
| [secretsUpdateSample.js][secretsupdatesample]                                                               | Update a secret in the specified subscription. NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/updateSecret.json                                                  |
| [vaultsCheckNameAvailabilitySample.js][vaultschecknameavailabilitysample]                                   | Checks that the vault name is valid and is not already in use. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/checkVaultNameAvailability.json                                                                                                                                                                     |
| [vaultsCreateOrUpdateSample.js][vaultscreateorupdatesample]                                                 | Create or update a key vault in the specified subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/createVault.json                                                                                                                                                                                       |
| [vaultsDeleteSample.js][vaultsdeletesample]                                                                 | Deletes the specified Azure key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/deleteVault.json                                                                                                                                                                                                            |
| [vaultsGetDeletedSample.js][vaultsgetdeletedsample]                                                         | Gets the deleted Azure key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/getDeletedVault.json                                                                                                                                                                                                             |
| [vaultsGetSample.js][vaultsgetsample]                                                                       | Gets the specified Azure key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/getVault.json                                                                                                                                                                                                                  |
| [vaultsListByResourceGroupSample.js][vaultslistbyresourcegroupsample]                                       | The List operation gets information about the vaults associated with the subscription and within the specified resource group. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listVaultByResourceGroup.json                                                                                                       |
| [vaultsListBySubscriptionSample.js][vaultslistbysubscriptionsample]                                         | The List operation gets information about the vaults associated with the subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listVaultBySubscription.json                                                                                                                                                |
| [vaultsListDeletedSample.js][vaultslistdeletedsample]                                                       | Gets information about the deleted vaults in a subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listDeletedVaults.json                                                                                                                                                                                |
| [vaultsListSample.js][vaultslistsample]                                                                     | The List operation gets information about the vaults associated with the subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listVault.json                                                                                                                                                              |
| [vaultsPurgeDeletedSample.js][vaultspurgedeletedsample]                                                     | Permanently deletes the specified vault. aka Purges the deleted Azure key vault. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/purgeDeletedVault.json                                                                                                                                                            |
| [vaultsUpdateAccessPolicySample.js][vaultsupdateaccesspolicysample]                                         | Update access policies in a key vault in the specified subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/updateAccessPoliciesAdd.json                                                                                                                                                                  |
| [vaultsUpdateSample.js][vaultsupdatesample]                                                                 | Update a key vault in the specified subscription. x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/updateVault.json                                                                                                                                                                                                 |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node keysCreateIfNotExistSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node keysCreateIfNotExistSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[keyscreateifnotexistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/keysCreateIfNotExistSample.js
[keysgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/keysGetSample.js
[keysgetversionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/keysGetVersionSample.js
[keyslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/keysListSample.js
[keyslistversionssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/keysListVersionsSample.js
[managedhsmscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsCreateOrUpdateSample.js
[managedhsmsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsDeleteSample.js
[managedhsmsgetdeletedsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsGetDeletedSample.js
[managedhsmsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsGetSample.js
[managedhsmslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsListByResourceGroupSample.js
[managedhsmslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsListBySubscriptionSample.js
[managedhsmslistdeletedsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsListDeletedSample.js
[managedhsmspurgedeletedsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsPurgeDeletedSample.js
[managedhsmsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/managedHsmsUpdateSample.js
[mhsmprivateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/mhsmPrivateEndpointConnectionsDeleteSample.js
[mhsmprivateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/mhsmPrivateEndpointConnectionsGetSample.js
[mhsmprivateendpointconnectionslistbyresourcesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/mhsmPrivateEndpointConnectionsListByResourceSample.js
[mhsmprivateendpointconnectionsputsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/mhsmPrivateEndpointConnectionsPutSample.js
[mhsmprivatelinkresourceslistbymhsmresourcesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/mhsmPrivateLinkResourcesListByMhsmResourceSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/operationsListSample.js
[privateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/privateEndpointConnectionsDeleteSample.js
[privateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/privateEndpointConnectionsGetSample.js
[privateendpointconnectionslistbyresourcesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/privateEndpointConnectionsListByResourceSample.js
[privateendpointconnectionsputsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/privateEndpointConnectionsPutSample.js
[privatelinkresourceslistbyvaultsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/privateLinkResourcesListByVaultSample.js
[secretscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/secretsCreateOrUpdateSample.js
[secretsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/secretsGetSample.js
[secretslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/secretsListSample.js
[secretsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/secretsUpdateSample.js
[vaultschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsCheckNameAvailabilitySample.js
[vaultscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsCreateOrUpdateSample.js
[vaultsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsDeleteSample.js
[vaultsgetdeletedsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsGetDeletedSample.js
[vaultsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsGetSample.js
[vaultslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsListByResourceGroupSample.js
[vaultslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsListBySubscriptionSample.js
[vaultslistdeletedsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsListDeletedSample.js
[vaultslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsListSample.js
[vaultspurgedeletedsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsPurgeDeletedSample.js
[vaultsupdateaccesspolicysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsUpdateAccessPolicySample.js
[vaultsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/keyvault/arm-keyvault/samples/v2-beta/javascript/vaultsUpdateSample.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-keyvault?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/keyvault/arm-keyvault/README.md