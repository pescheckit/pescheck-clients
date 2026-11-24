.PHONY: install fetch filter generate regenerate build clean contract

install:
	npm install

fetch:
	bash scripts/fetch-spec.sh

filter:
	node scripts/filter-spec.mjs

generate:
	node scripts/clean-clients.mjs
	npx openapi-generator-cli batch config/*.yaml
	node scripts/postprocess.mjs

# Regenerate from the committed spec/ snapshot (no network). Run this after
# changing scripts/ or config/, and commit the result.
regenerate: filter generate

build: fetch filter generate

clean:
	rm -rf clients/*/

# Contract tests: every client against a mock API built from spec/ (see
# contract/README.md). `make contract` runs all languages; `make contract-<lang>`
# runs one. Each needs that language's toolchain installed.
CONTRACT_LANGS = python typescript javascript ruby php go java csharp rust cpp
MOCK = $(CURDIR)/scripts/with-mock.sh

contract: $(addprefix contract-,$(CONTRACT_LANGS))

contract-python:
	pip install -q -e clients/python
	cd contract/python && $(MOCK) python -m unittest test_contract -v

contract-typescript:
	cd clients/typescript && npm install --silent
	cd contract/typescript && npm install --silent && $(MOCK) npm test

contract-javascript:
	cd clients/javascript && npm install --silent
	cd contract/javascript && npm install --silent && $(MOCK) npm test

contract-ruby:
	cd contract/ruby && $(MOCK) rspec -I ../../clients/ruby/lib contract_spec.rb

contract-php:
	cd contract/php && composer install -q --no-interaction && $(MOCK) vendor/bin/phpunit

contract-go:
	cd contract/go && go mod tidy && $(MOCK) go test ./...

contract-java:
	mvn -q -B -f clients/java -DskipTests -Dmaven.javadoc.skip=true install
	$(MOCK) mvn -q -B -f contract/java test

contract-csharp:
	$(MOCK) dotnet test contract/csharp

contract-rust:
	cd contract/rust && $(MOCK) cargo test

contract-cpp:
	cmake -S contract/cpp -B build/contract-cpp && cmake --build build/contract-cpp -j
	$(MOCK) ctest --test-dir build/contract-cpp --output-on-failure

