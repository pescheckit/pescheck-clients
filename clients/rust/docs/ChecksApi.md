# \ChecksApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_checks_list**](ChecksApi.md#v2_checks_list) | **GET** /api/v2/checks/ | 
[**v2_checks_retrieve**](ChecksApi.md#v2_checks_retrieve) | **GET** /api/v2/checks/{check_type}/ | 



## v2_checks_list

> Vec<models::V2CheckInfo> v2_checks_list(check_type)


List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**check_type** | Option<**String**> | Restrict the list to a single check type. |  |

### Return type

[**Vec<models::V2CheckInfo>**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_checks_retrieve

> models::V2CheckInfo v2_checks_retrieve(check_type)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**check_type** | **String** |  | [required] |

### Return type

[**models::V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

