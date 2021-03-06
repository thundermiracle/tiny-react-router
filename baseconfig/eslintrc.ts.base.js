const eslintrcBaseConfig = require('./eslintrc.base');

const extendsLibs = [
  ...eslintrcBaseConfig.extends,
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
];

const plugins = [...eslintrcBaseConfig.plugins, '@typescript-eslint'];

const rules = {
  ...eslintrcBaseConfig.rules,
  'import/extensions': [
    'error',
    'always',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
};

module.exports = {
  ...eslintrcBaseConfig,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: extendsLibs,
  plugins,
  rules,
};
