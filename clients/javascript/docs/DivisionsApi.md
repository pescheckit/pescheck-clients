# PescheckApi.DivisionsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2OrganisationsDivisionsCreate**](DivisionsApi.md#v2OrganisationsDivisionsCreate) | **POST** /api/v2/organisations/divisions/ | 
[**v2OrganisationsDivisionsList**](DivisionsApi.md#v2OrganisationsDivisionsList) | **GET** /api/v2/organisations/divisions/ | 
[**v2OrganisationsDivisionsPartialUpdate**](DivisionsApi.md#v2OrganisationsDivisionsPartialUpdate) | **PATCH** /api/v2/organisations/divisions/{id}/ | 
[**v2OrganisationsDivisionsRetrieve**](DivisionsApi.md#v2OrganisationsDivisionsRetrieve) | **GET** /api/v2/organisations/divisions/{id}/ | 
[**v2OrganisationsDivisionsUpdate**](DivisionsApi.md#v2OrganisationsDivisionsUpdate) | **PUT** /api/v2/organisations/divisions/{id}/ | 



## v2OrganisationsDivisionsCreate

> DivisionWrite v2OrganisationsDivisionsCreate(divisionWrite)



Create a division (a child organisation under the current parent org). Divisions are an advanced, rarely-needed feature: create one ONLY when the user has clearly stated they want to manage a separate business unit, location, or legal entity under their account. Do NOT create a division just to organise screenings, for a single-person or single-member organisation, or without an explicit request to do so. When in doubt, ask the user to confirm before calling this tool.

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.DivisionsApi();
let divisionWrite = new PescheckApi.DivisionWrite(); // DivisionWrite | 
apiInstance.v2OrganisationsDivisionsCreate(divisionWrite).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divisionWrite** | [**DivisionWrite**](DivisionWrite.md)|  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2OrganisationsDivisionsList

> PaginatedDivisionReadOnlyList v2OrganisationsDivisionsList(opts)



List method that handles both paginated and unpaginated responses and enforces the max_total_records limit (500).

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.DivisionsApi();
let opts = {
  'page': 1, // Number | A page number within the paginated result set.
  'pageSize': 50, // Number | Number of results to return per page.
  'paginate': true // Boolean | Enable/disable pagination. When false, max 500 records returned.
};
apiInstance.v2OrganisationsDivisionsList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] [default to 1]
 **pageSize** | **Number**| Number of results to return per page. | [optional] [default to 50]
 **paginate** | **Boolean**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true]

### Return type

[**PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2OrganisationsDivisionsPartialUpdate

> DivisionWrite v2OrganisationsDivisionsPartialUpdate(id, opts)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.DivisionsApi();
let id = "id_example"; // String | A UUID string identifying this organisation.
let opts = {
  'patchedDivisionWrite': new PescheckApi.PatchedDivisionWrite() // PatchedDivisionWrite | 
};
apiInstance.v2OrganisationsDivisionsPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this organisation. | 
 **patchedDivisionWrite** | [**PatchedDivisionWrite**](PatchedDivisionWrite.md)|  | [optional] 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2OrganisationsDivisionsRetrieve

> DivisionReadOnly v2OrganisationsDivisionsRetrieve(id)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.DivisionsApi();
let id = "id_example"; // String | A UUID string identifying this organisation.
apiInstance.v2OrganisationsDivisionsRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this organisation. | 

### Return type

[**DivisionReadOnly**](DivisionReadOnly.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2OrganisationsDivisionsUpdate

> DivisionWrite v2OrganisationsDivisionsUpdate(id, divisionWrite)



Update an existing division&#39;s contact, billing, and address details.  Override also triggers a webhook on successful PUT and PATCH requests.

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.DivisionsApi();
let id = "id_example"; // String | A UUID string identifying this organisation.
let divisionWrite = new PescheckApi.DivisionWrite(); // DivisionWrite | 
apiInstance.v2OrganisationsDivisionsUpdate(id, divisionWrite).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this organisation. | 
 **divisionWrite** | [**DivisionWrite**](DivisionWrite.md)|  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

