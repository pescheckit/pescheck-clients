# V2ProfileListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**name** | **str** |  | 
**description** | **str** |  | 
**is_custom** | **bool** |  | [optional] 
**check_types** | **List[str]** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from pescheck.models.v2_profile_list_item import V2ProfileListItem

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProfileListItem from a JSON string
v2_profile_list_item_instance = V2ProfileListItem.from_json(json)
# print the JSON string representation of the object
print(V2ProfileListItem.to_json())

# convert the object into a dict
v2_profile_list_item_dict = v2_profile_list_item_instance.to_dict()
# create an instance of V2ProfileListItem from a dict
v2_profile_list_item_from_dict = V2ProfileListItem.from_dict(v2_profile_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


