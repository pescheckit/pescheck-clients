# PescheckApi.OAuthApplicationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**name** | **String** |  | [optional] 
**clientId** | **String** |  | [optional] 
**clientSecret** | **String** |  | [readonly] 
**clientType** | **String** | * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | 
**authorizationGrantType** | **String** | * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | 
**created** | **Date** |  | [readonly] 
**updated** | **Date** |  | [readonly] 



## Enum: ClientTypeEnum


* `confidential` (value: `"confidential"`)

* `public` (value: `"public"`)





## Enum: AuthorizationGrantTypeEnum


* `authorization-code` (value: `"authorization-code"`)

* `implicit` (value: `"implicit"`)

* `password` (value: `"password"`)

* `client-credentials` (value: `"client-credentials"`)

* `openid-hybrid` (value: `"openid-hybrid"`)




