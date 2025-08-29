/**
 * @repo/styles - Comprehensive design system and Tailwind CSS configuration
 *
 * This package provides shared design tokens, themes, and Tailwind configurations
 * for consistent styling across the monorepo.
 *
 * @see https://github.com/your-org/monorepo/tree/main/packages/styles
 */

// Re-export all configurations for convenience
module.exports = {
  // Tailwind configurations
  tailwind: require('./tailwind'),
  
  // Design tokens
  tokens: require('./tokens'),
  
  // Themes
  themes: require('./themes'),
  
  // Utility functions
  utils: {
    generateCSSVariables: require('./themes').generateCSSVariables,
    generateTailwindTheme: require('./themes').generateTailwindTheme,
  },
};

// Also export individual configurations for tree-shaking
module.exports.tailwindBase = require('./tailwind/base');
module.exports.tailwindNextjs = require('./tailwind/nextjs');
module.exports.tokens = require('./tokens');
module.exports.lightTheme = require('./themes/light');
module.exports.darkTheme = require('./themes/dark');