#!/usr/bin/env bash

set -e

# Python

if [ ! -d 'venv' ]; then
    virtualenv -p python venv
fi
source venv/bin/activate

pip install -r requirements.txt

# Node

npm install

# Git

cp scripts/lint.sh .git/hooks/precommit