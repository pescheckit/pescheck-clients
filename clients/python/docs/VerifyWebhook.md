# VerifyWebhook

Body shape for POST /webhooks/{id}/verify/. The verification code is the one sent to the webhook URL when the webhook was created; the receiver POSTs it back here to confirm ownership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_code** | **str** | The verification code delivered to the webhook URL on creation. | 

## Example

```python
from pescheck.models.verify_webhook import VerifyWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyWebhook from a JSON string
verify_webhook_instance = VerifyWebhook.from_json(json)
# print the JSON string representation of the object
print(VerifyWebhook.to_json())

# convert the object into a dict
verify_webhook_dict = verify_webhook_instance.to_dict()
# create an instance of VerifyWebhook from a dict
verify_webhook_from_dict = VerifyWebhook.from_dict(verify_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


