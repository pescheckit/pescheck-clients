# OAuthApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name for the OAuth application | 
**client_type** | Option<**ClientType**> | Client type (confidential recommended for server-to-server)  * `confidential` - Confidential * `public` - Public (enum: confidential, public) | [optional][default to Confidential]
**authorization_grant_type** | Option<**AuthorizationGrantType**> | Grant type (client_credentials for API access)  * `authorization-code` - Authorization code * `implicit` - Implicit * `password` - Resource owner password-based * `client-credentials` - Client credentials * `openid-hybrid` - OpenID connect hybrid (enum: authorization-code, implicit, password, client-credentials, openid-hybrid) | [optional][default to ClientCredentials]
**redirect_uris** | Option<**String**> | Space-separated redirect URIs (optional for client_credentials) | [optional]
**division_id** | Option<**uuid::Uuid**> | Division ID to create application for (optional) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


