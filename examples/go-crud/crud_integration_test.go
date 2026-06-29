// Integration test for the Pescheck Go client.
//
// Mirrors crud_lifecycle.go but as a `go test` using testify, exercising the
// full v2 surface against the real API (no mocks). It self-cleans the profile
// it creates and reuses a single named division across runs (the division
// endpoint has no delete).
//
//	checks      list -> retrieve one
//	profiles    create -> retrieve -> patch -> (appears in list) -> delete
//	screenings  create (needs a profile + candidate) -> retrieve -> list documents
//	webhooks    create -> list -> delete
//	divisions   list -> reuse-or-create by name -> patch
//
// Env:
//
//	PESCHECK_BASE_URL      default https://api-staging.pescheck.io
//	PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token; test skips if unset
//	PESCHECK_TEST_EMAIL    candidate email (default noreply@pescheck.nl)
package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"os"
	"testing"

	pescheck "github.com/pescheckit/pescheck-clients/clients/go"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

// ciDivisionName is fixed: the division endpoint has no delete, so we reuse a
// single named division across runs instead of creating one each time.
const ciDivisionName = "E2E CI division"

// uniqueSuffix returns 8 hex chars. Profile and webhook names (and the webhook
// URL) must be unique per run: the API soft-deletes and returns a 500 on a
// duplicate name.
func uniqueSuffix(t *testing.T) string {
	t.Helper()
	b := make([]byte, 4)
	_, err := rand.Read(b)
	require.NoError(t, err, "crypto/rand")
	return hex.EncodeToString(b)
}

