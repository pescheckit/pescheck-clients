# V2ProfileCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | [optional] [default to '']
**checks** | [**List[V2ProfileCheck]**](V2ProfileCheck.md) |  | 

## Example

```python
from pescheck.models.v2_profile_create import V2ProfileCreate

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProfileCreate from a JSON string
v2_profile_create_instance = V2ProfileCreate.from_json(json)
# print the JSON string representation of the object
print(V2ProfileCreate.to_json())

# convert the object into a dict
v2_profile_create_dict = v2_profile_create_instance.to_dict()
# create an instance of V2ProfileCreate from a dict
v2_profile_create_from_dict = V2ProfileCreate.from_dict(v2_profile_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


