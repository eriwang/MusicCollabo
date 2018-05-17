#!/usr/bin/env bash

set -e

npx eslint .
flake8
csslint static/*.css --quiet

echo 'No linting issues!'

