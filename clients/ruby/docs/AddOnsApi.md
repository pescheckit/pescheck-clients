# Pescheck::AddOnsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**v2_organisations_addons_list**](AddOnsApi.md#v2_organisations_addons_list) | **GET** /api/v2/organisations/addons/ |  |
| [**v2_organisations_addons_partial_update**](AddOnsApi.md#v2_organisations_addons_partial_update) | **PATCH** /api/v2/organisations/addons/{addon}/ |  |
| [**v2_organisations_addons_retrieve**](AddOnsApi.md#v2_organisations_addons_retrieve) | **GET** /api/v2/organisations/addons/{addon}/ |  |
| [**v2_organisations_addons_update**](AddOnsApi.md#v2_organisations_addons_update) | **PUT** /api/v2/organisations/addons/{addon}/ |  |


## v2_organisations_addons_list

> <Array<OrganisationAddon>> v2_organisations_addons_list(opts)



List every add-on with whether it is enabled for the organisation.

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AddOnsApi.new
opts = {
  division_id: 'division_id_example' # String | Act on this division instead of the organisation the token belongs to.
}

begin
  
  result = api_instance.v2_organisations_addons_list(opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_list: #{e}"
end
```

#### Using the v2_organisations_addons_list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<OrganisationAddon>>, Integer, Hash)> v2_organisations_addons_list_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_addons_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<OrganisationAddon>>
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **division_id** | **String** | Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**Array&lt;OrganisationAddon&gt;**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_organisations_addons_partial_update

> <OrganisationAddonUpdateResult> v2_organisations_addons_partial_update(addon, opts)



Switch an add-on on or off. Enabling is billed monthly from today.

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AddOnsApi.new
addon = 'api_access' # String | The add-on to act on.
opts = {
  division_id: 'division_id_example', # String | Act on this division instead of the organisation the token belongs to.
  patched_organisation_addon_update: Pescheck::PatchedOrganisationAddonUpdate.new # PatchedOrganisationAddonUpdate | 
}

begin
  
  result = api_instance.v2_organisations_addons_partial_update(addon, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_partial_update: #{e}"
end
```

#### Using the v2_organisations_addons_partial_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganisationAddonUpdateResult>, Integer, Hash)> v2_organisations_addons_partial_update_with_http_info(addon, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_addons_partial_update_with_http_info(addon, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganisationAddonUpdateResult>
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_partial_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **addon** | **String** | The add-on to act on. |  |
| **division_id** | **String** | Act on this division instead of the organisation the token belongs to. | [optional] |
| **patched_organisation_addon_update** | [**PatchedOrganisationAddonUpdate**](PatchedOrganisationAddonUpdate.md) |  | [optional] |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## v2_organisations_addons_retrieve

> <OrganisationAddon> v2_organisations_addons_retrieve(addon, opts)



Get one add-on's state for the organisation.

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AddOnsApi.new
addon = 'api_access' # String | The add-on to act on.
opts = {
  division_id: 'division_id_example' # String | Act on this division instead of the organisation the token belongs to.
}

begin
  
  result = api_instance.v2_organisations_addons_retrieve(addon, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_retrieve: #{e}"
end
```

#### Using the v2_organisations_addons_retrieve_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganisationAddon>, Integer, Hash)> v2_organisations_addons_retrieve_with_http_info(addon, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_addons_retrieve_with_http_info(addon, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganisationAddon>
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_retrieve_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **addon** | **String** | The add-on to act on. |  |
| **division_id** | **String** | Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2_organisations_addons_update

> <OrganisationAddonUpdateResult> v2_organisations_addons_update(addon, organisation_addon_update, opts)



Switch an add-on on or off. Enabling is billed monthly from today.

### Examples

```ruby
require 'time'
require 'pescheck-client'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AddOnsApi.new
addon = 'api_access' # String | The add-on to act on.
organisation_addon_update = Pescheck::OrganisationAddonUpdate.new({enabled: false}) # OrganisationAddonUpdate | 
opts = {
  division_id: 'division_id_example' # String | Act on this division instead of the organisation the token belongs to.
}

begin
  
  result = api_instance.v2_organisations_addons_update(addon, organisation_addon_update, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_update: #{e}"
end
```

#### Using the v2_organisations_addons_update_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OrganisationAddonUpdateResult>, Integer, Hash)> v2_organisations_addons_update_with_http_info(addon, organisation_addon_update, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.v2_organisations_addons_update_with_http_info(addon, organisation_addon_update, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OrganisationAddonUpdateResult>
rescue Pescheck::ApiError => e
  puts "Error when calling AddOnsApi->v2_organisations_addons_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **addon** | **String** | The add-on to act on. |  |
| **organisation_addon_update** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md) |  |  |
| **division_id** | **String** | Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

