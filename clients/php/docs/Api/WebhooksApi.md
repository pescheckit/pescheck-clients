# Pescheck\Client\WebhooksApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createWebhook2()**](WebhooksApi.md#createWebhook2) | **POST** /api/v2/webhooks/ |  |
| [**deleteWebhook2()**](WebhooksApi.md#deleteWebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ |  |
| [**listWebhooks2()**](WebhooksApi.md#listWebhooks2) | **GET** /api/v2/webhooks/list/ |  |
| [**verifyWebhook2()**](WebhooksApi.md#verifyWebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ |  |


## `createWebhook2()`

```php
createWebhook2($webhook, $x_organization_id, $organization_id): \Pescheck\Client\Model\WebhookResponse
```



Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via `X-Organization-Id` header or `organization_id` query parameter          **Valid Events:**         - `check.started` - Check has been initiated         - `check.completed` - Check has been completed successfully         - `check.failed` - Check has failed         - `screening.created` - New screening has been created         - `screening.completed` - Screening has been completed         - `screening.archived` - Screening has been archived         - `package.created` - New package has been created         - `package.updated` - Package has been updated         - `division.created` - New division has been created         - `division.updated` - Division has been updated          Limited to 5 webhooks per organization/division.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook = {"name":"My Event Webhook","url":"https://webhook.site/4a33d2f6-48a8-4b49-b6c4-a7bb044c8cb3","events":["check.completed","screening.created","screening.completed"],"active":true,"division_id":"3fa85f64-5717-4562-b3fc-2c963f66afa6"}; // \Pescheck\Client\Model\Webhook
$x_organization_id = 'x_organization_id_example'; // string | Organization ID (for JWT/Session auth only)
$organization_id = 'organization_id_example'; // string | Organization ID (for JWT/Session auth only)

try {
    $result = $apiInstance->createWebhook2($webhook, $x_organization_id, $organization_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->createWebhook2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhook** | [**\Pescheck\Client\Model\Webhook**](../Model/Webhook.md)|  | |
| **x_organization_id** | **string**| Organization ID (for JWT/Session auth only) | [optional] |
| **organization_id** | **string**| Organization ID (for JWT/Session auth only) | [optional] |

### Return type

[**\Pescheck\Client\Model\WebhookResponse**](../Model/WebhookResponse.md)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteWebhook2()`

```php
deleteWebhook2($webhook_id)
```



Delete a webhook

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_id = 'webhook_id_example'; // string | Webhook ID to delete

try {
    $apiInstance->deleteWebhook2($webhook_id);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->deleteWebhook2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhook_id** | **string**| Webhook ID to delete | |

### Return type

void (empty response body)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listWebhooks2()`

```php
listWebhooks2(): \Pescheck\Client\Model\WebhookResponse[]
```



List webhooks for the organization

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->listWebhooks2();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->listWebhooks2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Pescheck\Client\Model\WebhookResponse[]**](../Model/WebhookResponse.md)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `verifyWebhook2()`

```php
verifyWebhook2($webhook_id, $verify_webhook)
```



Verify webhook ownership

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_id = 'webhook_id_example'; // string | Webhook ID
$verify_webhook = new \Pescheck\Client\Model\VerifyWebhook(); // \Pescheck\Client\Model\VerifyWebhook

try {
    $apiInstance->verifyWebhook2($webhook_id, $verify_webhook);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->verifyWebhook2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhook_id** | **string**| Webhook ID | |
| **verify_webhook** | [**\Pescheck\Client\Model\VerifyWebhook**](../Model/VerifyWebhook.md)|  | |

### Return type

void (empty response body)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
