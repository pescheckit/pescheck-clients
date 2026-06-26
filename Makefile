.PHONY: install fetch filter generate build clean

install:
	npm install

fetch:
	bash scripts/fetch-spec.sh

filter:
	node scripts/filter-spec.mjs

generate:
	npx openapi-generator-cli batch config/*.yaml
	node scripts/postprocess.mjs

build: fetch filter generate

clean:
	rm -rf clients/*/
