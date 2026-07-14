# Pescheck::CustomTokenObtainPair

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization_id** | **String** | Organization or division ID to scope the token to. Required when your account has access to more than one organization. | [optional] |
| **email** | **String** |  |  |
| **password** | **String** |  |  |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::CustomTokenObtainPair.new(
  organization_id: null,
  email: null,
  password: null
)
```

