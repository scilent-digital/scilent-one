/**
 * @repo/styles
 * 
 * Comprehensive design system package with Tailwind CSS configuration,
 * themes, animations, typography, and utility classes.
 * 
 * @example
 * ```typescript
 * // Import global styles in your CSS
 * @import "@repo/styles/globals.css";
 * 
 * // Extend Tailwind config
 * import baseConfig from '@repo/styles/tailwind.config';
 * 
 * // Use theme utilities
 * import { createTheme, themes } from '@repo/styles/themes';
 * ```
 */

// Re-export all modules for easier imports
export * from './colors';
export * from './fonts';
export * from './animations';
export * from './themes';
export * from './utilities';

// Export default config
export { default as tailwindConfig } from './tailwind.config';

// Version info
export const version = '0.1.0';
export const description = 'Comprehensive design system package for modern web applications';

/**
 * Package exports:
 * 
 * - `@repo/styles/globals.css` - Global CSS with Tailwind and custom styles
 * - `@repo/styles/tailwind.config` - Complete Tailwind configuration
 * - `@repo/styles/themes` - Theme system and utilities
 * - `@repo/styles/colors` - Color palette and semantic tokens
 * - `@repo/styles/animations` - Animation keyframes and utilities
 * - `@repo/styles/fonts` - Typography system and font configuration
 * - `@repo/styles/utilities` - Custom utility classes
 */