

# Webhook

Serializer for webhook creation/update requests

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Descriptive name for this webhook |  |
|**url** | **URI** | HTTPS URL where webhook events will be sent |  |
|**events** | [**List&lt;EventsEnum&gt;**](#List&lt;EventsEnum&gt;) | List of events to subscribe to. Valid events: screening.status_changed, screening.archived, check.status_changed, package.created, package.updated, profile.created, profile.updated, division.created, division.updated, mail.sent, mail.delivered, mail.bounced, mail.opened, note.created, watchlist.result |  |
|**active** | **Boolean** | Whether the webhook is active |  [optional] |
|**divisionId** | **UUID** | Division ID to create webhook for (optional) |  [optional] |



## Enum: List&lt;EventsEnum&gt;

| Name | Value |
|---- | -----|
| SCREENING_STATUS_CHANGED | &quot;screening.status_changed&quot; |
| SCREENING_ARCHIVED | &quot;screening.archived&quot; |
| CHECK_STATUS_CHANGED | &quot;check.status_changed&quot; |
| PACKAGE_CREATED | &quot;package.created&quot; |
| PACKAGE_UPDATED | &quot;package.updated&quot; |
| PROFILE_CREATED | &quot;profile.created&quot; |
| PROFILE_UPDATED | &quot;profile.updated&quot; |
| DIVISION_CREATED | &quot;division.created&quot; |
| DIVISION_UPDATED | &quot;division.updated&quot; |
| MAIL_SENT | &quot;mail.sent&quot; |
| MAIL_DELIVERED | &quot;mail.delivered&quot; |
| MAIL_BOUNCED | &quot;mail.bounced&quot; |
| MAIL_OPENED | &quot;mail.opened&quot; |
| NOTE_CREATED | &quot;note.created&quot; |
| WATCHLIST_RESULT | &quot;watchlist.result&quot; |



