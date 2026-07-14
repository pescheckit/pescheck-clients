# V2ScreeningCheck

Per-screening entry: identifies a target ProfileCheck (by check_type when unambiguous, or via profile_check_id when the profile has multiple ProfileChecks of the same type) and supplies optional `config` patch + per-check `input`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **str** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;id2check&#x60; - id2check * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | 
**config** | **Dict[str, object]** |  | [optional] 
**profile_check_id** | **UUID** | Disambiguator. Use when the profile has multiple ProfileChecks of the same check_type. | [optional] 
**input** | **object** |  | [optional] 

## Example

```python
from pescheck.models.v2_screening_check import V2ScreeningCheck

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningCheck from a JSON string
v2_screening_check_instance = V2ScreeningCheck.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningCheck.to_json())

# convert the object into a dict
v2_screening_check_dict = v2_screening_check_instance.to_dict()
# create an instance of V2ScreeningCheck from a dict
v2_screening_check_from_dict = V2ScreeningCheck.from_dict(v2_screening_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


