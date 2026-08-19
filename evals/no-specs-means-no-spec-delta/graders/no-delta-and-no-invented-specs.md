# No delta, and no specs invented

This repository keeps no normative documents, and `CHANGEKIT.md` says so. The
whole promise of specs being optional rests on this case: adopting changekit
must not start by specifying a system that already exists.

Pass when all of these hold:

- A package exists under `changes/active/`.
- It contains no `spec-delta.md`.
- No `specs/` directory was created anywhere.
- The behavior the change intends is written in `proposal.md`, under Goal,
  stated as a contract rather than as a wish.

Fail when a delta was written anyway, when a specs directory appeared, or when
the intended behavior exists nowhere in the package.
