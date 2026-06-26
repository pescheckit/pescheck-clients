# PescheckApi.OAuthApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name for the OAuth application | 
**clientType** | **String** | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | [optional] [default to &#39;confidential&#39;]
**authorizationGrantType** | **String** | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | [optional] [default to &#39;client-credentials&#39;]
**redirectUris** | **String** | Space-separated redirect URIs (optional for client_credentials) | [optional] 
**divisionId** | **String** | Division ID to create application for (optional) | [optional] 



## Enum: ClientTypeEnum


* `confidential` (value: `"confidential"`)

* `public` (value: `"public"`)





## Enum: AuthorizationGrantTypeEnum


* `authorization-code` (value: `"authorization-code"`)

* `implicit` (value: `"implicit"`)

* `password` (value: `"password"`)

* `client-credentials` (value: `"client-credentials"`)

* `openid-hybrid` (value: `"openid-hybrid"`)




