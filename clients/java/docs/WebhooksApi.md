# WebhooksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook2**](WebhooksApi.md#createWebhook2) | **POST** /api/v2/webhooks/ |  |
| [**deleteWebhook2**](WebhooksApi.md#deleteWebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ |  |
| [**listWebhooks2**](WebhooksApi.md#listWebhooks2) | **GET** /api/v2/webhooks/list/ |  |
| [**verifyWebhook2**](WebhooksApi.md#verifyWebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ |  |


<a id="createWebhook2"></a>
# **createWebhook2**
> WebhookResponse createWebhook2(webhook, xOrganizationId, organizationId)



Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via &#x60;X-Organization-Id&#x60; header or &#x60;organization_id&#x60; query parameter          **Valid Events:**         - &#x60;check.started&#x60; - Check has been initiated         - &#x60;check.completed&#x60; - Check has been completed successfully         - &#x60;check.failed&#x60; - Check has failed         - &#x60;screening.created&#x60; - New screening has been created         - &#x60;screening.completed&#x60; - Screening has been completed         - &#x60;screening.archived&#x60; - Screening has been archived         - &#x60;package.created&#x60; - New package has been created         - &#x60;package.updated&#x60; - Package has been updated         - &#x60;division.created&#x60; - New division has been created         - &#x60;division.updated&#x60; - Division has been updated          Limited to 5 webhooks per organization/division.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.WebhooksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    WebhooksApi apiInstance = new WebhooksApi(defaultClient);
    Webhook webhook = new Webhook(); // Webhook | 
    String xOrganizationId = "xOrganizationId_example"; // String | Organization ID (for JWT/Session auth only)
    String organizationId = "organizationId_example"; // String | Organization ID (for JWT/Session auth only)
    try {
      WebhookResponse result = apiInstance.createWebhook2(webhook, xOrganizationId, organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#createWebhook2");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhook** | [**Webhook**](Webhook.md)|  | |
| **xOrganizationId** | **String**| Organization ID (for JWT/Session auth only) | [optional] |
| **organizationId** | **String**| Organization ID (for JWT/Session auth only) | [optional] |

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

<a id="deleteWebhook2"></a>
# **deleteWebhook2**
> deleteWebhook2(webhookId)



Delete a webhook

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.WebhooksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    WebhooksApi apiInstance = new WebhooksApi(defaultClient);
    String webhookId = "webhookId_example"; // String | Webhook ID to delete
    try {
      apiInstance.deleteWebhook2(webhookId);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#deleteWebhook2");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | **String**| Webhook ID to delete | |

### Return type

null (empty response body)

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

<a id="listWebhooks2"></a>
# **listWebhooks2**
> List&lt;WebhookResponse&gt; listWebhooks2()



List webhooks for the organization

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.WebhooksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    WebhooksApi apiInstance = new WebhooksApi(defaultClient);
    try {
      List<WebhookResponse> result = apiInstance.listWebhooks2();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#listWebhooks2");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
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

<a id="verifyWebhook2"></a>
# **verifyWebhook2**
> verifyWebhook2(webhookId, verifyWebhook)



Verify webhook ownership

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.WebhooksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    WebhooksApi apiInstance = new WebhooksApi(defaultClient);
    String webhookId = "webhookId_example"; // String | Webhook ID
    VerifyWebhook verifyWebhook = new VerifyWebhook(); // VerifyWebhook | 
    try {
      apiInstance.verifyWebhook2(webhookId, verifyWebhook);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#verifyWebhook2");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | **String**| Webhook ID | |
| **verifyWebhook** | [**VerifyWebhook**](VerifyWebhook.md)|  | |

### Return type

null (empty response body)

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

