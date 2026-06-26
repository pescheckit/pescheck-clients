# Pescheck.Client.Api.OAuthApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOAuthApplication2**](OAuthApi.md#createoauthapplication2) | **POST** /api/v2/oauth/applications/ |  |
| [**DeleteOAuthApplication2**](OAuthApi.md#deleteoauthapplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ |  |
| [**ListOAuthApplications2**](OAuthApi.md#listoauthapplications2) | **GET** /api/v2/oauth/applications/list/ |  |

<a id="createoauthapplication2"></a>
# **CreateOAuthApplication2**
> OAuthApplicationResponse CreateOAuthApplication2 (OAuthApplication oAuthApplication)



Create OAuth application for API access

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;

namespace Example
{
    public class CreateOAuthApplication2Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.pescheck.io";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new OAuthApi(httpClient, config, httpClientHandler);
            var oAuthApplication = new OAuthApplication(); // OAuthApplication | 

            try
            {
                OAuthApplicationResponse result = apiInstance.CreateOAuthApplication2(oAuthApplication);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OAuthApi.CreateOAuthApplication2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOAuthApplication2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<OAuthApplicationResponse> response = apiInstance.CreateOAuthApplication2WithHttpInfo(oAuthApplication);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OAuthApi.CreateOAuthApplication2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **oAuthApplication** | [**OAuthApplication**](OAuthApplication.md) |  |  |

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
| **201** |  |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteoauthapplication2"></a>
# **DeleteOAuthApplication2**
> void DeleteOAuthApplication2 (string applicationId)



Delete an OAuth application

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;

namespace Example
{
    public class DeleteOAuthApplication2Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.pescheck.io";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new OAuthApi(httpClient, config, httpClientHandler);
            var applicationId = "applicationId_example";  // string | Application ID to delete

            try
            {
                apiInstance.DeleteOAuthApplication2(applicationId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OAuthApi.DeleteOAuthApplication2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOAuthApplication2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    apiInstance.DeleteOAuthApplication2WithHttpInfo(applicationId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OAuthApi.DeleteOAuthApplication2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **applicationId** | **string** | Application ID to delete |  |

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
| **204** | Application deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Application not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listoauthapplications2"></a>
# **ListOAuthApplications2**
> List&lt;OAuthApplicationResponse&gt; ListOAuthApplications2 ()



List OAuth applications for the organization

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;

namespace Example
{
    public class ListOAuthApplications2Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.pescheck.io";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new OAuthApi(httpClient, config, httpClientHandler);

            try
            {
                List<OAuthApplicationResponse> result = apiInstance.ListOAuthApplications2();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OAuthApi.ListOAuthApplications2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOAuthApplications2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<OAuthApplicationResponse>> response = apiInstance.ListOAuthApplications2WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OAuthApi.ListOAuthApplications2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;OAuthApplicationResponse&gt;**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

