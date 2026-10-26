# V2ScreeningDetailOrganisation

Organisation owning this screening. For departments, the department itself.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from pescheck.models.v2_screening_detail_organisation import V2ScreeningDetailOrganisation

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningDetailOrganisation from a JSON string
v2_screening_detail_organisation_instance = V2ScreeningDetailOrganisation.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningDetailOrganisation.to_json())

# convert the object into a dict
v2_screening_detail_organisation_dict = v2_screening_detail_organisation_instance.to_dict()
# create an instance of V2ScreeningDetailOrganisation from a dict
v2_screening_detail_organisation_from_dict = V2ScreeningDetailOrganisation.from_dict(v2_screening_detail_organisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


