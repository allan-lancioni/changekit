# A package exists, and it has the right parts

The request crosses a stored data shape, a read path and a backfill, and the
repository's own spec says today that no account identifier is stored. It
cannot land in one pass, so the gate should open a package.

Pass when all of these hold:

- A directory exists under `changes/active/`, named for the outcome rather
  than for a component.
- It contains `proposal.md` and `tasks.md`.
- It contains `spec-delta.md`, because `CHANGEKIT.md` in this fixture points
  at `specs/`.
- `tasks.md` groups the work, and each group states how it is validated.

Fail when no package was created, when `tasks.md` is missing, or when the
proposed normative behavior was written into `specs/billing.md` instead of the
delta.
