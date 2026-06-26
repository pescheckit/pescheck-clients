# pescheck.ProfilesApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_profiles_create**](ProfilesApi.md#v2_profiles_create) | **POST** /api/v2/profiles/ | 
[**v2_profiles_destroy**](ProfilesApi.md#v2_profiles_destroy) | **DELETE** /api/v2/profiles/{id}/ | 
[**v2_profiles_list**](ProfilesApi.md#v2_profiles_list) | **GET** /api/v2/profiles/ | 
[**v2_profiles_partial_update**](ProfilesApi.md#v2_profiles_partial_update) | **PATCH** /api/v2/profiles/{id}/ | 
[**v2_profiles_retrieve**](ProfilesApi.md#v2_profiles_retrieve) | **GET** /api/v2/profiles/{id}/ | 
[**v2_profiles_update**](ProfilesApi.md#v2_profiles_update) | **PUT** /api/v2/profiles/{id}/ | 


# **v2_profiles_create**
> V2ProfileDetail v2_profiles_create(v2_profile_create)

### Example

* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_profile_create import V2ProfileCreate
from pescheck.models.v2_profile_detail import V2ProfileDetail
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ProfilesApi(api_client)
    v2_profile_create = {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Senior Accountant","profiles":["11","12"]}},{"check_type":"watchlist2check","config":{"threshold":80,"cutoff":50,"topics":["sanctions","pep"]}}]} # V2ProfileCreate | 

    try:
        api_response = api_instance.v2_profiles_create(v2_profile_create)
        print("The response of ProfilesApi->v2_profiles_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->v2_profiles_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_profile_create** | [**V2ProfileCreate**](V2ProfileCreate.md)|  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_profiles_destroy**
> v2_profiles_destroy(id)

### Example

* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):

```python
import pescheck
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ProfilesApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this profile.

    try:
        api_instance.v2_profiles_destroy(id)
    except Exception as e:
        print("Exception when calling ProfilesApi->v2_profiles_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this profile. | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_profiles_list**
> PaginatedV2ProfileListItemList v2_profiles_list(check_type=check_type, is_custom=is_custom, name=name, page=page, page_size=page_size, paginate=paginate, sort=sort)

### Example

* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.paginated_v2_profile_list_item_list import PaginatedV2ProfileListItemList
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ProfilesApi(api_client)
    check_type = 'check_type_example' # str | Restrict to profiles containing at least one check of this type. (optional)
    is_custom = True # bool | Restrict to custom (true) or system (false) profiles. (optional)
    name = 'name_example' # str | Restrict to profiles whose name contains this value (case-insensitive). (optional)
    page = 1 # int | A page number within the paginated result set. (optional) (default to 1)
    page_size = 50 # int | Number of results to return per page. (optional) (default to 50)
    paginate = True # bool | Enable/disable pagination. When false, max 500 records returned. (optional) (default to True)
    sort = 'sort_example' # str | Which field to use when ordering the results. (optional)

    try:
        api_response = api_instance.v2_profiles_list(check_type=check_type, is_custom=is_custom, name=name, page=page, page_size=page_size, paginate=paginate, sort=sort)
        print("The response of ProfilesApi->v2_profiles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->v2_profiles_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_type** | **str**| Restrict to profiles containing at least one check of this type. | [optional] 
 **is_custom** | **bool**| Restrict to custom (true) or system (false) profiles. | [optional] 
 **name** | **str**| Restrict to profiles whose name contains this value (case-insensitive). | [optional] 
 **page** | **int**| A page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 50]
 **paginate** | **bool**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to True]
 **sort** | **str**| Which field to use when ordering the results. | [optional] 

### Return type

[**PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_profiles_partial_update**
> V2ProfileDetail v2_profiles_partial_update(id, patched_v2_profile_partial_update=patched_v2_profile_partial_update)

Update name and/or description only. Use PUT to change the check list.

### Example

* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.patched_v2_profile_partial_update import PatchedV2ProfilePartialUpdate
from pescheck.models.v2_profile_detail import V2ProfileDetail
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ProfilesApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this profile.
    patched_v2_profile_partial_update = {"name":"VOG + Watchlist Screening (NL)","description":"Adjusted description for the Dutch market."} # PatchedV2ProfilePartialUpdate |  (optional)

    try:
        api_response = api_instance.v2_profiles_partial_update(id, patched_v2_profile_partial_update=patched_v2_profile_partial_update)
        print("The response of ProfilesApi->v2_profiles_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->v2_profiles_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this profile. | 
 **patched_v2_profile_partial_update** | [**PatchedV2ProfilePartialUpdate**](PatchedV2ProfilePartialUpdate.md)|  | [optional] 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_profiles_retrieve**
> V2ProfileDetail v2_profiles_retrieve(id)

### Example

* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_profile_detail import V2ProfileDetail
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ProfilesApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this profile.

    try:
        api_response = api_instance.v2_profiles_retrieve(id)
        print("The response of ProfilesApi->v2_profiles_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->v2_profiles_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this profile. | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_profiles_update**
> V2ProfileDetail v2_profiles_update(id, v2_profile_update)

Replace the profile. Checks matched by profile_check_id are updated
in place; entries without one are added; existing checks not referenced
in the request are removed.

### Example

* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):
* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_profile_detail import V2ProfileDetail
from pescheck.models.v2_profile_update import V2ProfileUpdate
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.ProfilesApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | A UUID string identifying this profile.
    v2_profile_update = {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"profile_check_id":"018e9f1e-3a85-7f50-a4f3-d4f6e7b9c1d2","check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Lead Engineer","profiles":["11","12","13"]}},{"check_type":"watchlist2check","config":{"threshold":85,"topics":["sanctions","pep","crime"]}}]} # V2ProfileUpdate | 

    try:
        api_response = api_instance.v2_profiles_update(id, v2_profile_update)
        print("The response of ProfilesApi->v2_profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->v2_profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| A UUID string identifying this profile. | 
 **v2_profile_update** | [**V2ProfileUpdate**](V2ProfileUpdate.md)|  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

