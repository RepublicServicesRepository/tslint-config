# design-core [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

RSI branding, design, and related standards/components core library.

**Please refer to the [CONTRIBUTING GUIDE](.github/CONTRIBUTING.md) before making any changes or contributions.**

## Overview

> ⚠️ The following documentation is incomplete; proceed with caution.

> ℹ This project is a work-in-progress but it will be used to house generic, reuseable components. It will will also eventially be used as the source for common themes, styles and mixins.

> ℹ This repository contains the design standards and artifacts relating to these standards, including a design guide, reusable web components, etc, for use in RS websites and products.

This is a [monorepo](https://medium.com/@maoberlehner/monorepos-in-the-wild-33c6eb246cb9) workspace built using [Nx Workspace](https://nrwl.io/nx/guide-nx-workspace) which will contain libraries (`/libs`) for shared components, utilities, theming and also apps (`/apps`) to showcase the design guide and components.

Libraries will generally be packaged (in `/packages`) and published for consumption by other RSI projects.

This monorepo also implements [conventional-commit](https://www.conventionalcommits.org) (in combination with [commitlint](https://marionebl.github.io/commitlint)) which follows the
[Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) for commit messages. This will allow us to easily/reliably
automate versions and changelogs. **Please read the [CONTRIBUTING GUIDE](.github/CONTRIBUTING.md) for more information.**

## **Design documentation**

[Design documentation and guidelines are located here.](docs/README.md)

## **Developer documentation**

> ⚠️ The following documentation is incomplete and these processes are still in flux at this time.

### Terminology

The following terminology will be used throughout this document.

* *project/projects* - referes to an app or a library in the context of an Nx Workspace.
* *package/packages* — final builds for projects residing in the `/packages` subdirectory.
* *publish* — refers to publishing private RSI packages.
* *dependency/dependencies* — refers to 3rd-party modules from the npm package registry.
* *design-guide/design guide* — refers to the local project located in the `apps/guide` subdirectory which serves the guidelines, style guides, CSS component demos, and web component demos.

### Tools

#### Yarn

This repository uses [Yarn](https://yarnpkg.com). **DO NOT** use `npm` commands.

**Continue reading** before running any `yarn` commands, to ensure you fully understand the development process.

Install `yarn` globally by running: `curl --compressed -o- -L https://yarnpkg.com/install.sh | bash`

#### Lerna

This repository makes use of the [Lerna](https://lernajs.io) tool to manage node modules for each package within the repository. Lerna is used to essentially run commands across all projects such as `lerna run build` or `lerna run test`. Lerna will also eventually be used to publish our packages to the private Republic NPM registry once it is active. **NOTE:** You can still run ng commands on individual projects as required.

Install `lerna` globally by running: `npm install lerna --global`

##### Bootstrapping

Rather than running `yarn` or `yarn install` to install dependencies, you should run the `lerna bootstrap` command to properly install all dependencies in each package. Dependencies accross all apps are listed in the root level `package.json` and libraries are installed using at the root level using `yarn add -W <dependency name>`. You can add dependencies to individual project but please be sure you fully understand Nx Workspace and Lerna.

See the [Lerna bootstrap](https://lernajs.io/#command-bootstrap) documentation for more information on this command's usage.

##### "Run" command

To run commands globally, i.e. for any package that has the given command, use the `lerna run <command>` command. Where `<command>` is the given command you wish to run for each package. For example: `lerna run test` would run the individual "test" script for each package.

> ℹ Some such commands may automatically be invoked before committing or before pushing the local branch to remote.

## Developing

The best way to test your components in realtime is to consume them in the **design-guide** app. Once they are completed you can build and publish them for consumption by external projects.

### Apps

> ℹ In this project, **design-guide** will be the only app. Do not *generate* any new apps.

The design-guide is an Angular application located in the `apps/guide` subdirectory in this repository. As you work on libraries in this repository, you will use the guide app to preview your changes.

For information about developing the design-guide, please refer to the [documentation](apps/guide/README.md).

### Libraries

Libraries should be separated as needed so each provides a logical functional package. Libraries can be easily consumed by other apps (or libraries) in this repo simply by direct reference (no need to npm install them). This also allows for you app to auto watch for changes and update when your libraries are modified. You can generate new apps using the proper Nx Workspace commands.

#### Generating new libraries

##### Step 1

To generate a new lib, run `ng generate lib <name> --publishable --directory=<type> --unit-test-runner=jest` where `<name>` is the base name of the new library and `<type>` is one of

* `component`
* `service`
* `interface` - interfaces, classes, enums, etc

The following output should be seen

```
CREATE libs/component/mylib/karma.conf.js (493 bytes)
CREATE libs/component/mylib/ng-package.json (163 bytes)
CREATE libs/component/mylib/package.json (176 bytes)
CREATE libs/component/mylib/tsconfig.lib.json (749 bytes)
CREATE libs/component/mylib/tsconfig.spec.json (268 bytes)
CREATE libs/component/mylib/tslint.json (250 bytes)
CREATE libs/component/mylib/src/index.ts (58 bytes)
CREATE libs/component/mylib/src/test.ts (700 bytes)
CREATE libs/component/mylib/src/lib/component-mylib.module.ts (254 bytes)
CREATE libs/component/mylib/src/lib/component-mylib.module.spec.ts (442 bytes)
UPDATE angular.json (7237 bytes)
UPDATE package.json (3286 bytes)
UPDATE nx.json (444 bytes)
UPDATE tsconfig.json (787 bytes)
yarn run v1.13.0
$ ./node_modules/.bin/nx format:write --untracked --silent
libs/component/mylib/src/index.ts 449ms
libs/component/mylib/src/lib/component-mylib.module.spec.ts 34ms
libs/component/mylib/src/lib/component-mylib.module.ts 13ms
libs/component/mylib/src/test.ts 35ms
✨  Done in 3.37s.
```

> ⚠️ Important: it may be necessary to edit the generated `ng-package.json` file so that it correctly targets the schema, as in the example below. The `"$schema"` entry should have the same number of `../` occurrences as the `"dest"` entry.

```json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/component/header",
}
```

##### Step 2

###### (If Step 1 generated a `component`)

Next run `ng g component <name> --prefix rsi --style=scss --project=component-<name> --unit-test-runner=jest` where `<name>` are replaced with the *same base name* from Step 1.

You should see the following output

```
CREATE libs/component/mylib/src/lib/mylib/mylib.component.css (0 bytes)
CREATE libs/component/mylib/src/lib/mylib/mylib.component.html (25 bytes)
CREATE libs/component/mylib/src/lib/mylib/mylib.component.spec.ts (628 bytes)
CREATE libs/component/mylib/src/lib/mylib/mylib.component.ts (269 bytes)
UPDATE libs/component/mylib/src/lib/component-mylib.module.ts (266 bytes)
```

### Building

To build multiple projects at once you can use `lerna run build` if each has a `build` script in its `package.json`. For individually building a project use  `ng build <project name>`. If configured correctly this should build your project in the `/packages` folder.

Each library such as the `components` library resides in the `/libs` folder and will contain its own `package.json` and `ng-package.json` used to package and publish.

### Publishing

> Packages will eventually be published using `lerna publish` once a private NPM registry becomes available.

#### Gitpkg

> **NOTE:** This is a temporary solution for publishing until a private NPM registry is fully working. This tool can also be used for specific POC or testing use cases.

You must first build your projects package `ng build <project name>`. Currently we will publish our library to the hosting repository using tags with the `gitpkg` tool. You can install this tool globally `npm install -g gitpkg` and must run it from within the root of your projects package folder. Running `gitpkg publish` will publish a specially formated tag to the hosting repo such as `rsi-components-v0.0.1-gitpkg`.

You can then consume this package in other external projects by adding the git repository as a dependency in your `package.json` like as follows:

```json
{
  "@rsi/components": "git@github.com:RepublicServicesRepository/design-core.git#rsi-components-v0.0.1-gitpkg"
}
```

**NOTE:** Gitpkg is required to publish the package because it is part of a monorepo and cannot be consumed in the `package.json` file as you would generally expect with a normal dependency from git. Gitpkg does a special tagged commit where it adds only the specific projects package files. This is a great way to deploy packages still in development and makes it easy to consume in an external project.

## Importing in external projects

To list available packages type `yarn packages` or `lerna list`. Note, not all packages listed are published, but this should be helpful for quick reference. If the package is not published, it is not ready for use.

`npm install` the package just as you would normally for any package. The packages will be installed from a Private NPM repository, so make sure your npm credentials are set up.

The easiest way to import packages from this repo is to import it directly, or use deep-imports to get just the piece you need. For example, to import the core CSS:

```scss
// Import styles as CSS
@import '@rsi/styles/core.css';

// Import styles as Sass
@import '@rsi/styles/core.scss';

// Deep import
@import '@rsi/styles/scss/layout/breakpoints.scss';
```

## **Styles Library**

This library will contain all core styles, assets, palettes, themes and custom mixins that will be used to develop and properly theme all components in the **Components** library.

> This library currently cannot be packaged and deployed for use in external projects. It is required that a custom Angular Builder found or made that can properly package this content.

## **Core Library**

This library will contain all standard core business models, validators, services etc. that will be consumed in other Republic Angular applications.

To build use `ng build core`

To package and publish go to the `/libs/core` root and run `gitpkg publish`

To consume in other projects you get the tag name that was published in the **design-core** git repo (example: *rsi-core-v0.0.1-gitpkg*) add to the `package.json`

```json
{
  "@rsi/components": "git@github.com:RepublicServicesRepository/design-core.git#rsi-core-v0.0.1-gitpkg"
}
```
