/**
 * @fileoverview Tailwind CSS configuration for the web application
 *
 * This configuration extends the shared styles package configuration
 * and adds app-specific customizations.
 */

const { tailwindConfig } = require('@repo/styles');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig,
  content: [
    // Include the shared styles package content paths
    ...tailwindConfig.content,
    // Add app-specific content paths
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      // Add app-specific theme extensions here
      fontFamily: {
        ...tailwindConfig.theme.extend.fontFamily,
        // Add app-specific fonts
        sans: ['var(--font-geist-sans)', ...tailwindConfig.theme.extend.fontFamily.sans],
      },
    },
  },
};