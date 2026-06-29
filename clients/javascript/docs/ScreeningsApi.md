# PescheckApi.ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2ScreeningsCreate**](ScreeningsApi.md#v2ScreeningsCreate) | **POST** /api/v2/screenings/ | 
[**v2ScreeningsDocumentsList**](ScreeningsApi.md#v2ScreeningsDocumentsList) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
[**v2ScreeningsList**](ScreeningsApi.md#v2ScreeningsList) | **GET** /api/v2/screenings/ | 
[**v2ScreeningsRetrieve**](ScreeningsApi.md#v2ScreeningsRetrieve) | **GET** /api/v2/screenings/{id}/ | 



## v2ScreeningsCreate

> V2ScreeningDetail v2ScreeningsCreate(v2ScreeningCreate)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ScreeningsApi();
let v2ScreeningCreate = {"profile_id":"018e9f1e-3a73-7eba-b29c-c2c4a8c40c8a","candidate":{"first_name":"Jan","last_name":"de Vries","email":"jan.devries@example.com","date_of_birth":"1985-04-12"}}; // V2ScreeningCreate | 
apiInstance.v2ScreeningsCreate(v2ScreeningCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2ScreeningCreate** | [**V2ScreeningCreate**](V2ScreeningCreate.md)|  | 

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2ScreeningsDocumentsList

> [V2Document] v2ScreeningsDocumentsList(id, opts)

Retrieve screening documents

Documents attached to the screening&#39;s checks. Files are delivered inline as Base64 in &#x60;content&#x60;. Narrow the result with &#x60;check_id&#x60; or &#x60;check_type&#x60;.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ScreeningsApi();
let id = "id_example"; // String | 
let opts = {
  'checkId': "checkId_example", // String | Only documents from the check with this id.
  'checkType': "checkType_example" // String | Only documents from checks of this type.
};
apiInstance.v2ScreeningsDocumentsList(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **checkId** | **String**| Only documents from the check with this id. | [optional] 
 **checkType** | **String**| Only documents from checks of this type. | [optional] 

### Return type

[**[V2Document]**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2ScreeningsList

> PaginatedV2ScreeningListItemList v2ScreeningsList(opts)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ScreeningsApi();
let opts = {
  'page': 1, // Number | A page number within the paginated result set.
  'pageSize': 50, // Number | Number of results to return per page.
  'paginate': true // Boolean | Enable/disable pagination. When false, max 500 records returned.
};
apiInstance.v2ScreeningsList(opts).then((data) => {
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

[**PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2ScreeningsRetrieve

> V2ScreeningDetail v2ScreeningsRetrieve(id)



### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.ScreeningsApi();
let id = "id_example"; // String | A UUID string identifying this screening.
apiInstance.v2ScreeningsRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A UUID string identifying this screening. | 

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

