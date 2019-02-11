# Contributing

Standards and adherance to those standards are important in general, but also *extremely important* in this code base, due to the nature of how this code is shared by multiple projects within our organization.

Please take the time to read, understand, and follow all of the Standards, not limited to those mentioned in this document.

## Git Commits

Commits *must follow* our [Commit Guidelines](https://republicservices.atlassian.net/wiki/spaces/WMD/pages/33980534/Git+Workflow#GitWorkflow-Makingacommit). Please make sure all of your commits follow these guidelines, or your Pull Request (PR) *will be rejected*.

> ⚠ **Do not** bypass any automatic checks

## GitHub Pull Requests

Pull Requests must also follow the same guidelines as Commits. See above.

All code changes must be *linted* and *unit-tested*. Do not bypass any automated linting or tests when committing or when pushing your branch. Doing so will only cause extra work for those reviewing your code and cause your PR process to take longer while you go back and fix any issues that arose from skipping any of the automated processes.

## Code Reviews

All PRs must be reviewed and approved by *at least three (3)* core contributors in order to maintain and ensure code quality and test coverage standards are met.

For Angular code contributions, that means at least three (3) *Angular developers* from the Digital Platform team must review and approve the PR before merging.

For Sass (SCSS) contributions, any three (3) developers can approve your changes, but [Bob Laudner (@blaudner)](https://github.com/blaudner) must also sign off and approve your PR before merging. This is in order to maintain and ensure proper adherence to the Design Standards.

> ⚠ Failure to observe the above requirements can result in your PR being rejected, or (worst case) your changes being reverted if they were merged but do not meet our standards.

## FAQ

See also [Conventional Commits FAQ](https://www.conventionalcommits.org/en/v1.0.0-beta.3/#faq)

### 1. **Why are the rules so strict in this project?**

Since this project will (ideally) be updated by many people all across the Republic Services organization, it is especially important to have strict standards and processes to ensure homogeneity throughout the project. While this does mean you have to adhere to stricter standards than you may be used to, or "jump through hoops" to some degree, that extra bit of work pays off in the long term to help us *move fast* with varied contributors.

### 2. Why do I need to follow the [Conventional Commits](https://conventionalcommits.org) guidelines?

By using a very specific convention for all Git commits, we can

* Make sure commits all look the same no matter who committed (this makes reviewing commit history much easier)
* Automate changelog information based on the commit message convention
* Automate versioning of components based on the commit message convention
* [(read more)](https://www.conventionalcommits.org/en/v1.0.0-beta.3/#why-use-conventional-commits)

### 3. Why are three approvals required?

This helps make sure a reasonable number of developers have reviewed your contribution and determined it to be concrete enough to be merged. This helps us narrow the window for defects or bad code to slip through.

### 4. Why do I need to get approvals again when I push new commits? / Why does GitHub "dismiss stale reviews" when I push new commits? / What is a "stale review"?

See FAQ #3 above. If you have had approvals signing off on your code and then you add *more changes* (new commits), there is the potential that your new commits introduce new defects or security concerns that haven't been addressed by the "stale" reviews. It is therefore necessary to go through the review process again to ensure the new changes are acceptable.

*"Stale review(s)"* refers to the fact that the review(s) on the Pull Request refer to code that *may have changed* since the review was submitted. The review is now "stale" when new changes (commits) are introduced.
