# Pescheck\Client\ChecksApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v2ChecksList()**](ChecksApi.md#v2ChecksList) | **GET** /api/v2/checks/ |  |
| [**v2ChecksRetrieve()**](ChecksApi.md#v2ChecksRetrieve) | **GET** /api/v2/checks/{check_type}/ |  |


## `v2ChecksList()`

```php
v2ChecksList($check_type): \Pescheck\Client\Model\V2CheckInfo[]
```



List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ChecksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$check_type = 'check_type_example'; // string | Restrict the list to a single check type.

try {
    $result = $apiInstance->v2ChecksList($check_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChecksApi->v2ChecksList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **check_type** | **string**| Restrict the list to a single check type. | [optional] |

### Return type

[**\Pescheck\Client\Model\V2CheckInfo[]**](../Model/V2CheckInfo.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ChecksRetrieve()`

```php
v2ChecksRetrieve($check_type): \Pescheck\Client\Model\V2CheckInfo
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ChecksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$check_type = 'check_type_example'; // string

try {
    $result = $apiInstance->v2ChecksRetrieve($check_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ChecksApi->v2ChecksRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **check_type** | **string**|  | |

### Return type

[**\Pescheck\Client\Model\V2CheckInfo**](../Model/V2CheckInfo.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