func TestCRUDLifecycle(t *testing.T) {
	token := os.Getenv("PESCHECK_ACCESS_TOKEN")
	if token == "" {
		t.Skip("PESCHECK_ACCESS_TOKEN not set")
	}
	baseURL := os.Getenv("PESCHECK_BASE_URL")
	if baseURL == "" {
		baseURL = "https://api-staging.pescheck.io"
	}
	testEmail := os.Getenv("PESCHECK_TEST_EMAIL")
	if testEmail == "" {
		testEmail = "noreply@pescheck.nl"
	}
	suffix := uniqueSuffix(t)

	cfg := pescheck.NewConfiguration()
	cfg.Servers = pescheck.ServerConfigurations{{URL: baseURL}}
	client := pescheck.NewAPIClient(cfg)

	ctx := context.WithValue(context.Background(), pescheck.ContextAccessToken, token)

	// Best-effort cleanup of the profile we create.
	var profileID string
	t.Cleanup(func() {
		if profileID != "" {
			_, _ = client.ProfilesAPI.V2ProfilesDestroy(ctx, profileID).Execute()
		}
	})

	// --- checks: list -> retrieve one ---
	checkList, _, err := client.ChecksAPI.V2ChecksList(ctx).Execute()
	require.NoError(t, err, "checks list")
	require.NotEmpty(t, checkList, "checks list should be non-empty")
	checkType := checkList[0].GetCheckType()
	_, _, err = client.ChecksAPI.V2ChecksRetrieve(ctx, checkType).Execute()
	require.NoError(t, err, "checks retrieve")

	// --- profile: create -> retrieve -> patch -> put -> appears in list ---
	profileName := fmt.Sprintf("E2E test profile %s", suffix)
	profileBody := pescheck.NewV2ProfileCreate(
		profileName,
		[]pescheck.V2ProfileCheck{*pescheck.NewV2ProfileCheck(checkType)},
	)
	profileBody.SetDescription("created by e2e")
	created, _, err := client.ProfilesAPI.V2ProfilesCreate(ctx).V2ProfileCreate(*profileBody).Execute()
	require.NoError(t, err, "profile create")
	profileID = created.GetId()
	require.NotEmpty(t, profileID, "created profile id")
	assert.Equal(t, profileName, created.GetName(), "created profile name")

	retrieved, _, err := client.ProfilesAPI.V2ProfilesRetrieve(ctx, profileID).Execute()
	require.NoError(t, err, "profile retrieve")
	assert.Equal(t, profileName, retrieved.GetName(), "retrieved profile name")

	profilePatch := pescheck.NewPatchedV2ProfilePartialUpdate()
	profilePatch.SetDescription("updated by e2e")
	patched, _, err := client.ProfilesAPI.V2ProfilesPartialUpdate(ctx, profileID).PatchedV2ProfilePartialUpdate(*profilePatch).Execute()
	require.NoError(t, err, "profile patch")
	assert.Equal(t, "updated by e2e", patched.GetDescription(), "patched description")

	// Full replace (PUT). Name and checks are required on V2ProfileUpdate.
	putName := fmt.Sprintf("E2E test profile %s put", suffix)
	profilePut := pescheck.NewV2ProfileUpdate(
		putName,
		[]pescheck.V2ProfileUpdateCheck{*pescheck.NewV2ProfileUpdateCheck(checkType)},
	)
	profilePut.SetDescription("replaced by e2e")
	put, _, err := client.ProfilesAPI.V2ProfilesUpdate(ctx, profileID).V2ProfileUpdate(*profilePut).Execute()
	require.NoError(t, err, "profile put")
	assert.Equal(t, putName, put.GetName(), "put profile name")
	assert.Equal(t, "replaced by e2e", put.GetDescription(), "put profile description")

	profiles, _, err := client.ProfilesAPI.V2ProfilesList(ctx).Execute()
	require.NoError(t, err, "profile list")
	found := false
	for _, p := range profiles.GetResults() {
		if p.GetId() == profileID {
			found = true
			break
		}
	}
	assert.True(t, found, "created profile should appear in list")

	// --- screening: create -> retrieve -> documents ---
	candidate := pescheck.NewV2Candidate("E2E", "Tester", testEmail)
	screeningBody := pescheck.NewV2ScreeningCreate(profileID, *candidate)
	screening, _, err := client.ScreeningsAPI.V2ScreeningsCreate(ctx).V2ScreeningCreate(*screeningBody).Execute()
	require.NoError(t, err, "screening create")
	screeningID := screening.GetId()
	require.NotEmpty(t, screeningID, "created screening id")
	assert.NotEmpty(t, screening.GetStatus(), "screening status")

	retrievedScreening, _, err := client.ScreeningsAPI.V2ScreeningsRetrieve(ctx, screeningID).Execute()
	require.NoError(t, err, "screening retrieve")
	gotCandidate := retrievedScreening.GetCandidate()
	assert.Equal(t, testEmail, gotCandidate.GetEmail(), "screening candidate email")
	assert.Equal(t, "E2E", gotCandidate.GetFirstName(), "screening candidate first name")
	assert.Equal(t, "Tester", gotCandidate.GetLastName(), "screening candidate last name")

	_, _, err = client.ScreeningsAPI.V2ScreeningsDocumentsList(ctx, screeningID).Execute()
	require.NoError(t, err, "screening documents")

	// list screenings: the one we created must be present (disable pagination
	// so a fresh screening isn't hidden on a later page).
	screenings, _, err := client.ScreeningsAPI.V2ScreeningsList(ctx).Paginate(false).Execute()
	require.NoError(t, err, "screening list")
	screeningResults := screenings.GetResults()
	require.NotEmpty(t, screeningResults, "screening list results")
	foundScreening := false
	for _, s := range screeningResults {
		if s.GetId() == screeningID {
			foundScreening = true
			break
		}
	}
	assert.True(t, foundScreening, "created screening should appear in list")

	// --- webhook: create -> list -> delete ---
	webhookName := fmt.Sprintf("E2E webhook %s", suffix)
	webhookURL := fmt.Sprintf("https://example.com/e2e-hook-%s", suffix)
	webhookBody := pescheck.NewWebhook(
		webhookName,
		webhookURL,
		[]string{"screening.status_changed"},
	)
	hook, _, err := client.WebhooksAPI.CreateWebhook2(ctx).Webhook(*webhookBody).Execute()
	require.NoError(t, err, "webhook create")
	hookID := hook.GetId()
	require.NotEmpty(t, hookID, "created webhook id")
	assert.Equal(t, webhookName, hook.GetName(), "webhook name")
	assert.Equal(t, webhookURL, hook.GetUrl(), "webhook url")
	// WebhookResponse.GetEvents() is typed interface{}; assert via string form.
	assert.Contains(t, fmt.Sprint(hook.GetEvents()), "screening.status_changed", "webhook events")

	_, _, err = client.WebhooksAPI.ListWebhooks2(ctx).Execute()
	require.NoError(t, err, "webhook list")

	_, err = client.WebhooksAPI.DeleteWebhook2(ctx, hookID).Execute()
	require.NoError(t, err, "webhook delete")

	// --- division: list -> reuse-or-create -> patch ---
	divList, _, err := client.DivisionsAPI.V2OrganisationsDivisionsList(ctx).Execute()
	require.NoError(t, err, "division list")
	var divID string
	for _, d := range divList.GetResults() {
		if d.GetName() == ciDivisionName {
			divID = d.GetId()
			break
		}
	}
	if divID == "" {
		divBody := pescheck.NewDivisionWrite(
			ciDivisionName, "Amsterdam", "Teststraat 1", "1011AA",
			"+31200000000", "E2E", "e2e@example.com", "e2e@example.com",
		)
		div, _, cerr := client.DivisionsAPI.V2OrganisationsDivisionsCreate(ctx).DivisionWrite(*divBody).Execute()
		require.NoError(t, cerr, "division create")
		divID = div.GetId()
	}
	require.NotEmpty(t, divID, "division id")

	// retrieve: returns DivisionReadOnly; name must match.
	divRead, _, err := client.DivisionsAPI.V2OrganisationsDivisionsRetrieve(ctx, divID).Execute()
	require.NoError(t, err, "division retrieve")
	assert.Equal(t, ciDivisionName, divRead.GetName(), "division name")
	assert.Equal(t, divID, divRead.GetId(), "division id round-trip")

	divPatch := pescheck.NewPatchedDivisionWrite()
	divPatch.SetCity("Rotterdam")
	patchedDiv, _, err := client.DivisionsAPI.V2OrganisationsDivisionsPartialUpdate(ctx, divID).PatchedDivisionWrite(*divPatch).Execute()
	require.NoError(t, err, "division patch")
	assert.Equal(t, "Rotterdam", patchedDiv.GetCity(), "patched division city")

	// Full replace (PUT). Keep the name so reuse-by-name still works next run.
	divPut := pescheck.NewDivisionWrite(
		ciDivisionName, "Utrecht", "Teststraat 1", "1011AA",
		"+31200000000", "E2E", "e2e@example.com", "e2e@example.com",
	)
	putDiv, _, err := client.DivisionsAPI.V2OrganisationsDivisionsUpdate(ctx, divID).DivisionWrite(*divPut).Execute()
	require.NoError(t, err, "division put")
	assert.Equal(t, "Utrecht", putDiv.GetCity(), "put division city")
	assert.Equal(t, ciDivisionName, putDiv.GetName(), "put division name")
}

