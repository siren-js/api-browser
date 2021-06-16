# Contribution Guidelines

Thank you for taking the time and consideration to contribute to [Siren.js]!

[siren.js]: https://github.com/siren-js

This document outlines our guidelines for contributing to this repository, which
is part of the Siren.js project. Following these guidelines helps communicate
that you respect the time of the developers managing and developing this open
source project. In return, they should reciprocate that respect in addressing
your issue, assessing changes, and helping you finalize your pull requests.
Check out the [Code of Conduct](CODE_OF_CONDUCT.md) to learn about our core
values and norms.

If you have feedback or questions, your contribution has been sitting for a
while, you need help, or would like to talk through a contribution, feel free to
join the [Google Group][gg]!

[gg]: https://groups.google.com/g/sirenjs

> First time contributing to open source? You can learn how from this _free_
> video series: [How to Contribute to an Open Source Project on GitHub][course].

[course]: https://kcd.im/pull-request

## Bugs and Feature Requests

If you find a bug or would like to request a new feature, be sure to check out
the current list of [issues]. If you can't find anything, feel free to
[create a new one][create-issue].

[issues]: https://github.com/siren-js/api-browser/issues
[create-issue]: https://github.com/siren-js/api-browser/issues/new

## Pull Requests

If you'd like to contribute a change, follow these steps:

1. Fork the repository.
1. Clone your fork.
1. Create a branch.
1. Make and commit your changes (see [Development](#development)).
   - Be sure to update the [changelog](CHANGELOG.md).
   - If you're making code changes, be sure to write tests!
1. Push your changes to your fork.
1. If your build is passing, create a pull request.
1. Wait for a review and make changes as requested.
1. Get merged!

## Development

Setup is simple. `cd` into the project directory and run `npm install`. Now
you're ready to code!

In the project directory, you can run the following commands

- `npm start` - Runs the app in the development mode. Open
  <http://localhost:3000> to view it in the browser. The page will reload if you
  make edits. You will also see any lint errors in the console.
- `npm test` - Launches the test runner in the interactive watch mode. See the
  section about [running tests][testing] for more information.
- `npm run build` - Builds the app for production to the `build` folder. It
  correctly bundles React in production mode and optimizes the build for the
  best performance.

  The build is minified and the filenames include the hashes. Your app is ready
  to be deployed!

  See the section about [deployment] for more information.

[testing]: https://facebook.github.io/create-react-app/docs/running-tests
[deployment]: https://facebook.github.io/create-react-app/docs/deployment

This project uses [SemVer](https://semver.org/). When making code changes, be
sure to increment the version accordingly with the
[`npm version` command][npm-version]. We recommend using the
`--no-git-tag-version` option to avoid potential issues.

[npm-version]: https://docs.npmjs.com/cli/v7/commands/npm-version
