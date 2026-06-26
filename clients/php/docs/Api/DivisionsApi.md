# Pescheck\Client\DivisionsApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v2OrganisationsDivisionsCreate()**](DivisionsApi.md#v2OrganisationsDivisionsCreate) | **POST** /api/v2/organisations/divisions/ |  |
| [**v2OrganisationsDivisionsList()**](DivisionsApi.md#v2OrganisationsDivisionsList) | **GET** /api/v2/organisations/divisions/ |  |
| [**v2OrganisationsDivisionsPartialUpdate()**](DivisionsApi.md#v2OrganisationsDivisionsPartialUpdate) | **PATCH** /api/v2/organisations/divisions/{id}/ |  |
| [**v2OrganisationsDivisionsRetrieve()**](DivisionsApi.md#v2OrganisationsDivisionsRetrieve) | **GET** /api/v2/organisations/divisions/{id}/ |  |
| [**v2OrganisationsDivisionsUpdate()**](DivisionsApi.md#v2OrganisationsDivisionsUpdate) | **PUT** /api/v2/organisations/divisions/{id}/ |  |


## `v2OrganisationsDivisionsCreate()`

```php
v2OrganisationsDivisionsCreate($division_write): \Pescheck\Client\Model\DivisionWrite
```



Create a division (a child organisation under the current parent org). Divisions are an advanced, rarely-needed feature: create one ONLY when the user has clearly stated they want to manage a separate business unit, location, or legal entity under their account. Do NOT create a division just to organise screenings, for a single-person or single-member organisation, or without an explicit request to do so. When in doubt, ask the user to confirm before calling this tool.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\DivisionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$division_write = new \Pescheck\Client\Model\DivisionWrite(); // \Pescheck\Client\Model\DivisionWrite

try {
    $result = $apiInstance->v2OrganisationsDivisionsCreate($division_write);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DivisionsApi->v2OrganisationsDivisionsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **division_write** | [**\Pescheck\Client\Model\DivisionWrite**](../Model/DivisionWrite.md)|  | |

### Return type

[**\Pescheck\Client\Model\DivisionWrite**](../Model/DivisionWrite.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsDivisionsList()`

```php
v2OrganisationsDivisionsList($page, $page_size, $paginate): \Pescheck\Client\Model\PaginatedDivisionReadOnlyList
```



List method that handles both paginated and unpaginated responses and enforces the max_total_records limit (500).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\DivisionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int | A page number within the paginated result set.
$page_size = 50; // int | Number of results to return per page.
$paginate = true; // bool | Enable/disable pagination. When false, max 500 records returned.

try {
    $result = $apiInstance->v2OrganisationsDivisionsList($page, $page_size, $paginate);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DivisionsApi->v2OrganisationsDivisionsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| A page number within the paginated result set. | [optional] [default to 1] |
| **page_size** | **int**| Number of results to return per page. | [optional] [default to 50] |
| **paginate** | **bool**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true] |

### Return type

[**\Pescheck\Client\Model\PaginatedDivisionReadOnlyList**](../Model/PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsDivisionsPartialUpdate()`

```php
v2OrganisationsDivisionsPartialUpdate($id, $patched_division_write): \Pescheck\Client\Model\DivisionWrite
```



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\DivisionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this organisation.
$patched_division_write = new \Pescheck\Client\Model\PatchedDivisionWrite(); // \Pescheck\Client\Model\PatchedDivisionWrite

try {
    $result = $apiInstance->v2OrganisationsDivisionsPartialUpdate($id, $patched_division_write);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DivisionsApi->v2OrganisationsDivisionsPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this organisation. | |
| **patched_division_write** | [**\Pescheck\Client\Model\PatchedDivisionWrite**](../Model/PatchedDivisionWrite.md)|  | [optional] |

### Return type

[**\Pescheck\Client\Model\DivisionWrite**](../Model/DivisionWrite.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsDivisionsRetrieve()`

```php
v2OrganisationsDivisionsRetrieve($id): \Pescheck\Client\Model\DivisionReadOnly
```



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\DivisionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this organisation.

try {
    $result = $apiInstance->v2OrganisationsDivisionsRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DivisionsApi->v2OrganisationsDivisionsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this organisation. | |

### Return type

[**\Pescheck\Client\Model\DivisionReadOnly**](../Model/DivisionReadOnly.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2OrganisationsDivisionsUpdate()`

```php
v2OrganisationsDivisionsUpdate($id, $division_write): \Pescheck\Client\Model\DivisionWrite
```



Update an existing division's contact, billing, and address details.  Override also triggers a webhook on successful PUT and PATCH requests.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\DivisionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this organisation.
$division_write = new \Pescheck\Client\Model\DivisionWrite(); // \Pescheck\Client\Model\DivisionWrite

try {
    $result = $apiInstance->v2OrganisationsDivisionsUpdate($id, $division_write);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DivisionsApi->v2OrganisationsDivisionsUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this organisation. | |
| **division_write** | [**\Pescheck\Client\Model\DivisionWrite**](../Model/DivisionWrite.md)|  | |

### Return type

[**\Pescheck\Client\Model\DivisionWrite**](../Model/DivisionWrite.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
