module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add or customize ESLint rules here
    'no-restricted-globals': ['error', 'self'],
  },
  globals: {
    self: 'readonly', // Allow the use of 'self'
    // Other global variables
  },
};
