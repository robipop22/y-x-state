module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  // We're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to
  // set the jest version explicitly.
  settings: {
    jest: {
      version: 27,
    },
  },
  globals: {
    window: true,
    module: true,
  },
};
