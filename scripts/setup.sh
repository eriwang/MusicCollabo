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

echo 'set -e; scripts/lint_python.sh; scripts/lint_node.sh' > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
