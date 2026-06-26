# \OAuthApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_o_auth_application2**](OAuthApi.md#create_o_auth_application2) | **POST** /api/v2/oauth/applications/ | 
[**delete_o_auth_application2**](OAuthApi.md#delete_o_auth_application2) | **DELETE** /api/v2/oauth/applications/{application_id}/ | 
[**list_o_auth_applications2**](OAuthApi.md#list_o_auth_applications2) | **GET** /api/v2/oauth/applications/list/ | 



## create_o_auth_application2

> models::OAuthApplicationResponse create_o_auth_application2(o_auth_application)


Create OAuth application for API access

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**o_auth_application** | [**OAuthApplication**](OAuthApplication.md) |  | [required] |

### Return type

[**models::OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_o_auth_application2

> delete_o_auth_application2(application_id)


Delete an OAuth application

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**application_id** | **String** | Application ID to delete | [required] |

### Return type

 (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_o_auth_applications2

> Vec<models::OAuthApplicationResponse> list_o_auth_applications2()


List OAuth applications for the organization

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::OAuthApplicationResponse>**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

