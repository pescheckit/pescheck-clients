

# OAuthApplication

Serializer for OAuth application creation requests

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Name for the OAuth application |  |
|**clientType** | [**ClientTypeEnum**](#ClientTypeEnum) | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public |  [optional] |
|**authorizationGrantType** | [**AuthorizationGrantTypeEnum**](#AuthorizationGrantTypeEnum) | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid |  [optional] |
|**redirectUris** | **String** | Space-separated redirect URIs (optional for client_credentials) |  [optional] |
|**divisionId** | **UUID** | Division ID to create application for (optional) |  [optional] |



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



