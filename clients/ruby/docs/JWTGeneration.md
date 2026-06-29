# Pescheck::JWTGeneration

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **email** | **String** | Email address of the API user |  |
| **password** | **String** | Password for the API user |  |
| **organisation_id** | **String** | Organization ID to generate token for | [optional] |
| **division_id** | **String** | Division ID to generate token for (optional) | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::JWTGeneration.new(
  email: null,
  password: null,
  organisation_id: null,
  division_id: null
)
```

