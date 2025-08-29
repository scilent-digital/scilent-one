/**
 * Light theme configuration
 * Maps semantic color names to specific color values for light mode
 */

const { semanticColors } = require('../tokens/colors');

const lightTheme = {
  // Background colors
  background: {
    primary: semanticColors.background[50],     // Main app background
    secondary: semanticColors.background[100],  // Cards, panels
    tertiary: semanticColors.background[200],   // Subtle backgrounds
    inverse: semanticColors.background[900],    // Dark elements in light theme
  },

  // Surface colors (for cards, modals, etc.)
  surface: {
    primary: '#ffffff',                         // White surfaces
    secondary: semanticColors.surface[50],      // Subtle surface
    tertiary: semanticColors.surface[100],      // Even more subtle
    elevated: '#ffffff',                        // Elevated surfaces (modals)
  },

  // Text colors
  text: {
    primary: semanticColors.text[900],          // Main text
    secondary: semanticColors.text[700],        // Secondary text
    tertiary: semanticColors.text[500],         // Subtle text
    disabled: semanticColors.text[400],         // Disabled text
    inverse: semanticColors.text[50],           // Text on dark backgrounds
    link: semanticColors.primary[600],          // Links
    linkHover: semanticColors.primary[700],     // Hovered links
  },

  // Border colors
  border: {
    primary: semanticColors.border[200],        // Default borders
    secondary: semanticColors.border[300],      // Stronger borders
    tertiary: semanticColors.border[400],       // Even stronger
    focus: semanticColors.primary[500],         // Focus rings
    error: semanticColors.error[300],           // Error borders
    success: semanticColors.success[300],       // Success borders
    warning: semanticColors.warning[300],       // Warning borders
  },

  // Brand colors
  brand: {
    primary: semanticColors.primary[600],       // Main brand color
    primaryHover: semanticColors.primary[700],  // Hovered brand color
    primaryActive: semanticColors.primary[800], // Active brand color
    secondary: semanticColors.primary[100],     // Light brand color
  },

  // State colors
  state: {
    success: semanticColors.success[600],
    successBg: semanticColors.success[50],
    successBorder: semanticColors.success[200],
    
    warning: semanticColors.warning[600],
    warningBg: semanticColors.warning[50],
    warningBorder: semanticColors.warning[200],
    
    error: semanticColors.error[600],
    errorBg: semanticColors.error[50],
    errorBorder: semanticColors.error[200],
    
    info: semanticColors.info[600],
    infoBg: semanticColors.info[50],
    infoBorder: semanticColors.info[200],
  },

  // Interactive states
  interactive: {
    hover: semanticColors.neutral[100],         // Hover backgrounds
    active: semanticColors.neutral[200],        // Active backgrounds
    focus: semanticColors.primary[500],         // Focus indicators
    disabled: semanticColors.neutral[300],      // Disabled backgrounds
  },
};

module.exports = lightTheme;