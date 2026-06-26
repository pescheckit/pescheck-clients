

# VerifyWebhook

Body shape for POST /webhooks/{id}/verify/. The verification code is the one sent to the webhook URL when the webhook was created; the receiver POSTs it back here to confirm ownership.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**verificationCode** | **String** | The verification code delivered to the webhook URL on creation. |  |



