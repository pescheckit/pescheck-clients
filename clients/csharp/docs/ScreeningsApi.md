# Pescheck.Client.Api.ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V2ScreeningsCreate**](ScreeningsApi.md#v2screeningscreate) | **POST** /api/v2/screenings/ |  |
| [**V2ScreeningsDocumentsList**](ScreeningsApi.md#v2screeningsdocumentslist) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents |
| [**V2ScreeningsList**](ScreeningsApi.md#v2screeningslist) | **GET** /api/v2/screenings/ |  |
| [**V2ScreeningsRetrieve**](ScreeningsApi.md#v2screeningsretrieve) | **GET** /api/v2/screenings/{id}/ |  |

<a id="v2screeningscreate"></a>
# **V2ScreeningsCreate**
> V2ScreeningDetail V2ScreeningsCreate (V2ScreeningCreate v2ScreeningCreate)



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
    public class V2ScreeningsCreateExample
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
            var apiInstance = new ScreeningsApi(httpClient, config, httpClientHandler);
            var v2ScreeningCreate = new V2ScreeningCreate(); // V2ScreeningCreate | 

            try
            {
                V2ScreeningDetail result = apiInstance.V2ScreeningsCreate(v2ScreeningCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsCreate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2ScreeningsCreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<V2ScreeningDetail> response = apiInstance.V2ScreeningsCreateWithHttpInfo(v2ScreeningCreate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsCreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v2ScreeningCreate** | [**V2ScreeningCreate**](V2ScreeningCreate.md) |  |  |

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
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="v2screeningsdocumentslist"></a>
# **V2ScreeningsDocumentsList**
> List&lt;V2Document&gt; V2ScreeningsDocumentsList (Guid id, Guid? checkId = null, string? checkType = null)

Retrieve screening documents

Documents attached to the screening's checks. Files are delivered inline as Base64 in `content`. Narrow the result with `check_id` or `check_type`.

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
    public class V2ScreeningsDocumentsListExample
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
            var apiInstance = new ScreeningsApi(httpClient, config, httpClientHandler);
            var id = "id_example";  // Guid | 
            var checkId = "checkId_example";  // Guid? | Only documents from the check with this id. (optional) 
            var checkType = "checkType_example";  // string? | Only documents from checks of this type. (optional) 

            try
            {
                // Retrieve screening documents
                List<V2Document> result = apiInstance.V2ScreeningsDocumentsList(id, checkId, checkType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsDocumentsList: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2ScreeningsDocumentsListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve screening documents
    ApiResponse<List<V2Document>> response = apiInstance.V2ScreeningsDocumentsListWithHttpInfo(id, checkId, checkType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsDocumentsListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |
| **checkId** | **Guid?** | Only documents from the check with this id. | [optional]  |
| **checkType** | **string?** | Only documents from checks of this type. | [optional]  |

### Return type

[**List&lt;V2Document&gt;**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="v2screeningslist"></a>
# **V2ScreeningsList**
> PaginatedV2ScreeningListItemList V2ScreeningsList (int? page = null, int? pageSize = null, bool? paginate = null)



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
    public class V2ScreeningsListExample
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
            var apiInstance = new ScreeningsApi(httpClient, config, httpClientHandler);
            var page = 1;  // int? | A page number within the paginated result set. (optional)  (default to 1)
            var pageSize = 50;  // int? | Number of results to return per page. (optional)  (default to 50)
            var paginate = true;  // bool? | Enable/disable pagination. When false, max 500 records returned. (optional)  (default to true)

            try
            {
                PaginatedV2ScreeningListItemList result = apiInstance.V2ScreeningsList(page, pageSize, paginate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsList: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2ScreeningsListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<PaginatedV2ScreeningListItemList> response = apiInstance.V2ScreeningsListWithHttpInfo(page, pageSize, paginate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int?** | A page number within the paginated result set. | [optional] [default to 1] |
| **pageSize** | **int?** | Number of results to return per page. | [optional] [default to 50] |
| **paginate** | **bool?** | Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true] |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="v2screeningsretrieve"></a>
# **V2ScreeningsRetrieve**
> V2ScreeningDetail V2ScreeningsRetrieve (Guid id)



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
    public class V2ScreeningsRetrieveExample
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
            var apiInstance = new ScreeningsApi(httpClient, config, httpClientHandler);
            var id = "id_example";  // Guid | A UUID string identifying this screening.

            try
            {
                V2ScreeningDetail result = apiInstance.V2ScreeningsRetrieve(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsRetrieve: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2ScreeningsRetrieveWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<V2ScreeningDetail> response = apiInstance.V2ScreeningsRetrieveWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ScreeningsApi.V2ScreeningsRetrieveWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** | A UUID string identifying this screening. |  |

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
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

