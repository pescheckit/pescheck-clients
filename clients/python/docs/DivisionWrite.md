# DivisionWrite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**name** | **str** |  | 
**city** | **str** |  | 
**address** | **str** |  | 
**postal** | **str** |  | 
**phone** | **str** |  | 
**contact_name** | **str** |  | 
**contact_email** | **str** |  | 
**invoice_email** | **str** |  | 
**use_parent_on_email** | **bool** |  | [optional] 
**use_parent_on_billing** | **bool** |  | [optional] 
**use_parent_on_report** | **bool** |  | [optional] 

## Example

```python
from pescheck.models.division_write import DivisionWrite

# TODO update the JSON string below
json = "{}"
# create an instance of DivisionWrite from a JSON string
division_write_instance = DivisionWrite.from_json(json)
# print the JSON string representation of the object
print(DivisionWrite.to_json())

# convert the object into a dict
division_write_dict = division_write_instance.to_dict()
# create an instance of DivisionWrite from a dict
division_write_from_dict = DivisionWrite.from_dict(division_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


