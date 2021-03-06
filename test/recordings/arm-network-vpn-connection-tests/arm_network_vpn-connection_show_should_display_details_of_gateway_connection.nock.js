// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"b1ac6f83-dd9c-4268-b2be-30e21a65bdad\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9aa388c2-2305-4c1d-b188-ceeaa4101ca2\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '70233710-d0a6-401c-9c97-b24100036ea7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2ee929e6-6c18-46eb-9cdf-af1b7698ece5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T122958Z:2ee929e6-6c18-46eb-9cdf-af1b7698ece5',
  date: 'Fri, 08 Jan 2016 12:29:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestGatewayConn\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/connections/xplatTestGatewayConn\",\r\n  \"etag\": \"W/\\\"b1ac6f83-dd9c-4268-b2be-30e21a65bdad\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"connTag1\": \"connVal1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9aa388c2-2305-4c1d-b188-ceeaa4101ca2\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayI\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupGatewayCon/providers/Microsoft.Network/virtualNetworkGateways/xplatvpngatewayII\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '70233710-d0a6-401c-9c97-b24100036ea7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2ee929e6-6c18-46eb-9cdf-af1b7698ece5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160108T122958Z:2ee929e6-6c18-46eb-9cdf-af1b7698ece5',
  date: 'Fri, 08 Jan 2016 12:29:57 GMT',
  connection: 'close' });
 return result; }]];