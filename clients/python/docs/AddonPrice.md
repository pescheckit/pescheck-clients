# AddonPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** |  | 
**currency** | **str** | ISO 4217 code, e.g. EUR. | 

## Example

```python
from pescheck.models.addon_price import AddonPrice

# TODO update the JSON string below
json = "{}"
# create an instance of AddonPrice from a JSON string
addon_price_instance = AddonPrice.from_json(json)
# print the JSON string representation of the object
print(AddonPrice.to_json())

# convert the object into a dict
addon_price_dict = addon_price_instance.to_dict()
# create an instance of AddonPrice from a dict
addon_price_from_dict = AddonPrice.from_dict(addon_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


