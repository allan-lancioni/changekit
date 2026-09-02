# Changelog

What changes for a repository that already installed the skill. Updating is
always the same command, and it never touches your `CHANGEKIT.md`:

```bash
npx github:allan-lancioni/changekit --force
```

Every entry ends with what updating costs you. Where that is more than the
command above, it says so.

The numbers are read against the procedure, not against an API. **Major**: your
`CHANGEKIT.md` or an open package has to be edited by hand. **Minor**: a new
route or capability, and the configuration you have stays valid. **Patch**:
wording and fixes that leave the resulting procedure the same.

## 0.4.1

The first run does what it was documented to do, and the installer ends with a
command instead of a paragraph.

**Rules.** A repository with no `CHANGEKIT.md` was reaching `init.md` and
stopping in front of it, reporting the procedure back rather than running it.
The instruction said "do nothing else this turn", meaning do not plan and do
not implement, and it was being read as do nothing at all. It now says to
follow the route, and forbids only the two things it meant to forbid.

**Rules.** Init carries the original request forward. Asking to plan something
in a repository that was never configured used to cost you the request, and a
configuration you did not ask for was the whole answer. It now names what you
asked for and says it runs next, once the values are approved.

**Installer.** It looks for Claude Code on your PATH and prints the line to
paste. Where Claude Code is missing, it says how to install that first.

Updating: nothing. No configuration field changed.
