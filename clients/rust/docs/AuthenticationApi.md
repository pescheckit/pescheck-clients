# \AuthenticationApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_jwt_token2**](AuthenticationApi.md#generate_jwt_token2) | **POST** /api/v2/jwt/generate/ | 
[**jwt_create**](AuthenticationApi.md#jwt_create) | **POST** /api/jwt/ | 
[**jwt_refresh_create**](AuthenticationApi.md#jwt_refresh_create) | **POST** /api/jwt/refresh/ | 



## generate_jwt_token2

> models::JwtResponse generate_jwt_token2(jwt_generation)


Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id (defaults to your current org).  For a plain login, use POST /api/jwt/.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**jwt_generation** | [**JwtGeneration**](JwtGeneration.md) |  | [required] |

### Return type

[**models::JwtResponse**](JWTResponse.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## jwt_create

> models::CustomTokenObtainPair jwt_create(custom_token_obtain_pair)


Log in with email + password. Returns a JWT pair scoped to your current organization (last viewed, or first available).  For a token scoped to a specific org or division, use POST /api/v2/jwt/generate/.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**custom_token_obtain_pair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md) |  | [required] |

### Return type

[**models::CustomTokenObtainPair**](CustomTokenObtainPair.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## jwt_refresh_create

> models::TokenRefresh jwt_refresh_create(token_refresh)


Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**token_refresh** | [**TokenRefresh**](TokenRefresh.md) |  | [required] |

### Return type

[**models::TokenRefresh**](TokenRefresh.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

