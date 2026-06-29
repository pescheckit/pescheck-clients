# Pescheck::V2ProfileCheck

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_type** | **String** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;id2check&#x60; - id2check * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck |  |
| **config** | **Hash&lt;String, Object&gt;** |  | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ProfileCheck.new(
  check_type: null,
  config: null
)
```

