# Pescheck.Client.Model.VerifyWebhook
Body shape for POST /webhooks/{id}/verify/. The verification code is the one sent to the webhook URL when the webhook was created; the receiver POSTs it back here to confirm ownership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VerificationCode** | **string** | The verification code delivered to the webhook URL on creation. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

