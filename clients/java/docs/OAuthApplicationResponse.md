

# OAuthApplicationResponse

Serializer for OAuth application responses

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [readonly] |
|**name** | **String** |  |  [optional] |
|**clientId** | **String** |  |  [optional] |
|**clientSecret** | **String** |  |  [readonly] |
|**clientType** | [**ClientTypeEnum**](#ClientTypeEnum) | * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public |  |
|**authorizationGrantType** | [**AuthorizationGrantTypeEnum**](#AuthorizationGrantTypeEnum) | * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid |  |
|**created** | **OffsetDateTime** |  |  [readonly] |
|**updated** | **OffsetDateTime** |  |  [readonly] |



## Enum: ClientTypeEnum

| Name | Value |
|---- | -----|
| CONFIDENTIAL | &quot;confidential&quot; |
| PUBLIC | &quot;public&quot; |



## Enum: AuthorizationGrantTypeEnum

| Name | Value |
|---- | -----|
| AUTHORIZATION_CODE | &quot;authorization-code&quot; |
| IMPLICIT | &quot;implicit&quot; |
| PASSWORD | &quot;password&quot; |
| CLIENT_CREDENTIALS | &quot;client-credentials&quot; |
| OPENID_HYBRID | &quot;openid-hybrid&quot; |



