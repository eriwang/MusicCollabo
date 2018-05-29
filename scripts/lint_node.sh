#!/usr/bin/env bash

set -e

npx eslint "web_src/**/*.ts" "webpack.config.ts"
npx stylelint "web_src/**/*.css"
npx htmlhint "web_src/**/*.html"