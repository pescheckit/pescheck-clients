# Pescheck\Client\AuthenticationApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**generateJWTToken2()**](AuthenticationApi.md#generateJWTToken2) | **POST** /api/v2/jwt/generate/ |  |
| [**jwtCreate()**](AuthenticationApi.md#jwtCreate) | **POST** /api/jwt/ |  |
| [**jwtRefreshCreate()**](AuthenticationApi.md#jwtRefreshCreate) | **POST** /api/jwt/refresh/ |  |


## `generateJWTToken2()`

```php
generateJWTToken2($jwt_generation): \Pescheck\Client\Model\JWTResponse
```



Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id (defaults to your current org).  For a plain login, use POST /api/jwt/.

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

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `jwtCreate()`

```php
jwtCreate($custom_token_obtain_pair): \Pescheck\Client\Model\CustomTokenObtainPair
```



Log in with email + password. Returns a JWT pair scoped to your current organization (last viewed, or first available).  For a token scoped to a specific org or division, use POST /api/v2/jwt/generate/.

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


$apiInstance = new Pescheck\Client\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$custom_token_obtain_pair = new \Pescheck\Client\Model\CustomTokenObtainPair(); // \Pescheck\Client\Model\CustomTokenObtainPair

try {
    $result = $apiInstance->jwtCreate($custom_token_obtain_pair);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->jwtCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_token_obtain_pair** | [**\Pescheck\Client\Model\CustomTokenObtainPair**](../Model/CustomTokenObtainPair.md)|  | |

### Return type

[**\Pescheck\Client\Model\CustomTokenObtainPair**](../Model/CustomTokenObtainPair.md)

### Authorization

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

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

// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

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

[oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
