# V2ScreeningCheckListItem

Minimal check entry shape for screening list items. No config/input/etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**check_type** | **str** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [optional] [readonly] 
**status** | **str** |  | [optional] [readonly] 

## Example

```python
from pescheck.models.v2_screening_check_list_item import V2ScreeningCheckListItem

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningCheckListItem from a JSON string
v2_screening_check_list_item_instance = V2ScreeningCheckListItem.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningCheckListItem.to_json())

# convert the object into a dict
v2_screening_check_list_item_dict = v2_screening_check_list_item_instance.to_dict()
# create an instance of V2ScreeningCheckListItem from a dict
v2_screening_check_list_item_from_dict = V2ScreeningCheckListItem.from_dict(v2_screening_check_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


