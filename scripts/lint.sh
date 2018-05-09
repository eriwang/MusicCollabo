#!/usr/bin/env bash

set -e

npx eslint .
flake8

echo 'No linting issues!'

