# PescheckApi.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Descriptive name for this webhook | 
**url** | **String** | HTTPS URL where webhook events will be sent | 
**events** | **[String]** | List of events to subscribe to. Valid events: check.status_changed, screening.status_changed, screening.archived, package.created, package.updated, profile.created, profile.updated, division.created, division.updated | 
**active** | **Boolean** | Whether the webhook is active | [optional] [default to true]
**divisionId** | **String** | Division ID to create webhook for (optional) | [optional] 



## Enum: [EventsEnum]


* `check.status_changed` (value: `"check.status_changed"`)

* `screening.status_changed` (value: `"screening.status_changed"`)

* `screening.archived` (value: `"screening.archived"`)

* `package.created` (value: `"package.created"`)

* `package.updated` (value: `"package.updated"`)

* `profile.created` (value: `"profile.created"`)

* `profile.updated` (value: `"profile.updated"`)

* `division.created` (value: `"division.created"`)

* `division.updated` (value: `"division.updated"`)




