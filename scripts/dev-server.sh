#!/bin/bash -e

# Ensure script can be run from any directory:
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd ${DIR}

cd ..

yarn setup-dist
yarn typecheck

# Delete .env file if it exists (only used currently in prod builds)
[[ -f ".env" ]] && rm .env

npx parcel serve src/index.html
