// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5071\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071\",\r\n  \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d7949ec2-b81e-43c5-a2c4-126a8fa5a9b1\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/publicIPAddresses/xplatTestIpRule\"\r\n          },\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPool1421\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/backendAddressPools/LB-AddPool1421\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [\r\n      {\r\n        \"name\": \"LB-Rule5008\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 82,\r\n          \"backendPort\": 82,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 5,\r\n          \"protocol\": \"Tcp\",\r\n          \"loadDistribution\": \"Default\",\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/backendAddressPools/LB-AddPool1421\"\r\n          },\r\n          \"probe\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/probes/LB-Probe7114\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe7114\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/probes/LB-Probe7114\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4440',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"776a16a9-000e-4375-919d-2045b3675a43"',
  'x-ms-request-id': 'f6caab5d-b5cc-48aa-8fb9-ef7ffb417531',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': 'b3b95d99-cfd0-46b1-ae5b-2776ca4e0b39',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112117Z:b3b95d99-cfd0-46b1-ae5b-2776ca4e0b39',
  date: 'Tue, 29 Dec 2015 11:21:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB5071\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071\",\r\n  \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d7949ec2-b81e-43c5-a2c4-126a8fa5a9b1\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/publicIPAddresses/xplatTestIpRule\"\r\n          },\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPool1421\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/backendAddressPools/LB-AddPool1421\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [\r\n      {\r\n        \"name\": \"LB-Rule5008\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"frontendPort\": 82,\r\n          \"backendPort\": 82,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 5,\r\n          \"protocol\": \"Tcp\",\r\n          \"loadDistribution\": \"Default\",\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/backendAddressPools/LB-AddPool1421\"\r\n          },\r\n          \"probe\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/probes/LB-Probe7114\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"LB-Probe7114\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/probes/LB-Probe7114\",\r\n        \"etag\": \"W/\\\"776a16a9-000e-4375-919d-2045b3675a43\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2,\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBRule/providers/Microsoft.Network/loadBalancers/armEmptyLB5071/loadBalancingRules/LB-Rule5008\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4440',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"776a16a9-000e-4375-919d-2045b3675a43"',
  'x-ms-request-id': 'f6caab5d-b5cc-48aa-8fb9-ef7ffb417531',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': 'b3b95d99-cfd0-46b1-ae5b-2776ca4e0b39',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112117Z:b3b95d99-cfd0-46b1-ae5b-2776ca4e0b39',
  date: 'Tue, 29 Dec 2015 11:21:17 GMT',
  connection: 'close' });
 return result; }]];