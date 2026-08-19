# Work

Implement one task, then keep going through its group on your own, one
coherent iteration at a time.

## Resolve the item

1. Read the package: proposal, tasks, and design or delta where they exist.
2. Read the current authority for the behavior you are about to change: the
   spec where the project has one, the code where it does not.
3. Confirm the item, what it depends on, and how it is validated.
4. Inventory the consumers, scripts, templates and tests it reaches.
5. Record `git status` and HEAD. If a file you need is already dirty, prefer
   a path that does not overlap, and re-read it immediately before patching.

Set the group's `Status` to `in progress` in `tasks.md`. Item state is the
checkbox alone: leave it unchecked until its own validation passes.

## Implement

- One coherent iteration at a time.
- The smallest change that satisfies the approved scope.
- Preserve behavior the package did not say to change.
- Specs describe current state only. Procedure belongs in skills, enforcement
  in tests.
- Never write a protected path.

Stop before editing if the work exposes a decision the package did not
approve. Present the alternatives, get an answer, record it in the package,
then resume.

## Mark and continue

The moment an item's own implementation and validation pass, check it in
`tasks.md`. Do not wait for the commit. Then start the next task in the group
without asking. When the last item of a group is checked, set the group's
`Status` to `completed`.

Stop the run, leaving completed tasks checked and uncommitted, when any of
these is true:

- the group has no task left;
- the next task is not approved, or implementing it exposes an open decision;
- implementation or validation failed;
- another agent's work now blocks the path;
- the user asked to stop or to review first.

Never leave a task checked while its own work is incomplete. A stop in the
middle of a task leaves that task unchecked.

## Finish

If this run completed the package's last group, load `close.md` and archive
before committing, so the implementation and the archive move land in one
commit. Otherwise load `commit.md` directly.

Either way the commit covers every task checked since the last commit, not
only the last one.
