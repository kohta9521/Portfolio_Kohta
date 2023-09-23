module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: '@typescript-eslint/parser',
  rules: {},
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
}
