import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

/**
 * Base ESLint configuration for TypeScript projects (ES Module version)
 * Flat config format for ESLint 9+
 *
 * TODO: [DEPENDENCY_AUDIT] This file was migrated to ESLint 9 flat config format.
 * The import plugin may have compatibility issues with ESLint 9.
 * Consider using eslint-plugin-import-x as a more maintained alternative.
 */

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    name: 'base-esm/javascript',
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    name: 'base-esm/typescript',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
    },
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

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
      'import/no-duplicates': 'error',

      // General rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',

      // Disable conflicting rules
      'no-unused-vars': 'off',
    },
  },
  {
    name: 'base-esm/ignores',
    ignores: [
      'dist/',
      'build/',
      '.next/',
      'out/',
      'coverage/',
      'node_modules/',
      '*.min.js',
      '*.min.css',
      '.turbo/',
      '.cache/',
    ],
  },
];

export default config;
