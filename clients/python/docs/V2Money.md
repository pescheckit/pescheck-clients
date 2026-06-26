# V2Money


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** |  | 
**currency** | **str** |  | 

## Example

```python
from pescheck.models.v2_money import V2Money

# TODO update the JSON string below
json = "{}"
# create an instance of V2Money from a JSON string
v2_money_instance = V2Money.from_json(json)
# print the JSON string representation of the object
print(V2Money.to_json())

# convert the object into a dict
v2_money_dict = v2_money_instance.to_dict()
# create an instance of V2Money from a dict
v2_money_from_dict = V2Money.from_dict(v2_money_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


