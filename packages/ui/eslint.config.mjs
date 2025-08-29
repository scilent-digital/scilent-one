import reactConfig from '@repo/tooling/eslint/react';

export default [
  ...reactConfig,
  {
    rules: {
      // Allow console in development components
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
];