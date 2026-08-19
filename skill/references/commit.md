# Commit

Every route that changed a file ends here. For a package, "this run" is every
task checked since the last commit, not only the last one.

## Validate

Run the project's validation command. Add, in proportion to what changed:

- targeted tests for the contract you touched and for its consumers;
- the full suite before an activation or a closure;
- `git diff --check`;
- a search for TODOs, scaffolds, open decisions and references to anything
  you removed.

If a check cannot run at all, say which one and why. Never present a check
that did not run as a check that passed.

## Report, then wait

Present, covering the whole run:

- what behaves differently now;
- the files that changed;
- decisions approved along the way;
- commands run, and their results;
- risks and anything still open;
- unrelated work still sitting in the tree;
- why the run stopped here.

Wait for explicit approval. Do not commit without it.

## Commit

1. Stage only this run's paths. Use partial staging when a file holds
   someone else's work too.
2. Read the staged diff before committing.
3. One commit for the run, in the project's convention and language.
4. Report the hash and what is left in the tree.

Do not start the next task after committing.
