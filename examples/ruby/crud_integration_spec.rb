# frozen_string_literal: true

# RSpec integration test for the Pescheck Ruby client.
#
# Runs the full v2 CRUD lifecycle against a real Pescheck API using an OAuth2
# bearer token supplied via PESCHECK_ACCESS_TOKEN. There are NO mocks: every
# expectation is checked against a live response.
#
# Environment:
#   PESCHECK_BASE_URL      API base URL (default https://api-staging.pescheck.io)
#   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token (required)
#   PESCHECK_TEST_EMAIL    candidate email (default noreply@pescheck.nl)
#
# Without PESCHECK_ACCESS_TOKEN the whole suite is skipped (green, exit 0).
#
# Run:
#   cd examples/ruby
#   rspec -I../../clients/ruby/lib crud_integration_spec.rb

require 'uri'
require 'securerandom'
require 'pescheck-client'

# The lifecycle steps build on each other (a screening needs the profile created
# a step earlier), so they must run in source order rather than RSpec's default
# random order.
RSpec.describe 'Pescheck client CRUD lifecycle (live API)', order: :defined do
  # Profile/webhook names must be unique per run: the API soft-deletes and
  # returns a 500 on a duplicate name, so we suffix names and the webhook URL.
  # The division has no delete endpoint, so we reuse a fixed-named one.
  SUFFIX = SecureRandom.hex(4)
  DIVISION_NAME = 'E2E CI division'

  before(:all) do
    skip 'PESCHECK_ACCESS_TOKEN not set' if ENV['PESCHECK_ACCESS_TOKEN'].to_s.empty?

    base_url = ENV.fetch('PESCHECK_BASE_URL', 'https://api-staging.pescheck.io')
    @test_email = ENV.fetch('PESCHECK_TEST_EMAIL', 'noreply@pescheck.nl')
    uri = URI.parse(base_url)

    Pescheck.configure do |config|
      config.scheme = uri.scheme
      config.host = uri.host + (uri.port && uri.default_port != uri.port ? ":#{uri.port}" : '')
      config.base_path = uri.path
      config.access_token = ENV['PESCHECK_ACCESS_TOKEN']
    end

    @checks = Pescheck::ChecksApi.new
    @profiles = Pescheck::ProfilesApi.new
    @screenings = Pescheck::ScreeningsApi.new
    @webhooks = Pescheck::WebhooksApi.new
    @divisions = Pescheck::DivisionsApi.new

    # Shared mutable state. Instance variables set inside an example are not
    # visible to later examples or to after(:all), but mutating a hash created
    # here (and shared by reference with every example) is.
    @state = {}
  end

  after(:all) do
    # best-effort cleanup of the profile we created
    if @state && @state[:profile_id]
      begin
        @profiles.v2_profiles_destroy(@state[:profile_id])
      rescue StandardError
        # ignore cleanup failures
      end
    end
  end

  it 'lists check types and retrieves one' do
    check_list = @checks.v2_checks_list
    expect(check_list).not_to be_empty

    check_type = check_list[0].check_type
    @state[:check_type] = check_type

    retrieved = @checks.v2_checks_retrieve(check_type)
    expect(retrieved.check_type).to eq(check_type)
  end

  it 'creates, retrieves, patches and lists a profile' do
    created = @profiles.v2_profiles_create(
      Pescheck::V2ProfileCreate.new(
        name: "E2E test profile #{SUFFIX}",
        description: 'created by e2e',
        checks: [Pescheck::V2ProfileCheck.new(check_type: @state[:check_type])]
      )
    )
    @state[:profile_id] = created.id
    expect(@state[:profile_id]).not_to be_nil

    retrieved = @profiles.v2_profiles_retrieve(@state[:profile_id])
    expect(retrieved.id).to eq(@state[:profile_id])
    expect(retrieved.name).to eq("E2E test profile #{SUFFIX}")

    patched = @profiles.v2_profiles_partial_update(
      @state[:profile_id],
      patched_v2_profile_partial_update: Pescheck::PatchedV2ProfilePartialUpdate.new(description: 'updated by e2e')
    )
    expect(patched.description).to eq('updated by e2e')

    listed = @profiles.v2_profiles_list
    ids = (listed.respond_to?(:results) ? listed.results : listed).map(&:id)
    expect(ids).to include(@state[:profile_id])
  end

  it 'fully updates a profile via PUT' do
    # PUT replaces the whole profile: existing checks must be referenced by their
    # profile_check_id (the check entry's id), otherwise the API rejects a second
    # check of the same type.
    current = @profiles.v2_profiles_retrieve(@state[:profile_id])
    checks = current.checks.map do |entry|
      Pescheck::V2ProfileUpdateCheck.new(check_type: entry.check_type, profile_check_id: entry.id)
    end

    new_name = "E2E renamed profile #{SUFFIX}"
    updated = @profiles.v2_profiles_update(
      @state[:profile_id],
      Pescheck::V2ProfileUpdate.new(
        name: new_name,
        description: 'put-updated by e2e',
        checks: checks
      )
    )
    expect(updated.name).to eq(new_name)
    expect(updated.description).to eq('put-updated by e2e')

    retrieved = @profiles.v2_profiles_retrieve(@state[:profile_id])
    expect(retrieved.name).to eq(new_name)
  end

  it 'creates a screening, retrieves it and lists its documents' do
    screening = @screenings.v2_screenings_create(
      Pescheck::V2ScreeningCreate.new(
        profile_id: @state[:profile_id],
        candidate: Pescheck::V2Candidate.new(
          first_name: 'E2E', last_name: 'Tester', email: @test_email
        )
      )
    )
    expect(screening.id).not_to be_nil
    expect(screening.status).not_to be_nil
    @state[:screening_id] = screening.id

    retrieved = @screenings.v2_screenings_retrieve(screening.id)
    expect(retrieved.id).to eq(screening.id)
    expect(retrieved.candidate.email).to eq(@test_email)
    expect(retrieved.candidate.first_name).to eq('E2E')

    # documents list should return without error (may be empty)
    expect { @screenings.v2_screenings_documents_list(screening.id) }.not_to raise_error
  end

  it 'lists screenings and finds the one just created' do
    listed = @screenings.v2_screenings_list
    items = listed.respond_to?(:results) ? listed.results : listed
    expect(items).not_to be_empty
    expect(items.map(&:id)).to include(@state[:screening_id])
  end

  it 'creates, lists and deletes a webhook' do
    hook = @webhooks.create_webhook2(
      Pescheck::Webhook.new(
        name: "E2E webhook #{SUFFIX}",
        url: "https://example.com/e2e-hook-#{SUFFIX}",
        events: ['screening.status_changed']
      )
    )
    expect(hook.id).not_to be_nil
    expect(hook.url).to eq("https://example.com/e2e-hook-#{SUFFIX}")
    expect(hook.events).to include('screening.status_changed')

    listed = @webhooks.list_webhooks2
    expect(listed).not_to be_nil

    # webhook id deserializes as a UUID; the delete path param wants a string.
    expect { @webhooks.delete_webhook2(hook.id.to_s) }.not_to raise_error
  end

  it 'lists divisions, reuses-or-creates one and patches it' do
    existing = @divisions.v2_organisations_divisions_list.results
    div = existing.find { |d| d.name == DIVISION_NAME }

    if div.nil?
      div = @divisions.v2_organisations_divisions_create(
        Pescheck::DivisionWrite.new(
          name: DIVISION_NAME, city: 'Amsterdam', address: 'Teststraat 1',
          postal: '1011AA', phone: '+31200000000', contact_name: 'E2E',
          contact_email: 'e2e@example.com', invoice_email: 'e2e@example.com'
        )
      )
    end
    expect(div.id).not_to be_nil
    expect(div.name).to eq(DIVISION_NAME)
    @state[:division_id] = div.id

    patched = @divisions.v2_organisations_divisions_partial_update(
      div.id,
      patched_division_write: Pescheck::PatchedDivisionWrite.new(city: 'Rotterdam')
    )
    expect(patched.city).to eq('Rotterdam')
  end

  it 'retrieves a division by id' do
    retrieved = @divisions.v2_organisations_divisions_retrieve(@state[:division_id])
    expect(retrieved.id).to eq(@state[:division_id])
    expect(retrieved.name).to eq(DIVISION_NAME)
    expect(retrieved.city).to eq('Rotterdam')
  end

  it 'fully updates a division via PUT' do
    updated = @divisions.v2_organisations_divisions_update(
      @state[:division_id],
      Pescheck::DivisionWrite.new(
        name: DIVISION_NAME, city: 'Utrecht', address: 'Teststraat 2',
        postal: '3511AA', phone: '+31300000000', contact_name: 'E2E PUT',
        contact_email: 'e2e-put@example.com', invoice_email: 'e2e-put@example.com'
      )
    )
    expect(updated.city).to eq('Utrecht')
    expect(updated.address).to eq('Teststraat 2')
    expect(updated.contact_name).to eq('E2E PUT')

    retrieved = @divisions.v2_organisations_divisions_retrieve(@state[:division_id])
    expect(retrieved.city).to eq('Utrecht')
  end
