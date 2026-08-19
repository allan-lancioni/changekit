#!/usr/bin/env bash
# Seeds a project that has never used changekit: no CHANGEKIT.md, no changes/.
set -euo pipefail
cp -R "$(dirname "$0")/../fixtures/invoicer/." .
rm -f CHANGEKIT.md
git init -q && git add -A && git -c user.email=eval@example.com \
  -c user.name=Eval commit -q -m "feat: total an invoice from its line items"
