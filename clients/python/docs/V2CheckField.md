# V2CheckField

One config or input field a check accepts via the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] [readonly] 
**type** | **str** | \&quot;string\&quot; | \&quot;integer\&quot; | \&quot;number\&quot; | \&quot;boolean\&quot; | \&quot;array\&quot; | \&quot;object\&quot; | [optional] [readonly] 
**required** | **bool** | Whether the request body must include this field. | [optional] [readonly] 
**choices** | **List[str]** | Allowed values, or null if the field isn&#39;t constrained to a set. | [optional] [readonly] 
**help_text** | **str** |  | [optional] [readonly] 

## Example

```python
from pescheck.models.v2_check_field import V2CheckField

# TODO update the JSON string below
json = "{}"
# create an instance of V2CheckField from a JSON string
v2_check_field_instance = V2CheckField.from_json(json)
# print the JSON string representation of the object
print(V2CheckField.to_json())

# convert the object into a dict
v2_check_field_dict = v2_check_field_instance.to_dict()
# create an instance of V2CheckField from a dict
v2_check_field_from_dict = V2CheckField.from_dict(v2_check_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


