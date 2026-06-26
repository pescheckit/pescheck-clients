# pescheck.OAuthApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_o_auth_application2**](OAuthApi.md#create_o_auth_application2) | **POST** /api/v2/oauth/applications/ | 
[**delete_o_auth_application2**](OAuthApi.md#delete_o_auth_application2) | **DELETE** /api/v2/oauth/applications/{application_id}/ | 
[**list_o_auth_applications2**](OAuthApi.md#list_o_auth_applications2) | **GET** /api/v2/oauth/applications/list/ | 


# **create_o_auth_application2**
> OAuthApplicationResponse create_o_auth_application2(o_auth_application)

Create OAuth application for API access

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.o_auth_application import OAuthApplication
from pescheck.models.o_auth_application_response import OAuthApplicationResponse
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
    api_instance = pescheck.OAuthApi(api_client)
    o_auth_application = pescheck.OAuthApplication() # OAuthApplication | 

    try:
        api_response = api_instance.create_o_auth_application2(o_auth_application)
        print("The response of OAuthApi->create_o_auth_application2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->create_o_auth_application2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **o_auth_application** | [**OAuthApplication**](OAuthApplication.md)|  | 

### Return type

[**OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_o_auth_application2**
> delete_o_auth_application2(application_id)

Delete an OAuth application

### Example

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

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.OAuthApi(api_client)
    application_id = 'application_id_example' # str | Application ID to delete

    try:
        api_instance.delete_o_auth_application2(application_id)
    except Exception as e:
        print("Exception when calling OAuthApi->delete_o_auth_application2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| Application ID to delete | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Application deleted |  -  |
**403** | Forbidden |  -  |
**404** | Application not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_o_auth_applications2**
> List[OAuthApplicationResponse] list_o_auth_applications2()

List OAuth applications for the organization

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.o_auth_application_response import OAuthApplicationResponse
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
    api_instance = pescheck.OAuthApi(api_client)

    try:
        api_response = api_instance.list_o_auth_applications2()
        print("The response of OAuthApi->list_o_auth_applications2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->list_o_auth_applications2: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OAuthApplicationResponse]**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

