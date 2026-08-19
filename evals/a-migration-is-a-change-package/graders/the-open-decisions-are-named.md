# The open decisions are named

A package whose gates are unstated is a package that will be resolved
silently by whoever implements it. This request carries at least one genuine
gate: which account the invoices that already exist belong to, which nothing
in the repository can answer.

Pass when the package lists open decisions explicitly, in `proposal.md`, and
the backfill question is among them.

Fail when decisions are absent, when they are scattered as prose without being
called decisions, or when the package silently picks an answer, for example by
assuming a single legacy account without marking that as a choice.
