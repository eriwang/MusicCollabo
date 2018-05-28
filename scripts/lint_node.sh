#!/usr/bin/env bash

set -e

npx eslint .
npx stylelint "web_src/**/*.css"
npx htmlhint "web_src/**/*.html"