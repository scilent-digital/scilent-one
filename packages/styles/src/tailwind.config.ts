/**
 * Comprehensive Tailwind CSS Configuration
 *
 * This configuration file extends Tailwind CSS with custom design tokens,
 * animations, utilities, and theme variants for a complete design system.
 */

import type { Config } from 'tailwindcss';
import { defaultTheme, generateCSSVariables } from './themes';
import {
  keyframes,
  animations,
  durations,
  timingFunctions,
} from './animations';
import { allUtilities } from './utilities';

const config: Config = {
  content: [
    // Include all app files
    '../../apps/**/src/**/*.{js,ts,jsx,tsx,mdx}',
    // Include other package files that might use styles
    '../**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    // Override default breakpoints
    screens: {
      xs: defaultTheme.breakpoints.xs,
      sm: defaultTheme.breakpoints.sm,
      md: defaultTheme.breakpoints.md,
      lg: defaultTheme.breakpoints.lg,
      xl: defaultTheme.breakpoints.xl,
      '2xl': defaultTheme.breakpoints['2xl'],
    },

    extend: {
      // Colors from our theme system
      colors: {
        // Semantic colors using CSS variables for theme switching
        background: 'var(--color-neutral-50)',
        foreground: 'var(--color-neutral-900)',

        // Primary colors
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          DEFAULT: 'var(--color-primary-500)',
        },

        // Secondary colors
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
          DEFAULT: 'var(--color-secondary-500)',
        },

        // Neutral grays
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)',
          DEFAULT: 'var(--color-neutral-500)',
        },

        // Semantic colors
        success: {
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
          950: 'var(--color-success-950)',
          DEFAULT: 'var(--color-success-500)',
        },

        warning: {
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
          950: 'var(--color-warning-950)',
          DEFAULT: 'var(--color-warning-500)',
        },

        error: {
          50: 'var(--color-error-50)',
          100: 'var(--color-error-100)',
          200: 'var(--color-error-200)',
          300: 'var(--color-error-300)',
          400: 'var(--color-error-400)',
          500: 'var(--color-error-500)',
          600: 'var(--color-error-600)',
          700: 'var(--color-error-700)',
          800: 'var(--color-error-800)',
          900: 'var(--color-error-900)',
          950: 'var(--color-error-950)',
          DEFAULT: 'var(--color-error-500)',
        },

        info: {
          50: 'var(--color-info-50)',
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
          800: 'var(--color-info-800)',
          900: 'var(--color-info-900)',
          950: 'var(--color-info-950)',
          DEFAULT: 'var(--color-info-500)',
        },
      },

      // Font families from our font system
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
        serif: defaultTheme.fontFamily.serif,
        mono: defaultTheme.fontFamily.mono,
        display: defaultTheme.fontFamily.display,
      },

      // Extended font sizes with line heights
      fontSize: {
        xs: defaultTheme.fontSize.xs,
        sm: defaultTheme.fontSize.sm,
        base: defaultTheme.fontSize.base,
        lg: defaultTheme.fontSize.lg,
        xl: defaultTheme.fontSize.xl,
        '2xl': defaultTheme.fontSize['2xl'],
        '3xl': defaultTheme.fontSize['3xl'],
        '4xl': defaultTheme.fontSize['4xl'],
        '5xl': defaultTheme.fontSize['5xl'],
        '6xl': defaultTheme.fontSize['6xl'],
        '7xl': defaultTheme.fontSize['7xl'],
        '8xl': defaultTheme.fontSize['8xl'],
        '9xl': defaultTheme.fontSize['9xl'],
      },

      // Extended spacing scale
      spacing: defaultTheme.spacing,

      // Border radius scale
      borderRadius: defaultTheme.borderRadius,

      // Box shadow scale
      boxShadow: defaultTheme.shadows,

      // Z-index scale
      zIndex: defaultTheme.zIndex,

      // Animation keyframes
      keyframes,

      // Animation definitions
      animation: {
        // Tailwind defaults
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',

        // Custom animations
        'fade-in': animations['fade-in'],
        'slide-in-right': animations['slide-in-right'],
        'slide-in-left': animations['slide-in-left'],
        'slide-in-up': animations['slide-in-up'],
        'slide-in-down': animations['slide-in-down'],
        'scale-in': animations['scale-in'],
        'bounce-in': animations['bounce-in'],
        'fade-out': animations['fade-out'],
        'scale-out': animations['scale-out'],
        'spin-slow': animations['spin-slow'],
        'pulse-subtle': animations['pulse-subtle'],
        'pulse-scale': animations['pulse-scale'],
        float: animations['float'],
        glow: animations['glow'],
        'gradient-shift': animations['gradient-shift'],
        shake: animations['shake'],
      },

      // Transition durations
      transitionDuration: {
        ...durations,
        // Tailwind defaults
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },

      // Transition timing functions
      transitionTimingFunction: timingFunctions,

      // Backdrop blur
      backdropBlur: {
        xs: 'blur(2px)',
        sm: 'blur(4px)',
        md: 'blur(8px)',
        lg: 'blur(12px)',
        xl: 'blur(16px)',
        '2xl': 'blur(24px)',
        '3xl': 'blur(32px)',
      },
    },
  },

  plugins: [
    // Plugin to add custom utilities
    function ({ addUtilities }) {
      addUtilities(allUtilities);
    },

    // Plugin to add CSS variables for theming
    function ({ addBase }) {
      addBase({
        ':root': generateCSSVariables(defaultTheme),
      });
    },

    // Plugin for dark mode theme variables
    function ({ addBase }) {
      addBase({
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--color-neutral-50': '#0a0a0a',
            '--color-neutral-100': '#171717',
            '--color-neutral-200': '#262626',
            '--color-neutral-300': '#404040',
            '--color-neutral-400': '#525252',
            '--color-neutral-500': '#737373',
            '--color-neutral-600': '#a3a3a3',
            '--color-neutral-700': '#d4d4d4',
            '--color-neutral-800': '#e5e5e5',
            '--color-neutral-900': '#f5f5f5',
            '--color-neutral-950': '#fafafa',
          },
        },
      });
    },
  ],

  // Dark mode configuration
  darkMode: ['class', 'media'],
};

export default config;
