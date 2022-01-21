let nock = require('nock');

module.exports.hash = "0c13adf3d0c896548bd80fcca090d89e";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '20616d55-2ea3-43e7-9507-b18d9af80200',
  'x-ms-ests-server',
  '2.1.12261.14 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AoUd9hXnm9xEqy6Vu49184s; expires=Sat, 08-Jan-2022 07:28:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr0Ze0Erc6CeXJMccPkFojJXQWhmRF-mWzMMeMUJ-9cjX9_e4-H4V_2xd3sSJOtkT6wOwyZ-TfTkQb7jMlNNReT5gfSowqlZqCqg5HqE65h8olQhsjCdklDzIMz4yloisKCaUvXkgvrvxYt1gKqUdP-sAHxN5xgOxRt2qnTCg0phggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 09 Dec 2021 07:28:48 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9e4deb1d-59f9-4f91-a0fa-cb1edc1b0300',
  'x-ms-ests-server',
  '2.1.12261.14 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AvGZhtlqPDpEg6d5QSt5o4c; expires=Sat, 08-Jan-2022 07:28:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrxMOeXgii3tNscO6R_2HtYcZrcxmVkR1n43ceDRwQdGqJK5rMeLRwC_SBUpxYSrkuxAasTXQ6qsxNC2pZPM6eO0PO1lZihjFA68HyWw9za4m3xEAhF93fza_VF0P_9_4o8oOlfHJuYvYD5Pwf23arKUXXeRa8v8-xVejLmyVYkyMgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 09 Dec 2021 07:28:48 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=6e197b2e-925a-4598-89ba-267fe50ae23a&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '20616d55-2ea3-43e7-9507-b18d9df80200',
  'x-ms-ests-server',
  '2.1.12261.14 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=ApaZGqPtASRJl_sd8NJSCNEWPr5BAQAAADCnQ9kOAAAA; expires=Sat, 08-Jan-2022 07:28:49 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 09 Dec 2021 07:28:48 GMT',
  'Content-Length',
  '1374'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.EventGrid/topics/mytopicxxx', {"location":"westcentralus","properties":{}})
  .query(true)
  .reply(201, {"properties":{"provisioningState":"Creating","endpoint":null},"location":"westcentralus","tags":null,"id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.EventGrid/topics/mytopicxxx","name":"mytopicxxx","type":"Microsoft.EventGrid/topics"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '289',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Azure-AsyncOperation',
  'https://management.azure.com:443/subscriptions/azure_subscription_id/providers/Microsoft.EventGrid/locations/westcentralus/operationsStatus/B00A871B-F008-4223-AAF3-EDA8AB857F49?api-version=2021-12-01',
  'x-ms-request-id',
  '4b231447-de92-46b3-bbae-3e9c31a046bb',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-correlation-request-id',
  '3502a6ef-978c-47f0-9263-9ca303de0041',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211209T072858Z:3502a6ef-978c-47f0-9263-9ca303de0041',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Dec 2021 07:28:58 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.EventGrid/locations/westcentralus/operationsStatus/B00A871B-F008-4223-AAF3-EDA8AB857F49')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fcddb76d53cba7b77912db38b7c912fdb71f683759d8fa7d5e26eb39e34d3ba58b545b56cee3edc3b7f787f7670be7d6ffae983edfdddbdfded87bbd307db07d3f39d07d3d9e47c6f7ff7eeaaae2e8b595e3777bf28a675d554e7edf8f492c07e5e17b3bb6535cd04d855deb453fab8ceca7573b75ae5b57cf1bacd5afae0c9cecef1c183dd27dbcf76760eb6f7f7f6ee6d1f1f3fbbb77dfaf4f8e0f8c9c1fd07cff61ffe1ed9aad8bea4aee8bdcff676f676b777f7b677763f1a7db4cc16398d6db2b3931190c9f6b9059265e7f7b6f35976904d08c8f9fe436add7097d4fe6cf9b2ae2eeabc693efa","25ff0f958256881f010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'da43ac88-647e-4cc2-8e29-24dee111cd05',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'x-ms-correlation-request-id',
  '713ca453-d4b1-4297-be53-a75d23600b6c',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211209T072859Z:713ca453-d4b1-4297-be53-a75d23600b6c',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Dec 2021 07:28:58 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.EventGrid/locations/westcentralus/operationsStatus/B00A871B-F008-4223-AAF3-EDA8AB857F49')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fcddb76d53cba7b77912db38b7c912fdb71f683759d8fa7d5e26eb39e34d3ba58b545b56cee3edc3b7f787f7670be7d6ffae983edfdddbdfded87bbd307db07d3f39d07d3d9e47c6f7ff7eeaaae2e8b595e3777bf28a675d554e7edf8f492c07e5e17b3bb6535cd04d855deb453fab8ceca7573b75ae5b57cf1bacd5afae0c9cecef1c183dd27dbcf76760eb6f7f7f6ee6d1f1f3fbbb77dfaf4f8e0f8c9c1fd07cff61ffe1ed9aad8bea4aee8bdcff676f676b777f7b677763f1a7db4cc16398d6db2b3931190c9f6b9059265e7f7b6f35976904d08c8f9fe436add7097d4fef57a3acdf3593efbe897","fc3f93210d221e010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '977afed9-0166-45cc-8034-b5ae18a9dc7a',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'x-ms-correlation-request-id',
  'ed1a80f5-3cb1-4bb2-9101-502fbea5c47c',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211209T072901Z:ed1a80f5-3cb1-4bb2-9101-502fbea5c47c',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Dec 2021 07:29:01 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.EventGrid/topics/mytopicxxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147abba5ae5755be4cd478ff8afcba229aa65b1bc78dd666dfed1a38f5eafa7d33c9fe5b38f461fe5cbd9aa2a962d7d3c6fdb55f3e8eeddc5755bad8ae9bb77efc65779d34ef3655b67e5bad9de1de797f4c7455dccc6d90fd6753e5ee6eddd6c55dce5cf1b02572c57ebf6f5749e2f3282788a8f3fa7e6fac9e8a345ded6c5f455de54eb7a9a9fcda8d1ece0e1f9bd9d0793edf3c9f4def6fe74677ffb61f6e0c1f6a7f7efdfbb7f7e6f77363b7f486faed693b298bec8dbabaa7e7b4c0368687c1f9d2eb3494903f925a38fca6a9ab53450fa34409bde6db30b6abc5c972561883eef36eb4933ad8b155e68ee3edc3b7f787f7670be7d6ffae983edfddd3d426177fa60fb607abef3603a9b9cefedefdead15e9cfeb6abd6a884a3fddb4d4cf5da6f02caf9bbb5f14d3ba6aaaf3766c077e974989d6fc0bd194d059660b4c43f0597bbdc267c3203efa25","ff0fd3b43cafdb010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '0d102274-0bae-4bca-81e4-9731002d977b',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11997',
  'x-ms-correlation-request-id',
  '58a6c6cf-7b2a-4c74-9529-d05d98edd749',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211209T072903Z:58a6c6cf-7b2a-4c74-9529-d05d98edd749',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Dec 2021 07:29:03 GMT'
]);