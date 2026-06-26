# Pescheck::ChecksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**v2_checks_list**](ChecksApi.md#v2_checks_list) | **GET** /api/v2/checks/ |  |
| [**v2_checks_retrieve**](ChecksApi.md#v2_checks_retrieve) | **GET** /api/v2/checks/{check_type}/ |  |


## v2_checks_list

> <Array<V2CheckInfo>> v2_checks_list(opts)



List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ChecksApi.new
opts = {
  check_type: 'check_type_example' # String | Restrict the list to a single check type.
}

begin
  
  result = api_instance.v2_checks_list(opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ChecksApi->v2_checks_list: #{e}"
end
```

#### Using the v2_checks_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<V2CheckInfo>>, Integer, Hash)> v2_checks_list_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_checks_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<V2CheckInfo>>
rescue Pescheck::ApiError => e
  puts "Error when calling ChecksApi->v2_checks_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_type** | **String** | Restrict the list to a single check type. | [optional] |

### Return type

[**Array&lt;V2CheckInfo&gt;**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_checks_retrieve

> <V2CheckInfo> v2_checks_retrieve(check_type)



### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ChecksApi.new
check_type = 'check_type_example' # String | 

begin
  
  result = api_instance.v2_checks_retrieve(check_type)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ChecksApi->v2_checks_retrieve: #{e}"
end
```

#### Using the v2_checks_retrieve_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2CheckInfo>, Integer, Hash)> v2_checks_retrieve_with_http_info(check_type)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_checks_retrieve_with_http_info(check_type)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2CheckInfo>
rescue Pescheck::ApiError => e
  puts "Error when calling ChecksApi->v2_checks_retrieve_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_type** | **String** |  |  |

### Return type

[**V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

