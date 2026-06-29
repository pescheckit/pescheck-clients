// End-to-end CRUD lifecycle test for the Pescheck Go client.
//
// Exercises the full v2 surface against the API and self-cleans where possible:
//
//	checks      list -> retrieve one
//	profiles    create -> retrieve -> patch -> (appears in list) -> delete
//	screenings  create (needs a profile + candidate) -> retrieve -> list documents
//	webhooks    create -> list -> delete
//	divisions   list -> reuse-or-create by name -> patch
//
// Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.
//
// Env:
//
//	PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io
//	PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
//	PESCHECK_TEST_EMAIL    candidate email (default noreply@pescheck.nl)
package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"os"

	pescheck "github.com/pescheckit/pescheck-clients/clients/go"
)

// divisionName is fixed: the division endpoint has no delete, so we reuse a
// single named division across runs instead of creating one each time.
const divisionName = "E2E CI division"

func step(msg string) {
	fmt.Printf("  - %s\n", msg)
}

// randSuffix returns 8 hex chars. Profile and webhook names must be unique per
// run: the API soft-deletes and returns a 500 on a duplicate name.
func randSuffix() string {
	b := make([]byte, 4)
	if _, err := rand.Read(b); err != nil {
		// crypto/rand failing is fatal for a uniqueness guarantee.
		fmt.Fprintln(os.Stderr, "E2E CRUD FAILED: rand:", err)
		os.Exit(1)
	}
	return hex.EncodeToString(b)
}

func main() {
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, "E2E CRUD FAILED:", err)
		os.Exit(1)
	}
}

