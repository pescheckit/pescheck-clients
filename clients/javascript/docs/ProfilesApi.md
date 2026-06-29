# PescheckApi.ProfilesApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2ProfilesCreate**](ProfilesApi.md#v2ProfilesCreate) | **POST** /api/v2/profiles/ | 
[**v2ProfilesDestroy**](ProfilesApi.md#v2ProfilesDestroy) | **DELETE** /api/v2/profiles/{id}/ | 
[**v2ProfilesList**](ProfilesApi.md#v2ProfilesList) | **GET** /api/v2/profiles/ | 
[**v2ProfilesPartialUpdate**](ProfilesApi.md#v2ProfilesPartialUpdate) | **PATCH** /api/v2/profiles/{id}/ | 
[**v2ProfilesRetrieve**](ProfilesApi.md#v2ProfilesRetrieve) | **GET** /api/v2/profiles/{id}/ | 
[**v2ProfilesUpdate**](ProfilesApi.md#v2ProfilesUpdate) | **PUT** /api/v2/profiles/{id}/ | 



## v2ProfilesCreate

> V2ProfileDetail v2ProfilesCreate(v2ProfileCreate)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ProfilesApi();
let v2ProfileCreate = {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Senior Accountant","profiles":["11","12"]}},{"check_type":"watchlist2check","config":{"threshold":80,"cutoff":50,"topics":["sanctions","pep"]}}]}; // V2ProfileCreate | 
apiInstance.v2ProfilesCreate(v2ProfileCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2ProfileCreate** | [**V2ProfileCreate**](V2ProfileCreate.md)|  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2ProfilesDestroy

> v2ProfilesDestroy(id)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ProfilesApi();
let id = "id_example"; // String | A UUID string identifying this profile.
apiInstance.v2ProfilesDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this profile. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v2ProfilesList

> PaginatedV2ProfileListItemList v2ProfilesList(opts)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ProfilesApi();
let opts = {
  'checkType': "checkType_example", // String | Restrict to profiles containing at least one check of this type.
  'isCustom': true, // Boolean | Restrict to custom (true) or system (false) profiles.
  'name': "name_example", // String | Restrict to profiles whose name contains this value (case-insensitive).
  'page': 1, // Number | A page number within the paginated result set.
  'pageSize': 50, // Number | Number of results to return per page.
  'paginate': true, // Boolean | Enable/disable pagination. When false, max 500 records returned.
  'sort': "sort_example" // String | Which field to use when ordering the results.
};
apiInstance.v2ProfilesList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkType** | **String**| Restrict to profiles containing at least one check of this type. | [optional] 
 **isCustom** | **Boolean**| Restrict to custom (true) or system (false) profiles. | [optional] 
 **name** | **String**| Restrict to profiles whose name contains this value (case-insensitive). | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] [default to 1]
 **pageSize** | **Number**| Number of results to return per page. | [optional] [default to 50]
 **paginate** | **Boolean**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true]
 **sort** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2ProfilesPartialUpdate

> V2ProfileDetail v2ProfilesPartialUpdate(id, opts)



Update name and/or description only. Use PUT to change the check list.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ProfilesApi();
let id = "id_example"; // String | A UUID string identifying this profile.
let opts = {
  'patchedV2ProfilePartialUpdate': {"name":"VOG + Watchlist Screening (NL)","description":"Adjusted description for the Dutch market."} // PatchedV2ProfilePartialUpdate | 
};
apiInstance.v2ProfilesPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this profile. | 
 **patchedV2ProfilePartialUpdate** | [**PatchedV2ProfilePartialUpdate**](PatchedV2ProfilePartialUpdate.md)|  | [optional] 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2ProfilesRetrieve

> V2ProfileDetail v2ProfilesRetrieve(id)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ProfilesApi();
let id = "id_example"; // String | A UUID string identifying this profile.
apiInstance.v2ProfilesRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this profile. | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2ProfilesUpdate

> V2ProfileDetail v2ProfilesUpdate(id, v2ProfileUpdate)



Replace the profile. Checks matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ProfilesApi();
let id = "id_example"; // String | A UUID string identifying this profile.
let v2ProfileUpdate = {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"profile_check_id":"018e9f1e-3a85-7f50-a4f3-d4f6e7b9c1d2","check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Lead Engineer","profiles":["11","12","13"]}},{"check_type":"watchlist2check","config":{"threshold":85,"topics":["sanctions","pep","crime"]}}]}; // V2ProfileUpdate | 
apiInstance.v2ProfilesUpdate(id, v2ProfileUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this profile. | 
 **v2ProfileUpdate** | [**V2ProfileUpdate**](V2ProfileUpdate.md)|  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

