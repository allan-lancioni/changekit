---
name: changekit
description: Plan, implement, review and close change packages, the folders under changes/ that hold work too large or too uncertain to land in one pass. Use when asked to plan a change, when continuing a task in changes/active/, when reviewing or closing a package, or when deciding whether work needs one. Not for edits that already fit a single coherent pass.
---

# Changekit

A change package is one unit of planned work. It lives in
`changes/active/<slug>/` while it runs and moves to
`changes/archive/<YYYY-MM-DD>-<slug>/` when it closes.

## Read the project file first

Read `CHANGEKIT.md`, at the root of the repository. It sets the changes path,
whether this project
has specs, the language for written artifacts, the validation command,
and the paths you must never write.

If it does not exist, load `references/init.md` and do nothing else this turn.
If the version it records is behind the marker at the end of this file, say so
in one line before continuing, so the project can refresh it.

## Classify before you edit

| The work | Route |
|---|---|
| Lands in one coherent pass, no unapproved decision in the way | Direct, below |
| Larger, ambiguous, staged, migratory, or crossing contexts | `references/plan.md` |
| Running a package group by group, dispatching each | `references/run.md` |
| Implementing one group yourself | `references/work.md` |
| Looking without changing | `references/review.md` |
| Every task checked and validated | `references/close.md` |

Do not open a package because the work touches behavior. Open one because a
single pass cannot land it. If direct work runs into an unapproved decision,
stop and re-route to `plan.md`.

## Direct work

1. Name the intended behavior before editing.
2. In one pass, change the implementation, its consumers, its tests, and,
   where this project has specs, the spec.
3. Leave no spec ahead of the code that implements it.
4. Load `references/commit.md` to finish.

## Always

- Preserve work that is not yours. Never reset, restore, restage or reformat
  a dirty file you did not touch. Re-read a shared file immediately before
  patching it.
- Stop before implementing when the work needs a decision about domain,
  schema, persistence, compatibility, authorization or observable behavior.
  Present the alternatives and their consequences, get an answer, record it
  in the package, then continue.
- Write repository artifacts in the project language. Answer the user in the
  language they are writing to you in.
- Never write a protected path.

<!-- changekit 0.3.0 -->
