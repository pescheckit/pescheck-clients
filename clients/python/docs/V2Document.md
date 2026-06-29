# V2Document

One document attached to a screening's check. `metadata` carries check-specific extras and may be empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | **UUID** |  | [readonly] 
**check_type** | **str** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] 
**filename** | **str** |  | [readonly] 
**extension** | **str** |  | [readonly] 
**content** | [**V2DocumentContent**](V2DocumentContent.md) |  | [readonly] 
**metadata** | **Dict[str, object]** |  | [readonly] 

## Example

```python
from pescheck.models.v2_document import V2Document

# TODO update the JSON string below
json = "{}"
# create an instance of V2Document from a JSON string
v2_document_instance = V2Document.from_json(json)
# print the JSON string representation of the object
print(V2Document.to_json())

# convert the object into a dict
v2_document_dict = v2_document_instance.to_dict()
# create an instance of V2Document from a dict
v2_document_from_dict = V2Document.from_dict(v2_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


