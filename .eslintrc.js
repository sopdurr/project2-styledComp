module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "arrow-body-style": 0,
    "no-console": 0,
    "react/prop-types": 0,
    "no-unused-vars": 0,
    "react/jsx-no-bind": 0,
    radix: 0
  },
};
