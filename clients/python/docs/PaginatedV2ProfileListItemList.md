# PaginatedV2ProfileListItemList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | 
**previous** | **str** |  | 
**results** | [**List[V2ProfileListItem]**](V2ProfileListItem.md) |  | 

## Example

```python
from pescheck.models.paginated_v2_profile_list_item_list import PaginatedV2ProfileListItemList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedV2ProfileListItemList from a JSON string
paginated_v2_profile_list_item_list_instance = PaginatedV2ProfileListItemList.from_json(json)
# print the JSON string representation of the object
print(PaginatedV2ProfileListItemList.to_json())

# convert the object into a dict
paginated_v2_profile_list_item_list_dict = paginated_v2_profile_list_item_list_instance.to_dict()
# create an instance of PaginatedV2ProfileListItemList from a dict
paginated_v2_profile_list_item_list_from_dict = PaginatedV2ProfileListItemList.from_dict(paginated_v2_profile_list_item_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


