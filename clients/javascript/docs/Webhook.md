# PescheckApi.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Descriptive name for this webhook | 
**url** | **String** | HTTPS URL where webhook events will be sent | 
**events** | **[String]** | List of events to subscribe to. Valid events: screening.status_changed, screening.archived, check.status_changed, package.created, package.updated, profile.created, profile.updated, division.created, division.updated, mail.sent, mail.delivered, mail.bounced, mail.opened, note.created, watchlist.result | 
**active** | **Boolean** | Whether the webhook is active | [optional] [default to true]
**divisionId** | **String** | Division ID to create webhook for (optional) | [optional] 



## Enum: [EventsEnum]


* `screening.status_changed` (value: `"screening.status_changed"`)

* `screening.archived` (value: `"screening.archived"`)

* `check.status_changed` (value: `"check.status_changed"`)

* `package.created` (value: `"package.created"`)

* `package.updated` (value: `"package.updated"`)

* `profile.created` (value: `"profile.created"`)

* `profile.updated` (value: `"profile.updated"`)

* `division.created` (value: `"division.created"`)

* `division.updated` (value: `"division.updated"`)

* `mail.sent` (value: `"mail.sent"`)

* `mail.delivered` (value: `"mail.delivered"`)

* `mail.bounced` (value: `"mail.bounced"`)

* `mail.opened` (value: `"mail.opened"`)

* `note.created` (value: `"note.created"`)

* `watchlist.result` (value: `"watchlist.result"`)




