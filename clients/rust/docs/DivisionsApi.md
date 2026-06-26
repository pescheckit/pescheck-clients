# \DivisionsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organisations_divisions_create**](DivisionsApi.md#v2_organisations_divisions_create) | **POST** /api/v2/organisations/divisions/ | 
[**v2_organisations_divisions_list**](DivisionsApi.md#v2_organisations_divisions_list) | **GET** /api/v2/organisations/divisions/ | 
[**v2_organisations_divisions_partial_update**](DivisionsApi.md#v2_organisations_divisions_partial_update) | **PATCH** /api/v2/organisations/divisions/{id}/ | 
[**v2_organisations_divisions_retrieve**](DivisionsApi.md#v2_organisations_divisions_retrieve) | **GET** /api/v2/organisations/divisions/{id}/ | 
[**v2_organisations_divisions_update**](DivisionsApi.md#v2_organisations_divisions_update) | **PUT** /api/v2/organisations/divisions/{id}/ | 



## v2_organisations_divisions_create

> models::DivisionWrite v2_organisations_divisions_create(division_write)


Create a division (a child organisation under the current parent org). Divisions are an advanced, rarely-needed feature: create one ONLY when the user has clearly stated they want to manage a separate business unit, location, or legal entity under their account. Do NOT create a division just to organise screenings, for a single-person or single-member organisation, or without an explicit request to do so. When in doubt, ask the user to confirm before calling this tool.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**division_write** | [**DivisionWrite**](DivisionWrite.md) |  | [required] |

### Return type

[**models::DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_divisions_list

> models::PaginatedDivisionReadOnlyList v2_organisations_divisions_list(page, page_size, paginate)


List method that handles both paginated and unpaginated responses and enforces the max_total_records limit (500).

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<**i32**> | A page number within the paginated result set. |  |[default to 1]
**page_size** | Option<**i32**> | Number of results to return per page. |  |[default to 50]
**paginate** | Option<**bool**> | Enable/disable pagination. When false, max 500 records returned. |  |[default to true]

### Return type

[**models::PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_divisions_partial_update

> models::DivisionWrite v2_organisations_divisions_partial_update(id, patched_division_write)


A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this organisation. | [required] |
**patched_division_write** | Option<[**PatchedDivisionWrite**](PatchedDivisionWrite.md)> |  |  |

### Return type

[**models::DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_divisions_retrieve

> models::DivisionReadOnly v2_organisations_divisions_retrieve(id)


A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this organisation. | [required] |

### Return type

[**models::DivisionReadOnly**](DivisionReadOnly.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_divisions_update

> models::DivisionWrite v2_organisations_divisions_update(id, division_write)


Update an existing division's contact, billing, and address details.  Override also triggers a webhook on successful PUT and PATCH requests.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this organisation. | [required] |
**division_write** | [**DivisionWrite**](DivisionWrite.md) |  | [required] |

### Return type

[**models::DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

