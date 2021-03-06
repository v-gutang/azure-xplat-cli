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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\",\r\n  \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"age\": \"old\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"21299bcc-ac70-43ed-94dd-e942ff17b9ff\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5222',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932"',
  'x-ms-request-id': 'ec7aa7a3-acf3-4a54-8f26-e0805bb8ba08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14917',
  'x-ms-correlation-request-id': '7e4cbd62-5143-4891-9100-e2df156105e2',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T105725Z:7e4cbd62-5143-4891-9100-e2df156105e2',
  date: 'Tue, 29 Dec 2015 10:57:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\",\r\n  \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"age\": \"old\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"21299bcc-ac70-43ed-94dd-e942ff17b9ff\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5222',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3d5f5dd5-5ee3-4fe7-a7d8-2963c2c9c932"',
  'x-ms-request-id': 'ec7aa7a3-acf3-4a54-8f26-e0805bb8ba08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14917',
  'x-ms-correlation-request-id': '7e4cbd62-5143-4891-9100-e2df156105e2',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T105725Z:7e4cbd62-5143-4891-9100-e2df156105e2',
  date: 'Tue, 29 Dec 2015 10:57:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/ff067926-6bf3-4c5e-9c87-3376fbd01155?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'ff067926-6bf3-4c5e-9c87-3376fbd01155',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ff067926-6bf3-4c5e-9c87-3376fbd01155?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1172',
  'x-ms-correlation-request-id': 'e81142e7-5169-4154-9cff-aabd38e1754c',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T105727Z:e81142e7-5169-4154-9cff-aabd38e1754c',
  date: 'Tue, 29 Dec 2015 10:57:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/ff067926-6bf3-4c5e-9c87-3376fbd01155?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'ff067926-6bf3-4c5e-9c87-3376fbd01155',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ff067926-6bf3-4c5e-9c87-3376fbd01155?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1172',
  'x-ms-correlation-request-id': 'e81142e7-5169-4154-9cff-aabd38e1754c',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T105727Z:e81142e7-5169-4154-9cff-aabd38e1754c',
  date: 'Tue, 29 Dec 2015 10:57:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ff067926-6bf3-4c5e-9c87-3376fbd01155?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc8f975e-5696-40c4-bcba-b655f03a10fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '6313a406-e6e1-4751-b275-36892eaf6788',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T105739Z:6313a406-e6e1-4751-b275-36892eaf6788',
  date: 'Tue, 29 Dec 2015 10:57:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ff067926-6bf3-4c5e-9c87-3376fbd01155?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc8f975e-5696-40c4-bcba-b655f03a10fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '6313a406-e6e1-4751-b275-36892eaf6788',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T105739Z:6313a406-e6e1-4751-b275-36892eaf6788',
  date: 'Tue, 29 Dec 2015 10:57:39 GMT',
  connection: 'close' });
 return result; }]];