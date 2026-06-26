# Pescheck.Client.Model.OAuthApplication
Serializer for OAuth application creation requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name for the OAuth application | 
**ClientType** | **string** | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | [optional] [default to ClientTypeEnum.Confidential]
**AuthorizationGrantType** | **string** | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | [optional] [default to AuthorizationGrantTypeEnum.ClientCredentials]
**RedirectUris** | **string** | Space-separated redirect URIs (optional for client_credentials) | [optional] 
**DivisionId** | **Guid** | Division ID to create application for (optional) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

