# 2. Use Yarn 2

Date: 2021-11-06

## Status

Accepted

## Context

Yarn 1 is slow. Simple tasks like a build takes 300ms for webpack natively and takes 1.5s for yarn1 through
`yarn build`.

The hypothesis was that yarn2 is faster.

For more, read [the q&a](https://yarnpkg.com/getting-started/qa)

## Decision

We are going to use yarn 2

## Consequences

### Pros
- Dependency management is much more streamlined and faster
- Ability to perform zero-second installs
- Running tasks cuts the yarn overhead by half

### Cons
- The repo now contains the dependencies
- Collaborators could potentially upload malicious dependencies (to be mitigated later)
