module.exports = {
  root: true,
  extends: 'airbnb',
  /* rules: {
    'sort-keys': 'off',
    //"prettier/prettier": "off",
    'no-console': 'warn'
  }, */
  rules: {
    eqeqeq: 'off',
    curly: 'error',
    quotes: ['error', 'single'],
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unescaped-entities': 'off',
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    // 'jest/globals': true,
  },
};
