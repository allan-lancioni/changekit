# Init

Write `.claude/changekit.md`, then stop. Do not plan or implement in the same
turn, even if the user asked for both.

## Infer, do not interrogate

Inspect the repository and propose a value for every field. Ask only about
what you could not find.

| Field | Where to look | Fallback |
|---|---|---|
| changes | An existing directory of change packages, proposals or RFCs | `changes/` |
| specs | A directory of normative behavior documents: `specs/`, `docs/specs/`, `.kiro/specs/` | none |
| language | The language of the README and the existing documents | English |
| validate | Test script in `package.json`, `Makefile`, `pyproject.toml`, CI workflow | ask |
| commit | `git log --oneline -20` | conventional |
| protect | Real user data, secrets, generated output, a sibling checkout | none |

A path may point outside this repository. `../process/changes` is a valid
changes path and needs no special handling.

## Write

Copy `templates/changekit.md` to `.claude/changekit.md` and fill it in. Say
where each value came from, and mark the ones you guessed.

Create the changes directory, empty.

Present both and wait for approval. Commit them alone, touching nothing else.

## Say what happens next

State in one line that planning, implementing, reviewing and closing all run
through `/changekit`, and that the file you just wrote is the only one the
project owns: everything else under `.claude/skills/changekit/` is replaced
wholesale on update.
