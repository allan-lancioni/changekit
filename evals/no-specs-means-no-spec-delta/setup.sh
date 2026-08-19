#!/usr/bin/env bash
# Seeds a project with no normative documents at all, the level-0 case.
set -euo pipefail
cp -R "$(dirname "$0")/../fixtures/shortener/." .
git init -q && git add -A && git -c user.email=eval@example.com \
  -c user.name=Eval commit -q -m "feat: in memory link store"
