# Contributing to Project POS

All forms of contributions are welcome and appreciated. Refer to the Table of Contents for various ways to assist and details on how this project manages them. Be sure to read the pertinent section before contributing.

## Table of Contents

-   Making a branch (Github)
-   How to work with git?
-   Pull requests
-   Github issues
-   Adding a new library
-   Coding Practices (Style Guide)

## Making a branch (Gitflow)

### Naming a branch

When naming your branch, follow this format: start with a description of the task you're working on, then add a `/` and specify the component. e.g (`feature/charts`)

Use these keywords:

-   `feature` for a new feature branch.
-   `refactor` when modifying a branch for code optimization.
-   `fix` for addressing a bug within that branch.
-   `docs` for any changes linked to documentation.

### `master` branch

-   this serves as our primary branch where all features and code adjustments are merged. (Don't work in your master branch)

### `feature` branches (in your own repos)

-   these branches are intended for developing new features.
-   once ready, they will be merged into the `main` branch.

### `refactor` branches (in your own repos)

-   for refactoring or enhancing specific features within the `develop` branch.

### `fix` branches (in your own repos)

-   for addressing and fixing bugs within the `develop` branch.

## How to work with git?

-   Make a new branch for every feature you're working on. (This ensures that you can do lots of small, independent pull requests instead of one big one with complete different features)
-   Don't use the online edit function of github (this only creates ugly and not working commits!)

-   Aim for well-organized commits with clear, readable, and detailed **commit messages**, following our format:

    ```css
    docs(github): added description in pull request template;
    ```

You can also check this out for more [commit message guide](https://github.com/RomuloOliveira/commit-messages-guide).

-   Make small pull requests that are easy to review but make sure they do add value by themselves / individually

## Pull requests

-   When creating a new pull request, please make sure to utilize and complete our pull request template available in the .github directory.

```css
.github/
    -- PULL_REQUEST_TEMPLATE/
        --PULL_REQUEST_TEMPLATE.md
```

-   the commit series in the PR should be _linear_ (it **should not contain merge commits**). This is necessary because we want to be able to bisect bugs easily. Rewrite history/perform a rebase if necessary

-   PRs **should not have conflicts** with master branch. If there are, please resolve them rebasing and force-pushing

## Github issues

Upon creating a new `branch` and `pull request`, it's essential to also generate a new `GitHub issue` within the **Projects tab**. This issue should be directly associated with the branch you're currently working on.

Additionally, ensure that the pull request is linked to this newly created GitHub issue. This practice enables all project contributors to have clear visibility into the ongoing tasks and their corresponding progress.

### Submitting a Feature Request

When submitting a feature request, please ensure to:

-   Add a clear and concise description of what the problem is
-   Describe the solution you would like
-   Mention any alternative approaches you may have already explored.
-   Whenever applicable, include relevant screenshots

### Submitting a bug report

-   Please be polite, we all are humans and problems can occur.
-   Please add as much information as possible, for example
  -   client os(s) and version(s)
    -   browser(s) and version(s), is the problem reproducible on different clients
    -   special environments like firewalls or antivirus
  -   host os and version
    -   npm and nodejs version
    -   Logfiles if available
  -   steps to reproduce
  -   what you expected to happen
  -   what actually happened

## Adding a new library

-   Is your feature/task dependent on a new library? Please initiate a discussion via a **Pull Request (PR)** or on **Github Issues**, as this addition could potentially impact existing libraries within our codebase.

## Coding Practices (Style Guide)

Explore our comprehensive style guide in the `STYLE_GUIDE.md` document.
