# pescheck.ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_screenings_create**](ScreeningsApi.md#v2_screenings_create) | **POST** /api/v2/screenings/ | 
[**v2_screenings_documents_list**](ScreeningsApi.md#v2_screenings_documents_list) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
[**v2_screenings_list**](ScreeningsApi.md#v2_screenings_list) | **GET** /api/v2/screenings/ | 
[**v2_screenings_retrieve**](ScreeningsApi.md#v2_screenings_retrieve) | **GET** /api/v2/screenings/{id}/ | 


# **v2_screenings_create**
> V2ScreeningDetail v2_screenings_create(v2_screening_create)

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_screening_create import V2ScreeningCreate
from pescheck.models.v2_screening_detail import V2ScreeningDetail
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ScreeningsApi(api_client)
    v2_screening_create = {"profile_id":"018e9f1e-3a73-7eba-b29c-c2c4a8c40c8a","candidate":{"first_name":"Jan","last_name":"de Vries","email":"jan.devries@example.com","date_of_birth":"1985-04-12"}} # V2ScreeningCreate | 

    try:
        api_response = api_instance.v2_screenings_create(v2_screening_create)
        print("The response of ScreeningsApi->v2_screenings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScreeningsApi->v2_screenings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_screening_create** | [**V2ScreeningCreate**](V2ScreeningCreate.md)|  | 

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_screenings_documents_list**
> List[V2Document] v2_screenings_documents_list(id, check_id=check_id, check_type=check_type)

Retrieve screening documents

Documents attached to the screening's checks. Files are delivered inline as Base64 in `content`. Narrow the result with `check_id` or `check_type`.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_document import V2Document
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ScreeningsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    check_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Only documents from the check with this id. (optional)
    check_type = 'check_type_example' # str | Only documents from checks of this type. (optional)

    try:
        # Retrieve screening documents
        api_response = api_instance.v2_screenings_documents_list(id, check_id=check_id, check_type=check_type)
        print("The response of ScreeningsApi->v2_screenings_documents_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScreeningsApi->v2_screenings_documents_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**|  | 
 **check_id** | **UUID**| Only documents from the check with this id. | [optional] 
 **check_type** | **str**| Only documents from checks of this type. | [optional] 

### Return type

[**List[V2Document]**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_screenings_list**
> PaginatedV2ScreeningListItemList v2_screenings_list(page=page, page_size=page_size, paginate=paginate)

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.paginated_v2_screening_list_item_list import PaginatedV2ScreeningListItemList
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ScreeningsApi(api_client)
    page = 1 # int | A page number within the paginated result set. (optional) (default to 1)
    page_size = 50 # int | Number of results to return per page. (optional) (default to 50)
    paginate = True # bool | Enable/disable pagination. When false, max 500 records returned. (optional) (default to True)

    try:
        api_response = api_instance.v2_screenings_list(page=page, page_size=page_size, paginate=paginate)
        print("The response of ScreeningsApi->v2_screenings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScreeningsApi->v2_screenings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| A page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 50]
 **paginate** | **bool**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to True]

### Return type

[**PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_screenings_retrieve**
> V2ScreeningDetail v2_screenings_retrieve(id)

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_screening_detail import V2ScreeningDetail
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ScreeningsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this screening.

    try:
        api_response = api_instance.v2_screenings_retrieve(id)
        print("The response of ScreeningsApi->v2_screenings_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScreeningsApi->v2_screenings_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this screening. | 

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

