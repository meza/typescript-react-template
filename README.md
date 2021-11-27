# Typescript React Template - EDIT ME

> **When the issue below is closed, we can migrate to Yarn2**
>
> Dependabot Yarn2 Support Status ![GitHub issue/pull request detail](https://img.shields.io/github/issues/detail/state/dependabot/dependabot-core/1297)

## Building blocks

- Yarn1
- Webpack 5+
- Typescript 4+
- React 17+
- Eslint
- Stylelint
- Jest
- Cypress
- Storybook

## How to use

This template is fairly opinionated however it's a starting point with boilerplate.
If you don't like it, don't use it or change it to however you like doing things.

### Start Working
1. Create a new repo with this template
2. Clone your new repo
3. Run `yarn`
4. Install [Nat Pryce's adr-tools](https://github.com/npryce/adr-tools) for your system.

### Noteworthy tasks:

`yarn start` - will start up the app and open a browser

`yarn build` - will bundle your app to the dist folder

`yarn build:prod` - will bundle your app to the dist folder

`yarn clean` - will clean mostly all artefacts aside from the node_modules dir

`yarn clean:all` - will also clean node_modules

`yarn lint` - will lint your files

`yarn lint:fix` - will lint and fix your files where it can

`yarn ci` - will run the same suite the CI should

`yarn test` - will run the unit tests

`yarn test:e2e` - will run the cypress tests

`yarn test:full` - will run both of the above

`yarn report` - will run jest with coverage metrics and run jscpd for duplicate code detection

`yarn storybook` - will launch storybook

`yarn build-storybook` - will build storybook

`yarn chromatic` - will upload storybook to chromatic

### Adding ADRs

We're using ADRs to record Architectural Decisions. The tool of choice is [Nat Pryce's adr-tools](https://github.com/npryce/adr-tools).

To add a new ADR, use: `adr new This Is My New ADR Title` from the project root.

## Conventions

- CamelCase everywhere (aside from index files)
- Things that belong to a component are isolated within the Components/ComponentName directory
- ALL configuration lives in the .env.default file and is overriden by the .env

## Concepts

### Typescript + Eslint instead but no prettier

We believe that if the error is automatically fixed without you noticing them, you might never learn.
Having the linter raise an issue can help open discussions and research which further improves our
understanding of the code.

Nothing is stopping you from adding prettier though. [Here's a good article](https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d)
on how to use the 2 together effectively.

### SCSS instead of Styled Components

While styled components have a noticable short term advantage in the long run with a growing project they
can quickly become unmaintainable.

[Here's a good post](https://kittygiraudel.com/2015/06/18/styling-react-components-in-sass/) about the issues
and the basic principles we follow.

### SCSS processed by PostCSS and not node-sass

Node-sass's C bindings make it a pain to install the dependency and can often break. PostCSS is now
capable of translating scss to css so in this project it does just that!

### Webpack in ES6

By using the name: `webpack.config.babel.js` we can get babel to transpile the webpack config therefore
we can use ES6 syntax across the project. This results in one interesting thing:

The existence of the `scripts/babelConfigGenerator.js` file which is capable of controlling the settings
based on the caller.

The main reason is that in order to have Webpack work, we need to use babel with `modules:false` while with
our app, we need other settings. This way we can keep our babel settings consistent and only change
what needs to be changed to cater for 2 different usecases.
