// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource8386' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-request-id': 'f8440258-1c91-429c-9e9a-c1da2d1fee76',
  'x-ms-correlation-request-id': 'f8440258-1c91-429c-9e9a-c1da2d1fee76',
  'x-ms-routing-request-id': 'WESTUS:20150917T021722Z:f8440258-1c91-429c-9e9a-c1da2d1fee76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:21 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource8386' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-request-id': 'f8440258-1c91-429c-9e9a-c1da2d1fee76',
  'x-ms-correlation-request-id': 'f8440258-1c91-429c-9e9a-c1da2d1fee76',
  'x-ms-routing-request-id': 'WESTUS:20150917T021722Z:f8440258-1c91-429c-9e9a-c1da2d1fee76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:21 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386\",\"name\":\"xTestResource8386\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-request-id': '7b631ca5-329a-4e06-8751-7b16190e8646',
  'x-ms-correlation-request-id': '7b631ca5-329a-4e06-8751-7b16190e8646',
  'x-ms-routing-request-id': 'WESTUS:20150917T021722Z:7b631ca5-329a-4e06-8751-7b16190e8646',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386\",\"name\":\"xTestResource8386\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-request-id': '7b631ca5-329a-4e06-8751-7b16190e8646',
  'x-ms-correlation-request-id': '7b631ca5-329a-4e06-8751-7b16190e8646',
  'x-ms-routing-request-id': 'WESTUS:20150917T021722Z:7b631ca5-329a-4e06-8751-7b16190e8646',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386/providers/Microsoft.Web//sites/xTestGrpRes2536?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes2536' under resource group 'xTestResource8386' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2ecac1fd-5bab-4f6f-a288-58589832224a',
  'x-ms-correlation-request-id': '2ecac1fd-5bab-4f6f-a288-58589832224a',
  'x-ms-routing-request-id': 'WESTUS:20150917T021722Z:2ecac1fd-5bab-4f6f-a288-58589832224a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:22 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386/providers/Microsoft.Web//sites/xTestGrpRes2536?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes2536' under resource group 'xTestResource8386' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2ecac1fd-5bab-4f6f-a288-58589832224a',
  'x-ms-correlation-request-id': '2ecac1fd-5bab-4f6f-a288-58589832224a',
  'x-ms-routing-request-id': 'WESTUS:20150917T021722Z:2ecac1fd-5bab-4f6f-a288-58589832224a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:22 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386/providers/Microsoft.Web//sites/xTestGrpRes2536?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386/providers/Microsoft.Web/sites/xTestGrpRes2536\",\"name\":\"xTestGrpRes2536\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"plan\":null,\"properties\":{\"name\":\"xTestGrpRes2536\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres2536.azurewebsites.net\"],\"webSpace\":\"xTestResource8386-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-013.api.azurewebsites.windows.net:454/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/webspaces/xTestResource8386-SouthCentralUSwebspace/sites/xTestGrpRes2536\",\"repositorySiteName\":\"xTestGrpRes2536\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres2536.azurewebsites.net\",\"xtestgrpres2536.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres2536.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres2536.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2015-09-17T02:17:28.247\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes2536\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"kind\":null,\"outboundIpAddresses\":\"104.215.89.23,104.215.89.24,104.215.89.25,104.215.89.26\",\"cloningInfo\":null,\"hostingEnvironmentId\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2059',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '07adb633-f977-4a27-b57e-1f9356b422a1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'b113b5bb-e13f-43d9-83e7-0d44a70cc917',
  'x-ms-routing-request-id': 'WESTUS:20150917T021730Z:b113b5bb-e13f-43d9-83e7-0d44a70cc917',
  date: 'Thu, 17 Sep 2015 02:17:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386/providers/Microsoft.Web//sites/xTestGrpRes2536?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386/providers/Microsoft.Web/sites/xTestGrpRes2536\",\"name\":\"xTestGrpRes2536\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"plan\":null,\"properties\":{\"name\":\"xTestGrpRes2536\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres2536.azurewebsites.net\"],\"webSpace\":\"xTestResource8386-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-013.api.azurewebsites.windows.net:454/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/webspaces/xTestResource8386-SouthCentralUSwebspace/sites/xTestGrpRes2536\",\"repositorySiteName\":\"xTestGrpRes2536\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres2536.azurewebsites.net\",\"xtestgrpres2536.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres2536.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres2536.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2015-09-17T02:17:28.247\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes2536\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"kind\":null,\"outboundIpAddresses\":\"104.215.89.23,104.215.89.24,104.215.89.25,104.215.89.26\",\"cloningInfo\":null,\"hostingEnvironmentId\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2059',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '07adb633-f977-4a27-b57e-1f9356b422a1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'b113b5bb-e13f-43d9-83e7-0d44a70cc917',
  'x-ms-routing-request-id': 'WESTUS:20150917T021730Z:b113b5bb-e13f-43d9-83e7-0d44a70cc917',
  date: 'Thu, 17 Sep 2015 02:17:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386\",\"name\":\"xTestResource8386\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-request-id': '1fbcb87d-e8a1-4f5f-bd63-dcbad13b9ab7',
  'x-ms-correlation-request-id': '1fbcb87d-e8a1-4f5f-bd63-dcbad13b9ab7',
  'x-ms-routing-request-id': 'WESTUS:20150917T021730Z:1fbcb87d-e8a1-4f5f-bd63-dcbad13b9ab7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:29 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386\",\"name\":\"xTestResource8386\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-request-id': '1fbcb87d-e8a1-4f5f-bd63-dcbad13b9ab7',
  'x-ms-correlation-request-id': '1fbcb87d-e8a1-4f5f-bd63-dcbad13b9ab7',
  'x-ms-routing-request-id': 'WESTUS:20150917T021730Z:1fbcb87d-e8a1-4f5f-bd63-dcbad13b9ab7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:29 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386/resources?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386/providers/Microsoft.Web/sites/xTestGrpRes2536\",\"name\":\"xTestGrpRes2536\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14848',
  'x-ms-request-id': '0f027d55-1032-4dd8-b22f-0ae75d344386',
  'x-ms-correlation-request-id': '0f027d55-1032-4dd8-b22f-0ae75d344386',
  'x-ms-routing-request-id': 'WESTUS:20150917T021730Z:0f027d55-1032-4dd8-b22f-0ae75d344386',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:30 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386/resources?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xTestResource8386/providers/Microsoft.Web/sites/xTestGrpRes2536\",\"name\":\"xTestGrpRes2536\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14848',
  'x-ms-request-id': '0f027d55-1032-4dd8-b22f-0ae75d344386',
  'x-ms-correlation-request-id': '0f027d55-1032-4dd8-b22f-0ae75d344386',
  'x-ms-routing-request-id': 'WESTUS:20150917T021730Z:0f027d55-1032-4dd8-b22f-0ae75d344386',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:30 GMT',
  connection: 'close',
  'content-length': '243' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb47c433-f83c-4ace-a997-2220fa79acaf',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '0c88f425-fbdf-4473-b611-fe6906cdf897',
  'x-ms-routing-request-id': 'WESTUS:20150917T021731Z:0c88f425-fbdf-4473-b611-fe6906cdf897',
  date: 'Thu, 17 Sep 2015 02:17:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb47c433-f83c-4ace-a997-2220fa79acaf',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '0c88f425-fbdf-4473-b611-fe6906cdf897',
  'x-ms-routing-request-id': 'WESTUS:20150917T021731Z:0c88f425-fbdf-4473-b611-fe6906cdf897',
  date: 'Thu, 17 Sep 2015 02:17:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '5f18a5d5-27d7-48fa-bc42-438377ac2ab2',
  'x-ms-correlation-request-id': '5f18a5d5-27d7-48fa-bc42-438377ac2ab2',
  'x-ms-routing-request-id': 'WESTUS:20150917T021731Z:5f18a5d5-27d7-48fa-bc42-438377ac2ab2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xTestResource8386?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '5f18a5d5-27d7-48fa-bc42-438377ac2ab2',
  'x-ms-correlation-request-id': '5f18a5d5-27d7-48fa-bc42-438377ac2ab2',
  'x-ms-routing-request-id': 'WESTUS:20150917T021731Z:5f18a5d5-27d7-48fa-bc42-438377ac2ab2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '0d7254f0-651e-4708-98a9-cc9111ba3717',
  'x-ms-correlation-request-id': '0d7254f0-651e-4708-98a9-cc9111ba3717',
  'x-ms-routing-request-id': 'WESTUS:20150917T021746Z:0d7254f0-651e-4708-98a9-cc9111ba3717',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '0d7254f0-651e-4708-98a9-cc9111ba3717',
  'x-ms-correlation-request-id': '0d7254f0-651e-4708-98a9-cc9111ba3717',
  'x-ms-routing-request-id': 'WESTUS:20150917T021746Z:0d7254f0-651e-4708-98a9-cc9111ba3717',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:17:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-request-id': '1cc75a11-2448-40ab-8ea0-0217b72b2801',
  'x-ms-correlation-request-id': '1cc75a11-2448-40ab-8ea0-0217b72b2801',
  'x-ms-routing-request-id': 'WESTUS:20150917T021801Z:1cc75a11-2448-40ab-8ea0-0217b72b2801',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:01 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-request-id': '1cc75a11-2448-40ab-8ea0-0217b72b2801',
  'x-ms-correlation-request-id': '1cc75a11-2448-40ab-8ea0-0217b72b2801',
  'x-ms-routing-request-id': 'WESTUS:20150917T021801Z:1cc75a11-2448-40ab-8ea0-0217b72b2801',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:01 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-request-id': '9918a216-6ce5-4e5e-bd04-15d5cd75b4bd',
  'x-ms-correlation-request-id': '9918a216-6ce5-4e5e-bd04-15d5cd75b4bd',
  'x-ms-routing-request-id': 'WESTUS:20150917T021817Z:9918a216-6ce5-4e5e-bd04-15d5cd75b4bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-request-id': '9918a216-6ce5-4e5e-bd04-15d5cd75b4bd',
  'x-ms-correlation-request-id': '9918a216-6ce5-4e5e-bd04-15d5cd75b4bd',
  'x-ms-routing-request-id': 'WESTUS:20150917T021817Z:9918a216-6ce5-4e5e-bd04-15d5cd75b4bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14898',
  'x-ms-request-id': '89e76fa6-c178-4b61-b496-db56ed3c8835',
  'x-ms-correlation-request-id': '89e76fa6-c178-4b61-b496-db56ed3c8835',
  'x-ms-routing-request-id': 'WESTUS:20150917T021832Z:89e76fa6-c178-4b61-b496-db56ed3c8835',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:31 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14898',
  'x-ms-request-id': '89e76fa6-c178-4b61-b496-db56ed3c8835',
  'x-ms-correlation-request-id': '89e76fa6-c178-4b61-b496-db56ed3c8835',
  'x-ms-routing-request-id': 'WESTUS:20150917T021832Z:89e76fa6-c178-4b61-b496-db56ed3c8835',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:31 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14844',
  'x-ms-request-id': '28e8d6c0-f091-412b-b810-5cebeaeef92e',
  'x-ms-correlation-request-id': '28e8d6c0-f091-412b-b810-5cebeaeef92e',
  'x-ms-routing-request-id': 'WESTUS:20150917T021847Z:28e8d6c0-f091-412b-b810-5cebeaeef92e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14844',
  'x-ms-request-id': '28e8d6c0-f091-412b-b810-5cebeaeef92e',
  'x-ms-correlation-request-id': '28e8d6c0-f091-412b-b810-5cebeaeef92e',
  'x-ms-routing-request-id': 'WESTUS:20150917T021847Z:28e8d6c0-f091-412b-b810-5cebeaeef92e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:18:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-request-id': '544feb62-8ac3-4b73-a91d-f125bb3c443d',
  'x-ms-correlation-request-id': '544feb62-8ac3-4b73-a91d-f125bb3c443d',
  'x-ms-routing-request-id': 'WESTUS:20150917T021902Z:544feb62-8ac3-4b73-a91d-f125bb3c443d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:19:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-request-id': '544feb62-8ac3-4b73-a91d-f125bb3c443d',
  'x-ms-correlation-request-id': '544feb62-8ac3-4b73-a91d-f125bb3c443d',
  'x-ms-routing-request-id': 'WESTUS:20150917T021902Z:544feb62-8ac3-4b73-a91d-f125bb3c443d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:19:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': '8492837e-d34e-49cd-9c64-a467a51342eb',
  'x-ms-correlation-request-id': '8492837e-d34e-49cd-9c64-a467a51342eb',
  'x-ms-routing-request-id': 'WESTUS:20150917T021917Z:8492837e-d34e-49cd-9c64-a467a51342eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:19:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFODM4Ni1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': '8492837e-d34e-49cd-9c64-a467a51342eb',
  'x-ms-correlation-request-id': '8492837e-d34e-49cd-9c64-a467a51342eb',
  'x-ms-routing-request-id': 'WESTUS:20150917T021917Z:8492837e-d34e-49cd-9c64-a467a51342eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 02:19:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource8386','xTestGrpRes2536'];};