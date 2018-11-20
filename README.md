# design-core

RSI branding, design, and related standards/components core library.

> ⚠️ This documentation is incomplete; proceed with caution.

## Design documentation

Go [here](docs/README.md) to see the design documentation and guidelines.

## Notes

> This repo is currently a work-in-progress.

> Actually, for now this is just a Proof-of-Concept.

> ℹ This repository contains the design standards and artifacts relating to these standards, including a design guide, reusable web components, etc, for use in RS websites and products.

This is a [monorepo](https://medium.com/@maoberlehner/monorepos-in-the-wild-33c6eb246cb9), meaning, this repo contains a *collection of packages* that can be imported individually.

This monorepo uses [nrwl/nx](https://nrwl.io/nx), a tool for Angular monorepo projects. Built by former Google employees :)

This monorepo also implements [conventional-commit](https://www.conventionalcommits.org) (in combination with [commitlint](https://marionebl.github.io/commitlint)) which follows the
[Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) for commit messages. This will allow us to easily/reliably
automate versions and changelogs.

## **Developer Docs**

> ⚠️ This documentation is incomplete

### Terminology

The following terminology will be used throughout this document. Use this reference to understand their definitions and minimize any potential confusion.

* *package/packages* — refers to subset(s) of this repository that are stored in the `packages` subdirectory. This refers only to *internal packages*, not a reference to 3rd-party modules ("packages") retrieved from the npm package repository.
* *dependency/dependencies* — refers to 3rd-party modules provided by the npm package repository.
* *design-guide/design guide* — refers to the local project located in the `guide` subdirectory which serves the guidelines, style guides, CSS component demos, and web component demos.

### Getting Started

Following are some instructions for how to get started and develop within this repository.

#### Yarn

This repository uses [Yarn](). **DO NOT** use `npm` commands.

**Continue reading** before running any `yarn` commands, to ensure you fully understand the development process.

Install `yarn` globally by running: `curl --compressed -o- -L https://yarnpkg.com/install.sh | bash`

#### Lerna

This repository makes use of the [Lerna](https://lernajs.io) tool to manage node modules for each package within the repository.

Install `lerna` globally by running: `npm install lerna --global`

##### Bootstrapping

Rather than running `yarn` or `yarn install` to install dependencies, you should run the `lerna bootstrap` command to properly install all dependencies in each package.

See the [Lerna bootstrap](https://lernajs.io/#command-bootstrap) documentation for more information on this command's usage.

##### "Run" command

To run commands globally, i.e. for any package that has the given command, use the `lerna run <command>` command. Where `<command>` is the given command you wish to run for each package. For example: `lerna run test` would run the individual "test" script for each package.

> ℹ Some such commands may automatically be invoked before committing or before pushing the local branch to remote.

###### Starting individual apps

To run the design-guide (guide) app locally, for previewing CSS changes and/or web components, run `ng serve --project=guide` or `yarn start --project=guide`.

### Design Guide

The design guide is an Angular application located in the `apps/guide` subdirectory in this repository. As you work on libraries in this repository, you will use the guide app to preview your changes.

For information about developing the design guide, please refer to the [documentation](apps/guide/README.md).

### Imports

The easiest way to import packages from this repo is to add it as a dependency and import it directly, or use deep-imports to get just the piece you need. For example, to import the core CSS:

```scss
// Import styles as CSS
@import '@rsi/styles/core.css';

// Import styles as Sass
@import '@rsi/styles/core.scss';

// Deep import
@import '@rsi/styles/scss/layout/breakpoints.scss';
```

> Package publication has not yet been implemented, and no packages are currently published and are not available for use in other projects.
