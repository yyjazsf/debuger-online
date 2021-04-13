export default {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:jest/recommended',
    'airbnb-typescript',
    'prettier',
  ],
};
