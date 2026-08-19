# changekit

A change package is a small folder that holds one unit of planned work:
the problem, the intended behavior, and the tasks that get you there. It
opens when the work starts and it is archived when the work is done.

changekit is the procedure for running them, written as a Claude Code skill.
The part that matters is not the folder. It is the gate in front of it:

> Never open a change package because the work touches behavior.
> Open one because a single pass cannot land it.

Most spec driven tooling has one path, the long one, and charges you a
planning ritual for a two line fix. This one classifies first and says
"just do it" out loud, which is the answer most of the time.

## Install

Copy it into the repository it will govern:

```bash
npx github:allan-lancioni/changekit
```

Or, without running any code of mine:

```bash
npx degit allan-lancioni/changekit/skill .claude/skills/changekit
```

Then open Claude Code in that repository and run `/changekit`. It reads the
repo, proposes a configuration, and writes one file. That is the whole setup.

The skill is committed with your project, so everyone who clones it gets the
same process, with nothing to install.

## Using it

Everything runs through `/changekit`, in plain language:

| You say | It does |
|---|---|
| "plan the multi tenant migration" | Classifies. If it is too big for one pass, writes the package and stops for approval |
| "start task 2" | Implements it, then keeps going through its group, checking items as they validate |
| "run the whole change" | Dispatches a fresh agent per group, validates each one itself, commits group by group |
| "review this" | Reads and reports, ordered by impact, and changes nothing |
| "close it" | Audits the criteria against real behavior, archives with a date |
| "rename this variable" | Tells you it does not need a package, and does it |

It stops on its own when a decision needs you: schema, persistence,
compatibility, observable behavior. It never commits without approval.

## The one file you own

`CHANGEKIT.md`, at the root of your repository, holds where the packages
live, whether the project has specs, the language for written artifacts, the
validation command, and the paths nothing may write. It is yours, it sits
outside the skill directory, and updates never touch it. It reads as plain
documentation, so a new colleague learns the process from it without
installing anything.

Everything under `.claude/skills/changekit/` is replaceable. Nothing of yours
belongs in there, which is what makes updating safe:

```bash
npx github:allan-lancioni/changekit --force
```

## Specs are optional

If your repository keeps normative behavior documents, point the config at
them and packages carry a `spec-delta.md` that lands in the specs at closure.

If it does not, nothing is missing. The intended behavior is written in the
proposal and read from there. Adopting this does not start with writing specs
for a system you already built.

## What is in the box

```
skill/                  what gets copied into your repository
  SKILL.md              the gate, the routes, and direct work
  references/
    init.md             first run: infer the config, write it, stop
    plan.md             write a package, stop before implementing
    work.md             implement a task, continue through its group
    review.md           read and report, change nothing
    close.md            audit against behavior, archive
    commit.md           validate, report, wait, commit once per run
  templates/            the package files, and the config file
```

About 11k characters of procedure. Only SKILL.md is always loaded, at 2.3k;
a turn loads between 3k and 6k depending on the route it takes.
There is nothing to run: no scripts, no dependencies, no state outside your
repository.

## License

MIT.
