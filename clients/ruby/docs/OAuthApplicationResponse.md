# Pescheck::OAuthApplicationResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **name** | **String** |  | [optional] |
| **client_id** | **String** |  | [optional] |
| **client_secret** | **String** |  | [readonly] |
| **client_type** | **String** | * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public |  |
| **authorization_grant_type** | **String** | * &#x60;authorization-code&#x60; - Authorization code * &#x60;urn:ietf:params:oauth:grant-type:device_code&#x60; - Device Code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid |  |
| **organisation** | **String** |  | [readonly] |
| **organisation_id** | **String** |  | [readonly] |
| **created** | **Time** |  | [readonly] |
| **updated** | **Time** |  | [readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::OAuthApplicationResponse.new(
  id: null,
  name: null,
  client_id: null,
  client_secret: null,
  client_type: null,
  authorization_grant_type: null,
  organisation: null,
  organisation_id: null,
  created: null,
  updated: null
)
```

