module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    process: true,
  },
  ignorePatterns: ['src/main/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: {
      include: ['./tsconfig.eslint.json', 'cypress/**/*.ts', 'cypress/**/*.tsx'],
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'jsx-a11y'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'default-param-last': 'off',
    'global-require': 'off',
    'import/extensions': 'off', // NOTE this is explicitly turned off due to performance reasons. TypeScript is already doing these checks.
    'import/no-cycle': 'off', // NOTE this is explicitly turned off due to performance reasons. We already do the same check by using madge.
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['.'],
        peerDependencies: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-invalid-this': 'off',
    'no-shadow': 'off',
    'no-tabs': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__DATA__', '_KEY', '__typename'],
      },
    ],
    'no-unexpected-multiline': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'let'] },
      { blankLine: 'always', next: ['const', 'let'], prev: '*' },
      {
        blankLine: 'any',
        next: ['singleline-const', 'singleline-let'],
        prev: ['singleline-const', 'singleline-let'],
      },
      { blankLine: 'always', next: '*', prev: 'directive' },
      { blankLine: 'any', next: 'directive', prev: 'directive' },
      { blankLine: 'always', next: 'block-like', prev: '*' },
      { blankLine: 'always', next: '*', prev: 'block-like' },
      { blankLine: 'always', next: '*', prev: ['multiline-expression'] },
      { blankLine: 'always', next: ['multiline-expression'], prev: '*' },
    ],
    'react/display-name': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'off',
    /* This is a temporary fix for react-three-fiber components */
    'react/no-unknown-property': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unused-prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sort-keys': ['warn', 'asc', { natural: true }],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['mjs', 'js', 'ts', 'tsx'],
      },
      typescript: {
        project: '.',
      },
    },
    react: {
      version: 'detect',
    },
  },
}
