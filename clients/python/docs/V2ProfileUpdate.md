# V2ProfileUpdate

Replaces the profile - name, description and full checks list. Entries matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | [optional] [default to '']
**checks** | [**List[V2ProfileUpdateCheck]**](V2ProfileUpdateCheck.md) |  | 

## Example

```python
from pescheck.models.v2_profile_update import V2ProfileUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProfileUpdate from a JSON string
v2_profile_update_instance = V2ProfileUpdate.from_json(json)
# print the JSON string representation of the object
print(V2ProfileUpdate.to_json())

# convert the object into a dict
v2_profile_update_dict = v2_profile_update_instance.to_dict()
# create an instance of V2ProfileUpdate from a dict
v2_profile_update_from_dict = V2ProfileUpdate.from_dict(v2_profile_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


