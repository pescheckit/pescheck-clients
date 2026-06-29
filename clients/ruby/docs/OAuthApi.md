# Pescheck::OAuthApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_o_auth_application2**](OAuthApi.md#create_o_auth_application2) | **POST** /api/v2/oauth/applications/ |  |
| [**delete_o_auth_application2**](OAuthApi.md#delete_o_auth_application2) | **DELETE** /api/v2/oauth/applications/{application_id}/ |  |
| [**list_o_auth_applications2**](OAuthApi.md#list_o_auth_applications2) | **GET** /api/v2/oauth/applications/list/ |  |


## create_o_auth_application2

> <OAuthApplicationResponse> create_o_auth_application2(o_auth_application)



Create OAuth application for API access

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::OAuthApi.new
o_auth_application = Pescheck::OAuthApplication.new({name: 'name_example'}) # OAuthApplication | 

begin
  
  result = api_instance.create_o_auth_application2(o_auth_application)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling OAuthApi->create_o_auth_application2: #{e}"
end
```

#### Using the create_o_auth_application2_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OAuthApplicationResponse>, Integer, Hash)> create_o_auth_application2_with_http_info(o_auth_application)

```ruby
begin
  
  data, status_code, headers = api_instance.create_o_auth_application2_with_http_info(o_auth_application)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OAuthApplicationResponse>
rescue Pescheck::ApiError => e
  puts "Error when calling OAuthApi->create_o_auth_application2_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **o_auth_application** | [**OAuthApplication**](OAuthApplication.md) |  |  |

### Return type

[**OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## delete_o_auth_application2

> delete_o_auth_application2(application_id)



Delete an OAuth application

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::OAuthApi.new
application_id = 'application_id_example' # String | Application ID to delete

begin
  
  api_instance.delete_o_auth_application2(application_id)
rescue Pescheck::ApiError => e
  puts "Error when calling OAuthApi->delete_o_auth_application2: #{e}"
end
```

#### Using the delete_o_auth_application2_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_o_auth_application2_with_http_info(application_id)

```ruby
begin
  
  data, status_code, headers = api_instance.delete_o_auth_application2_with_http_info(application_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Pescheck::ApiError => e
  puts "Error when calling OAuthApi->delete_o_auth_application2_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** | Application ID to delete |  |

### Return type

nil (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## list_o_auth_applications2

> <Array<OAuthApplicationResponse>> list_o_auth_applications2



List OAuth applications for the organization

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::OAuthApi.new

begin
  
  result = api_instance.list_o_auth_applications2
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling OAuthApi->list_o_auth_applications2: #{e}"
end
```

#### Using the list_o_auth_applications2_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OAuthApplicationResponse>>, Integer, Hash)> list_o_auth_applications2_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.list_o_auth_applications2_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OAuthApplicationResponse>>
rescue Pescheck::ApiError => e
  puts "Error when calling OAuthApi->list_o_auth_applications2_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;OAuthApplicationResponse&gt;**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

