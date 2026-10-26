# Pescheck\Client\AddOnsApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v2OrganisationsAddonsList()**](AddOnsApi.md#v2OrganisationsAddonsList) | **GET** /api/v2/organisations/addons/ |  |
| [**v2OrganisationsAddonsPartialUpdate()**](AddOnsApi.md#v2OrganisationsAddonsPartialUpdate) | **PATCH** /api/v2/organisations/addons/{addon}/ |  |
| [**v2OrganisationsAddonsRetrieve()**](AddOnsApi.md#v2OrganisationsAddonsRetrieve) | **GET** /api/v2/organisations/addons/{addon}/ |  |
| [**v2OrganisationsAddonsUpdate()**](AddOnsApi.md#v2OrganisationsAddonsUpdate) | **PUT** /api/v2/organisations/addons/{addon}/ |  |


## `v2OrganisationsAddonsList()`

```php
v2OrganisationsAddonsList($division_id): \Pescheck\Client\Model\OrganisationAddon[]
```



List every add-on with whether it is enabled for the organisation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AddOnsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$division_id = 'division_id_example'; // string | Act on this division instead of the organisation the token belongs to.

try {
    $result = $apiInstance->v2OrganisationsAddonsList($division_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AddOnsApi->v2OrganisationsAddonsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **division_id** | **string**| Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**\Pescheck\Client\Model\OrganisationAddon[]**](../Model/OrganisationAddon.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsAddonsPartialUpdate()`

```php
v2OrganisationsAddonsPartialUpdate($addon, $division_id, $patched_organisation_addon_update): \Pescheck\Client\Model\OrganisationAddonUpdateResult
```



Switch an add-on on or off. Enabling is billed monthly from today.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AddOnsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$addon = 'addon_example'; // string | The add-on to act on.
$division_id = 'division_id_example'; // string | Act on this division instead of the organisation the token belongs to.
$patched_organisation_addon_update = {"enabled":false}; // \Pescheck\Client\Model\PatchedOrganisationAddonUpdate

try {
    $result = $apiInstance->v2OrganisationsAddonsPartialUpdate($addon, $division_id, $patched_organisation_addon_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AddOnsApi->v2OrganisationsAddonsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **addon** | **string**| The add-on to act on. | |
| **division_id** | **string**| Act on this division instead of the organisation the token belongs to. | [optional] |
| **patched_organisation_addon_update** | [**\Pescheck\Client\Model\PatchedOrganisationAddonUpdate**](../Model/PatchedOrganisationAddonUpdate.md)|  | [optional] |

### Return type

[**\Pescheck\Client\Model\OrganisationAddonUpdateResult**](../Model/OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsAddonsRetrieve()`

```php
v2OrganisationsAddonsRetrieve($addon, $division_id): \Pescheck\Client\Model\OrganisationAddon
```



Get one add-on's state for the organisation.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AddOnsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$addon = 'addon_example'; // string | The add-on to act on.
$division_id = 'division_id_example'; // string | Act on this division instead of the organisation the token belongs to.

try {
    $result = $apiInstance->v2OrganisationsAddonsRetrieve($addon, $division_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AddOnsApi->v2OrganisationsAddonsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **addon** | **string**| The add-on to act on. | |
| **division_id** | **string**| Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**\Pescheck\Client\Model\OrganisationAddon**](../Model/OrganisationAddon.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsAddonsUpdate()`

```php
v2OrganisationsAddonsUpdate($addon, $organisation_addon_update, $division_id): \Pescheck\Client\Model\OrganisationAddonUpdateResult
```



Switch an add-on on or off. Enabling is billed monthly from today.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AddOnsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$addon = 'addon_example'; // string | The add-on to act on.
$organisation_addon_update = {"enabled":false}; // \Pescheck\Client\Model\OrganisationAddonUpdate
$division_id = 'division_id_example'; // string | Act on this division instead of the organisation the token belongs to.

try {
    $result = $apiInstance->v2OrganisationsAddonsUpdate($addon, $organisation_addon_update, $division_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AddOnsApi->v2OrganisationsAddonsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **addon** | **string**| The add-on to act on. | |
| **organisation_addon_update** | [**\Pescheck\Client\Model\OrganisationAddonUpdate**](../Model/OrganisationAddonUpdate.md)|  | |
| **division_id** | **string**| Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**\Pescheck\Client\Model\OrganisationAddonUpdateResult**](../Model/OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
