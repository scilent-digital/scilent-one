/**
 * Themes index
 * Exports all theme configurations
 */

const lightTheme = require('./light');
const darkTheme = require('./dark');

/**
 * Generates CSS variables for a theme
 * @param {Object} theme - Theme object with nested color values
 * @param {string} prefix - CSS variable prefix (default: '--')
 * @returns {Object} Flattened CSS variables
 */
function generateCSSVariables(theme, prefix = '--') {
  const variables = {};
  
  function flatten(obj, path = '') {
    for (const [key, value] of Object.entries(obj)) {
      const newPath = path ? `${path}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flatten(value, newPath);
      } else {
        variables[`${prefix}${newPath}`] = value;
      }
    }
  }
  
  flatten(theme);
  return variables;
}

/**
 * Generates Tailwind CSS theme configuration from design tokens
 * @param {Object} lightTheme - Light theme configuration
 * @param {Object} darkTheme - Dark theme configuration
 * @returns {Object} Tailwind theme configuration
 */
function generateTailwindTheme(lightTheme, darkTheme) {
  return {
    colors: {
      // CSS variable-based colors that change with theme
      background: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
        tertiary: 'var(--background-tertiary)',
        inverse: 'var(--background-inverse)',
      },
      surface: {
        primary: 'var(--surface-primary)',
        secondary: 'var(--surface-secondary)',
        tertiary: 'var(--surface-tertiary)',
        elevated: 'var(--surface-elevated)',
      },
      text: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        disabled: 'var(--text-disabled)',
        inverse: 'var(--text-inverse)',
        link: 'var(--text-link)',
        'link-hover': 'var(--text-link-hover)',
      },
      border: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        tertiary: 'var(--border-tertiary)',
        focus: 'var(--border-focus)',
        error: 'var(--border-error)',
        success: 'var(--border-success)',
        warning: 'var(--border-warning)',
      },
      brand: {
        primary: 'var(--brand-primary)',
        'primary-hover': 'var(--brand-primary-hover)',
        'primary-active': 'var(--brand-primary-active)',
        secondary: 'var(--brand-secondary)',
      },
      state: {
        success: 'var(--state-success)',
        'success-bg': 'var(--state-success-bg)',
        'success-border': 'var(--state-success-border)',
        warning: 'var(--state-warning)',
        'warning-bg': 'var(--state-warning-bg)',
        'warning-border': 'var(--state-warning-border)',
        error: 'var(--state-error)',
        'error-bg': 'var(--state-error-bg)',
        'error-border': 'var(--state-error-border)',
        info: 'var(--state-info)',
        'info-bg': 'var(--state-info-bg)',
        'info-border': 'var(--state-info-border)',
      },
      interactive: {
        hover: 'var(--interactive-hover)',
        active: 'var(--interactive-active)',
        focus: 'var(--interactive-focus)',
        disabled: 'var(--interactive-disabled)',
      },
    },
  };
}

module.exports = {
  lightTheme,
  darkTheme,
  generateCSSVariables,
  generateTailwindTheme,
};