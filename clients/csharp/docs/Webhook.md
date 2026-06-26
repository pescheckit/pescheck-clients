# Pescheck.Client.Model.Webhook
Serializer for webhook creation/update requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Descriptive name for this webhook | 
**Url** | **string** | HTTPS URL where webhook events will be sent | 
**Events** | **List&lt;Webhook.EventsEnum&gt;** | List of events to subscribe to. Valid events: check.status_changed, screening.status_changed, screening.archived, package.created, package.updated, profile.created, profile.updated, division.created, division.updated | 
**Active** | **bool** | Whether the webhook is active | [optional] [default to true]
**DivisionId** | **Guid** | Division ID to create webhook for (optional) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

