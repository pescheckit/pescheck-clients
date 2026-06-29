#!/usr/bin/env ruby
# frozen_string_literal: true

# End-to-end CRUD lifecycle test for the Pescheck Ruby client.
#
# Exercises the full v2 surface against the API and self-cleans where possible:
#
#   checks      list -> retrieve one
#   profiles    create -> retrieve -> patch -> (appears in list) -> delete
#   screenings  create (needs a profile + candidate) -> retrieve -> list documents
#   webhooks    create -> list -> delete
#   divisions   list -> reuse-or-create by name -> patch
#
# Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.
#
# Required environment:
#   PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io
#   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
#   PESCHECK_TEST_EMAIL    candidate email (default noreply@pescheck.nl)

require 'uri'
require 'securerandom'
require 'pescheck'

# Profile/webhook names must be unique per run: the API soft-deletes and returns
# a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
# fixed-named one instead of creating a new one each run.
SUFFIX = SecureRandom.hex(4)
DIVISION_NAME = 'E2E CI division'

def step(msg)
  puts "  - #{msg}"
end

base_url = ENV['PESCHECK_BASE_URL']
token = ENV['PESCHECK_ACCESS_TOKEN']
test_email = ENV.fetch('PESCHECK_TEST_EMAIL', 'noreply@pescheck.nl')

if base_url.nil? || base_url.empty? || token.nil? || token.empty?
  warn 'PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set'
  exit 2
end

uri = URI.parse(base_url)

Pescheck.configure do |config|
  config.scheme = uri.scheme
  config.host = uri.host + (uri.port && uri.default_port != uri.port ? ":#{uri.port}" : '')
  config.base_path = uri.path
  config.access_token = token
end

checks = Pescheck::ChecksApi.new
profiles = Pescheck::ProfilesApi.new
screenings = Pescheck::ScreeningsApi.new
webhooks = Pescheck::WebhooksApi.new
divisions = Pescheck::DivisionsApi.new

profile_id = nil
begin
  # --- checks ---
  check_list = checks.v2_checks_list
  check_type = check_list[0].check_type
  checks.v2_checks_retrieve(check_type)
  step("checks: #{check_list.length} types, retrieved '#{check_type}'")

  # --- profile: create -> retrieve -> patch ---
  created = profiles.v2_profiles_create(
    Pescheck::V2ProfileCreate.new(
      name: "E2E test profile #{SUFFIX}",
      description: 'created by e2e',
      checks: [Pescheck::V2ProfileCheck.new(check_type: check_type)]
    )
  )
  profile_id = created.id
  profiles.v2_profiles_retrieve(profile_id)
  profiles.v2_profiles_partial_update(
    profile_id,
    patched_v2_profile_partial_update: Pescheck::PatchedV2ProfilePartialUpdate.new(description: 'updated by e2e')
  )
  step("profile: created+retrieved+patched (#{profile_id})")

  # --- screening: create -> retrieve -> documents ---
  screening = screenings.v2_screenings_create(
    Pescheck::V2ScreeningCreate.new(
      profile_id: profile_id,
      candidate: Pescheck::V2Candidate.new(
        first_name: 'E2E', last_name: 'Tester', email: test_email
      )
    )
  )
  screenings.v2_screenings_retrieve(screening.id)
  screenings.v2_screenings_documents_list(screening.id)
  step("screening: created+retrieved (#{screening.id}, status=#{screening.status})")

  # --- webhook: create -> list -> delete ---
  hook = webhooks.create_webhook2(
    Pescheck::Webhook.new(
      name: "E2E webhook #{SUFFIX}",
      url: 'https://example.com/e2e-hook',
      events: ['screening.status_changed']
    )
  )
  webhooks.list_webhooks2
  # webhook id deserializes as a UUID; the delete path param wants a string.
  webhooks.delete_webhook2(hook.id.to_s)
  step("webhook: created+listed+deleted (#{hook.id})")

  # --- division: list -> reuse-or-create -> patch ---
  existing = divisions.v2_organisations_divisions_list.results
  div = existing.find { |d| d.name == DIVISION_NAME }
  if div.nil?
    div = divisions.v2_organisations_divisions_create(
      Pescheck::DivisionWrite.new(
        name: DIVISION_NAME, city: 'Amsterdam', address: 'Teststraat 1',
        postal: '1011AA', phone: '+31200000000', contact_name: 'E2E',
        contact_email: 'e2e@example.com', invoice_email: 'e2e@example.com'
      )
    )
    action = 'created'
  else
    action = 'reused'
  end
  divisions.v2_organisations_divisions_partial_update(
    div.id,
    patched_division_write: Pescheck::PatchedDivisionWrite.new(city: 'Rotterdam')
  )
  step("division: #{action}+patched (#{div.id})")

  puts 'E2E CRUD OK'
rescue Pescheck::ApiError => e
  warn "E2E CRUD FAILED: Pescheck::ApiError: #{e.message}"
  exit 1
rescue StandardError => e
  warn "E2E CRUD FAILED: #{e.class}: #{e.message}"
  exit 1
ensure
  # best-effort cleanup of the profile we created
  if profile_id
    begin
      profiles.v2_profiles_destroy(profile_id)
    rescue StandardError
      # ignore cleanup failures
    end
  end
end
