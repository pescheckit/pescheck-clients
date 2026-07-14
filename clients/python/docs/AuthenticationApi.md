# pescheck.AuthenticationApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_jwt_token2**](AuthenticationApi.md#generate_jwt_token2) | **POST** /api/v2/jwt/generate/ | 
[**jwt_create**](AuthenticationApi.md#jwt_create) | **POST** /api/jwt/ | 
[**jwt_refresh_create**](AuthenticationApi.md#jwt_refresh_create) | **POST** /api/jwt/refresh/ | 


# **generate_jwt_token2**
> JWTResponse generate_jwt_token2(jwt_generation)

Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id. Without it, your single organization is used; accounts with access to more than one organization must specify one.

For a plain login, use POST /api/jwt/.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.jwt_generation import JWTGeneration
from pescheck.models.jwt_response import JWTResponse
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
    api_instance = pescheck.AuthenticationApi(api_client)
    jwt_generation = pescheck.JWTGeneration() # JWTGeneration | 

    try:
        api_response = api_instance.generate_jwt_token2(jwt_generation)
        print("The response of AuthenticationApi->generate_jwt_token2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->generate_jwt_token2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt_generation** | [**JWTGeneration**](JWTGeneration.md)|  | 

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jwt_create**
> CustomTokenObtainPair jwt_create(custom_token_obtain_pair)

Log in with email + password. Returns a JWT pair scoped to one organization.

Pass organization_id to select the organization or division to act for;
it is required when your account has access to more than one. Without
it, your single organization is used.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.custom_token_obtain_pair import CustomTokenObtainPair
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
    api_instance = pescheck.AuthenticationApi(api_client)
    custom_token_obtain_pair = pescheck.CustomTokenObtainPair() # CustomTokenObtainPair | 

    try:
        api_response = api_instance.jwt_create(custom_token_obtain_pair)
        print("The response of AuthenticationApi->jwt_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->jwt_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_token_obtain_pair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md)|  | 

### Return type

[**CustomTokenObtainPair**](CustomTokenObtainPair.md)

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

# **jwt_refresh_create**
> TokenRefresh jwt_refresh_create(token_refresh)

Takes a refresh type JSON web token and returns an access type JSON web
token if the refresh token is valid.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.token_refresh import TokenRefresh
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
    api_instance = pescheck.AuthenticationApi(api_client)
    token_refresh = pescheck.TokenRefresh() # TokenRefresh | 

    try:
        api_response = api_instance.jwt_refresh_create(token_refresh)
        print("The response of AuthenticationApi->jwt_refresh_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->jwt_refresh_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_refresh** | [**TokenRefresh**](TokenRefresh.md)|  | 

### Return type

[**TokenRefresh**](TokenRefresh.md)

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

