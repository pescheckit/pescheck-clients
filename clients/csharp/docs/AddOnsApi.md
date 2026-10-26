# Pescheck.Client.Api.AddOnsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V2OrganisationsAddonsList**](AddOnsApi.md#v2organisationsaddonslist) | **GET** /api/v2/organisations/addons/ |  |
| [**V2OrganisationsAddonsPartialUpdate**](AddOnsApi.md#v2organisationsaddonspartialupdate) | **PATCH** /api/v2/organisations/addons/{addon}/ |  |
| [**V2OrganisationsAddonsRetrieve**](AddOnsApi.md#v2organisationsaddonsretrieve) | **GET** /api/v2/organisations/addons/{addon}/ |  |
| [**V2OrganisationsAddonsUpdate**](AddOnsApi.md#v2organisationsaddonsupdate) | **PUT** /api/v2/organisations/addons/{addon}/ |  |

<a id="v2organisationsaddonslist"></a>
# **V2OrganisationsAddonsList**
> List&lt;OrganisationAddon&gt; V2OrganisationsAddonsList (string? divisionId = null)



List every add-on with whether it is enabled for the organisation.

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
    public class V2OrganisationsAddonsListExample
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
            var apiInstance = new AddOnsApi(httpClient, config, httpClientHandler);
            var divisionId = "divisionId_example";  // string? | Act on this division instead of the organisation the token belongs to. (optional) 

            try
            {
                List<OrganisationAddon> result = apiInstance.V2OrganisationsAddonsList(divisionId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsList: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2OrganisationsAddonsListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<OrganisationAddon>> response = apiInstance.V2OrganisationsAddonsListWithHttpInfo(divisionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **divisionId** | **string?** | Act on this division instead of the organisation the token belongs to. | [optional]  |

### Return type

[**List&lt;OrganisationAddon&gt;**](OrganisationAddon.md)

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

<a id="v2organisationsaddonspartialupdate"></a>
# **V2OrganisationsAddonsPartialUpdate**
> OrganisationAddonUpdateResult V2OrganisationsAddonsPartialUpdate (string addon, string? divisionId = null, PatchedOrganisationAddonUpdate? patchedOrganisationAddonUpdate = null)



Switch an add-on on or off. Enabling is billed monthly from today.

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
    public class V2OrganisationsAddonsPartialUpdateExample
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
            var apiInstance = new AddOnsApi(httpClient, config, httpClientHandler);
            var addon = "api_access";  // string | The add-on to act on.
            var divisionId = "divisionId_example";  // string? | Act on this division instead of the organisation the token belongs to. (optional) 
            var patchedOrganisationAddonUpdate = new PatchedOrganisationAddonUpdate?(); // PatchedOrganisationAddonUpdate? |  (optional) 

            try
            {
                OrganisationAddonUpdateResult result = apiInstance.V2OrganisationsAddonsPartialUpdate(addon, divisionId, patchedOrganisationAddonUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsPartialUpdate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2OrganisationsAddonsPartialUpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<OrganisationAddonUpdateResult> response = apiInstance.V2OrganisationsAddonsPartialUpdateWithHttpInfo(addon, divisionId, patchedOrganisationAddonUpdate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsPartialUpdateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **addon** | **string** | The add-on to act on. |  |
| **divisionId** | **string?** | Act on this division instead of the organisation the token belongs to. | [optional]  |
| **patchedOrganisationAddonUpdate** | [**PatchedOrganisationAddonUpdate?**](PatchedOrganisationAddonUpdate?.md) |  | [optional]  |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="v2organisationsaddonsretrieve"></a>
# **V2OrganisationsAddonsRetrieve**
> OrganisationAddon V2OrganisationsAddonsRetrieve (string addon, string? divisionId = null)



Get one add-on's state for the organisation.

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
    public class V2OrganisationsAddonsRetrieveExample
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
            var apiInstance = new AddOnsApi(httpClient, config, httpClientHandler);
            var addon = "api_access";  // string | The add-on to act on.
            var divisionId = "divisionId_example";  // string? | Act on this division instead of the organisation the token belongs to. (optional) 

            try
            {
                OrganisationAddon result = apiInstance.V2OrganisationsAddonsRetrieve(addon, divisionId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsRetrieve: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2OrganisationsAddonsRetrieveWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<OrganisationAddon> response = apiInstance.V2OrganisationsAddonsRetrieveWithHttpInfo(addon, divisionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsRetrieveWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **addon** | **string** | The add-on to act on. |  |
| **divisionId** | **string?** | Act on this division instead of the organisation the token belongs to. | [optional]  |

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

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

<a id="v2organisationsaddonsupdate"></a>
# **V2OrganisationsAddonsUpdate**
> OrganisationAddonUpdateResult V2OrganisationsAddonsUpdate (string addon, OrganisationAddonUpdate organisationAddonUpdate, string? divisionId = null)



Switch an add-on on or off. Enabling is billed monthly from today.

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
    public class V2OrganisationsAddonsUpdateExample
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
            var apiInstance = new AddOnsApi(httpClient, config, httpClientHandler);
            var addon = "api_access";  // string | The add-on to act on.
            var organisationAddonUpdate = new OrganisationAddonUpdate(); // OrganisationAddonUpdate | 
            var divisionId = "divisionId_example";  // string? | Act on this division instead of the organisation the token belongs to. (optional) 

            try
            {
                OrganisationAddonUpdateResult result = apiInstance.V2OrganisationsAddonsUpdate(addon, organisationAddonUpdate, divisionId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsUpdate: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the V2OrganisationsAddonsUpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<OrganisationAddonUpdateResult> response = apiInstance.V2OrganisationsAddonsUpdateWithHttpInfo(addon, organisationAddonUpdate, divisionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AddOnsApi.V2OrganisationsAddonsUpdateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **addon** | **string** | The add-on to act on. |  |
| **organisationAddonUpdate** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md) |  |  |
| **divisionId** | **string?** | Act on this division instead of the organisation the token belongs to. | [optional]  |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

