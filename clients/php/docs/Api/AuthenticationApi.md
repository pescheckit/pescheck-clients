# Pescheck\Client\AuthenticationApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**generateJWTToken2()**](AuthenticationApi.md#generateJWTToken2) | **POST** /api/v2/jwt/generate/ |  |
| [**jwtRefreshCreate()**](AuthenticationApi.md#jwtRefreshCreate) | **POST** /api/jwt/refresh/ |  |


## `generateJWTToken2()`

```php
generateJWTToken2($jwt_generation): \Pescheck\Client\Model\JWTResponse
```



Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id. Without it, your single organization is used; accounts with access to more than one organization must specify one.  For a plain login, use POST /api/jwt/.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jwt_generation = new \Pescheck\Client\Model\JWTGeneration(); // \Pescheck\Client\Model\JWTGeneration

try {
    $result = $apiInstance->generateJWTToken2($jwt_generation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->generateJWTToken2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **jwt_generation** | [**\Pescheck\Client\Model\JWTGeneration**](../Model/JWTGeneration.md)|  | |

### Return type

[**\Pescheck\Client\Model\JWTResponse**](../Model/JWTResponse.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jwtRefreshCreate()`

```php
jwtRefreshCreate($token_refresh): \Pescheck\Client\Model\TokenRefresh
```



Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$token_refresh = new \Pescheck\Client\Model\TokenRefresh(); // \Pescheck\Client\Model\TokenRefresh

try {
    $result = $apiInstance->jwtRefreshCreate($token_refresh);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->jwtRefreshCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token_refresh** | [**\Pescheck\Client\Model\TokenRefresh**](../Model/TokenRefresh.md)|  | |

### Return type

[**\Pescheck\Client\Model\TokenRefresh**](../Model/TokenRefresh.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
