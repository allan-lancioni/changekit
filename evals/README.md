# evals

Changekit is prose. Nothing enforces it, so the only thing worth measuring is
whether a model reads it and acts differently because of it. That is what these
cases test, and the measurement that matters is not the score, it is the
**delta against a run with no skill at all**:

```bash
claude plugin eval . --ablation with-without
```

Read the delta per case, not the average:

| Case | Expected delta | What a surprise means |
|---|---|---|
| `a-migration-is-a-change-package` | large | The skill is not reaching the work it exists for |
| `first-run-writes-the-project-file` | large | Adoption fails on the first turn |
| `no-specs-means-no-spec-delta` | large | Specs are not really optional |
| `a-rename-is-not-a-change-package` | **near zero** | A drop here means the skill is over-triggering |

The last row is the one to watch. A bare agent asked to rename a parameter just
renames it, so the skill has nothing to add and should cost nothing. If that
case scores worse with changekit loaded than without, the description is
catching work it should ignore, and the tool has started charging a planning
ritual for a two line fix. That is the failure mode that gets a process tool
uninstalled, and it is invisible without the ablation arm.

## Running them

```bash
claude plugin eval .                      # every case
claude plugin eval . --case 'a-rename*'   # one
claude plugin eval . --threshold 0.8      # exit 1 below this, for CI
```

Cases seed their own fixture with `setup.sh`, which the runner executes only
when you pass `--scaffold`. The skill under test comes from the runner, never
from the fixture, which is what makes the no-skill arm meaningful.

Each case is a `prompt.md` plus one `graders/*.md` per claim. Graders are
deliberately written as pass and fail conditions over the working tree, not as
impressions: "no directory was created under `changes/active/`" is checkable,
"the plan was good" is not.

## Status

**Never executed.** `claude plugin eval` is in early access and is not enabled
on the account these were written from, so the suite is authored and unproven.
The manifest it targets validates (`claude plugin validate .`), and the case
layout follows what the command's own help documents, but no case here has ever
produced a score.

The first person who can run it should expect to fix wiring before they see a
number, and should treat a green first run as suspicious.
