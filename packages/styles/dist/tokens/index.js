"use strict";
/**
 * @fileoverview Design tokens for the scilent-one design system
 *
 * Design tokens are the atomic units of design systems. They provide
 * consistent values for colors, typography, spacing, and other design properties
 * across all applications and components.
 *
 * This file exports both CSS custom properties and JavaScript objects
 * to ensure consistency between CSS and JavaScript implementations.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCSSVariable = exports.rgbToHex = exports.hexToRgb = exports.cssVariables = exports.tokens = void 0;
// Base design tokens
exports.tokens = {
    // Color system
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
        // Secondary colors
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
        // Semantic colors
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
        // Neutral colors
        neutral: {
            0: '#ffffff',
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
            1000: '#000000',
        },
    },
    // Typography system
    typography: {
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
            display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        },
        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem', // 48px
            '6xl': '3.75rem', // 60px
        },
        fontWeight: {
            thin: '100',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    },
    // Spacing system (rem-based)
    spacing: {
        px: '1px',
        0: '0',
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
        18: '4.5rem', // 72px
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
        88: '22rem', // 352px
        96: '24rem', // 384px
    },
    // Border radius system
    borderRadius: {
        none: '0',
        sm: '0.125rem', // 2px
        base: '0.25rem', // 4px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        full: '9999px',
    },
    // Shadow system
    shadows: {
        none: 'none',
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    },
    // Z-index scale
    zIndex: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1020,
        banner: 1030,
        overlay: 1040,
        modal: 1050,
        popover: 1060,
        skipLink: 1070,
        toast: 1080,
        tooltip: 1090,
    },
    // Breakpoints (for reference)
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    // Animation durations
    animation: {
        duration: {
            none: '0ms',
            fast: '150ms',
            base: '200ms',
            slow: '300ms',
            slower: '500ms',
            slowest: '700ms',
        },
        easing: {
            linear: 'linear',
            in: 'ease-in',
            out: 'ease-out',
            inOut: 'ease-in-out',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        },
    },
};
// CSS custom properties for use in CSS files
exports.cssVariables = `
:root {
  /* Color System */
  --color-primary-50: ${exports.tokens.colors.primary[50]};
  --color-primary-100: ${exports.tokens.colors.primary[100]};
  --color-primary-200: ${exports.tokens.colors.primary[200]};
  --color-primary-300: ${exports.tokens.colors.primary[300]};
  --color-primary-400: ${exports.tokens.colors.primary[400]};
  --color-primary-500: ${exports.tokens.colors.primary[500]};
  --color-primary-600: ${exports.tokens.colors.primary[600]};
  --color-primary-700: ${exports.tokens.colors.primary[700]};
  --color-primary-800: ${exports.tokens.colors.primary[800]};
  --color-primary-900: ${exports.tokens.colors.primary[900]};
  --color-primary-950: ${exports.tokens.colors.primary[950]};

  --color-secondary-50: ${exports.tokens.colors.secondary[50]};
  --color-secondary-100: ${exports.tokens.colors.secondary[100]};
  --color-secondary-200: ${exports.tokens.colors.secondary[200]};
  --color-secondary-300: ${exports.tokens.colors.secondary[300]};
  --color-secondary-400: ${exports.tokens.colors.secondary[400]};
  --color-secondary-500: ${exports.tokens.colors.secondary[500]};
  --color-secondary-600: ${exports.tokens.colors.secondary[600]};
  --color-secondary-700: ${exports.tokens.colors.secondary[700]};
  --color-secondary-800: ${exports.tokens.colors.secondary[800]};
  --color-secondary-900: ${exports.tokens.colors.secondary[900]};
  --color-secondary-950: ${exports.tokens.colors.secondary[950]};

  --color-success-50: ${exports.tokens.colors.success[50]};
  --color-success-500: ${exports.tokens.colors.success[500]};
  --color-success-600: ${exports.tokens.colors.success[600]};
  --color-success-900: ${exports.tokens.colors.success[900]};

  --color-warning-50: ${exports.tokens.colors.warning[50]};
  --color-warning-500: ${exports.tokens.colors.warning[500]};
  --color-warning-600: ${exports.tokens.colors.warning[600]};
  --color-warning-900: ${exports.tokens.colors.warning[900]};

  --color-error-50: ${exports.tokens.colors.error[50]};
  --color-error-500: ${exports.tokens.colors.error[500]};
  --color-error-600: ${exports.tokens.colors.error[600]};
  --color-error-900: ${exports.tokens.colors.error[900]};

  --color-info-50: ${exports.tokens.colors.info[50]};
  --color-info-500: ${exports.tokens.colors.info[500]};
  --color-info-600: ${exports.tokens.colors.info[600]};
  --color-info-900: ${exports.tokens.colors.info[900]};

  --color-neutral-0: ${exports.tokens.colors.neutral[0]};
  --color-neutral-50: ${exports.tokens.colors.neutral[50]};
  --color-neutral-100: ${exports.tokens.colors.neutral[100]};
  --color-neutral-200: ${exports.tokens.colors.neutral[200]};
  --color-neutral-300: ${exports.tokens.colors.neutral[300]};
  --color-neutral-400: ${exports.tokens.colors.neutral[400]};
  --color-neutral-500: ${exports.tokens.colors.neutral[500]};
  --color-neutral-600: ${exports.tokens.colors.neutral[600]};
  --color-neutral-700: ${exports.tokens.colors.neutral[700]};
  --color-neutral-800: ${exports.tokens.colors.neutral[800]};
  --color-neutral-900: ${exports.tokens.colors.neutral[900]};
  --color-neutral-950: ${exports.tokens.colors.neutral[950]};
  --color-neutral-1000: ${exports.tokens.colors.neutral[1000]};

  /* Typography */
  --font-sans: ${exports.tokens.typography.fontFamily.sans.join(', ')};
  --font-mono: ${exports.tokens.typography.fontFamily.mono.join(', ')};
  --font-display: ${exports.tokens.typography.fontFamily.display.join(', ')};

  --font-size-xs: ${exports.tokens.typography.fontSize.xs};
  --font-size-sm: ${exports.tokens.typography.fontSize.sm};
  --font-size-base: ${exports.tokens.typography.fontSize.base};
  --font-size-lg: ${exports.tokens.typography.fontSize.lg};
  --font-size-xl: ${exports.tokens.typography.fontSize.xl};
  --font-size-2xl: ${exports.tokens.typography.fontSize['2xl']};
  --font-size-3xl: ${exports.tokens.typography.fontSize['3xl']};
  --font-size-4xl: ${exports.tokens.typography.fontSize['4xl']};
  --font-size-5xl: ${exports.tokens.typography.fontSize['5xl']};
  --font-size-6xl: ${exports.tokens.typography.fontSize['6xl']};

  /* Spacing */
  --space-0: ${exports.tokens.spacing[0]};
  --space-1: ${exports.tokens.spacing[1]};
  --space-2: ${exports.tokens.spacing[2]};
  --space-3: ${exports.tokens.spacing[3]};
  --space-4: ${exports.tokens.spacing[4]};
  --space-5: ${exports.tokens.spacing[5]};
  --space-6: ${exports.tokens.spacing[6]};
  --space-8: ${exports.tokens.spacing[8]};
  --space-10: ${exports.tokens.spacing[10]};
  --space-12: ${exports.tokens.spacing[12]};
  --space-16: ${exports.tokens.spacing[16]};
  --space-20: ${exports.tokens.spacing[20]};
  --space-24: ${exports.tokens.spacing[24]};

  /* Border Radius */
  --radius-none: ${exports.tokens.borderRadius.none};
  --radius-sm: ${exports.tokens.borderRadius.sm};
  --radius-base: ${exports.tokens.borderRadius.base};
  --radius-md: ${exports.tokens.borderRadius.md};
  --radius-lg: ${exports.tokens.borderRadius.lg};
  --radius-xl: ${exports.tokens.borderRadius.xl};
  --radius-2xl: ${exports.tokens.borderRadius['2xl']};
  --radius-3xl: ${exports.tokens.borderRadius['3xl']};
  --radius-full: ${exports.tokens.borderRadius.full};

  /* Shadows */
  --shadow-none: ${exports.tokens.shadows.none};
  --shadow-xs: ${exports.tokens.shadows.xs};
  --shadow-sm: ${exports.tokens.shadows.sm};
  --shadow-base: ${exports.tokens.shadows.base};
  --shadow-md: ${exports.tokens.shadows.md};
  --shadow-lg: ${exports.tokens.shadows.lg};
  --shadow-xl: ${exports.tokens.shadows.xl};
  --shadow-2xl: ${exports.tokens.shadows['2xl']};
  --shadow-inner: ${exports.tokens.shadows.inner};

  /* Z-Index */
  --z-hide: ${exports.tokens.zIndex.hide};
  --z-base: ${exports.tokens.zIndex.base};
  --z-dropdown: ${exports.tokens.zIndex.dropdown};
  --z-modal: ${exports.tokens.zIndex.modal};
  --z-tooltip: ${exports.tokens.zIndex.tooltip};
}
`;
// Utility function to convert hex to RGB
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
};
exports.hexToRgb = hexToRgb;
// Utility function to convert RGB to hex
const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
};
exports.rgbToHex = rgbToHex;
// Utility function to get CSS custom property value
const getCSSVariable = (variableName, fallback = '') => {
    if (typeof window === 'undefined')
        return fallback;
    return getComputedStyle(document.documentElement)
        .getPropertyValue(variableName).trim() || fallback;
};
exports.getCSSVariable = getCSSVariable;
exports.default = exports.tokens;
//# sourceMappingURL=index.js.map