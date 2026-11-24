// Contract test: the Go client against the mock API (see contract/README.md).
package contract

import (
	"context"
	"net/http"
	"os"
	"testing"

	pescheck "github.com/pescheckit/pescheck-clients/clients/go"
)

const (
	id    = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
	email = "contract@example.invalid"
)

// Host comes from PESCHECK_BASE_URL (the client's default server).
var api = pescheck.NewAPIClient(pescheck.NewConfiguration())

func authed() context.Context {
	return context.WithValue(context.Background(), pescheck.ContextAccessToken, os.Getenv("PESCHECK_ACCESS_TOKEN"))
}

// ok fails the test unless the call succeeded and returned a typed result.
func ok[T any](t *testing.T, name string, v *T, err error) {
	t.Helper()
	if err != nil {
		t.Fatalf("%s: %v", name, err)
	}
	if v == nil {
		t.Fatalf("%s: nil result", name)
	}
}

func TestChecks(t *testing.T) {
	ctx := authed()
	list, _, err := api.ChecksAPI.V2ChecksList(ctx).Execute()
	ok(t, "list checks", &list, err)
	check, _, err := api.ChecksAPI.V2ChecksRetrieve(ctx, "id2check").Execute()
	ok(t, "retrieve check", check, err)
}

func TestAddons(t *testing.T) {
	ctx := authed()
	list, _, err := api.AddOnsAPI.V2OrganisationsAddonsList(ctx).Execute()
	ok(t, "list add-ons", &list, err)
	addon, _, err := api.AddOnsAPI.V2OrganisationsAddonsRetrieve(ctx, "api_access").Execute()
	ok(t, "retrieve add-on", addon, err)
}

func TestProfiles(t *testing.T) {
	ctx := authed()
	body := pescheck.NewV2ProfileCreate("Contract test", []pescheck.V2ProfileCheck{*pescheck.NewV2ProfileCheck("id2check")})
	created, _, err := api.ProfilesAPI.V2ProfilesCreate(ctx).V2ProfileCreate(*body).Execute()
	ok(t, "create profile", created, err)
	list, _, err := api.ProfilesAPI.V2ProfilesList(ctx).Execute()
	ok(t, "list profiles", list, err)
	profile, _, err := api.ProfilesAPI.V2ProfilesRetrieve(ctx, id).Execute()
	ok(t, "retrieve profile", profile, err)
	patch := pescheck.NewPatchedV2ProfilePartialUpdate()
	patch.SetDescription("updated")
	patched, _, err := api.ProfilesAPI.V2ProfilesPartialUpdate(ctx, id).PatchedV2ProfilePartialUpdate(*patch).Execute()
	ok(t, "partially update profile", patched, err)
}

func TestScreenings(t *testing.T) {
	ctx := authed()
	body := pescheck.NewV2ScreeningCreate(id, *pescheck.NewV2Candidate("Contract", "Test", email))
	created, _, err := api.ScreeningsAPI.V2ScreeningsCreate(ctx).V2ScreeningCreate(*body).Execute()
	ok(t, "create screening", created, err)
	list, _, err := api.ScreeningsAPI.V2ScreeningsList(ctx).Execute()
	ok(t, "list screenings", list, err)
	screening, _, err := api.ScreeningsAPI.V2ScreeningsRetrieve(ctx, id).Execute()
	ok(t, "retrieve screening", screening, err)
	docs, _, err := api.ScreeningsAPI.V2ScreeningsDocumentsList(ctx, id).Execute()
	ok(t, "list screening documents", &docs, err)
}

func TestWebhooks(t *testing.T) {
	ctx := authed()
	body := pescheck.NewWebhook("Contract test", "https://example.invalid/hook", []string{"screening.status_changed"})
	created, _, err := api.WebhooksAPI.CreateWebhook2(ctx).Webhook(*body).Execute()
	ok(t, "create webhook", created, err)
	list, _, err := api.WebhooksAPI.ListWebhooks2(ctx).Execute()
	ok(t, "list webhooks", &list, err)
}

func TestDivisions(t *testing.T) {
	ctx := authed()
	body := pescheck.NewDivisionWrite("Contract test", "Utrecht", "Teststraat 1", "1234AB", "0301234567", "Contract Test", email, email)
	created, _, err := api.DivisionsAPI.V2OrganisationsDivisionsCreate(ctx).DivisionWrite(*body).Execute()
	ok(t, "create division", created, err)
	list, _, err := api.DivisionsAPI.V2OrganisationsDivisionsList(ctx).Execute()
	ok(t, "list divisions", list, err)
}

func TestUnauthorized(t *testing.T) {
	_, res, err := api.ProfilesAPI.V2ProfilesList(context.Background()).Execute()
	if err == nil {
		t.Fatal("list profiles without token: expected an error")
	}
	if res == nil || res.StatusCode != http.StatusUnauthorized {
		t.Fatalf("list profiles without token: want HTTP 401, got %v (%v)", res, err)
	}
}
