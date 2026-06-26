

# V2DocumentContent

How the file is delivered. `type` is the discriminator; today it is always `\"base64\"` and `data` holds the encoded bytes. Other delivery types may be added later without breaking this contract.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | **String** |  |  |
|**data** | **String** | Base64-encoded file contents (type &#x3D;&#x3D; base64). |  [optional] |



