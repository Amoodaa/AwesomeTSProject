module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', '@react-native-community', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/state-in-constructor': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-throw-literal': 0,
    'no-unused-vars': ['error', {args: 'none'}],
  },
};
