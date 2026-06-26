# Pescheck::OAuthApplication

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Name for the OAuth application |  |
| **client_type** | **String** | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | [optional][default to &#39;confidential&#39;] |
| **authorization_grant_type** | **String** | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | [optional][default to &#39;client-credentials&#39;] |
| **redirect_uris** | **String** | Space-separated redirect URIs (optional for client_credentials) | [optional] |
| **division_id** | **String** | Division ID to create application for (optional) | [optional] |

## Example

```ruby
require 'pescheck'

instance = Pescheck::OAuthApplication.new(
  name: null,
  client_type: null,
  authorization_grant_type: null,
  redirect_uris: null,
  division_id: null
)
```

