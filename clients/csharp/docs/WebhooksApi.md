# Pescheck.Client.Api.WebhooksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateWebhook2**](WebhooksApi.md#createwebhook2) | **POST** /api/v2/webhooks/ |  |
| [**DeleteWebhook2**](WebhooksApi.md#deletewebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ |  |
| [**ListWebhooks2**](WebhooksApi.md#listwebhooks2) | **GET** /api/v2/webhooks/list/ |  |
| [**VerifyWebhook2**](WebhooksApi.md#verifywebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ |  |

<a id="createwebhook2"></a>
# **CreateWebhook2**
> WebhookResponse CreateWebhook2 (Webhook webhook, string? xOrganizationId = null, string? organizationId = null)



Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via `X-Organization-Id` header or `organization_id` query parameter          **Valid Events:**         - `check.started` - Check has been initiated         - `check.completed` - Check has been completed successfully         - `check.failed` - Check has failed         - `screening.created` - New screening has been created         - `screening.completed` - Screening has been completed         - `screening.archived` - Screening has been archived         - `package.created` - New package has been created         - `package.updated` - Package has been updated         - `division.created` - New division has been created         - `division.updated` - Division has been updated          Limited to 5 webhooks per organization/division.

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
    public class CreateWebhook2Example
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
            var apiInstance = new WebhooksApi(httpClient, config, httpClientHandler);
            var webhook = new Webhook(); // Webhook | 
            var xOrganizationId = "xOrganizationId_example";  // string? | Organization ID (for JWT/Session auth only) (optional) 
            var organizationId = "organizationId_example";  // string? | Organization ID (for JWT/Session auth only) (optional) 

            try
            {
                WebhookResponse result = apiInstance.CreateWebhook2(webhook, xOrganizationId, organizationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.CreateWebhook2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateWebhook2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<WebhookResponse> response = apiInstance.CreateWebhook2WithHttpInfo(webhook, xOrganizationId, organizationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.CreateWebhook2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **webhook** | [**Webhook**](Webhook.md) |  |  |
| **xOrganizationId** | **string?** | Organization ID (for JWT/Session auth only) | [optional]  |
| **organizationId** | **string?** | Organization ID (for JWT/Session auth only) | [optional]  |

### Return type

[**WebhookResponse**](WebhookResponse.md)

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
| **403** | Forbidden - Organization not found or no permission |  -  |
| **409** | Conflict - Max webhooks reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletewebhook2"></a>
# **DeleteWebhook2**
> void DeleteWebhook2 (string webhookId)



Delete a webhook

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
    public class DeleteWebhook2Example
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
            var apiInstance = new WebhooksApi(httpClient, config, httpClientHandler);
            var webhookId = "webhookId_example";  // string | Webhook ID to delete

            try
            {
                apiInstance.DeleteWebhook2(webhookId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.DeleteWebhook2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteWebhook2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    apiInstance.DeleteWebhook2WithHttpInfo(webhookId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.DeleteWebhook2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **webhookId** | **string** | Webhook ID to delete |  |

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
| **204** | Webhook deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listwebhooks2"></a>
# **ListWebhooks2**
> List&lt;WebhookResponse&gt; ListWebhooks2 ()



List webhooks for the organization

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
    public class ListWebhooks2Example
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
            var apiInstance = new WebhooksApi(httpClient, config, httpClientHandler);

            try
            {
                List<WebhookResponse> result = apiInstance.ListWebhooks2();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.ListWebhooks2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListWebhooks2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<List<WebhookResponse>> response = apiInstance.ListWebhooks2WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.ListWebhooks2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;WebhookResponse&gt;**](WebhookResponse.md)

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

<a id="verifywebhook2"></a>
# **VerifyWebhook2**
> void VerifyWebhook2 (string webhookId, VerifyWebhook verifyWebhook)



Verify webhook ownership

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
    public class VerifyWebhook2Example
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
            var apiInstance = new WebhooksApi(httpClient, config, httpClientHandler);
            var webhookId = "webhookId_example";  // string | Webhook ID
            var verifyWebhook = new VerifyWebhook(); // VerifyWebhook | 

            try
            {
                apiInstance.VerifyWebhook2(webhookId, verifyWebhook);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.VerifyWebhook2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the VerifyWebhook2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    apiInstance.VerifyWebhook2WithHttpInfo(webhookId, verifyWebhook);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.VerifyWebhook2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **webhookId** | **string** | Webhook ID |  |
| **verifyWebhook** | [**VerifyWebhook**](VerifyWebhook.md) |  |  |

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook verified |  -  |
| **400** | Invalid verification code |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

