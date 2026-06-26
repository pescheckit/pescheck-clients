# Pescheck\Client\OAuthApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createOAuthApplication2()**](OAuthApi.md#createOAuthApplication2) | **POST** /api/v2/oauth/applications/ |  |
| [**deleteOAuthApplication2()**](OAuthApi.md#deleteOAuthApplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ |  |
| [**listOAuthApplications2()**](OAuthApi.md#listOAuthApplications2) | **GET** /api/v2/oauth/applications/list/ |  |


## `createOAuthApplication2()`

```php
createOAuthApplication2($o_auth_application): \Pescheck\Client\Model\OAuthApplicationResponse
```



Create OAuth application for API access

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


$apiInstance = new Pescheck\Client\Api\OAuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$o_auth_application = new \Pescheck\Client\Model\OAuthApplication(); // \Pescheck\Client\Model\OAuthApplication

try {
    $result = $apiInstance->createOAuthApplication2($o_auth_application);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OAuthApi->createOAuthApplication2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **o_auth_application** | [**\Pescheck\Client\Model\OAuthApplication**](../Model/OAuthApplication.md)|  | |

### Return type

[**\Pescheck\Client\Model\OAuthApplicationResponse**](../Model/OAuthApplicationResponse.md)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteOAuthApplication2()`

```php
deleteOAuthApplication2($application_id)
```



Delete an OAuth application

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


$apiInstance = new Pescheck\Client\Api\OAuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$application_id = 'application_id_example'; // string | Application ID to delete

try {
    $apiInstance->deleteOAuthApplication2($application_id);
} catch (Exception $e) {
    echo 'Exception when calling OAuthApi->deleteOAuthApplication2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **application_id** | **string**| Application ID to delete | |

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

## `listOAuthApplications2()`

```php
listOAuthApplications2(): \Pescheck\Client\Model\OAuthApplicationResponse[]
```



List OAuth applications for the organization

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


$apiInstance = new Pescheck\Client\Api\OAuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->listOAuthApplications2();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OAuthApi->listOAuthApplications2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Pescheck\Client\Model\OAuthApplicationResponse[]**](../Model/OAuthApplicationResponse.md)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
