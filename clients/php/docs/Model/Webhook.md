# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Descriptive name for this webhook |
**url** | **string** | HTTPS URL where webhook events will be sent |
**events** | **string[]** | List of events to subscribe to. Valid events: screening.status_changed, screening.archived, check.status_changed, package.created, package.updated, profile.created, profile.updated, division.created, division.updated, mail.sent, mail.delivered, mail.bounced, mail.opened, note.created, watchlist.result |
**active** | **bool** | Whether the webhook is active | [optional] [default to true]
**division_id** | **string** | Division ID to create webhook for (optional) | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
