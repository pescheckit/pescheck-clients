# pescheck.ChecksApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_checks_list**](ChecksApi.md#v2_checks_list) | **GET** /api/v2/checks/ | 
[**v2_checks_retrieve**](ChecksApi.md#v2_checks_retrieve) | **GET** /api/v2/checks/{check_type}/ | 


# **v2_checks_list**
> List[V2CheckInfo] v2_checks_list(check_type=check_type)

List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_check_info import V2CheckInfo
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
    api_instance = pescheck.ChecksApi(api_client)
    check_type = 'check_type_example' # str | Restrict the list to a single check type. (optional)

    try:
        api_response = api_instance.v2_checks_list(check_type=check_type)
        print("The response of ChecksApi->v2_checks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->v2_checks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_type** | **str**| Restrict the list to a single check type. | [optional] 

### Return type

[**List[V2CheckInfo]**](V2CheckInfo.md)

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

# **v2_checks_retrieve**
> V2CheckInfo v2_checks_retrieve(check_type)

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.v2_check_info import V2CheckInfo
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
    api_instance = pescheck.ChecksApi(api_client)
    check_type = 'check_type_example' # str | 

    try:
        api_response = api_instance.v2_checks_retrieve(check_type)
        print("The response of ChecksApi->v2_checks_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->v2_checks_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_type** | **str**|  | 

### Return type

[**V2CheckInfo**](V2CheckInfo.md)

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

