# Siren.js API Browser

## Development

```sh
# install dependencies
$ pnpm install

# run the app locally in development mode
$ pnpm dev
# or
$ pnpm start
# the page will automatically reload as you make edits

# build the app for production to the `dist` folder
$ pnpm build
```

## Deployment

Any `push` to `main` kicks off [the GitHub action](https://github.com/siren-js/api-browser/actions/workflows/deploy.yaml) that builds the app and deploys it to [GitHub pages](https://github.com/siren-js/api-browser/deployments).
