# pescheck-api-client

Official client library for the Pescheck API (v2), generated from the OpenAPI specification. Authenticate with OAuth2 client credentials and use the checks, profiles, screenings, webhooks and divisions endpoints. See https://github.com/pescheckit/pescheck-clients for installation and usage.


## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/pescheckit/pescheck-clients.git"
    }
  ],
  "require": {
    "pescheckit/pescheck-clients": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/pescheck-api-client/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: oauth2
$config = Pescheck\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Pescheck\Client\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$jwt_generation = new \Pescheck\Client\Model\JWTGeneration(); // \Pescheck\Client\Model\JWTGeneration

try {
    $result = $apiInstance->generateJWTToken2($jwt_generation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->generateJWTToken2: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.pescheck.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**generateJWTToken2**](docs/Api/AuthenticationApi.md#generatejwttoken2) | **POST** /api/v2/jwt/generate/ | 
*AuthenticationApi* | [**jwtCreate**](docs/Api/AuthenticationApi.md#jwtcreate) | **POST** /api/jwt/ | 
*AuthenticationApi* | [**jwtRefreshCreate**](docs/Api/AuthenticationApi.md#jwtrefreshcreate) | **POST** /api/jwt/refresh/ | 
*ChecksApi* | [**v2ChecksList**](docs/Api/ChecksApi.md#v2checkslist) | **GET** /api/v2/checks/ | 
*ChecksApi* | [**v2ChecksRetrieve**](docs/Api/ChecksApi.md#v2checksretrieve) | **GET** /api/v2/checks/{check_type}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsCreate**](docs/Api/DivisionsApi.md#v2organisationsdivisionscreate) | **POST** /api/v2/organisations/divisions/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsList**](docs/Api/DivisionsApi.md#v2organisationsdivisionslist) | **GET** /api/v2/organisations/divisions/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsPartialUpdate**](docs/Api/DivisionsApi.md#v2organisationsdivisionspartialupdate) | **PATCH** /api/v2/organisations/divisions/{id}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsRetrieve**](docs/Api/DivisionsApi.md#v2organisationsdivisionsretrieve) | **GET** /api/v2/organisations/divisions/{id}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsUpdate**](docs/Api/DivisionsApi.md#v2organisationsdivisionsupdate) | **PUT** /api/v2/organisations/divisions/{id}/ | 
*OAuthApi* | [**createOAuthApplication2**](docs/Api/OAuthApi.md#createoauthapplication2) | **POST** /api/v2/oauth/applications/ | 
*OAuthApi* | [**deleteOAuthApplication2**](docs/Api/OAuthApi.md#deleteoauthapplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ | 
*OAuthApi* | [**listOAuthApplications2**](docs/Api/OAuthApi.md#listoauthapplications2) | **GET** /api/v2/oauth/applications/list/ | 
*ProfilesApi* | [**v2ProfilesCreate**](docs/Api/ProfilesApi.md#v2profilescreate) | **POST** /api/v2/profiles/ | 
*ProfilesApi* | [**v2ProfilesDestroy**](docs/Api/ProfilesApi.md#v2profilesdestroy) | **DELETE** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesList**](docs/Api/ProfilesApi.md#v2profileslist) | **GET** /api/v2/profiles/ | 
*ProfilesApi* | [**v2ProfilesPartialUpdate**](docs/Api/ProfilesApi.md#v2profilespartialupdate) | **PATCH** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesRetrieve**](docs/Api/ProfilesApi.md#v2profilesretrieve) | **GET** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesUpdate**](docs/Api/ProfilesApi.md#v2profilesupdate) | **PUT** /api/v2/profiles/{id}/ | 
*ScreeningsApi* | [**v2ScreeningsCreate**](docs/Api/ScreeningsApi.md#v2screeningscreate) | **POST** /api/v2/screenings/ | 
*ScreeningsApi* | [**v2ScreeningsDocumentsList**](docs/Api/ScreeningsApi.md#v2screeningsdocumentslist) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
*ScreeningsApi* | [**v2ScreeningsList**](docs/Api/ScreeningsApi.md#v2screeningslist) | **GET** /api/v2/screenings/ | 
*ScreeningsApi* | [**v2ScreeningsRetrieve**](docs/Api/ScreeningsApi.md#v2screeningsretrieve) | **GET** /api/v2/screenings/{id}/ | 
*WebhooksApi* | [**createWebhook2**](docs/Api/WebhooksApi.md#createwebhook2) | **POST** /api/v2/webhooks/ | 
*WebhooksApi* | [**deleteWebhook2**](docs/Api/WebhooksApi.md#deletewebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ | 
*WebhooksApi* | [**listWebhooks2**](docs/Api/WebhooksApi.md#listwebhooks2) | **GET** /api/v2/webhooks/list/ | 
*WebhooksApi* | [**verifyWebhook2**](docs/Api/WebhooksApi.md#verifywebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ | 

## Models

- [CustomTokenObtainPair](docs/Model/CustomTokenObtainPair.md)
- [DivisionReadOnly](docs/Model/DivisionReadOnly.md)
- [DivisionWrite](docs/Model/DivisionWrite.md)
- [JWTGeneration](docs/Model/JWTGeneration.md)
- [JWTResponse](docs/Model/JWTResponse.md)
- [OAuthApplication](docs/Model/OAuthApplication.md)
- [OAuthApplicationResponse](docs/Model/OAuthApplicationResponse.md)
- [PaginatedDivisionReadOnlyList](docs/Model/PaginatedDivisionReadOnlyList.md)
- [PaginatedV2ProfileListItemList](docs/Model/PaginatedV2ProfileListItemList.md)
- [PaginatedV2ScreeningListItemList](docs/Model/PaginatedV2ScreeningListItemList.md)
- [PatchedDivisionWrite](docs/Model/PatchedDivisionWrite.md)
- [PatchedV2ProfilePartialUpdate](docs/Model/PatchedV2ProfilePartialUpdate.md)
- [TokenRefresh](docs/Model/TokenRefresh.md)
- [V2Candidate](docs/Model/V2Candidate.md)
- [V2CheckField](docs/Model/V2CheckField.md)
- [V2CheckInfo](docs/Model/V2CheckInfo.md)
- [V2Document](docs/Model/V2Document.md)
- [V2DocumentContent](docs/Model/V2DocumentContent.md)
- [V2Money](docs/Model/V2Money.md)
- [V2ProfileCheck](docs/Model/V2ProfileCheck.md)
- [V2ProfileCheckEntry](docs/Model/V2ProfileCheckEntry.md)
- [V2ProfileCreate](docs/Model/V2ProfileCreate.md)
- [V2ProfileDetail](docs/Model/V2ProfileDetail.md)
- [V2ProfileListItem](docs/Model/V2ProfileListItem.md)
- [V2ProfileUpdate](docs/Model/V2ProfileUpdate.md)
- [V2ProfileUpdateCheck](docs/Model/V2ProfileUpdateCheck.md)
- [V2ScreeningCheck](docs/Model/V2ScreeningCheck.md)
- [V2ScreeningCheckEntry](docs/Model/V2ScreeningCheckEntry.md)
- [V2ScreeningCheckListItem](docs/Model/V2ScreeningCheckListItem.md)
- [V2ScreeningCreate](docs/Model/V2ScreeningCreate.md)
- [V2ScreeningDetail](docs/Model/V2ScreeningDetail.md)
- [V2ScreeningDetailProfile](docs/Model/V2ScreeningDetailProfile.md)
- [V2ScreeningListItem](docs/Model/V2ScreeningListItem.md)
- [VerifyWebhook](docs/Model/VerifyWebhook.md)
- [Webhook](docs/Model/Webhook.md)
- [WebhookResponse](docs/Model/WebhookResponse.md)

## Authorization

Authentication schemes defined for the API:
### cookieAuth

- **Type**: API key
- **API key parameter name**: __Secure-sessionid
- **Location**: 


### jwtAuth

- **Type**: Bearer authentication (JWT)

### oauth2

- **Type**: `OAuth`
- **Flow**: `application`
- **Authorization URL**: ``
- **Scopes**: 
    - **read:api**: read groups
    - **create:api**: create groups
    - **update:api**: update groups

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
    - Package version: `0.0.5`
    - Generator version: `7.23.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
