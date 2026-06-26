# PatchedDivisionWrite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**address** | **str** |  | [optional] 
**postal** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**contact_name** | **str** |  | [optional] 
**contact_email** | **str** |  | [optional] 
**invoice_email** | **str** |  | [optional] 
**use_parent_on_email** | **bool** |  | [optional] 
**use_parent_on_billing** | **bool** |  | [optional] 
**use_parent_on_report** | **bool** |  | [optional] 

## Example

```python
from pescheck.models.patched_division_write import PatchedDivisionWrite

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedDivisionWrite from a JSON string
patched_division_write_instance = PatchedDivisionWrite.from_json(json)
# print the JSON string representation of the object
print(PatchedDivisionWrite.to_json())

# convert the object into a dict
patched_division_write_dict = patched_division_write_instance.to_dict()
# create an instance of PatchedDivisionWrite from a dict
patched_division_write_from_dict = PatchedDivisionWrite.from_dict(patched_division_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


