# V2ScreeningDetailProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from pescheck.models.v2_screening_detail_profile import V2ScreeningDetailProfile

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningDetailProfile from a JSON string
v2_screening_detail_profile_instance = V2ScreeningDetailProfile.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningDetailProfile.to_json())

# convert the object into a dict
v2_screening_detail_profile_dict = v2_screening_detail_profile_instance.to_dict()
# create an instance of V2ScreeningDetailProfile from a dict
v2_screening_detail_profile_from_dict = V2ScreeningDetailProfile.from_dict(v2_screening_detail_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


