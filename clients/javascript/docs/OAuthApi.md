# PescheckApi.OAuthApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOAuthApplication2**](OAuthApi.md#createOAuthApplication2) | **POST** /api/v2/oauth/applications/ | 
[**deleteOAuthApplication2**](OAuthApi.md#deleteOAuthApplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ | 
[**listOAuthApplications2**](OAuthApi.md#listOAuthApplications2) | **GET** /api/v2/oauth/applications/list/ | 



## createOAuthApplication2

> OAuthApplicationResponse createOAuthApplication2(oAuthApplication)



Create OAuth application for API access

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.OAuthApi();
let oAuthApplication = new PescheckApi.OAuthApplication(); // OAuthApplication | 
apiInstance.createOAuthApplication2(oAuthApplication).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthApplication** | [**OAuthApplication**](OAuthApplication.md)|  | 

### Return type

[**OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## deleteOAuthApplication2

> deleteOAuthApplication2(applicationId)



Delete an OAuth application

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.OAuthApi();
let applicationId = "applicationId_example"; // String | Application ID to delete
apiInstance.deleteOAuthApplication2(applicationId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| Application ID to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listOAuthApplications2

> [OAuthApplicationResponse] listOAuthApplications2()



List OAuth applications for the organization

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.OAuthApi();
apiInstance.listOAuthApplications2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[OAuthApplicationResponse]**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