end

# Negative cases need a configured client but not the CRUD lifecycle state, so
# they live in their own describe block.
RSpec.describe 'Pescheck client error handling (live API)', order: :defined do
  before(:all) do
    skip 'PESCHECK_ACCESS_TOKEN not set' if ENV['PESCHECK_ACCESS_TOKEN'].to_s.empty?

    @base_url = ENV.fetch('PESCHECK_BASE_URL', 'https://api-staging.pescheck.io')
    uri = URI.parse(@base_url)

    Pescheck.configure do |config|
      config.scheme = uri.scheme
      config.host = uri.host + (uri.port && uri.default_port != uri.port ? ":#{uri.port}" : '')
      config.base_path = uri.path
      config.access_token = ENV['PESCHECK_ACCESS_TOKEN']
    end
  end

  it 'raises a 401 ApiError when the access token is invalid' do
    uri = URI.parse(@base_url)
    bogus = Pescheck::Configuration.new.tap do |config|
      config.scheme = uri.scheme
      config.host = uri.host + (uri.port && uri.default_port != uri.port ? ":#{uri.port}" : '')
      config.base_path = uri.path
      config.access_token = 'bogus-invalid-token'
    end
    checks = Pescheck::ChecksApi.new(Pescheck::ApiClient.new(bogus))

    expect { checks.v2_checks_list }.to raise_error(Pescheck::ApiError) do |error|
      expect(error.code).to eq(401)
    end
  end

  it 'raises a 404 ApiError when retrieving a non-existent profile' do
    profiles = Pescheck::ProfilesApi.new
    missing_id = SecureRandom.uuid

    expect { profiles.v2_profiles_retrieve(missing_id) }.to raise_error(Pescheck::ApiError) do |error|
      expect(error.code).to eq(404)
    end
  end
end
