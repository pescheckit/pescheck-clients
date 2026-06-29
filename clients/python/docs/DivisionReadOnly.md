# DivisionReadOnly


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**parent** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
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
from pescheck.models.division_read_only import DivisionReadOnly

# TODO update the JSON string below
json = "{}"
# create an instance of DivisionReadOnly from a JSON string
division_read_only_instance = DivisionReadOnly.from_json(json)
# print the JSON string representation of the object
print(DivisionReadOnly.to_json())

# convert the object into a dict
division_read_only_dict = division_read_only_instance.to_dict()
# create an instance of DivisionReadOnly from a dict
division_read_only_from_dict = DivisionReadOnly.from_dict(division_read_only_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


