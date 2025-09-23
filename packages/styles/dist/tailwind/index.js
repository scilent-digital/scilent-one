"use strict";
/**
 * @fileoverview Shared Tailwind CSS configuration for the monorepo
 * This configuration provides a consistent design system across all applications
 * and packages within the scilent-one monorepo.
 *
 * Features:
 * - Modern Tailwind CSS v4 syntax
 * - Consistent color palette and design tokens
 * - Responsive typography scale
 * - Component utility classes
 * - Dark mode support
 * - Accessibility considerations
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Scan all workspace files for Tailwind classes
        "./apps/**/*.{js,ts,jsx,tsx,mdx}",
        "./packages/**/*.{js,ts,jsx,tsx,mdx}",
        // Include components from ui package when available
        "./packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Custom color palette with semantic naming
            colors: {
                // Primary brand colors
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                // Secondary colors for accents and highlights
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
                // Semantic colors for status and feedback
                success: {
                    50: '#f0fdf4',
                    500: '#22c55e',
                    600: '#16a34a',
                    900: '#14532d',
                },
                warning: {
                    50: '#fffbeb',
                    500: '#f59e0b',
                    600: '#d97706',
                    900: '#78350f',
                },
                error: {
                    50: '#fef2f2',
                    500: '#ef4444',
                    600: '#dc2626',
                    900: '#7f1d1d',
                },
                info: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    900: '#1e3a8a',
                },
                // Neutral grays for text and backgrounds
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                },
                // Background and foreground colors
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                // Border colors
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                // Muted colors for subtle elements
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                // Accent colors for interactive elements
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                // Card colors
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
                // Popover colors
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                // Destructive colors for delete actions
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
            },
            // Typography scale
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
                display: ['var(--font-display)', 'var(--font-sans)'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            // Spacing scale (rem-based)
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            // Animation definitions
            animation: {
                'fade-in': 'fade-in 0.5s ease-in-out',
                'slide-in': 'slide-in 0.3s ease-out',
                'bounce-slow': 'bounce 2s infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-in': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            // Border radius scale
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            // Box shadow scale
            boxShadow: {
                'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            },
            // Z-index scale
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [
    // Custom plugins can be added here
    // Example: require('@tailwindcss/forms'),
    // Example: require('@tailwindcss/typography'),
    ],
    // Enable dark mode support
    darkMode: ['class'],
    // Future-proof configuration for Tailwind v4
    future: {
        hoverOnlyWhenSupported: true,
    },
};
//# sourceMappingURL=index.js.map