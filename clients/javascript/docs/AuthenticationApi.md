# PescheckApi.AuthenticationApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateJWTToken2**](AuthenticationApi.md#generateJWTToken2) | **POST** /api/v2/jwt/generate/ | 
[**jwtCreate**](AuthenticationApi.md#jwtCreate) | **POST** /api/jwt/ | 
[**jwtRefreshCreate**](AuthenticationApi.md#jwtRefreshCreate) | **POST** /api/jwt/refresh/ | 



## generateJWTToken2

> JWTResponse generateJWTToken2(jWTGeneration)



Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id (defaults to your current org).  For a plain login, use POST /api/jwt/.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AuthenticationApi();
let jWTGeneration = new PescheckApi.JWTGeneration(); // JWTGeneration | 
apiInstance.generateJWTToken2(jWTGeneration).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jWTGeneration** | [**JWTGeneration**](JWTGeneration.md)|  | 

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## jwtCreate

> CustomTokenObtainPair jwtCreate(customTokenObtainPair)



Log in with email + password. Returns a JWT pair scoped to your current organization (last viewed, or first available).  For a token scoped to a specific org or division, use POST /api/v2/jwt/generate/.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AuthenticationApi();
let customTokenObtainPair = new PescheckApi.CustomTokenObtainPair(); // CustomTokenObtainPair | 
apiInstance.jwtCreate(customTokenObtainPair).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customTokenObtainPair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md)|  | 

### Return type

[**CustomTokenObtainPair**](CustomTokenObtainPair.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## jwtRefreshCreate

> TokenRefresh jwtRefreshCreate(tokenRefresh)



Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```javascript
import PescheckApi from '@pescheckit/pescheck-client-js';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.AuthenticationApi();
let tokenRefresh = new PescheckApi.TokenRefresh(); // TokenRefresh | 
apiInstance.jwtRefreshCreate(tokenRefresh).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRefresh** | [**TokenRefresh**](TokenRefresh.md)|  | 

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

