# PaginatedV2ScreeningListItemList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | 
**previous** | **str** |  | 
**results** | [**List[V2ScreeningListItem]**](V2ScreeningListItem.md) |  | 

## Example

```python
from pescheck.models.paginated_v2_screening_list_item_list import PaginatedV2ScreeningListItemList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedV2ScreeningListItemList from a JSON string
paginated_v2_screening_list_item_list_instance = PaginatedV2ScreeningListItemList.from_json(json)
# print the JSON string representation of the object
print(PaginatedV2ScreeningListItemList.to_json())

# convert the object into a dict
paginated_v2_screening_list_item_list_dict = paginated_v2_screening_list_item_list_instance.to_dict()
# create an instance of PaginatedV2ScreeningListItemList from a dict
paginated_v2_screening_list_item_list_from_dict = PaginatedV2ScreeningListItemList.from_dict(paginated_v2_screening_list_item_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


