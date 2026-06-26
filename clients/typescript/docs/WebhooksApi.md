# WebhooksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook2**](WebhooksApi.md#createwebhook2) | **POST** /api/v2/webhooks/ |  |
| [**deleteWebhook2**](WebhooksApi.md#deletewebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ |  |
| [**listWebhooks2**](WebhooksApi.md#listwebhooks2) | **GET** /api/v2/webhooks/list/ |  |
| [**verifyWebhook2**](WebhooksApi.md#verifywebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ |  |



## createWebhook2

> WebhookResponse createWebhook2(webhook, xOrganizationId, organizationId)



Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via &#x60;X-Organization-Id&#x60; header or &#x60;organization_id&#x60; query parameter          **Valid Events:**         - &#x60;check.started&#x60; - Check has been initiated         - &#x60;check.completed&#x60; - Check has been completed successfully         - &#x60;check.failed&#x60; - Check has failed         - &#x60;screening.created&#x60; - New screening has been created         - &#x60;screening.completed&#x60; - Screening has been completed         - &#x60;screening.archived&#x60; - Screening has been archived         - &#x60;package.created&#x60; - New package has been created         - &#x60;package.updated&#x60; - Package has been updated         - &#x60;division.created&#x60; - New division has been created         - &#x60;division.updated&#x60; - Division has been updated          Limited to 5 webhooks per organization/division.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@pescheck/api-client';
import type { CreateWebhook2Request } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // Webhook
    webhook: {"name":"My Event Webhook","url":"https://webhook.site/4a33d2f6-48a8-4b49-b6c4-a7bb044c8cb3","events":["check.completed","screening.created","screening.completed"],"active":true,"division_id":"3fa85f64-5717-4562-b3fc-2c963f66afa6"},
    // string | Organization ID (for JWT/Session auth only) (optional)
    xOrganizationId: xOrganizationId_example,
    // string | Organization ID (for JWT/Session auth only) (optional)
    organizationId: organizationId_example,
  } satisfies CreateWebhook2Request;

  try {
    const data = await api.createWebhook2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhook** | [Webhook](Webhook.md) |  | |
| **xOrganizationId** | `string` | Organization ID (for JWT/Session auth only) | [Optional] [Defaults to `undefined`] |
| **organizationId** | `string` | Organization ID (for JWT/Session auth only) | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden - Organization not found or no permission |  -  |
| **409** | Conflict - Max webhooks reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhook2

> deleteWebhook2(webhookId)



Delete a webhook

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@pescheck/api-client';
import type { DeleteWebhook2Request } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID to delete
    webhookId: webhookId_example,
  } satisfies DeleteWebhook2Request;

  try {
    const data = await api.deleteWebhook2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | `string` | Webhook ID to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhooks2

> Array&lt;WebhookResponse&gt; listWebhooks2()



List webhooks for the organization

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@pescheck/api-client';
import type { ListWebhooks2Request } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WebhooksApi(config);

  try {
    const data = await api.listWebhooks2();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;WebhookResponse&gt;**](WebhookResponse.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyWebhook2

> verifyWebhook2(webhookId, verifyWebhook)



Verify webhook ownership

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@pescheck/api-client';
import type { VerifyWebhook2Request } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID
    webhookId: webhookId_example,
    // VerifyWebhook
    verifyWebhook: ...,
  } satisfies VerifyWebhook2Request;

  try {
    const data = await api.verifyWebhook2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | `string` | Webhook ID | [Defaults to `undefined`] |
| **verifyWebhook** | [VerifyWebhook](VerifyWebhook.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook verified |  -  |
| **400** | Invalid verification code |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

