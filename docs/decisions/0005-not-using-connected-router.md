# 5. Not Using Connected Router

Date: 2021-11-27

## Status

Accepted

## Context

React Connected Router is an extension of the React Router which allows the routes to be handled by Redux.
This is advantageous because all the route changes suddenly show up in the history and become a first
class citizen in the application state management.

However, the [newest (at the time of writing) `connected-react-router`](https://github.com/supasate/connected-react-router)
is not compatible with the latest react-router v6.

Namely, it throws a TypeError that we haven't been able to fix.

## Decision

Due to the incompatibility of the connected-react-router, we've decided to use the default react-router instead.
We will revisit this decision at a later date in hopes that the issue has been resolved by the maintainers.

## Consequences

This should have little to no consequences aside from the route changes not showing up in the redux dev tool.

