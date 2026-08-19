# Run

Drive a whole change from one conversation. You dispatch, you validate, you
commit. You never implement.

Use this when the package has more than one group left and you can dispatch a
subagent. One agent, one group, in order. When you cannot dispatch, or the
package has one group, use `work.md` instead.

## Before the first group

Read the package. Ask once whether to stop at each commit or run through to the
end. Whatever the answer, you stop unconditionally when a group comes back
blocked and when a validation fails.

## Dispatch a group

A new agent for every group, never a reused one. A reused agent stops looking:
it describes what it remembers instead of what is there.

The brief is the interface. Write it in this order, identical every time except
the last part:

1. the repository path, and that nothing outside it may be touched;
2. `CHANGEKIT.md`, `proposal.md` and `tasks.md`, inline and in full;
3. the rules and the return contract below;
4. last, the one group it owns, and the commits that already landed.

The rules it gets:

- implement this group only;
- read the source you are about to change immediately before changing it. The
  brief is the plan, never the code;
- never write anything under `changes/`, never write `CHANGEKIT.md`, never run
  a command that writes git state;
- run the validation command before reporting;
- report blocked rather than deciding anything the package did not approve.

The return contract, four lines and nothing else:

```
FILES: <repository-relative paths, comma separated>
VALIDATION: <the command, and pass or fail with counts>
FOR NEXT GROUP: <at most two sentences, or omit>
BLOCKED: <no, or the decision that blocks it>
```

If more comes back, keep those four lines and discard the rest. Your context
has to survive every group.

## After a group returns

1. Run the validation command yourself. The agent's word is a claim, and a
   checked box is a fact.
2. Read the diff. Confirm it touched only what the group owns.
3. Check the items and set the group's `Status` to `completed`. You are the
   only writer of `tasks.md`.
4. Commit that group alone, then start the next one.

Stop and bring it to the user when a group returns blocked, when your own
validation fails, or when the diff leaves the group's scope. Mark nothing and
commit nothing in those cases.

## The last group

When the final group passes, load `close.md` and archive before committing, so
the last group and the archive move land together.
