# PescheckApi.WebhooksApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook2**](WebhooksApi.md#createWebhook2) | **POST** /api/v2/webhooks/ | 
[**deleteWebhook2**](WebhooksApi.md#deleteWebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ | 
[**listWebhooks2**](WebhooksApi.md#listWebhooks2) | **GET** /api/v2/webhooks/list/ | 
[**verifyWebhook2**](WebhooksApi.md#verifyWebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ | 



## createWebhook2

> WebhookResponse createWebhook2(webhook, opts)



Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via &#x60;X-Organization-Id&#x60; header or &#x60;organization_id&#x60; query parameter          **Valid Events:**         - &#x60;check.started&#x60; - Check has been initiated         - &#x60;check.completed&#x60; - Check has been completed successfully         - &#x60;check.failed&#x60; - Check has failed         - &#x60;screening.created&#x60; - New screening has been created         - &#x60;screening.completed&#x60; - Screening has been completed         - &#x60;screening.archived&#x60; - Screening has been archived         - &#x60;package.created&#x60; - New package has been created         - &#x60;package.updated&#x60; - Package has been updated         - &#x60;division.created&#x60; - New division has been created         - &#x60;division.updated&#x60; - Division has been updated          Limited to 5 webhooks per organization/division.

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.WebhooksApi();
let webhook = {"name":"My Event Webhook","url":"https://webhook.site/4a33d2f6-48a8-4b49-b6c4-a7bb044c8cb3","events":["check.completed","screening.created","screening.completed"],"active":true,"division_id":"3fa85f64-5717-4562-b3fc-2c963f66afa6"}; // Webhook | 
let opts = {
  'xOrganizationId': "xOrganizationId_example", // String | Organization ID (for JWT/Session auth only)
  'organizationId': "organizationId_example" // String | Organization ID (for JWT/Session auth only)
};
apiInstance.createWebhook2(webhook, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)|  | 
 **xOrganizationId** | **String**| Organization ID (for JWT/Session auth only) | [optional] 
 **organizationId** | **String**| Organization ID (for JWT/Session auth only) | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## deleteWebhook2

> deleteWebhook2(webhookId)



Delete a webhook

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.WebhooksApi();
let webhookId = "webhookId_example"; // String | Webhook ID to delete
apiInstance.deleteWebhook2(webhookId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| Webhook ID to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listWebhooks2

> [WebhookResponse] listWebhooks2()



List webhooks for the organization

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.WebhooksApi();
apiInstance.listWebhooks2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[WebhookResponse]**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyWebhook2

> verifyWebhook2(webhookId, verifyWebhook)



Verify webhook ownership

### Example

```javascript
import PescheckApi from 'pescheck-api-client';
let defaultClient = PescheckApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PescheckApi.WebhooksApi();
let webhookId = "webhookId_example"; // String | Webhook ID
let verifyWebhook = new PescheckApi.VerifyWebhook(); // VerifyWebhook | 
apiInstance.verifyWebhook2(webhookId, verifyWebhook).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **String**| Webhook ID | 
 **verifyWebhook** | [**VerifyWebhook**](VerifyWebhook.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: Not defined

