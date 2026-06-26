# OAuthApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name for the OAuth application |
**client_type** | **string** | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | [optional] [default to 'confidential']
**authorization_grant_type** | **string** | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | [optional] [default to 'client-credentials']
**redirect_uris** | **string** | Space-separated redirect URIs (optional for client_credentials) | [optional]
**division_id** | **string** | Division ID to create application for (optional) | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
