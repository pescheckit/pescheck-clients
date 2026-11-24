# frozen_string_literal: true

# Contract test: the Ruby client against the mock API (see contract/README.md).
#
#   cd contract/ruby && rspec -I ../../clients/ruby/lib contract_spec.rb

require 'pescheck-client'

ID = '3fa85f64-5717-4562-b3fc-2c963f66afa6'
EMAIL = 'contract@example.invalid'

def client(token = ENV.fetch('PESCHECK_ACCESS_TOKEN'))
  config = Pescheck::Configuration.new # host from PESCHECK_BASE_URL
  config.access_token = token
  Pescheck::ApiClient.new(config)
end

RSpec.describe 'Pescheck Ruby client contract' do
  let(:api) { client }

  it 'checks' do
    checks = Pescheck::ChecksApi.new(api)
    expect(checks.v2_checks_list).to all(be_a(Pescheck::V2CheckInfo))
    expect(checks.v2_checks_retrieve('id2check')).to be_a(Pescheck::V2CheckInfo)
  end

  it 'add-ons' do
    addons = Pescheck::AddOnsApi.new(api)
    expect(addons.v2_organisations_addons_list).to all(be_a(Pescheck::OrganisationAddon))
    expect(addons.v2_organisations_addons_retrieve('api_access')).to be_a(Pescheck::OrganisationAddon)
  end

  it 'profiles' do
    profiles = Pescheck::ProfilesApi.new(api)
    created = profiles.v2_profiles_create(
      Pescheck::V2ProfileCreate.new(
        name: 'Contract test',
        checks: [Pescheck::V2ProfileCheck.new(check_type: 'id2check')]
      )
    )
    expect(created).to be_a(Pescheck::V2ProfileDetail)
    expect(profiles.v2_profiles_list).to be_a(Pescheck::PaginatedV2ProfileListItemList)
    expect(profiles.v2_profiles_retrieve(ID)).to be_a(Pescheck::V2ProfileDetail)
    updated = profiles.v2_profiles_partial_update(
      ID, patched_v2_profile_partial_update: Pescheck::PatchedV2ProfilePartialUpdate.new(description: 'updated')
    )
    expect(updated).to be_a(Pescheck::V2ProfileDetail)
  end

  it 'screenings' do
    screenings = Pescheck::ScreeningsApi.new(api)
    created = screenings.v2_screenings_create(
      Pescheck::V2ScreeningCreate.new(
        profile_id: ID,
        candidate: Pescheck::V2Candidate.new(first_name: 'Contract', last_name: 'Test', email: EMAIL)
      )
    )
    expect(created).to be_a(Pescheck::V2ScreeningDetail)
    expect(screenings.v2_screenings_list).to be_a(Pescheck::PaginatedV2ScreeningListItemList)
    expect(screenings.v2_screenings_retrieve(ID)).to be_a(Pescheck::V2ScreeningDetail)
    expect(screenings.v2_screenings_documents_list(ID)).to all(be_a(Pescheck::V2Document))
  end

  it 'webhooks' do
    webhooks = Pescheck::WebhooksApi.new(api)
    created = webhooks.create_webhook2(
      Pescheck::Webhook.new(
        name: 'Contract test', url: 'https://example.invalid/hook', events: ['screening.status_changed']
      )
    )
    expect(created).to be_a(Pescheck::WebhookResponse)
    expect(webhooks.list_webhooks2).to all(be_a(Pescheck::WebhookResponse))
  end

  it 'divisions' do
    divisions = Pescheck::DivisionsApi.new(api)
    created = divisions.v2_organisations_divisions_create(
      Pescheck::DivisionWrite.new(
        name: 'Contract test', city: 'Utrecht', address: 'Teststraat 1', postal: '1234AB',
        phone: '0301234567', contact_name: 'Contract Test', contact_email: EMAIL, invoice_email: EMAIL
      )
    )
    expect(created).to be_a(Pescheck::DivisionWrite)
    expect(divisions.v2_organisations_divisions_list).to be_a(Pescheck::PaginatedDivisionReadOnlyList)
  end

  it 'rejects a request without a token' do
    expect { Pescheck::ProfilesApi.new(client('')).v2_profiles_list }
      .to raise_error(Pescheck::ApiError) { |e| expect(e.code).to eq(401) }
  end
end
