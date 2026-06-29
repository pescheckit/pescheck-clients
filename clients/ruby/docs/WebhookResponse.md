# Pescheck::WebhookResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **name** | **String** |  |  |
| **url** | **String** |  |  |
| **events** | **Object** |  | [readonly] |
| **active** | **Boolean** |  | [optional] |
| **verified** | **Boolean** |  | [readonly] |
| **token** | **String** |  | [optional][readonly] |
| **organisation_name** | **String** |  | [optional][readonly] |
| **created_at** | **Time** |  | [readonly] |
| **updated_at** | **Time** |  | [readonly] |
| **verification_sent** | **Boolean** |  | [optional] |
| **warning** | **String** |  | [optional] |

## Example

```ruby
require 'pescheck'

instance = Pescheck::WebhookResponse.new(
  id: null,
  name: null,
  url: null,
  events: null,
  active: null,
  verified: null,
  token: null,
  organisation_name: null,
  created_at: null,
  updated_at: null,
  verification_sent: null,
  warning: null
)
```

