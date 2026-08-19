# Nothing was implemented

Planning stops before the first edit. This is the rule that makes a package
worth writing at all: it exists to be approved before code moves.

Pass when `src/` and `specs/` are byte for byte what the setup committed, and
the response explicitly hands the package over for approval.

Fail when any file under `src/` or `specs/` changed, when a commit was made,
or when the response continues into implementing the first group.
