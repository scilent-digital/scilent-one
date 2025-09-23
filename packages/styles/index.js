/**
 * @fileoverview Main entry point for the styles package
 *
 * This file exports all the utilities, configurations, and theme definitions
 * from the styles package, providing a single entry point for consumers.
 */

// Export Tailwind configuration
export { default as tailwindConfig } from './tailwind';

// Export design tokens
export { default as tokens, cssVariables, hexToRgb, rgbToHex, getCSSVariable } from './tokens';

// Export utility functions
export { default as utils, cn, cssVar, responsiveCSSVar } from './utils';

// Export themes
export {
  lightTheme,
  darkTheme,
  themes,
  getTheme,
  getThemeNames,
  getDefaultTheme,
  hasTheme,
  applyTheme,
  removeTheme,
  toggleTheme,
  getCurrentTheme,
} from './themes';

// Re-export commonly used dependencies
export { clsx } from 'clsx';
export { twMerge } from 'tailwind-merge';
export { cva } from 'class-variance-authority';

/**
 * Initialize the styles package
 *
 * This function can be called to initialize the styles package
 * with default configurations and apply the default theme.
 *
 * @param {Object} [options] - Initialization options
 * @param {string} [options.defaultTheme='light'] - Default theme to apply
 * @param {boolean} [options.autoApply=true] - Whether to automatically apply the theme
 */
export function init(options = {}) {
  const { defaultTheme = 'light', autoApply = true } = options;

  if (autoApply && typeof document !== 'undefined') {
    applyTheme(defaultTheme);
  }

  // Log initialization
  console.log(`🎨 Styles package initialized with theme: ${defaultTheme}`);
}

/**
 * Version information
 */
export const version = '0.1.0';

/**
 * Package information
 */
export const info = {
  name: '@repo/styles',
  version,
  description: 'Shared design system and styling configuration with Tailwind CSS',
  repository: 'https://github.com/your-org/scilent-one',
  license: 'MIT',
};

export default {
  init,
  info,
  version,
};