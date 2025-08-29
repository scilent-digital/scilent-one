import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/**
 * ESLint configuration for the web app
 * Uses the shared Next.js configuration from @repo/tooling
 */

// Import the Next.js configuration
const nextConfigs = require('@repo/tooling/eslint/next');

const eslintConfig = [
  ...nextConfigs,
  {
    name: 'web/app-specific',
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add any app-specific rule overrides here
      // For example:
      // 'no-console': 'warn',
    },
  },
];

export default eslintConfig;
