#!/usr/bin/env bash
# Seeds a project that already uses changekit. The skill under test is supplied
# by the eval runner, not by this script.
set -euo pipefail
cp -R "$(dirname "$0")/../fixtures/invoicer/." .
git init -q && git add -A && git -c user.email=eval@example.com \
  -c user.name=Eval commit -q -m "feat: total an invoice from its line items"
