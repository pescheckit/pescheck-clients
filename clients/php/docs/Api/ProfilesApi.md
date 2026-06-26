# Pescheck\Client\ProfilesApi



All URIs are relative to https://api.pescheck.io, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**v2ProfilesCreate()**](ProfilesApi.md#v2ProfilesCreate) | **POST** /api/v2/profiles/ |  |
| [**v2ProfilesDestroy()**](ProfilesApi.md#v2ProfilesDestroy) | **DELETE** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesList()**](ProfilesApi.md#v2ProfilesList) | **GET** /api/v2/profiles/ |  |
| [**v2ProfilesPartialUpdate()**](ProfilesApi.md#v2ProfilesPartialUpdate) | **PATCH** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesRetrieve()**](ProfilesApi.md#v2ProfilesRetrieve) | **GET** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesUpdate()**](ProfilesApi.md#v2ProfilesUpdate) | **PUT** /api/v2/profiles/{id}/ |  |


## `v2ProfilesCreate()`

```php
v2ProfilesCreate($v2_profile_create): \Pescheck\Client\Model\V2ProfileDetail
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$v2_profile_create = {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Senior Accountant","profiles":["11","12"]}},{"check_type":"watchlist2check","config":{"threshold":80,"cutoff":50,"topics":["sanctions","pep"]}}]}; // \Pescheck\Client\Model\V2ProfileCreate

try {
    $result = $apiInstance->v2ProfilesCreate($v2_profile_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProfilesApi->v2ProfilesCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **v2_profile_create** | [**\Pescheck\Client\Model\V2ProfileCreate**](../Model/V2ProfileCreate.md)|  | |

### Return type

[**\Pescheck\Client\Model\V2ProfileDetail**](../Model/V2ProfileDetail.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ProfilesDestroy()`

```php
v2ProfilesDestroy($id)
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this profile.

try {
    $apiInstance->v2ProfilesDestroy($id);
} catch (Exception $e) {
    echo 'Exception when calling ProfilesApi->v2ProfilesDestroy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this profile. | |

### Return type

void (empty response body)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ProfilesList()`

```php
v2ProfilesList($check_type, $is_custom, $name, $page, $page_size, $paginate, $sort): \Pescheck\Client\Model\PaginatedV2ProfileListItemList
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$check_type = 'check_type_example'; // string | Restrict to profiles containing at least one check of this type.
$is_custom = True; // bool | Restrict to custom (true) or system (false) profiles.
$name = 'name_example'; // string | Restrict to profiles whose name contains this value (case-insensitive).
$page = 1; // int | A page number within the paginated result set.
$page_size = 50; // int | Number of results to return per page.
$paginate = true; // bool | Enable/disable pagination. When false, max 500 records returned.
$sort = 'sort_example'; // string | Which field to use when ordering the results.

try {
    $result = $apiInstance->v2ProfilesList($check_type, $is_custom, $name, $page, $page_size, $paginate, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProfilesApi->v2ProfilesList: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **check_type** | **string**| Restrict to profiles containing at least one check of this type. | [optional] |
| **is_custom** | **bool**| Restrict to custom (true) or system (false) profiles. | [optional] |
| **name** | **string**| Restrict to profiles whose name contains this value (case-insensitive). | [optional] |
| **page** | **int**| A page number within the paginated result set. | [optional] [default to 1] |
| **page_size** | **int**| Number of results to return per page. | [optional] [default to 50] |
| **paginate** | **bool**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true] |
| **sort** | **string**| Which field to use when ordering the results. | [optional] |

### Return type

[**\Pescheck\Client\Model\PaginatedV2ProfileListItemList**](../Model/PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ProfilesPartialUpdate()`

```php
v2ProfilesPartialUpdate($id, $patched_v2_profile_partial_update): \Pescheck\Client\Model\V2ProfileDetail
```



Update name and/or description only. Use PUT to change the check list.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this profile.
$patched_v2_profile_partial_update = {"name":"VOG + Watchlist Screening (NL)","description":"Adjusted description for the Dutch market."}; // \Pescheck\Client\Model\PatchedV2ProfilePartialUpdate

try {
    $result = $apiInstance->v2ProfilesPartialUpdate($id, $patched_v2_profile_partial_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProfilesApi->v2ProfilesPartialUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this profile. | |
| **patched_v2_profile_partial_update** | [**\Pescheck\Client\Model\PatchedV2ProfilePartialUpdate**](../Model/PatchedV2ProfilePartialUpdate.md)|  | [optional] |

### Return type

[**\Pescheck\Client\Model\V2ProfileDetail**](../Model/V2ProfileDetail.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ProfilesRetrieve()`

```php
v2ProfilesRetrieve($id): \Pescheck\Client\Model\V2ProfileDetail
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this profile.

try {
    $result = $apiInstance->v2ProfilesRetrieve($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProfilesApi->v2ProfilesRetrieve: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this profile. | |

### Return type

[**\Pescheck\Client\Model\V2ProfileDetail**](../Model/V2ProfileDetail.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `v2ProfilesUpdate()`

```php
v2ProfilesUpdate($id, $v2_profile_update): \Pescheck\Client\Model\V2ProfileDetail
```



Replace the profile. Checks matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\ProfilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | A UUID string identifying this profile.
$v2_profile_update = {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"profile_check_id":"018e9f1e-3a85-7f50-a4f3-d4f6e7b9c1d2","check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Lead Engineer","profiles":["11","12","13"]}},{"check_type":"watchlist2check","config":{"threshold":85,"topics":["sanctions","pep","crime"]}}]}; // \Pescheck\Client\Model\V2ProfileUpdate

try {
    $result = $apiInstance->v2ProfilesUpdate($id, $v2_profile_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProfilesApi->v2ProfilesUpdate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| A UUID string identifying this profile. | |
| **v2_profile_update** | [**\Pescheck\Client\Model\V2ProfileUpdate**](../Model/V2ProfileUpdate.md)|  | |

### Return type

[**\Pescheck\Client\Model\V2ProfileDetail**](../Model/V2ProfileDetail.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
