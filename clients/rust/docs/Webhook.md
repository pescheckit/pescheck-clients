# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Descriptive name for this webhook | 
**url** | **String** | HTTPS URL where webhook events will be sent | 
**events** | **Vec<Events>** | List of events to subscribe to. Valid events: screening.status_changed, screening.archived, check.status_changed, package.created, package.updated, profile.created, profile.updated, division.created, division.updated, mail.sent, mail.delivered, mail.bounced, mail.opened, note.created, watchlist.result (enum: screening.status_changed, screening.archived, check.status_changed, package.created, package.updated, profile.created, profile.updated, division.created, division.updated, mail.sent, mail.delivered, mail.bounced, mail.opened, note.created, watchlist.result) | 
**active** | Option<**bool**> | Whether the webhook is active | [optional][default to true]
**division_id** | Option<**uuid::Uuid**> | Division ID to create webhook for (optional) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


