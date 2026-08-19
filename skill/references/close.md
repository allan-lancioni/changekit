# Close

Close a package only when every task is checked and every dependency is done.

## Audit

1. Check each success criterion against behavior that exists, not against
   tasks that are checked.
2. Confirm no task is pending, in progress, or blocked without a follow-up
   that owns it.
3. Where the project has specs, move the delta into them: the spec now states
   the new behavior as current, and the delta is no longer needed.
4. Confirm code, consumers, scripts, templates, tests and documents agree.
5. Search the scope for drafts, scaffolds, TODOs, open decisions and dead
   references. Remove only what this change made dead, and only where nothing
   still reads it.
6. Confirm the excluded behavior was not built anyway.
7. Run the project's validation command, and the full suite before anything
   activates.

## Archive

Record the outcome in `proposal.md`: what shipped, what changed on the way,
and what was left for later.

Present the closure report and wait for approval. Then move the directory to
`changes/archive/<YYYY-MM-DD>-<slug>/`, dated the day it closed.

## Dropping a package

A package that will not ship is closed too, never left open. Skip the audit,
write what happened under Outcome, and archive it at the same dated path. Say
what was built and left behind, and what would have to be true for the work to
come back.

Load `commit.md`. When closure follows the last task group in the same run,
the archive move goes in that same commit, not a second one.
