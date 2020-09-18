module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': [
      0,
      { ignore: 'ignore', customValidators: 'customValidator' },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
  },
};
