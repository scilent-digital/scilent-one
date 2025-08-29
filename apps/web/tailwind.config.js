/**
 * Tailwind CSS configuration for the web app
 * Uses the shared Next.js configuration from @repo/styles
 */

const nextjsConfig = require('@repo/styles/tailwind/nextjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...nextjsConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...nextjsConfig.theme,
    extend: {
      ...nextjsConfig.theme.extend,
      // App-specific theme extensions can go here
    },
  },
};