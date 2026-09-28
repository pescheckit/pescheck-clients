# PescheckApi.AddOnsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2OrganisationsAddonsList**](AddOnsApi.md#v2OrganisationsAddonsList) | **GET** /api/v2/organisations/addons/ | 
[**v2OrganisationsAddonsPartialUpdate**](AddOnsApi.md#v2OrganisationsAddonsPartialUpdate) | **PATCH** /api/v2/organisations/addons/{addon}/ | 
[**v2OrganisationsAddonsRetrieve**](AddOnsApi.md#v2OrganisationsAddonsRetrieve) | **GET** /api/v2/organisations/addons/{addon}/ | 
[**v2OrganisationsAddonsUpdate**](AddOnsApi.md#v2OrganisationsAddonsUpdate) | **PUT** /api/v2/organisations/addons/{addon}/ | 



## v2OrganisationsAddonsList

> [OrganisationAddon] v2OrganisationsAddonsList(opts)



List every add-on with whether it is enabled for the organisation.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AddOnsApi();
let opts = {
  'divisionId': "divisionId_example" // String | Act on this division instead of the organisation the token belongs to.
};
apiInstance.v2OrganisationsAddonsList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] 

### Return type

[**[OrganisationAddon]**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2OrganisationsAddonsPartialUpdate

> OrganisationAddonUpdateResult v2OrganisationsAddonsPartialUpdate(addon, opts)



Switch an add-on on or off. Enabling is billed monthly from today.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AddOnsApi();
let addon = "addon_example"; // String | The add-on to act on.
let opts = {
  'divisionId': "divisionId_example", // String | Act on this division instead of the organisation the token belongs to.
  'patchedOrganisationAddonUpdate': {"enabled":false} // PatchedOrganisationAddonUpdate | 
};
apiInstance.v2OrganisationsAddonsPartialUpdate(addon, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon** | **String**| The add-on to act on. | 
 **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] 
 **patchedOrganisationAddonUpdate** | [**PatchedOrganisationAddonUpdate**](PatchedOrganisationAddonUpdate.md)|  | [optional] 

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2OrganisationsAddonsRetrieve

> OrganisationAddon v2OrganisationsAddonsRetrieve(addon, opts)



Get one add-on&#39;s state for the organisation.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AddOnsApi();
let addon = "addon_example"; // String | The add-on to act on.
let opts = {
  'divisionId': "divisionId_example" // String | Act on this division instead of the organisation the token belongs to.
};
apiInstance.v2OrganisationsAddonsRetrieve(addon, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon** | **String**| The add-on to act on. | 
 **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] 

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2OrganisationsAddonsUpdate

> OrganisationAddonUpdateResult v2OrganisationsAddonsUpdate(addon, organisationAddonUpdate, opts)



Switch an add-on on or off. Enabling is billed monthly from today.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AddOnsApi();
let addon = "addon_example"; // String | The add-on to act on.
let organisationAddonUpdate = {"enabled":false}; // OrganisationAddonUpdate | 
let opts = {
  'divisionId': "divisionId_example" // String | Act on this division instead of the organisation the token belongs to.
};
apiInstance.v2OrganisationsAddonsUpdate(addon, organisationAddonUpdate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon** | **String**| The add-on to act on. | 
 **organisationAddonUpdate** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md)|  | 
 **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] 

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

