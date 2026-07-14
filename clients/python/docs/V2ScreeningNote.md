# V2ScreeningNote

A note recorded on the screening. `check_id` is the Check the note targets (null for type-only or unscoped notes).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | **str** |  | 
**check_type** | **str** |  | 
**check_id** | **UUID** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from pescheck.models.v2_screening_note import V2ScreeningNote

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningNote from a JSON string
v2_screening_note_instance = V2ScreeningNote.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningNote.to_json())

# convert the object into a dict
v2_screening_note_dict = v2_screening_note_instance.to_dict()
# create an instance of V2ScreeningNote from a dict
v2_screening_note_from_dict = V2ScreeningNote.from_dict(v2_screening_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


