// Minimal end-to-end example for the Pescheck Go client.
//
// It lists the available check types via GET /api/v2/checks/ and is intended
// to run in CI as a smoke test. Configure it with two environment variables:
//
//	PESCHECK_BASE_URL      e.g. https://api.pescheck.io
//	PESCHECK_ACCESS_TOKEN  a bearer token
//
// On success it prints "E2E OK: <N> check types" and exits 0. On any error it
// prints to stderr and exits with a non-zero status.
package main

import (
	"context"
	"fmt"
	"os"

	pescheck "github.com/pescheckit/pescheck-clients/clients/go"
)

func main() {
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, "E2E FAILED:", err)
		os.Exit(1)
	}
}

func run() error {
	baseURL := os.Getenv("PESCHECK_BASE_URL")
	if baseURL == "" {
		return fmt.Errorf("PESCHECK_BASE_URL is not set")
	}
	token := os.Getenv("PESCHECK_ACCESS_TOKEN")
	if token == "" {
		return fmt.Errorf("PESCHECK_ACCESS_TOKEN is not set")
	}

	cfg := pescheck.NewConfiguration()
	cfg.Servers = pescheck.ServerConfigurations{{URL: baseURL}}
	client := pescheck.NewAPIClient(cfg)

	ctx := context.WithValue(context.Background(), pescheck.ContextAccessToken, token)

	checks, resp, err := client.ChecksAPI.V2ChecksList(ctx).Execute()
	if err != nil {
		if resp != nil {
			return fmt.Errorf("list check types: %w (status %s)", err, resp.Status)
		}
		return fmt.Errorf("list check types: %w", err)
	}

	fmt.Printf("E2E OK: %d check types\n", len(checks))
	return nil
}
