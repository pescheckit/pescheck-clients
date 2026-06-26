# Pescheck.Client.Api.ChecksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V2ChecksList**](ChecksApi.md#v2checkslist) | **GET** /api/v2/checks/ |  |
| [**V2ChecksRetrieve**](ChecksApi.md#v2checksretrieve) | **GET** /api/v2/checks/{check_type}/ |  |

<a id="v2checkslist"></a>
# **V2ChecksList**
> List&lt;V2CheckInfo&gt; V2ChecksList (string? checkType = null)



List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

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
    public class V2ChecksListExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.pescheck.io";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ChecksApi(httpClient, config, httpClientHandler);
            var checkType = "checkType_example";  // string? | Restrict the list to a single check type. (optional) 

            try
            {
                List<V2CheckInfo> result = apiInstance.V2ChecksList(checkType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChecksApi.V2ChecksList: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2ChecksListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<V2CheckInfo>> response = apiInstance.V2ChecksListWithHttpInfo(checkType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChecksApi.V2ChecksListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **checkType** | **string?** | Restrict the list to a single check type. | [optional]  |

### Return type

[**List&lt;V2CheckInfo&gt;**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="v2checksretrieve"></a>
# **V2ChecksRetrieve**
> V2CheckInfo V2ChecksRetrieve (string checkType)



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
    public class V2ChecksRetrieveExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.pescheck.io";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: oauth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ChecksApi(httpClient, config, httpClientHandler);
            var checkType = "checkType_example";  // string | 

            try
            {
                V2CheckInfo result = apiInstance.V2ChecksRetrieve(checkType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ChecksApi.V2ChecksRetrieve: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2ChecksRetrieveWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<V2CheckInfo> response = apiInstance.V2ChecksRetrieveWithHttpInfo(checkType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ChecksApi.V2ChecksRetrieveWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **checkType** | **string** |  |  |

### Return type

[**V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

