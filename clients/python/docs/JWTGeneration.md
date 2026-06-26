# JWTGeneration

Serializer for JWT token generation for API users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address of the API user | 
**password** | **str** | Password for the API user | 
**organisation_id** | **UUID** | Organization ID to generate token for | [optional] 
**division_id** | **UUID** | Division ID to generate token for (optional) | [optional] 

## Example

```python
from pescheck.models.jwt_generation import JWTGeneration

# TODO update the JSON string below
json = "{}"
# create an instance of JWTGeneration from a JSON string
jwt_generation_instance = JWTGeneration.from_json(json)
# print the JSON string representation of the object
print(JWTGeneration.to_json())

# convert the object into a dict
jwt_generation_dict = jwt_generation_instance.to_dict()
# create an instance of JWTGeneration from a dict
jwt_generation_from_dict = JWTGeneration.from_dict(jwt_generation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


