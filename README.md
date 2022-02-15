To reproduce the bug run the following:

```bash
yarn eslint src/App.js
```

It will throw the following error:

```
Oops! Something went wrong! :(

ESLint: 8.9.0

CssSyntaxError: eslint-plugin-postcss-modules-cra-bug/src/App.module.scss:1:1: Unexpected '/'. Escaping special characters with \ may help.
```
