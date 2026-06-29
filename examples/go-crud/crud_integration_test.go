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

	// --- profile: create -> retrieve -> patch -> appears in list ---
	profileBody := pescheck.NewV2ProfileCreate(
		fmt.Sprintf("E2E test profile %s", suffix),
		[]pescheck.V2ProfileCheck{*pescheck.NewV2ProfileCheck(checkType)},
	)
	profileBody.SetDescription("created by e2e")
	created, _, err := client.ProfilesAPI.V2ProfilesCreate(ctx).V2ProfileCreate(*profileBody).Execute()
	require.NoError(t, err, "profile create")
	profileID = created.GetId()
	require.NotEmpty(t, profileID, "created profile id")

	_, _, err = client.ProfilesAPI.V2ProfilesRetrieve(ctx, profileID).Execute()
	require.NoError(t, err, "profile retrieve")

	profilePatch := pescheck.NewPatchedV2ProfilePartialUpdate()
	profilePatch.SetDescription("updated by e2e")
	patched, _, err := client.ProfilesAPI.V2ProfilesPartialUpdate(ctx, profileID).PatchedV2ProfilePartialUpdate(*profilePatch).Execute()
	require.NoError(t, err, "profile patch")
	assert.Equal(t, "updated by e2e", patched.GetDescription(), "patched description")

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

	_, _, err = client.ScreeningsAPI.V2ScreeningsRetrieve(ctx, screeningID).Execute()
	require.NoError(t, err, "screening retrieve")

	_, _, err = client.ScreeningsAPI.V2ScreeningsDocumentsList(ctx, screeningID).Execute()
	require.NoError(t, err, "screening documents")

	// --- webhook: create -> list -> delete ---
	webhookBody := pescheck.NewWebhook(
		fmt.Sprintf("E2E webhook %s", suffix),
		fmt.Sprintf("https://example.com/e2e-hook-%s", suffix),
		[]string{"screening.status_changed"},
	)
	hook, _, err := client.WebhooksAPI.CreateWebhook2(ctx).Webhook(*webhookBody).Execute()
	require.NoError(t, err, "webhook create")
	hookID := hook.GetId()
	require.NotEmpty(t, hookID, "created webhook id")

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

	divPatch := pescheck.NewPatchedDivisionWrite()
	divPatch.SetCity("Rotterdam")
	_, _, err = client.DivisionsAPI.V2OrganisationsDivisionsPartialUpdate(ctx, divID).PatchedDivisionWrite(*divPatch).Execute()
	require.NoError(t, err, "division patch")
}
