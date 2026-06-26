# Pescheck::WebhooksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_webhook2**](WebhooksApi.md#create_webhook2) | **POST** /api/v2/webhooks/ |  |
| [**delete_webhook2**](WebhooksApi.md#delete_webhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ |  |
| [**list_webhooks2**](WebhooksApi.md#list_webhooks2) | **GET** /api/v2/webhooks/list/ |  |
| [**verify_webhook2**](WebhooksApi.md#verify_webhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ |  |


## create_webhook2

> <WebhookResponse> create_webhook2(webhook, opts)



Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via `X-Organization-Id` header or `organization_id` query parameter          **Valid Events:**         - `check.started` - Check has been initiated         - `check.completed` - Check has been completed successfully         - `check.failed` - Check has failed         - `screening.created` - New screening has been created         - `screening.completed` - Screening has been completed         - `screening.archived` - Screening has been archived         - `package.created` - New package has been created         - `package.updated` - Package has been updated         - `division.created` - New division has been created         - `division.updated` - Division has been updated          Limited to 5 webhooks per organization/division.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::WebhooksApi.new
webhook = Pescheck::Webhook.new({name: 'name_example', url: 'url_example', events: ['check.status_changed']}) # Webhook | 
opts = {
  x_organization_id: 'x_organization_id_example', # String | Organization ID (for JWT/Session auth only)
  organization_id: 'organization_id_example' # String | Organization ID (for JWT/Session auth only)
}

begin
  
  result = api_instance.create_webhook2(webhook, opts)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->create_webhook2: #{e}"
end
```

#### Using the create_webhook2_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebhookResponse>, Integer, Hash)> create_webhook2_with_http_info(webhook, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.create_webhook2_with_http_info(webhook, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebhookResponse>
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->create_webhook2_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook** | [**Webhook**](Webhook.md) |  |  |
| **x_organization_id** | **String** | Organization ID (for JWT/Session auth only) | [optional] |
| **organization_id** | **String** | Organization ID (for JWT/Session auth only) | [optional] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## delete_webhook2

> delete_webhook2(webhook_id)



Delete a webhook

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::WebhooksApi.new
webhook_id = 'webhook_id_example' # String | Webhook ID to delete

begin
  
  api_instance.delete_webhook2(webhook_id)
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->delete_webhook2: #{e}"
end
```

#### Using the delete_webhook2_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_webhook2_with_http_info(webhook_id)

```ruby
begin
  
  data, status_code, headers = api_instance.delete_webhook2_with_http_info(webhook_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->delete_webhook2_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** | Webhook ID to delete |  |

### Return type

nil (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## list_webhooks2

> <Array<WebhookResponse>> list_webhooks2



List webhooks for the organization

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::WebhooksApi.new

begin
  
  result = api_instance.list_webhooks2
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->list_webhooks2: #{e}"
end
```

#### Using the list_webhooks2_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<WebhookResponse>>, Integer, Hash)> list_webhooks2_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.list_webhooks2_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<WebhookResponse>>
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->list_webhooks2_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;WebhookResponse&gt;**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verify_webhook2

> verify_webhook2(webhook_id, verify_webhook)



Verify webhook ownership

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::WebhooksApi.new
webhook_id = 'webhook_id_example' # String | Webhook ID
verify_webhook = Pescheck::VerifyWebhook.new({verification_code: 'verification_code_example'}) # VerifyWebhook | 

begin
  
  api_instance.verify_webhook2(webhook_id, verify_webhook)
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->verify_webhook2: #{e}"
end
```

#### Using the verify_webhook2_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> verify_webhook2_with_http_info(webhook_id, verify_webhook)

```ruby
begin
  
  data, status_code, headers = api_instance.verify_webhook2_with_http_info(webhook_id, verify_webhook)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Pescheck::ApiError => e
  puts "Error when calling WebhooksApi->verify_webhook2_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** | Webhook ID |  |
| **verify_webhook** | [**VerifyWebhook**](VerifyWebhook.md) |  |  |

### Return type

nil (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: Not defined

