# 3. use yarn 1 after all

Date: 2021-11-19

## Status

Accepted

Supercedes [2. Use Yarn 2](0002-use-yarn-2.md)

## Context

While Yarn 2 is amazing, unfortunately some of the tooling isn't set up for it yet.
Namely, Dependabot.

## Decision

Until [this](https://github.com/dependabot/dependabot-core/issues/1297) issue is resolved, we'll revert to yarn 1.

Current state: ![GitHub issue/pull request detail](https://img.shields.io/github/issues/detail/state/dependabot/dependabot-core/1297)

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
