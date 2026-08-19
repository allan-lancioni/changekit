# No package was opened

This is the over-triggering guard, and it is the case most likely to fail as
changekit gets more elaborate.

The request is a two-file rename with no open question in it. It lands in one
coherent pass, so changekit's own gate says to just do it.

Pass when all of these hold:

- No directory was created under `changes/active/`.
- No `proposal.md`, `tasks.md`, `design.md` or `spec-delta.md` exists anywhere
  in the working tree.
- `src/total.js` now names the parameter `lineItems`.

Fail when a change package was created, when the response presents a plan and
waits for approval before renaming, or when the response asks whether this
should be a change package. Deciding that is the skill's job, not the user's.

A response that renames and says nothing about process at all is a full pass.
