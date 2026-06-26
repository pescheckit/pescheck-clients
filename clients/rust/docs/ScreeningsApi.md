# \ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_screenings_create**](ScreeningsApi.md#v2_screenings_create) | **POST** /api/v2/screenings/ | 
[**v2_screenings_documents_list**](ScreeningsApi.md#v2_screenings_documents_list) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
[**v2_screenings_list**](ScreeningsApi.md#v2_screenings_list) | **GET** /api/v2/screenings/ | 
[**v2_screenings_retrieve**](ScreeningsApi.md#v2_screenings_retrieve) | **GET** /api/v2/screenings/{id}/ | 



## v2_screenings_create

> models::V2ScreeningDetail v2_screenings_create(v2_screening_create)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**v2_screening_create** | [**V2ScreeningCreate**](V2ScreeningCreate.md) |  | [required] |

### Return type

[**models::V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_screenings_documents_list

> Vec<models::V2Document> v2_screenings_documents_list(id, check_id, check_type)
Retrieve screening documents

Documents attached to the screening's checks. Files are delivered inline as Base64 in `content`. Narrow the result with `check_id` or `check_type`.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |
**check_id** | Option<**uuid::Uuid**> | Only documents from the check with this id. |  |
**check_type** | Option<**String**> | Only documents from checks of this type. |  |

### Return type

[**Vec<models::V2Document>**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_screenings_list

> models::PaginatedV2ScreeningListItemList v2_screenings_list(page, page_size, paginate)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<**i32**> | A page number within the paginated result set. |  |[default to 1]
**page_size** | Option<**i32**> | Number of results to return per page. |  |[default to 50]
**paginate** | Option<**bool**> | Enable/disable pagination. When false, max 500 records returned. |  |[default to true]

### Return type

[**models::PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_screenings_retrieve

> models::V2ScreeningDetail v2_screenings_retrieve(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** | A UUID string identifying this screening. | [required] |

### Return type

[**models::V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

