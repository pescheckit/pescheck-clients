# V2ProfileDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**name** | **str** |  | 
**description** | **str** |  | 
**is_custom** | **bool** |  | [optional] 
**checks** | [**List[V2ProfileCheckEntry]**](V2ProfileCheckEntry.md) |  | [optional] [readonly] 
**total_price** | [**V2Money**](V2Money.md) |  | [optional] [readonly] 
**supported_countries_of_work** | **List[str]** |  | [optional] [readonly] 
**supported_countries_of_residence** | **List[str]** |  | [optional] [readonly] 
**candidate_fields** | **List[object]** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from pescheck.models.v2_profile_detail import V2ProfileDetail

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProfileDetail from a JSON string
v2_profile_detail_instance = V2ProfileDetail.from_json(json)
# print the JSON string representation of the object
print(V2ProfileDetail.to_json())

# convert the object into a dict
v2_profile_detail_dict = v2_profile_detail_instance.to_dict()
# create an instance of V2ProfileDetail from a dict
v2_profile_detail_from_dict = V2ProfileDetail.from_dict(v2_profile_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


