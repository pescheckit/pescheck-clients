# OAuthApplicationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [readonly]
**name** | Option<**String**> |  | [optional]
**client_id** | Option<**String**> |  | [optional]
**client_secret** | **String** |  | [readonly]
**client_type** | **ClientType** | * `confidential` - Confidential * `public` - Public (enum: confidential, public) | 
**authorization_grant_type** | **AuthorizationGrantType** | * `authorization-code` - Authorization code * `urn:ietf:params:oauth:grant-type:device_code` - Device Code * `implicit` - Implicit * `password` - Resource owner password-based * `client-credentials` - Client credentials * `openid-hybrid` - OpenID connect hybrid (enum: authorization-code, urn:ietf:params:oauth:grant-type:device_code, implicit, password, client-credentials, openid-hybrid) | 
**organisation** | **String** |  | [readonly]
**organisation_id** | **uuid::Uuid** |  | [readonly]
**created** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]
**updated** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


