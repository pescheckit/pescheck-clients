# Pescheck::DivisionsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**v2_organisations_divisions_create**](DivisionsApi.md#v2_organisations_divisions_create) | **POST** /api/v2/organisations/divisions/ |  |
| [**v2_organisations_divisions_list**](DivisionsApi.md#v2_organisations_divisions_list) | **GET** /api/v2/organisations/divisions/ |  |
| [**v2_organisations_divisions_partial_update**](DivisionsApi.md#v2_organisations_divisions_partial_update) | **PATCH** /api/v2/organisations/divisions/{id}/ |  |
| [**v2_organisations_divisions_retrieve**](DivisionsApi.md#v2_organisations_divisions_retrieve) | **GET** /api/v2/organisations/divisions/{id}/ |  |
| [**v2_organisations_divisions_update**](DivisionsApi.md#v2_organisations_divisions_update) | **PUT** /api/v2/organisations/divisions/{id}/ |  |


## v2_organisations_divisions_create

> <DivisionWrite> v2_organisations_divisions_create(division_write)



Create a division (a child organisation under the current parent org). Divisions are an advanced, rarely-needed feature: create one ONLY when the user has clearly stated they want to manage a separate business unit, location, or legal entity under their account. Do NOT create a division just to organise screenings, for a single-person or single-member organisation, or without an explicit request to do so. When in doubt, ask the user to confirm before calling this tool.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::DivisionsApi.new
division_write = Pescheck::DivisionWrite.new({name: 'name_example', city: 'city_example', address: 'address_example', postal: 'postal_example', phone: 'phone_example', contact_name: 'contact_name_example', contact_email: 'contact_email_example', invoice_email: 'invoice_email_example'}) # DivisionWrite | 

begin
  
  result = api_instance.v2_organisations_divisions_create(division_write)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_create: #{e}"
end
```

#### Using the v2_organisations_divisions_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DivisionWrite>, Integer, Hash)> v2_organisations_divisions_create_with_http_info(division_write)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_divisions_create_with_http_info(division_write)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DivisionWrite>
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **division_write** | [**DivisionWrite**](DivisionWrite.md) |  |  |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2_organisations_divisions_list

> <PaginatedDivisionReadOnlyList> v2_organisations_divisions_list(opts)



List method that handles both paginated and unpaginated responses and enforces the max_total_records limit (500).

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::DivisionsApi.new
opts = {
  page: 1, # Integer | A page number within the paginated result set.
  page_size: 50, # Integer | Number of results to return per page.
  paginate: true # Boolean | Enable/disable pagination. When false, max 500 records returned.
}

begin
  
  result = api_instance.v2_organisations_divisions_list(opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_list: #{e}"
end
```

#### Using the v2_organisations_divisions_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaginatedDivisionReadOnlyList>, Integer, Hash)> v2_organisations_divisions_list_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_divisions_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaginatedDivisionReadOnlyList>
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | A page number within the paginated result set. | [optional][default to 1] |
| **page_size** | **Integer** | Number of results to return per page. | [optional][default to 50] |
| **paginate** | **Boolean** | Enable/disable pagination. When false, max 500 records returned. | [optional][default to true] |

### Return type

[**PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_organisations_divisions_partial_update

> <DivisionWrite> v2_organisations_divisions_partial_update(id, opts)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::DivisionsApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this organisation.
opts = {
  patched_division_write: Pescheck::PatchedDivisionWrite.new # PatchedDivisionWrite | 
}

begin
  
  result = api_instance.v2_organisations_divisions_partial_update(id, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_partial_update: #{e}"
end
```

#### Using the v2_organisations_divisions_partial_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DivisionWrite>, Integer, Hash)> v2_organisations_divisions_partial_update_with_http_info(id, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_divisions_partial_update_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DivisionWrite>
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_partial_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this organisation. |  |
| **patched_division_write** | [**PatchedDivisionWrite**](PatchedDivisionWrite.md) |  | [optional] |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2_organisations_divisions_retrieve

> <DivisionReadOnly> v2_organisations_divisions_retrieve(id)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::DivisionsApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this organisation.

begin
  
  result = api_instance.v2_organisations_divisions_retrieve(id)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_retrieve: #{e}"
end
```

#### Using the v2_organisations_divisions_retrieve_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DivisionReadOnly>, Integer, Hash)> v2_organisations_divisions_retrieve_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_divisions_retrieve_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DivisionReadOnly>
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_retrieve_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this organisation. |  |

### Return type

[**DivisionReadOnly**](DivisionReadOnly.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_organisations_divisions_update

> <DivisionWrite> v2_organisations_divisions_update(id, division_write)



Update an existing division's contact, billing, and address details.  Override also triggers a webhook on successful PUT and PATCH requests.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::DivisionsApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this organisation.
division_write = Pescheck::DivisionWrite.new({name: 'name_example', city: 'city_example', address: 'address_example', postal: 'postal_example', phone: 'phone_example', contact_name: 'contact_name_example', contact_email: 'contact_email_example', invoice_email: 'invoice_email_example'}) # DivisionWrite | 

begin
  
  result = api_instance.v2_organisations_divisions_update(id, division_write)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_update: #{e}"
end
```

#### Using the v2_organisations_divisions_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DivisionWrite>, Integer, Hash)> v2_organisations_divisions_update_with_http_info(id, division_write)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_divisions_update_with_http_info(id, division_write)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DivisionWrite>
rescue Pescheck::ApiError => e
  puts "Error when calling DivisionsApi->v2_organisations_divisions_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this organisation. |  |
| **division_write** | [**DivisionWrite**](DivisionWrite.md) |  |  |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

