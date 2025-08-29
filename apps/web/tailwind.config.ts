/**
 * Next.js App Tailwind Configuration
 * 
 * This configuration extends the base styles package configuration
 * and adds app-specific customizations.
 */

import type { Config } from 'tailwindcss';
import baseConfig from '@repo/styles/tailwind.config';

const config: Config = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Include styles package content
    "../../packages/styles/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      // Add app-specific theme extensions here
    },
  },
  plugins: [
    ...(baseConfig.plugins || []),
    // Add app-specific plugins here
  ],
};

export default config;