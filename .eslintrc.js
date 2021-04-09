const path = require('path')

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    es2021: true,
  },
  extends: [
    'airbnb-base/legacy',
    'eslint:recommended',
  ],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        paths: [
          path.resolve(__dirname, '.'),
        ],
      },
    },
  },
  rules: {
    // basic
    'accessor-pairs': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'max-len': ['error', 120],
    'no-bitwise': 0,
    'no-console': ['error'],
    'no-underscore-dangle': 0,
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
