# JWTResponse

Serializer for JWT token response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | JWT access token | 
**refresh_token** | **str** | JWT refresh token | 
**token_type** | **str** |  | [optional] [default to 'Bearer']
**expires_in** | **int** | Access token expiration in seconds | 
**organisation** | **str** | Organization name | 
**organisation_id** | **UUID** | Organization ID | 

## Example

```python
from pescheck.models.jwt_response import JWTResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JWTResponse from a JSON string
jwt_response_instance = JWTResponse.from_json(json)
# print the JSON string representation of the object
print(JWTResponse.to_json())

# convert the object into a dict
jwt_response_dict = jwt_response_instance.to_dict()
# create an instance of JWTResponse from a dict
jwt_response_from_dict = JWTResponse.from_dict(jwt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


