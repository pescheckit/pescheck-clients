# V2ScreeningCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_id** | **UUID** |  | 
**candidate** | [**V2Candidate**](V2Candidate.md) |  | 
**checks** | [**List[V2ScreeningCheck]**](V2ScreeningCheck.md) |  | [optional] 

## Example

```python
from pescheck.models.v2_screening_create import V2ScreeningCreate

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningCreate from a JSON string
v2_screening_create_instance = V2ScreeningCreate.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningCreate.to_json())

# convert the object into a dict
v2_screening_create_dict = v2_screening_create_instance.to_dict()
# create an instance of V2ScreeningCreate from a dict
v2_screening_create_from_dict = V2ScreeningCreate.from_dict(v2_screening_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


