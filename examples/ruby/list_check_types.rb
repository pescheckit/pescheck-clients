#!/usr/bin/env ruby
# frozen_string_literal: true

# Minimal end-to-end example for the Pescheck Ruby client.
# Lists the check types the API supports (GET /api/v2/checks/).
#
# Required environment:
#   PESCHECK_BASE_URL     e.g. https://api.pescheck.io
#   PESCHECK_ACCESS_TOKEN OAuth2 / JWT bearer access token

require 'uri'
require 'pescheck'

base_url = ENV['PESCHECK_BASE_URL']
access_token = ENV['PESCHECK_ACCESS_TOKEN']

if base_url.nil? || base_url.empty?
  warn 'E2E FAIL: PESCHECK_BASE_URL is not set'
  exit 1
end

if access_token.nil? || access_token.empty?
  warn 'E2E FAIL: PESCHECK_ACCESS_TOKEN is not set'
  exit 1
end

uri = URI.parse(base_url)

Pescheck.configure do |config|
  # Point the client at PESCHECK_BASE_URL. The default server_index is nil, so
  # the client builds the base URL from scheme/host/base_path directly.
  config.scheme = uri.scheme
  config.host = uri.host + (uri.port && uri.default_port != uri.port ? ":#{uri.port}" : '')
  config.base_path = uri.path

  # OAuth2 / JWT bearer token (sent as "Authorization: Bearer <token>").
  config.access_token = access_token
end

begin
  check_types = Pescheck::ChecksApi.new.v2_checks_list
  puts "E2E OK: #{check_types.length} check types"
  exit 0
rescue Pescheck::ApiError => e
  warn "E2E FAIL: ChecksApi#v2_checks_list failed: #{e}"
  exit 1
rescue StandardError => e
  warn "E2E FAIL: #{e.class}: #{e.message}"
  exit 1
end
