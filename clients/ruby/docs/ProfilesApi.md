# Pescheck::ProfilesApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**v2_profiles_create**](ProfilesApi.md#v2_profiles_create) | **POST** /api/v2/profiles/ |  |
| [**v2_profiles_destroy**](ProfilesApi.md#v2_profiles_destroy) | **DELETE** /api/v2/profiles/{id}/ |  |
| [**v2_profiles_list**](ProfilesApi.md#v2_profiles_list) | **GET** /api/v2/profiles/ |  |
| [**v2_profiles_partial_update**](ProfilesApi.md#v2_profiles_partial_update) | **PATCH** /api/v2/profiles/{id}/ |  |
| [**v2_profiles_retrieve**](ProfilesApi.md#v2_profiles_retrieve) | **GET** /api/v2/profiles/{id}/ |  |
| [**v2_profiles_update**](ProfilesApi.md#v2_profiles_update) | **PUT** /api/v2/profiles/{id}/ |  |


## v2_profiles_create

> <V2ProfileDetail> v2_profiles_create(v2_profile_create)



### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ProfilesApi.new
v2_profile_create = Pescheck::V2ProfileCreate.new({name: 'name_example', checks: [Pescheck::V2ProfileCheck.new({check_type: 'addresscheck'})]}) # V2ProfileCreate | 

begin
  
  result = api_instance.v2_profiles_create(v2_profile_create)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_create: #{e}"
end
```

#### Using the v2_profiles_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2ProfileDetail>, Integer, Hash)> v2_profiles_create_with_http_info(v2_profile_create)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_profiles_create_with_http_info(v2_profile_create)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2ProfileDetail>
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **v2_profile_create** | [**V2ProfileCreate**](V2ProfileCreate.md) |  |  |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2_profiles_destroy

> v2_profiles_destroy(id)



### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ProfilesApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this profile.

begin
  
  api_instance.v2_profiles_destroy(id)
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_destroy: #{e}"
end
```

#### Using the v2_profiles_destroy_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> v2_profiles_destroy_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_profiles_destroy_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_destroy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this profile. |  |

### Return type

nil (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v2_profiles_list

> <PaginatedV2ProfileListItemList> v2_profiles_list(opts)



### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ProfilesApi.new
opts = {
  check_type: 'addresscheck', # String | Restrict to profiles containing at least one check of this type.
  is_custom: true, # Boolean | Restrict to custom (true) or system (false) profiles.
  name: 'name_example', # String | Restrict to profiles whose name contains this value (case-insensitive).
  page: 1, # Integer | A page number within the paginated result set.
  page_size: 50, # Integer | Number of results to return per page.
  paginate: true, # Boolean | Enable/disable pagination. When false, max 500 records returned.
  sort: 'sort_example' # String | Which field to use when ordering the results.
}

begin
  
  result = api_instance.v2_profiles_list(opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_list: #{e}"
end
```

#### Using the v2_profiles_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaginatedV2ProfileListItemList>, Integer, Hash)> v2_profiles_list_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_profiles_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaginatedV2ProfileListItemList>
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_type** | **String** | Restrict to profiles containing at least one check of this type. | [optional] |
| **is_custom** | **Boolean** | Restrict to custom (true) or system (false) profiles. | [optional] |
| **name** | **String** | Restrict to profiles whose name contains this value (case-insensitive). | [optional] |
| **page** | **Integer** | A page number within the paginated result set. | [optional][default to 1] |
| **page_size** | **Integer** | Number of results to return per page. | [optional][default to 50] |
| **paginate** | **Boolean** | Enable/disable pagination. When false, max 500 records returned. | [optional][default to true] |
| **sort** | **String** | Which field to use when ordering the results. | [optional] |

### Return type

[**PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_profiles_partial_update

> <V2ProfileDetail> v2_profiles_partial_update(id, opts)



Update name and/or description only. Use PUT to change the check list.

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ProfilesApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this profile.
opts = {
  patched_v2_profile_partial_update: Pescheck::PatchedV2ProfilePartialUpdate.new # PatchedV2ProfilePartialUpdate | 
}

begin
  
  result = api_instance.v2_profiles_partial_update(id, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_partial_update: #{e}"
end
```

#### Using the v2_profiles_partial_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2ProfileDetail>, Integer, Hash)> v2_profiles_partial_update_with_http_info(id, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_profiles_partial_update_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2ProfileDetail>
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_partial_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this profile. |  |
| **patched_v2_profile_partial_update** | [**PatchedV2ProfilePartialUpdate**](PatchedV2ProfilePartialUpdate.md) |  | [optional] |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2_profiles_retrieve

> <V2ProfileDetail> v2_profiles_retrieve(id)



### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ProfilesApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this profile.

begin
  
  result = api_instance.v2_profiles_retrieve(id)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_retrieve: #{e}"
end
```

#### Using the v2_profiles_retrieve_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2ProfileDetail>, Integer, Hash)> v2_profiles_retrieve_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_profiles_retrieve_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2ProfileDetail>
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_retrieve_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this profile. |  |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_profiles_update

> <V2ProfileDetail> v2_profiles_update(id, v2_profile_update)



Replace the profile. Checks matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ProfilesApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this profile.
v2_profile_update = Pescheck::V2ProfileUpdate.new({name: 'name_example', checks: [Pescheck::V2ProfileUpdateCheck.new({check_type: 'addresscheck'})]}) # V2ProfileUpdate | 

begin
  
  result = api_instance.v2_profiles_update(id, v2_profile_update)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_update: #{e}"
end
```

#### Using the v2_profiles_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2ProfileDetail>, Integer, Hash)> v2_profiles_update_with_http_info(id, v2_profile_update)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_profiles_update_with_http_info(id, v2_profile_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2ProfileDetail>
rescue Pescheck::ApiError => e
  puts "Error when calling ProfilesApi->v2_profiles_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this profile. |  |
| **v2_profile_update** | [**V2ProfileUpdate**](V2ProfileUpdate.md) |  |  |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

