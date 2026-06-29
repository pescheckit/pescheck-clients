# Pescheck::WebhookResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **name** | **String** |  |  |
| **url** | **String** |  |  |
| **events** | **Object** |  | [optional][readonly] |
| **active** | **Boolean** |  | [optional] |
| **verified** | **Boolean** |  | [optional][readonly] |
| **token** | **String** |  | [optional][readonly] |
| **organisation_name** | **String** |  | [optional][readonly] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |

## Example

```ruby
require 'pescheck-client'

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
  updated_at: null
)
```

