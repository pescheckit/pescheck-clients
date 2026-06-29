# V2ScreeningDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [readonly] 
**status** | **str** |  | [readonly] 
**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | 
**candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] 
**checks** | [**List[V2ScreeningCheckEntry]**](V2ScreeningCheckEntry.md) |  | [readonly] 
**candidate_wizard_url** | **str** | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly] 
**dashboard_url** | **str** | Dashboard URL for this screening. | [readonly] 
**created_at** | **datetime** |  | [readonly] 
**updated_at** | **datetime** |  | [readonly] 

## Example

```python
from pescheck.models.v2_screening_detail import V2ScreeningDetail

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningDetail from a JSON string
v2_screening_detail_instance = V2ScreeningDetail.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningDetail.to_json())

# convert the object into a dict
v2_screening_detail_dict = v2_screening_detail_instance.to_dict()
# create an instance of V2ScreeningDetail from a dict
v2_screening_detail_from_dict = V2ScreeningDetail.from_dict(v2_screening_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


