# Pescheck\Client\ScreeningsApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v2ScreeningsCreate()**](ScreeningsApi.md#v2ScreeningsCreate) | **POST** /api/v2/screenings/ |  |
| [**v2ScreeningsDocumentsList()**](ScreeningsApi.md#v2ScreeningsDocumentsList) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents |
| [**v2ScreeningsList()**](ScreeningsApi.md#v2ScreeningsList) | **GET** /api/v2/screenings/ |  |
| [**v2ScreeningsRetrieve()**](ScreeningsApi.md#v2ScreeningsRetrieve) | **GET** /api/v2/screenings/{id}/ |  |


## `v2ScreeningsCreate()`

```php
v2ScreeningsCreate($v2_screening_create): \Pescheck\Client\Model\V2ScreeningDetail
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ScreeningsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$v2_screening_create = {"profile_id":"018e9f1e-3a73-7eba-b29c-c2c4a8c40c8a","candidate":{"first_name":"Jan","last_name":"de Vries","email":"jan.devries@example.com","date_of_birth":"1985-04-12"}}; // \Pescheck\Client\Model\V2ScreeningCreate

try {
    $result = $apiInstance->v2ScreeningsCreate($v2_screening_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScreeningsApi->v2ScreeningsCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **v2_screening_create** | [**\Pescheck\Client\Model\V2ScreeningCreate**](../Model/V2ScreeningCreate.md)|  | |

### Return type

[**\Pescheck\Client\Model\V2ScreeningDetail**](../Model/V2ScreeningDetail.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ScreeningsDocumentsList()`

```php
v2ScreeningsDocumentsList($id, $check_id, $check_type): \Pescheck\Client\Model\V2Document[]
```

Retrieve screening documents

Documents attached to the screening's checks. Files are delivered inline as Base64 in `content`. Narrow the result with `check_id` or `check_type`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ScreeningsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$check_id = 'check_id_example'; // string | Only documents from the check with this id.
$check_type = 'check_type_example'; // string | Only documents from checks of this type.

try {
    $result = $apiInstance->v2ScreeningsDocumentsList($id, $check_id, $check_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScreeningsApi->v2ScreeningsDocumentsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |
| **check_id** | **string**| Only documents from the check with this id. | [optional] |
| **check_type** | **string**| Only documents from checks of this type. | [optional] |

### Return type

[**\Pescheck\Client\Model\V2Document[]**](../Model/V2Document.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ScreeningsList()`

```php
v2ScreeningsList($page, $page_size, $paginate): \Pescheck\Client\Model\PaginatedV2ScreeningListItemList
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ScreeningsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int | A page number within the paginated result set.
$page_size = 50; // int | Number of results to return per page.
$paginate = true; // bool | Enable/disable pagination. When false, max 500 records returned.

try {
    $result = $apiInstance->v2ScreeningsList($page, $page_size, $paginate);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScreeningsApi->v2ScreeningsList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| A page number within the paginated result set. | [optional] [default to 1] |
| **page_size** | **int**| Number of results to return per page. | [optional] [default to 50] |
| **paginate** | **bool**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true] |

### Return type

[**\Pescheck\Client\Model\PaginatedV2ScreeningListItemList**](../Model/PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ScreeningsRetrieve()`

```php
v2ScreeningsRetrieve($id): \Pescheck\Client\Model\V2ScreeningDetail
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ScreeningsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this screening.

try {
    $result = $apiInstance->v2ScreeningsRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ScreeningsApi->v2ScreeningsRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this screening. | |

### Return type

[**\Pescheck\Client\Model\V2ScreeningDetail**](../Model/V2ScreeningDetail.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
