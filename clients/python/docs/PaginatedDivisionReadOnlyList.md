# PaginatedDivisionReadOnlyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | 
**previous** | **str** |  | 
**results** | [**List[DivisionReadOnly]**](DivisionReadOnly.md) |  | 

## Example

```python
from pescheck.models.paginated_division_read_only_list import PaginatedDivisionReadOnlyList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedDivisionReadOnlyList from a JSON string
paginated_division_read_only_list_instance = PaginatedDivisionReadOnlyList.from_json(json)
# print the JSON string representation of the object
print(PaginatedDivisionReadOnlyList.to_json())

# convert the object into a dict
paginated_division_read_only_list_dict = paginated_division_read_only_list_instance.to_dict()
# create an instance of PaginatedDivisionReadOnlyList from a dict
paginated_division_read_only_list_from_dict = PaginatedDivisionReadOnlyList.from_dict(paginated_division_read_only_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


