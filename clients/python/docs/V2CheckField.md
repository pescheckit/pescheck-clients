# V2CheckField

One config or input field a check accepts via the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [readonly] 
**type** | **str** | \&quot;string\&quot; | \&quot;integer\&quot; | \&quot;number\&quot; | \&quot;boolean\&quot; | \&quot;array\&quot; | \&quot;object\&quot; | [readonly] 
**required** | **bool** | Whether the request body must include this field. | [readonly] 
**choices** | **List[Dict[str, object]]** | Allowed values, or null if the field isn&#39;t constrained to a set. Each choice has \&quot;value\&quot; (what to send), \&quot;label\&quot; (human-readable), and possibly check-specific extras such as \&quot;description\&quot;. | [readonly] 
**help_text** | **str** |  | [readonly] 

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


