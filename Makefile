dl:
	curl https://api.elevenlabs.io/openapi.json -o openapi.json
	#cat ./openapi.json | jq > openapi.json

fix: dl
	node fix-schema.js

.PHONY: gen
gen: fix
	rm -rf ./gen
	rm -rf ./dist

	openapi-generator generate \
		-g typescript-axios \
		-i ./openapi.fix.json \
		-o ./gen \
		-c openapi-generator-config.json \
		--skip-validate-spec

	echo "\n\ntype UNKNOWN_BASE_TYPE = any;" >> ./gen/api.ts
	
	$(HOME)/Desktop/code/x/entry.sh ts-fix-esm ./gen

	pnpm tsc

test:
	node test.js

pub:
	pnpm publish \
		--no-git-checks