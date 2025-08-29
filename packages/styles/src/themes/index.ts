/**
 * Theme System Configuration
 *
 * Defines comprehensive theme configurations including colors, spacing,
 * typography, and other design tokens for consistent theming.
 */

import {
  baseColors,
  semanticColors,
  themeVariants,
  type ColorVariant,
} from '../colors';
import { fontFamilies, fontSizes, fontWeights } from '../fonts';
import { durations, timingFunctions } from '../animations';

// Spacing scale
export const spacing = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  80: '20rem', // 320px
  96: '24rem', // 384px
} as const;

// Border radius scale
export const borderRadius = {
  none: '0px',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Shadow scale
export const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '2xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  none: '0 0 #0000',
} as const;

// Z-index scale
export const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  // Common UI layers
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modal: '1040',
  popover: '1050',
  tooltip: '1060',
  toast: '1070',
} as const;

// Breakpoints for responsive design
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Base theme structure
export interface Theme {
  colors: {
    neutral: typeof baseColors.neutral;
    primary: typeof themeVariants.default.primary;
    secondary: typeof themeVariants.default.secondary;
    success: typeof semanticColors.success;
    warning: typeof semanticColors.warning;
    error: typeof semanticColors.error;
    info: typeof semanticColors.info;
  };
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
  zIndex: typeof zIndex;
  breakpoints: typeof breakpoints;
  fontFamily: typeof fontFamilies;
  fontSize: typeof fontSizes;
  fontWeight: typeof fontWeights;
  transitionDuration: typeof durations;
  transitionTimingFunction: typeof timingFunctions;
}

// Create theme function
export function createTheme(variant: ColorVariant = 'default'): Theme {
  return {
    colors: {
      neutral: baseColors.neutral,
      primary: themeVariants[variant].primary,
      secondary: themeVariants[variant].secondary,
      success: semanticColors.success,
      warning: semanticColors.warning,
      error: semanticColors.error,
      info: semanticColors.info,
    } as Theme['colors'],
    spacing,
    borderRadius,
    shadows,
    zIndex,
    breakpoints,
    fontFamily: fontFamilies,
    fontSize: fontSizes,
    fontWeight: fontWeights,
    transitionDuration: durations,
    transitionTimingFunction: timingFunctions,
  };
}

// Pre-defined themes
export const themes = {
  default: createTheme('default'),
  purple: createTheme('purple'),
  emerald: createTheme('emerald'),
  orange: createTheme('orange'),
} as const;

// CSS custom properties for theme switching
export function generateCSSVariables(theme: Theme) {
  const cssVars: Record<string, string> = {};

  // Colors
  Object.entries(theme.colors).forEach(([colorName, colorScale]) => {
    if (typeof colorScale === 'object') {
      Object.entries(colorScale).forEach(([shade, value]) => {
        cssVars[`--color-${colorName}-${shade}`] = value;
      });
    }
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value;
  });

  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value;
  });

  return cssVars;
}

// Export default theme
export const defaultTheme = themes.default;

export type ThemeName = keyof typeof themes;
