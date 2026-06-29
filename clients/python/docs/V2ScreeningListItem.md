# V2ScreeningListItem

List shape for GET /screenings/. Same candidate as detail; the only thing we slim here is per-check info (status only), since config/input/output are heavy and rarely needed at list time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**status** | **str** |  | [optional] 
**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional] 
**candidate** | [**V2Candidate**](V2Candidate.md) |  | [optional] [readonly] 
**checks** | [**List[V2ScreeningCheckListItem]**](V2ScreeningCheckListItem.md) |  | [optional] [readonly] 
**candidate_wizard_url** | **str** |  | [optional] [readonly] 
**dashboard_url** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from pescheck.models.v2_screening_list_item import V2ScreeningListItem

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningListItem from a JSON string
v2_screening_list_item_instance = V2ScreeningListItem.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningListItem.to_json())

# convert the object into a dict
v2_screening_list_item_dict = v2_screening_list_item_instance.to_dict()
# create an instance of V2ScreeningListItem from a dict
v2_screening_list_item_from_dict = V2ScreeningListItem.from_dict(v2_screening_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


