# pescheck.DivisionsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organisations_divisions_create**](DivisionsApi.md#v2_organisations_divisions_create) | **POST** /api/v2/organisations/divisions/ | 
[**v2_organisations_divisions_list**](DivisionsApi.md#v2_organisations_divisions_list) | **GET** /api/v2/organisations/divisions/ | 
[**v2_organisations_divisions_partial_update**](DivisionsApi.md#v2_organisations_divisions_partial_update) | **PATCH** /api/v2/organisations/divisions/{id}/ | 
[**v2_organisations_divisions_retrieve**](DivisionsApi.md#v2_organisations_divisions_retrieve) | **GET** /api/v2/organisations/divisions/{id}/ | 
[**v2_organisations_divisions_update**](DivisionsApi.md#v2_organisations_divisions_update) | **PUT** /api/v2/organisations/divisions/{id}/ | 


# **v2_organisations_divisions_create**
> DivisionWrite v2_organisations_divisions_create(division_write)

Create a division (a child organisation under the current parent org).
Divisions are an advanced, rarely-needed feature: create one ONLY when the
user has clearly stated they want to manage a separate business unit,
location, or legal entity under their account. Do NOT create a division
just to organise screenings, for a single-person or single-member
organisation, or without an explicit request to do so. When in doubt, ask
the user to confirm before calling this tool.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.division_write import DivisionWrite
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
    api_instance = pescheck.DivisionsApi(api_client)
    division_write = pescheck.DivisionWrite() # DivisionWrite | 

    try:
        api_response = api_instance.v2_organisations_divisions_create(division_write)
        print("The response of DivisionsApi->v2_organisations_divisions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->v2_organisations_divisions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **division_write** | [**DivisionWrite**](DivisionWrite.md)|  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

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

# **v2_organisations_divisions_list**
> PaginatedDivisionReadOnlyList v2_organisations_divisions_list(page=page, page_size=page_size, paginate=paginate)

List method that handles both paginated and unpaginated responses
and enforces the max_total_records limit (500).

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.paginated_division_read_only_list import PaginatedDivisionReadOnlyList
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
    api_instance = pescheck.DivisionsApi(api_client)
    page = 1 # int | A page number within the paginated result set. (optional) (default to 1)
    page_size = 50 # int | Number of results to return per page. (optional) (default to 50)
    paginate = True # bool | Enable/disable pagination. When false, max 500 records returned. (optional) (default to True)

    try:
        api_response = api_instance.v2_organisations_divisions_list(page=page, page_size=page_size, paginate=paginate)
        print("The response of DivisionsApi->v2_organisations_divisions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->v2_organisations_divisions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| A page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 50]
 **paginate** | **bool**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to True]

### Return type

[**PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

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

# **v2_organisations_divisions_partial_update**
> DivisionWrite v2_organisations_divisions_partial_update(id, patched_division_write=patched_division_write)

A division is a child organisation under a parent org, used only when a
customer needs to manage genuinely separate business units, locations, or
legal entities under one account. The vast majority of organisations operate
as a single entity and need no divisions. Only top-level (parent)
organisations can have divisions.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.division_write import DivisionWrite
from pescheck.models.patched_division_write import PatchedDivisionWrite
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
    api_instance = pescheck.DivisionsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this organisation.
    patched_division_write = pescheck.PatchedDivisionWrite() # PatchedDivisionWrite |  (optional)

    try:
        api_response = api_instance.v2_organisations_divisions_partial_update(id, patched_division_write=patched_division_write)
        print("The response of DivisionsApi->v2_organisations_divisions_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->v2_organisations_divisions_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this organisation. | 
 **patched_division_write** | [**PatchedDivisionWrite**](PatchedDivisionWrite.md)|  | [optional] 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organisations_divisions_retrieve**
> DivisionReadOnly v2_organisations_divisions_retrieve(id)

A division is a child organisation under a parent org, used only when a
customer needs to manage genuinely separate business units, locations, or
legal entities under one account. The vast majority of organisations operate
as a single entity and need no divisions. Only top-level (parent)
organisations can have divisions.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.division_read_only import DivisionReadOnly
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
    api_instance = pescheck.DivisionsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this organisation.

    try:
        api_response = api_instance.v2_organisations_divisions_retrieve(id)
        print("The response of DivisionsApi->v2_organisations_divisions_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->v2_organisations_divisions_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this organisation. | 

### Return type

[**DivisionReadOnly**](DivisionReadOnly.md)

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

# **v2_organisations_divisions_update**
> DivisionWrite v2_organisations_divisions_update(id, division_write)

Update an existing division's contact, billing, and address details.

Override also triggers a webhook on successful PUT and PATCH requests.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.division_write import DivisionWrite
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
    api_instance = pescheck.DivisionsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this organisation.
    division_write = pescheck.DivisionWrite() # DivisionWrite | 

    try:
        api_response = api_instance.v2_organisations_divisions_update(id, division_write)
        print("The response of DivisionsApi->v2_organisations_divisions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->v2_organisations_divisions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this organisation. | 
 **division_write** | [**DivisionWrite**](DivisionWrite.md)|  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

