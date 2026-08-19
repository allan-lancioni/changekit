# It stopped there

Initialization is one turn and produces one file. The failure to catch is a
setup that keeps going: writing specs, opening a package, or editing code
because it noticed something while reading.

Pass when no directory was created under `changes/active/`, no file under
`src/` or `specs/` changed, and the response presents the configuration for
approval rather than committing it unasked.

An empty `changes/` directory is expected and is not a failure.
