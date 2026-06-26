# Pescheck::ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**v2_screenings_create**](ScreeningsApi.md#v2_screenings_create) | **POST** /api/v2/screenings/ |  |
| [**v2_screenings_documents_list**](ScreeningsApi.md#v2_screenings_documents_list) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents |
| [**v2_screenings_list**](ScreeningsApi.md#v2_screenings_list) | **GET** /api/v2/screenings/ |  |
| [**v2_screenings_retrieve**](ScreeningsApi.md#v2_screenings_retrieve) | **GET** /api/v2/screenings/{id}/ |  |


## v2_screenings_create

> <V2ScreeningDetail> v2_screenings_create(v2_screening_create)



### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ScreeningsApi.new
v2_screening_create = Pescheck::V2ScreeningCreate.new({profile_id: 'profile_id_example', candidate: Pescheck::V2Candidate.new({first_name: 'first_name_example', last_name: 'last_name_example', email: 'email_example'})}) # V2ScreeningCreate | 

begin
  
  result = api_instance.v2_screenings_create(v2_screening_create)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_create: #{e}"
end
```

#### Using the v2_screenings_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2ScreeningDetail>, Integer, Hash)> v2_screenings_create_with_http_info(v2_screening_create)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_screenings_create_with_http_info(v2_screening_create)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2ScreeningDetail>
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **v2_screening_create** | [**V2ScreeningCreate**](V2ScreeningCreate.md) |  |  |

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2_screenings_documents_list

> <Array<V2Document>> v2_screenings_documents_list(id, opts)

Retrieve screening documents

Documents attached to the screening's checks. Files are delivered inline as Base64 in `content`. Narrow the result with `check_id` or `check_type`.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ScreeningsApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  check_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | Only documents from the check with this id.
  check_type: 'check_type_example' # String | Only documents from checks of this type.
}

begin
  # Retrieve screening documents
  result = api_instance.v2_screenings_documents_list(id, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_documents_list: #{e}"
end
```

#### Using the v2_screenings_documents_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<V2Document>>, Integer, Hash)> v2_screenings_documents_list_with_http_info(id, opts)

```ruby
begin
  # Retrieve screening documents
  data, status_code, headers = api_instance.v2_screenings_documents_list_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<V2Document>>
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_documents_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **check_id** | **String** | Only documents from the check with this id. | [optional] |
| **check_type** | **String** | Only documents from checks of this type. | [optional] |

### Return type

[**Array&lt;V2Document&gt;**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_screenings_list

> <PaginatedV2ScreeningListItemList> v2_screenings_list(opts)



### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ScreeningsApi.new
opts = {
  page: 1, # Integer | A page number within the paginated result set.
  page_size: 50, # Integer | Number of results to return per page.
  paginate: true # Boolean | Enable/disable pagination. When false, max 500 records returned.
}

begin
  
  result = api_instance.v2_screenings_list(opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_list: #{e}"
end
```

#### Using the v2_screenings_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaginatedV2ScreeningListItemList>, Integer, Hash)> v2_screenings_list_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_screenings_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaginatedV2ScreeningListItemList>
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | A page number within the paginated result set. | [optional][default to 1] |
| **page_size** | **Integer** | Number of results to return per page. | [optional][default to 50] |
| **paginate** | **Boolean** | Enable/disable pagination. When false, max 500 records returned. | [optional][default to true] |

### Return type

[**PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_screenings_retrieve

> <V2ScreeningDetail> v2_screenings_retrieve(id)



### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::ScreeningsApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | A UUID string identifying this screening.

begin
  
  result = api_instance.v2_screenings_retrieve(id)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_retrieve: #{e}"
end
```

#### Using the v2_screenings_retrieve_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<V2ScreeningDetail>, Integer, Hash)> v2_screenings_retrieve_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_screenings_retrieve_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <V2ScreeningDetail>
rescue Pescheck::ApiError => e
  puts "Error when calling ScreeningsApi->v2_screenings_retrieve_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | A UUID string identifying this screening. |  |

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

