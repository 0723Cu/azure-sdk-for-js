let nock = require('nock');

module.exports.hash = "dc2849389618605c620e320bf66336c1";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fpurview.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1318',
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
  '9e151e6c-1291-4bb3-9a51-f1c0cf2c7700',
  'x-ms-ests-server',
  '2.1.11654.13 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AgaPavBeJFFLjqLM1uyGdHX__1r8AQAAAI3KD9gOAAAA; expires=Wed, 19-May-2021 19:01:33 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 19 Apr 2021 19:01:33 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .get('/api/atlas/v2/types/typedefs')
  .query(true)
  'Date',
  'Mon, 19 Apr 2021 19:01:34 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'AzurePurview',
  'Cache-Control',
  'no-store, must-revalidate, no-cache, max-age=0',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Expires',
  '0',
  'Access-Control-Allow-Headers',
  'authorization,content-type,x-xsrf-header,x-ms-client-request-id,lastmodifiedts',
  'Access-Control-Allow-Methods',
  'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,lastmodifiedts',
  'Strict-Transport-Security',
  'max-age=31536000 ; includeSubDomains',
  'x-ms-correlation-request-id',
  'f0035f40-a621-499f-b636-6af42739a67b',
  'x-ms-request-id',
  'a9357adc-b645-4855-aff7-b5f0fbb4d6bd',
  'X-Frame-Options',
  'DENY',
  'X-Content-Type-Options',
  'nosniff',
  'X-Content-Type-Options',
  'nosniff',
  'x-xss-protection',
  '1; mode=block',
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; connect-src 'self'; img-src 'self' blob: data:; style-src 'self' 'unsafe-inline';font-src 'self' data:"
]);