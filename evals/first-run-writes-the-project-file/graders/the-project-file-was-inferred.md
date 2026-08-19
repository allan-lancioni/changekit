# The project file was written, and its values were inferred

Adoption has to survive the first five minutes. A tool that opens with an
interrogation gets uninstalled, so init reads the repository instead of asking.

Pass when `CHANGEKIT.md` exists at the repository root and all of these hold:

- changes points at `changes/`;
- specs points at `specs/`, which this repository has;
- language is English, which its README and specs are written in;
- the validation command is `npm test`, taken from `package.json` and not
  asked for.

Fail when the file was written under `.claude/` instead of the root, when any
of those four values was requested from the user although the repository
answers it, or when the file does not exist.
