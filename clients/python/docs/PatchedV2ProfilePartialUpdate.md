# PatchedV2ProfilePartialUpdate

PATCH body. Only name and description are editable. Sending `checks` is explicitly rejected - use PUT to replace the full check list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from pescheck.models.patched_v2_profile_partial_update import PatchedV2ProfilePartialUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedV2ProfilePartialUpdate from a JSON string
patched_v2_profile_partial_update_instance = PatchedV2ProfilePartialUpdate.from_json(json)
# print the JSON string representation of the object
print(PatchedV2ProfilePartialUpdate.to_json())

# convert the object into a dict
patched_v2_profile_partial_update_dict = patched_v2_profile_partial_update_instance.to_dict()
# create an instance of PatchedV2ProfilePartialUpdate from a dict
patched_v2_profile_partial_update_from_dict = PatchedV2ProfilePartialUpdate.from_dict(patched_v2_profile_partial_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


