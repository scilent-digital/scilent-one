/**
 * Base Tailwind CSS configuration
 * Provides core design system configuration without framework-specific optimizations
 */

const { typography } = require('../tokens/typography');
const { spacing, borderRadius, boxShadow } = require('../tokens/spacing');
const { colors } = require('../tokens/colors');
const { generateTailwindTheme } = require('../themes');

/** @type {import('tailwindcss').Config} */
const baseConfig = {
  content: [
    // Default content paths - should be overridden in consuming projects
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // Color system
      colors: {
        // Raw color tokens (always available)
        ...colors,
        
        // Theme-aware semantic colors (use CSS variables)
        ...generateTailwindTheme().colors,
        
        // Legacy support for existing code
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },

      // Typography
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,

      // Spacing
      spacing: spacing,
      borderRadius: borderRadius,
      boxShadow: boxShadow,

      // Animations and transitions
      transitionDuration: {
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },

      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },

      // Custom utilities
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-in-up': 'slideInUp 0.3s ease-out',
        'slide-in-down': 'slideInDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      // Container queries
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      // Screen sizes
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },

  plugins: [
    // Add custom utilities
    function({ addUtilities, addComponents, theme }) {
      // Custom component classes
      addComponents({
        // Button variants
        '.btn': {
          '@apply inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:pointer-events-none disabled:opacity-50': {},
        },
        '.btn-primary': {
          '@apply bg-brand-primary text-text-inverse hover:bg-brand-primary-hover active:bg-brand-primary-active': {},
        },
        '.btn-secondary': {
          '@apply bg-surface-secondary text-text-primary border border-border-primary hover:bg-interactive-hover': {},
        },
        '.btn-ghost': {
          '@apply text-text-primary hover:bg-interactive-hover active:bg-interactive-active': {},
        },

        // Card variants
        '.card': {
          '@apply bg-surface-primary border border-border-primary rounded-lg shadow-sm': {},
        },
        '.card-elevated': {
          '@apply bg-surface-elevated border border-border-primary rounded-lg shadow-lg': {},
        },

        // Input variants
        '.input': {
          '@apply flex h-10 w-full rounded-md border border-border-primary bg-surface-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:cursor-not-allowed disabled:opacity-50': {},
        },
      });

      // Custom utilities
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
      });
    },
  ],
};

module.exports = baseConfig;