# \ProfilesApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_profiles_create**](ProfilesApi.md#v2_profiles_create) | **POST** /api/v2/profiles/ | 
[**v2_profiles_destroy**](ProfilesApi.md#v2_profiles_destroy) | **DELETE** /api/v2/profiles/{id}/ | 
[**v2_profiles_list**](ProfilesApi.md#v2_profiles_list) | **GET** /api/v2/profiles/ | 
[**v2_profiles_partial_update**](ProfilesApi.md#v2_profiles_partial_update) | **PATCH** /api/v2/profiles/{id}/ | 
[**v2_profiles_retrieve**](ProfilesApi.md#v2_profiles_retrieve) | **GET** /api/v2/profiles/{id}/ | 
[**v2_profiles_update**](ProfilesApi.md#v2_profiles_update) | **PUT** /api/v2/profiles/{id}/ | 



## v2_profiles_create

> models::V2ProfileDetail v2_profiles_create(v2_profile_create)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**v2_profile_create** | [**V2ProfileCreate**](V2ProfileCreate.md) |  | [required] |

### Return type

[**models::V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_profiles_destroy

> v2_profiles_destroy(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this profile. | [required] |

### Return type

 (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_profiles_list

> models::PaginatedV2ProfileListItemList v2_profiles_list(check_type, is_custom, name, page, page_size, paginate, sort)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**check_type** | Option<**String**> | Restrict to profiles containing at least one check of this type. |  |
**is_custom** | Option<**bool**> | Restrict to custom (true) or system (false) profiles. |  |
**name** | Option<**String**> | Restrict to profiles whose name contains this value (case-insensitive). |  |
**page** | Option<**i32**> | A page number within the paginated result set. |  |[default to 1]
**page_size** | Option<**i32**> | Number of results to return per page. |  |[default to 50]
**paginate** | Option<**bool**> | Enable/disable pagination. When false, max 500 records returned. |  |[default to true]
**sort** | Option<**String**> | Which field to use when ordering the results. |  |

### Return type

[**models::PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_profiles_partial_update

> models::V2ProfileDetail v2_profiles_partial_update(id, patched_v2_profile_partial_update)


Update name and/or description only. Use PUT to change the check list.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this profile. | [required] |
**patched_v2_profile_partial_update** | Option<[**PatchedV2ProfilePartialUpdate**](PatchedV2ProfilePartialUpdate.md)> |  |  |

### Return type

[**models::V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_profiles_retrieve

> models::V2ProfileDetail v2_profiles_retrieve(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this profile. | [required] |

### Return type

[**models::V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_profiles_update

> models::V2ProfileDetail v2_profiles_update(id, v2_profile_update)


Replace the profile. Checks matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this profile. | [required] |
**v2_profile_update** | [**V2ProfileUpdate**](V2ProfileUpdate.md) |  | [required] |

### Return type

[**models::V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

