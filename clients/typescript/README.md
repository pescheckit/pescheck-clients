# @pescheckit/api-client@0.0.1

A TypeScript SDK client for the api.pescheck.io API.

## Usage

First, install the SDK from npm.

```bash
npm install @pescheckit/api-client --save
```

Next, try it out.


```ts
import {
  Configuration,
  AuthenticationApi,
} from '@pescheckit/api-client';
import type { GenerateJWTToken2Request } from '@pescheckit/api-client';

async function example() {
  console.log("🚀 Testing @pescheckit/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // JWTGeneration
    jWTGeneration: ...,
  } satisfies GenerateJWTToken2Request;

  try {
    const data = await api.generateJWTToken2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.pescheck.io*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AuthenticationApi* | [**generateJWTToken2**](docs/AuthenticationApi.md#generatejwttoken2) | **POST** /api/v2/jwt/generate/ | 
*AuthenticationApi* | [**jwtCreate**](docs/AuthenticationApi.md#jwtcreate) | **POST** /api/jwt/ | 
*AuthenticationApi* | [**jwtRefreshCreate**](docs/AuthenticationApi.md#jwtrefreshcreate) | **POST** /api/jwt/refresh/ | 
*ChecksApi* | [**v2ChecksList**](docs/ChecksApi.md#v2checkslist) | **GET** /api/v2/checks/ | 
*ChecksApi* | [**v2ChecksRetrieve**](docs/ChecksApi.md#v2checksretrieve) | **GET** /api/v2/checks/{check_type}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsCreate**](docs/DivisionsApi.md#v2organisationsdivisionscreate) | **POST** /api/v2/organisations/divisions/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsList**](docs/DivisionsApi.md#v2organisationsdivisionslist) | **GET** /api/v2/organisations/divisions/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsPartialUpdate**](docs/DivisionsApi.md#v2organisationsdivisionspartialupdate) | **PATCH** /api/v2/organisations/divisions/{id}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsRetrieve**](docs/DivisionsApi.md#v2organisationsdivisionsretrieve) | **GET** /api/v2/organisations/divisions/{id}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsUpdate**](docs/DivisionsApi.md#v2organisationsdivisionsupdate) | **PUT** /api/v2/organisations/divisions/{id}/ | 
*OAuthApi* | [**createOAuthApplication2**](docs/OAuthApi.md#createoauthapplication2) | **POST** /api/v2/oauth/applications/ | 
*OAuthApi* | [**deleteOAuthApplication2**](docs/OAuthApi.md#deleteoauthapplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ | 
*OAuthApi* | [**listOAuthApplications2**](docs/OAuthApi.md#listoauthapplications2) | **GET** /api/v2/oauth/applications/list/ | 
*ProfilesApi* | [**v2ProfilesCreate**](docs/ProfilesApi.md#v2profilescreate) | **POST** /api/v2/profiles/ | 
*ProfilesApi* | [**v2ProfilesDestroy**](docs/ProfilesApi.md#v2profilesdestroy) | **DELETE** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesList**](docs/ProfilesApi.md#v2profileslist) | **GET** /api/v2/profiles/ | 
*ProfilesApi* | [**v2ProfilesPartialUpdate**](docs/ProfilesApi.md#v2profilespartialupdate) | **PATCH** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesRetrieve**](docs/ProfilesApi.md#v2profilesretrieve) | **GET** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesUpdate**](docs/ProfilesApi.md#v2profilesupdate) | **PUT** /api/v2/profiles/{id}/ | 
*ScreeningsApi* | [**v2ScreeningsCreate**](docs/ScreeningsApi.md#v2screeningscreate) | **POST** /api/v2/screenings/ | 
*ScreeningsApi* | [**v2ScreeningsDocumentsList**](docs/ScreeningsApi.md#v2screeningsdocumentslist) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
*ScreeningsApi* | [**v2ScreeningsList**](docs/ScreeningsApi.md#v2screeningslist) | **GET** /api/v2/screenings/ | 
*ScreeningsApi* | [**v2ScreeningsRetrieve**](docs/ScreeningsApi.md#v2screeningsretrieve) | **GET** /api/v2/screenings/{id}/ | 
*WebhooksApi* | [**createWebhook2**](docs/WebhooksApi.md#createwebhook2) | **POST** /api/v2/webhooks/ | 
*WebhooksApi* | [**deleteWebhook2**](docs/WebhooksApi.md#deletewebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ | 
*WebhooksApi* | [**listWebhooks2**](docs/WebhooksApi.md#listwebhooks2) | **GET** /api/v2/webhooks/list/ | 
*WebhooksApi* | [**verifyWebhook2**](docs/WebhooksApi.md#verifywebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ | 


### Models

- [CustomTokenObtainPair](docs/CustomTokenObtainPair.md)
- [DivisionReadOnly](docs/DivisionReadOnly.md)
- [DivisionWrite](docs/DivisionWrite.md)
- [JWTGeneration](docs/JWTGeneration.md)
- [JWTResponse](docs/JWTResponse.md)
- [OAuthApplication](docs/OAuthApplication.md)
- [OAuthApplicationResponse](docs/OAuthApplicationResponse.md)
- [PaginatedDivisionReadOnlyList](docs/PaginatedDivisionReadOnlyList.md)
- [PaginatedV2ProfileListItemList](docs/PaginatedV2ProfileListItemList.md)
- [PaginatedV2ScreeningListItemList](docs/PaginatedV2ScreeningListItemList.md)
- [PatchedDivisionWrite](docs/PatchedDivisionWrite.md)
- [PatchedV2ProfilePartialUpdate](docs/PatchedV2ProfilePartialUpdate.md)
- [TokenRefresh](docs/TokenRefresh.md)
- [V2Candidate](docs/V2Candidate.md)
- [V2CheckField](docs/V2CheckField.md)
- [V2CheckInfo](docs/V2CheckInfo.md)
- [V2Document](docs/V2Document.md)
- [V2DocumentContent](docs/V2DocumentContent.md)
- [V2Money](docs/V2Money.md)
- [V2ProfileCheck](docs/V2ProfileCheck.md)
- [V2ProfileCheckEntry](docs/V2ProfileCheckEntry.md)
- [V2ProfileCreate](docs/V2ProfileCreate.md)
- [V2ProfileDetail](docs/V2ProfileDetail.md)
- [V2ProfileListItem](docs/V2ProfileListItem.md)
- [V2ProfileUpdate](docs/V2ProfileUpdate.md)
- [V2ProfileUpdateCheck](docs/V2ProfileUpdateCheck.md)
- [V2ScreeningCheck](docs/V2ScreeningCheck.md)
- [V2ScreeningCheckEntry](docs/V2ScreeningCheckEntry.md)
- [V2ScreeningCheckListItem](docs/V2ScreeningCheckListItem.md)
- [V2ScreeningCreate](docs/V2ScreeningCreate.md)
- [V2ScreeningDetail](docs/V2ScreeningDetail.md)
- [V2ScreeningDetailProfile](docs/V2ScreeningDetailProfile.md)
- [V2ScreeningListItem](docs/V2ScreeningListItem.md)
- [VerifyWebhook](docs/VerifyWebhook.md)
- [Webhook](docs/Webhook.md)
- [WebhookResponse](docs/WebhookResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="cookieAuth"></a>
#### cookieAuth


- **Type**: API key
- **API key parameter name**: `__Secure-sessionid`
- **Location**: 
<a id="jwtAuth"></a>
#### jwtAuth


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="oauth2-application"></a>
#### oauth2 application


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - `read:api`: read groups
  - `create:api`: create groups
  - `update:api`: update groups

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
- Package version: `0.0.1`
- Generator version: `7.23.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