// TestUnauthorized verifies that calling the API with an invalid access token
// returns an error and a 401 response. The *http.Response is still returned on
// HTTP-level errors (see the generated Execute methods).
func TestUnauthorized(t *testing.T) {
	if os.Getenv("PESCHECK_ACCESS_TOKEN") == "" {
		t.Skip("PESCHECK_ACCESS_TOKEN not set")
	}
	baseURL := os.Getenv("PESCHECK_BASE_URL")
	if baseURL == "" {
		baseURL = "https://api-staging.pescheck.io"
	}

	cfg := pescheck.NewConfiguration()
	cfg.Servers = pescheck.ServerConfigurations{{URL: baseURL}}
	client := pescheck.NewAPIClient(cfg)

	ctx := context.WithValue(context.Background(), pescheck.ContextAccessToken, "invalid")
	_, httpRes, err := client.ChecksAPI.V2ChecksList(ctx).Execute()
	require.Error(t, err, "expected error for invalid token")
	require.NotNil(t, httpRes, "expected http response on auth error")
	assert.Equal(t, 401, httpRes.StatusCode, "expected 401")
}

// TestNotFound verifies that retrieving a non-existent (but well-formed) profile
// id returns a 404.
func TestNotFound(t *testing.T) {
	token := os.Getenv("PESCHECK_ACCESS_TOKEN")
	if token == "" {
		t.Skip("PESCHECK_ACCESS_TOKEN not set")
	}
	baseURL := os.Getenv("PESCHECK_BASE_URL")
	if baseURL == "" {
		baseURL = "https://api-staging.pescheck.io"
	}

	cfg := pescheck.NewConfiguration()
	cfg.Servers = pescheck.ServerConfigurations{{URL: baseURL}}
	client := pescheck.NewAPIClient(cfg)

	ctx := context.WithValue(context.Background(), pescheck.ContextAccessToken, token)
	_, httpRes, err := client.ProfilesAPI.V2ProfilesRetrieve(ctx, randomUUID(t)).Execute()
	require.Error(t, err, "expected error for unknown profile")
	require.NotNil(t, httpRes, "expected http response on not-found")
	assert.Equal(t, 404, httpRes.StatusCode, "expected 404")
}

// randomUUID returns a random RFC-4122 v4 UUID string, so the not-found test
// hits a well-formed-but-unknown id (a malformed id could 400 instead of 404).
func randomUUID(t *testing.T) string {
	t.Helper()
	b := make([]byte, 16)
	_, err := rand.Read(b)
	require.NoError(t, err, "crypto/rand")
	b[6] = (b[6] & 0x0f) | 0x40 // version 4
	b[8] = (b[8] & 0x3f) | 0x80 // variant 10
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:16])
}
