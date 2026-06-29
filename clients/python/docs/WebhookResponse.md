# WebhookResponse

Serializer for webhook responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [readonly] 
**name** | **str** |  | 
**url** | **str** |  | 
**events** | **object** |  | [readonly] 
**active** | **bool** |  | [optional] 
**verified** | **bool** |  | [readonly] 
**token** | **str** |  | [optional] [readonly] 
**organisation_name** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [readonly] 
**updated_at** | **datetime** |  | [readonly] 
**verification_sent** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 

## Example

```python
from pescheck.models.webhook_response import WebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookResponse from a JSON string
webhook_response_instance = WebhookResponse.from_json(json)
# print the JSON string representation of the object
print(WebhookResponse.to_json())

# convert the object into a dict
webhook_response_dict = webhook_response_instance.to_dict()
# create an instance of WebhookResponse from a dict
webhook_response_from_dict = WebhookResponse.from_dict(webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


