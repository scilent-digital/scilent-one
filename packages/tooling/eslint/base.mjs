import { resolve } from 'node:path';

/**
 * Base ESLint configuration for TypeScript projects (ES Module version)
 * This configuration provides sensible defaults for any TypeScript project
 */

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
const config = {
  languageOptions: {
    parser: await import('@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project,
    },
    globals: {
      console: 'readonly',
      process: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': await import('@typescript-eslint/eslint-plugin'),
    import: await import('eslint-plugin-import'),
  },
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',
    '@typescript-eslint/no-var-requires': 'error',

    // Import rules
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',

    // General rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',
  },
};

export default config;
