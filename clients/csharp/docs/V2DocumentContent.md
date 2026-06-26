# Pescheck.Client.Model.V2DocumentContent
How the file is delivered. `type` is the discriminator; today it is always `\"base64\"` and `data` holds the encoded bytes. Other delivery types may be added later without breaking this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Data** | **string** | Base64-encoded file contents (type &#x3D;&#x3D; base64). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

