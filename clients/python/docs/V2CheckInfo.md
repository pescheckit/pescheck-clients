# V2CheckInfo

Everything a client needs to know to use a check type via the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **str** |  | [readonly] 
**display_name** | **str** |  | [readonly] 
**description** | **str** |  | [readonly] 
**has_config** | **bool** |  | [readonly] 
**is_system_managed** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly] 
**requires_checks** | **List[str]** | Other check types this check pulls in automatically when added. | [readonly] 
**supported_countries_of_work** | **List[str]** |  | [readonly] 
**supported_countries_of_residence** | **List[str]** |  | [readonly] 
**default_price** | [**V2Money**](V2Money.md) |  | [readonly] 
**config_fields** | [**List[V2CheckField]**](V2CheckField.md) |  | [readonly] 
**input_fields** | [**List[V2CheckField]**](V2CheckField.md) |  | [readonly] 
**candidate_fields** | [**List[V2CheckField]**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly] 

## Example

```python
from pescheck.models.v2_check_info import V2CheckInfo

# TODO update the JSON string below
json = "{}"
# create an instance of V2CheckInfo from a JSON string
v2_check_info_instance = V2CheckInfo.from_json(json)
# print the JSON string representation of the object
print(V2CheckInfo.to_json())

# convert the object into a dict
v2_check_info_dict = v2_check_info_instance.to_dict()
# create an instance of V2CheckInfo from a dict
v2_check_info_from_dict = V2CheckInfo.from_dict(v2_check_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


