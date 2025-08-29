/**
 * Next.js-specific Tailwind CSS configuration
 * Extends the base configuration with Next.js optimizations and app-specific settings
 */

const baseConfig = require('./base');

/** @type {import('tailwindcss').Config} */
const nextjsConfig = {
  ...baseConfig,
  
  content: [
    // Next.js specific paths
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    
    // Include any packages that might contain components
    '../../packages/*/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      
      // Next.js specific optimizations
      animation: {
        ...baseConfig.theme.extend.animation,
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      // Enhanced typography for Next.js apps
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--text-primary)',
            '[class~="lead"]': {
              color: 'var(--text-secondary)',
            },
            strong: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            'ol > li::marker': {
              color: 'var(--text-tertiary)',
            },
            'ul > li::marker': {
              color: 'var(--text-tertiary)',
            },
            hr: {
              borderColor: 'var(--border-primary)',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            blockquote: {
              color: 'var(--text-secondary)',
              borderLeftColor: 'var(--border-secondary)',
              fontStyle: 'italic',
            },
            h1: {
              color: 'var(--text-primary)',
              fontWeight: '700',
            },
            h2: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            h3: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            code: {
              color: 'var(--text-primary)',
              backgroundColor: 'var(--surface-secondary)',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--surface-tertiary)',
              color: 'var(--text-primary)',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            a: {
              color: 'var(--text-link)',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            'a:hover': {
              color: 'var(--text-link-hover)',
            },
          },
        },
      },
    },
  },

  plugins: [
    ...baseConfig.plugins,
    
    // Next.js specific plugin for enhanced components
    function({ addComponents, theme }) {
      addComponents({
        // Next.js Image wrapper
        '.next-image': {
          '@apply relative overflow-hidden rounded-md': {},
        },

        // Next.js Link styling
        '.next-link': {
          '@apply text-text-link hover:text-text-link-hover transition-colors duration-200': {},
        },

        // Layout components
        '.page-container': {
          '@apply container mx-auto px-4 py-8 max-w-7xl': {},
        },
        
        '.section': {
          '@apply py-16 lg:py-24': {},
        },

        '.hero-section': {
          '@apply py-24 lg:py-32 text-center': {},
        },

        // Form components
        '.form-group': {
          '@apply space-y-2': {},
        },
        
        '.form-label': {
          '@apply text-sm font-medium text-text-primary': {},
        },
        
        '.form-error': {
          '@apply text-sm text-state-error': {},
        },

        // Navigation components
        '.nav-link': {
          '@apply text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium': {},
        },
        
        '.nav-link-active': {
          '@apply text-text-primary': {},
        },

        // Status components
        '.status-badge': {
          '@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium': {},
        },
        
        '.status-success': {
          '@apply bg-state-success-bg text-state-success border border-state-success-border': {},
        },
        
        '.status-warning': {
          '@apply bg-state-warning-bg text-state-warning border border-state-warning-border': {},
        },
        
        '.status-error': {
          '@apply bg-state-error-bg text-state-error border border-state-error-border': {},
        },
        
        '.status-info': {
          '@apply bg-state-info-bg text-state-info border border-state-info-border': {},
        },
      });
    },
  ],
};

module.exports = nextjsConfig;