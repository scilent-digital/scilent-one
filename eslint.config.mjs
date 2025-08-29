import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/**
 * Root ESLint configuration for the monorepo
 * Uses the shared base configuration from @repo/tooling
 */

// Import the base configuration
const baseConfigs = require('@repo/tooling/eslint/base');

const eslintConfig = [
  ...baseConfigs,
  {
    name: "monorepo/root-specific",
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Monorepo-specific rules can be added here
    },
  },
];

export default eslintConfig;