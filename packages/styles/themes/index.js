/**
 * @fileoverview Theme exports and utilities
 *
 * This file exports all available themes and provides utilities
 * for working with themes across the monorepo.
 */

export { default as lightTheme, lightThemeCSS } from './light';
export { default as darkTheme, darkThemeCSS } from './dark';

/**
 * Available themes in the design system
 */
export const themes = [
  {
    name: 'light',
    label: 'Light Theme',
    default: true,
  },
  {
    name: 'dark',
    label: 'Dark Theme',
    default: false,
  },
];

/**
 * Get a theme by name
 *
 * @param {string} name - Theme name
 * @returns {Object|null} - Theme object or null if not found
 */
export function getTheme(name) {
  const themeMap = {
    light: lightTheme,
    dark: darkTheme,
  };

  return themeMap[name] || null;
}

/**
 * Get all available theme names
 *
 * @returns {string[]} - Array of theme names
 */
export function getThemeNames() {
  return themes.map(theme => theme.name);
}

/**
 * Get the default theme
 *
 * @returns {Object} - Default theme object
 */
export function getDefaultTheme() {
  const defaultTheme = themes.find(theme => theme.default);
  return defaultTheme ? getTheme(defaultTheme.name) : lightTheme;
}

/**
 * Check if a theme exists
 *
 * @param {string} name - Theme name to check
 * @returns {boolean} - Whether the theme exists
 */
export function hasTheme(name) {
  return getThemeNames().includes(name);
}

/**
 * Apply a theme to the document
 *
 * @param {string} themeName - Name of the theme to apply
 * @param {Object} [options] - Options for theme application
 * @param {string} [options.selector='data-theme'] - CSS selector to use for theme
 */
export function applyTheme(themeName, options = {}) {
  const { selector = 'data-theme' } = options;

  if (!hasTheme(themeName)) {
    console.warn(`Theme "${themeName}" does not exist. Available themes: ${getThemeNames().join(', ')}`);
    return;
  }

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute(selector, themeName);
  }
}

/**
 * Remove theme from the document
 *
 * @param {Object} [options] - Options for theme removal
 * @param {string} [options.selector='data-theme'] - CSS selector to remove
 */
export function removeTheme(options = {}) {
  const { selector = 'data-theme' } = options;

  if (typeof document !== 'undefined') {
    document.documentElement.removeAttribute(selector);
  }
}

/**
 * Toggle between light and dark themes
 *
 * @param {Object} [options] - Options for theme toggling
 * @param {string} [options.selector='data-theme'] - CSS selector to use
 */
export function toggleTheme(options = {}) {
  const { selector = 'data-theme' } = options;

  if (typeof document !== 'undefined') {
    const currentTheme = document.documentElement.getAttribute(selector) || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme, { selector });
  }
}

/**
 * Get the current theme from the document
 *
 * @param {Object} [options] - Options for getting current theme
 * @param {string} [options.selector='data-theme'] - CSS selector to check
 * @returns {string} - Current theme name
 */
export function getCurrentTheme(options = {}) {
  const { selector = 'data-theme' } = options;

  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute(selector) || 'light';
  }

  return 'light';
}

export default {
  themes,
  getTheme,
  getThemeNames,
  getDefaultTheme,
  hasTheme,
  applyTheme,
  removeTheme,
  toggleTheme,
  getCurrentTheme,
};