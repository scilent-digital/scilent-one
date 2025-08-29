/**
 * Font System Configuration
 * 
 * Defines typography scales, font families, and text utilities
 * for consistent typography across the application.
 */

// Font family definitions
export const fontFamilies = {
  sans: [
    'Inter',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  serif: [
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
  mono: [
    'JetBrains Mono',
    'Fira Code',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  display: [
    'Cal Sans',
    'Inter',
    'system-ui',
    'sans-serif',
  ],
} as const;

// Font size scale with corresponding line heights
export const fontSizes = {
  xs: ['0.75rem', { lineHeight: '1rem' }],     // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],    // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],   // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  '5xl': ['3rem', { lineHeight: '1' }],           // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
  '8xl': ['6rem', { lineHeight: '1' }],           // 96px
  '9xl': ['8rem', { lineHeight: '1' }],           // 128px
} as const;

// Font weight scale
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

// Letter spacing scale
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// Typography component variants
export const typographyVariants = {
  // Display text - large hero text
  'display-1': {
    fontSize: fontSizes['6xl'][0],
    lineHeight: fontSizes['6xl'][1].lineHeight,
    fontWeight: fontWeights.black,
    letterSpacing: letterSpacing.tight,
    fontFamily: fontFamilies.display.join(', '),
  },
  'display-2': {
    fontSize: fontSizes['5xl'][0],
    lineHeight: fontSizes['5xl'][1].lineHeight,
    fontWeight: fontWeights.extrabold,
    letterSpacing: letterSpacing.tight,
    fontFamily: fontFamilies.display.join(', '),
  },
  
  // Headings
  'heading-1': {
    fontSize: fontSizes['4xl'][0],
    lineHeight: fontSizes['4xl'][1].lineHeight,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.tight,
  },
  'heading-2': {
    fontSize: fontSizes['3xl'][0],
    lineHeight: fontSizes['3xl'][1].lineHeight,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.tight,
  },
  'heading-3': {
    fontSize: fontSizes['2xl'][0],
    lineHeight: fontSizes['2xl'][1].lineHeight,
    fontWeight: fontWeights.semibold,
  },
  'heading-4': {
    fontSize: fontSizes.xl[0],
    lineHeight: fontSizes.xl[1].lineHeight,
    fontWeight: fontWeights.semibold,
  },
  'heading-5': {
    fontSize: fontSizes.lg[0],
    lineHeight: fontSizes.lg[1].lineHeight,
    fontWeight: fontWeights.medium,
  },
  'heading-6': {
    fontSize: fontSizes.base[0],
    lineHeight: fontSizes.base[1].lineHeight,
    fontWeight: fontWeights.medium,
  },
  
  // Body text
  'body-large': {
    fontSize: fontSizes.lg[0],
    lineHeight: fontSizes.lg[1].lineHeight,
    fontWeight: fontWeights.normal,
  },
  'body-base': {
    fontSize: fontSizes.base[0],
    lineHeight: fontSizes.base[1].lineHeight,
    fontWeight: fontWeights.normal,
  },
  'body-small': {
    fontSize: fontSizes.sm[0],
    lineHeight: fontSizes.sm[1].lineHeight,
    fontWeight: fontWeights.normal,
  },
  
  // Captions and labels
  caption: {
    fontSize: fontSizes.xs[0],
    lineHeight: fontSizes.xs[1].lineHeight,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase' as const,
  },
  label: {
    fontSize: fontSizes.sm[0],
    lineHeight: fontSizes.sm[1].lineHeight,
    fontWeight: fontWeights.medium,
  },
  
  // Code
  'code-inline': {
    fontSize: fontSizes.sm[0],
    lineHeight: fontSizes.sm[1].lineHeight,
    fontFamily: fontFamilies.mono.join(', '),
    fontWeight: fontWeights.medium,
  },
  'code-block': {
    fontSize: fontSizes.sm[0],
    lineHeight: '1.7',
    fontFamily: fontFamilies.mono.join(', '),
    fontWeight: fontWeights.normal,
  },
} as const;

// Export types
export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyVariant = keyof typeof typographyVariants;