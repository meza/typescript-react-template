# 4. Using Redux instead of Context

Date: 2021-11-27

## Status

Accepted

## Context

There's a lot of buzz about state management around React.
There's React's own Context with its useDispatch and useReducer hooks.
And there's Redux which is UI independent.

The best write-up about the differences can be found [here](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/)
and this post influenced the decision.

## Decision

We'll be using Redux for application state management where:
- The app state is updated frequently over time
- The logic to update that state may be complex
- We want to be able to understand when, why, and how the state in our application has updated,
and visualize the changes to your state over time
- We need more powerful capabilities for managing side effects, persistence, and data serialization

We'll use React's Context api for "prop-drilling" of values that don't change often.
A good example would be the styling theme.

## Consequences

We need to have a decision making procedure when to add things to the context and when to use Redux.
A rule of thumb will be that everything goes into Redux unless there's a very good reason not to.
