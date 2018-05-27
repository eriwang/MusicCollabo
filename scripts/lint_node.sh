#!/usr/bin/env bash

set -e

npx eslint .
npx stylelint "static/**/*.css"
