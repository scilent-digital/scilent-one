/**
 * Dark theme configuration
 * Maps semantic color names to specific color values for dark mode
 */

const { semanticColors } = require('../tokens/colors');

const darkTheme = {
  // Background colors
  background: {
    primary: semanticColors.background[950],    // Main app background
    secondary: semanticColors.background[900],  // Cards, panels
    tertiary: semanticColors.background[800],   // Subtle backgrounds
    inverse: semanticColors.background[50],     // Light elements in dark theme
  },

  // Surface colors (for cards, modals, etc.)
  surface: {
    primary: semanticColors.surface[900],       // Dark surfaces
    secondary: semanticColors.surface[800],     // Subtle surface
    tertiary: semanticColors.surface[700],      // Even more subtle
    elevated: semanticColors.surface[800],      // Elevated surfaces (modals)
  },

  // Text colors
  text: {
    primary: semanticColors.text[50],           // Main text
    secondary: semanticColors.text[200],        // Secondary text
    tertiary: semanticColors.text[400],         // Subtle text
    disabled: semanticColors.text[600],         // Disabled text
    inverse: semanticColors.text[900],          // Text on light backgrounds
    link: semanticColors.primary[400],          // Links
    linkHover: semanticColors.primary[300],     // Hovered links
  },

  // Border colors
  border: {
    primary: semanticColors.border[800],        // Default borders
    secondary: semanticColors.border[700],      // Stronger borders
    tertiary: semanticColors.border[600],       // Even stronger
    focus: semanticColors.primary[400],         // Focus rings
    error: semanticColors.error[400],           // Error borders
    success: semanticColors.success[400],       // Success borders
    warning: semanticColors.warning[400],       // Warning borders
  },

  // Brand colors
  brand: {
    primary: semanticColors.primary[500],       // Main brand color
    primaryHover: semanticColors.primary[400],  // Hovered brand color
    primaryActive: semanticColors.primary[300], // Active brand color
    secondary: semanticColors.primary[900],     // Dark brand color
  },

  // State colors
  state: {
    success: semanticColors.success[400],
    successBg: semanticColors.success[950],
    successBorder: semanticColors.success[800],
    
    warning: semanticColors.warning[400],
    warningBg: semanticColors.warning[950],
    warningBorder: semanticColors.warning[800],
    
    error: semanticColors.error[400],
    errorBg: semanticColors.error[950],
    errorBorder: semanticColors.error[800],
    
    info: semanticColors.info[400],
    infoBg: semanticColors.info[950],
    infoBorder: semanticColors.info[800],
  },

  // Interactive states
  interactive: {
    hover: semanticColors.neutral[800],         // Hover backgrounds
    active: semanticColors.neutral[700],        // Active backgrounds
    focus: semanticColors.primary[400],         // Focus indicators
    disabled: semanticColors.neutral[700],      // Disabled backgrounds
  },
};

module.exports = darkTheme;