#!/usr/bin/env bash

set -e

MODIFIED_FILES=$(git diff --name-only --relative)

npx eslint . --ext .json --ext .md
flake8