func run() (err error) {
	baseURL := os.Getenv("PESCHECK_BASE_URL")
	token := os.Getenv("PESCHECK_ACCESS_TOKEN")
	if baseURL == "" || token == "" {
		fmt.Fprintln(os.Stderr, "PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set")
		os.Exit(2)
	}
	testEmail := os.Getenv("PESCHECK_TEST_EMAIL")
	if testEmail == "" {
		testEmail = "noreply@pescheck.nl"
	}
	suffix := randSuffix()

	cfg := pescheck.NewConfiguration()
	cfg.Servers = pescheck.ServerConfigurations{{URL: baseURL}}
	client := pescheck.NewAPIClient(cfg)

	ctx := context.WithValue(context.Background(), pescheck.ContextAccessToken, token)

	// Best-effort cleanup of the profile we create.
	var profileID string
	defer func() {
		if profileID != "" {
			_, _ = client.ProfilesAPI.V2ProfilesDestroy(ctx, profileID).Execute()
		}
	}()

	// --- checks: list -> retrieve one ---
	checkList, _, err := client.ChecksAPI.V2ChecksList(ctx).Execute()
	if err != nil {
		return fmt.Errorf("checks list: %w", err)
	}
	if len(checkList) == 0 {
		return fmt.Errorf("checks list: empty")
	}
	checkType := checkList[0].GetCheckType()
	if _, _, err = client.ChecksAPI.V2ChecksRetrieve(ctx, checkType).Execute(); err != nil {
		return fmt.Errorf("checks retrieve: %w", err)
	}
	step(fmt.Sprintf("checks: %d types, retrieved '%s'", len(checkList), checkType))

	// --- profile: create -> retrieve -> patch ---
	profileBody := pescheck.NewV2ProfileCreate(
		fmt.Sprintf("E2E test profile %s", suffix),
		[]pescheck.V2ProfileCheck{*pescheck.NewV2ProfileCheck(checkType)},
	)
	profileBody.SetDescription("created by e2e")
	created, _, err := client.ProfilesAPI.V2ProfilesCreate(ctx).V2ProfileCreate(*profileBody).Execute()
	if err != nil {
		return fmt.Errorf("profile create: %w", err)
	}
	profileID = created.GetId()
	if _, _, err = client.ProfilesAPI.V2ProfilesRetrieve(ctx, profileID).Execute(); err != nil {
		return fmt.Errorf("profile retrieve: %w", err)
	}
	profilePatch := pescheck.NewPatchedV2ProfilePartialUpdate()
	profilePatch.SetDescription("updated by e2e")
	if _, _, err = client.ProfilesAPI.V2ProfilesPartialUpdate(ctx, profileID).PatchedV2ProfilePartialUpdate(*profilePatch).Execute(); err != nil {
		return fmt.Errorf("profile patch: %w", err)
	}
	step(fmt.Sprintf("profile: created+retrieved+patched (%s)", profileID))

	// --- screening: create -> retrieve -> documents ---
	candidate := pescheck.NewV2Candidate("E2E", "Tester", testEmail)
	screeningBody := pescheck.NewV2ScreeningCreate(profileID, *candidate)
	screening, _, err := client.ScreeningsAPI.V2ScreeningsCreate(ctx).V2ScreeningCreate(*screeningBody).Execute()
	if err != nil {
		return fmt.Errorf("screening create: %w", err)
	}
	screeningID := screening.GetId()
	if _, _, err = client.ScreeningsAPI.V2ScreeningsRetrieve(ctx, screeningID).Execute(); err != nil {
		return fmt.Errorf("screening retrieve: %w", err)
	}
	if _, _, err = client.ScreeningsAPI.V2ScreeningsDocumentsList(ctx, screeningID).Execute(); err != nil {
		return fmt.Errorf("screening documents: %w", err)
	}
	step(fmt.Sprintf("screening: created+retrieved (%s, status=%s)", screeningID, screening.GetStatus()))

	// --- webhook: create -> list -> delete ---
	webhookBody := pescheck.NewWebhook(
		fmt.Sprintf("E2E webhook %s", suffix),
		fmt.Sprintf("https://example.com/e2e-hook-%s", suffix),
		[]string{"screening.status_changed"},
	)
	hook, _, err := client.WebhooksAPI.CreateWebhook2(ctx).Webhook(*webhookBody).Execute()
	if err != nil {
		return fmt.Errorf("webhook create: %w", err)
	}
	if _, _, err = client.WebhooksAPI.ListWebhooks2(ctx).Execute(); err != nil {
		return fmt.Errorf("webhook list: %w", err)
	}
	if _, err = client.WebhooksAPI.DeleteWebhook2(ctx, hook.GetId()).Execute(); err != nil {
		return fmt.Errorf("webhook delete: %w", err)
	}
	step(fmt.Sprintf("webhook: created+listed+deleted (%s)", hook.GetId()))

	// --- division: list -> reuse-or-create -> patch ---
	divList, _, err := client.DivisionsAPI.V2OrganisationsDivisionsList(ctx).Execute()
	if err != nil {
		return fmt.Errorf("division list: %w", err)
	}
	var divID, action string
	for _, d := range divList.GetResults() {
		if d.GetName() == divisionName {
			divID = d.GetId()
			break
		}
	}
	if divID == "" {
		divBody := pescheck.NewDivisionWrite(
			divisionName, "Amsterdam", "Teststraat 1", "1011AA",
			"+31200000000", "E2E", "e2e@example.com", "e2e@example.com",
		)
		div, _, cerr := client.DivisionsAPI.V2OrganisationsDivisionsCreate(ctx).DivisionWrite(*divBody).Execute()
		if cerr != nil {
			return fmt.Errorf("division create: %w", cerr)
		}
		divID = div.GetId()
		action = "created"
	} else {
		action = "reused"
	}
	divPatch := pescheck.NewPatchedDivisionWrite()
	divPatch.SetCity("Rotterdam")
	if _, _, err = client.DivisionsAPI.V2OrganisationsDivisionsPartialUpdate(ctx, divID).PatchedDivisionWrite(*divPatch).Execute(); err != nil {
		return fmt.Errorf("division patch: %w", err)
	}
	step(fmt.Sprintf("division: %s+patched (%s)", action, divID))

	fmt.Println("E2E CRUD OK")
	return nil
}
