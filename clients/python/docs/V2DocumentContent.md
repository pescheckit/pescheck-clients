# V2DocumentContent

How the file is delivered. `type` is the discriminator; today it is always `\"base64\"` and `data` holds the encoded bytes. Other delivery types may be added later without breaking this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**data** | **str** | Base64-encoded file contents (type &#x3D;&#x3D; base64). | [optional] 

## Example

```python
from pescheck.models.v2_document_content import V2DocumentContent

# TODO update the JSON string below
json = "{}"
# create an instance of V2DocumentContent from a JSON string
v2_document_content_instance = V2DocumentContent.from_json(json)
# print the JSON string representation of the object
print(V2DocumentContent.to_json())

# convert the object into a dict
v2_document_content_dict = v2_document_content_instance.to_dict()
# create an instance of V2DocumentContent from a dict
v2_document_content_from_dict = V2DocumentContent.from_dict(v2_document_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


