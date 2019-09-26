# tslint-config

Republic Services TSLint code formatting/style rules.

## Contributing

This repository requires the [Conventional Commits](https://www.conventionalcommits.org) commit style. All commits must strictly adhere to these conventions.

This package will be automatically versioned and published, and the CHANGELOG will be automatically generated as part of that process. The process is completely dependent upon good/correctly-written commit messages, so it's very important to stick to the convention.

Please do not modify `CHANGELOG.md` and do not manually change the package version number (this includes using `npm version`).

## Commit types

Using the aforementioned Conventional Commits practices as the baseline, the following describes appropriate uses of each commit _type_.

The following are generic examples and you _should try not_ to stray from these general concepts, but when in doubt you should consult a Staff Engineer, Senior Developer, and other team members to get feedback on what would be the most appropriate, especially when deciding if something is a BREAKING CHANGE. Carefully consider how your changes will impact not just the project you're working on, but others teams as well who are using this package in their own projects.

### When to use `chore`

* Any changes that **do not** modify `index.js`

**Do not** include changes to `index.js` in commits of this type. Commit `index.js` separately using one of the following types.

### When to use `fix`

* Only when modifying `index.js`
* **and** your change fixes an issue, bug, or unexpected behavior of any existing rule(s).

**Do not** include changes to other files in commits of this type.

### When to use `feat`

* Only when modifying `index.js`
* **and** your change adds a _new_ rule
* **and** does not modify an existing rule

**Do not** include changes to other files in commits of this type.

### When to use `BREAKING CHANGE`

The phrase `BREAKING CHANGE` (exactly as it appears) should be added in the **body** of your commit message when

* Only when modifying `index.js`
* **and** your change _inverts_ an existing rule (i.e. the rule existed and was `false` and was then changed to `true`)
* **and** the rule being inverted was previously published in any earlier version (in other words, it's not a breaking change if the rule hadn't yet been published)
* **and** must be followed by a description of why the change is being made

**Both** `fix` and `feat` are allowed to be breaking changes.

For example:

```
feat: invert no-construct

BREAKING CHANGE: no-construct needs to be inverted in order to
support XYZ blah blah example explanation
```

**Do not** include changes to other files in commits of this type.
