# Pescheck::JWTResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **access_token** | **String** | JWT access token |  |
| **refresh_token** | **String** | JWT refresh token |  |
| **token_type** | **String** |  | [optional][default to &#39;Bearer&#39;] |
| **expires_in** | **Integer** | Access token expiration in seconds |  |
| **organisation** | **String** | Organization name |  |
| **organisation_id** | **String** | Organization ID |  |

## Example

```ruby
require 'pescheck'

instance = Pescheck::JWTResponse.new(
  access_token: null,
  refresh_token: null,
  token_type: null,
  expires_in: null,
  organisation: null,
  organisation_id: null
)
```

