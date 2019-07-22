module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    quotes: ['error', 'single'],
    'no-console': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', 'always']
  }

  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true
  //   }
  // },
  // env: {
  //   browser: true,
  //   node: true,
  //   jest: true,
  // },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:react/recommended',
  // ],
  // settings: {
  //   react: {
  //     version: 'detect'
  //   }
  // },
  // rules: {
  //   semi: ['error', 'never'],
  //   quotes: ['error', 'single'],
  //   'no-console': 'off',
  //   'jsx-quotes': ['error', 'prefer-single']
  // }
}