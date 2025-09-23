"use strict";
/**
 * @fileoverview Theme exports and utilities
 *
 * This file exports all available themes and provides utilities
 * for working with themes across the monorepo.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.themes = exports.darkThemeCSS = exports.darkTheme = exports.lightThemeCSS = exports.lightTheme = void 0;
exports.getTheme = getTheme;
exports.getThemeNames = getThemeNames;
exports.getDefaultTheme = getDefaultTheme;
exports.hasTheme = hasTheme;
exports.applyTheme = applyTheme;
exports.removeTheme = removeTheme;
exports.toggleTheme = toggleTheme;
exports.getCurrentTheme = getCurrentTheme;
const tslib_1 = require("tslib");
var light_1 = require("./light");
Object.defineProperty(exports, "lightTheme", { enumerable: true, get: function () { return tslib_1.__importDefault(light_1).default; } });
Object.defineProperty(exports, "lightThemeCSS", { enumerable: true, get: function () { return light_1.lightThemeCSS; } });
var dark_1 = require("./dark");
Object.defineProperty(exports, "darkTheme", { enumerable: true, get: function () { return tslib_1.__importDefault(dark_1).default; } });
Object.defineProperty(exports, "darkThemeCSS", { enumerable: true, get: function () { return dark_1.darkThemeCSS; } });
/**
 * Available themes in the design system
 */
exports.themes = [
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
function getTheme(name) {
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
function getThemeNames() {
    return exports.themes.map(theme => theme.name);
}
/**
 * Get the default theme
 *
 * @returns {Object} - Default theme object
 */
function getDefaultTheme() {
    const defaultTheme = exports.themes.find(theme => theme.default);
    return defaultTheme ? getTheme(defaultTheme.name) : lightTheme;
}
/**
 * Check if a theme exists
 *
 * @param {string} name - Theme name to check
 * @returns {boolean} - Whether the theme exists
 */
function hasTheme(name) {
    return getThemeNames().includes(name);
}
/**
 * Apply a theme to the document
 *
 * @param {string} themeName - Name of the theme to apply
 * @param {Object} [options] - Options for theme application
 * @param {string} [options.selector='data-theme'] - CSS selector to use for theme
 */
function applyTheme(themeName, options = {}) {
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
function removeTheme(options = {}) {
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
function toggleTheme(options = {}) {
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
function getCurrentTheme(options = {}) {
    const { selector = 'data-theme' } = options;
    if (typeof document !== 'undefined') {
        return document.documentElement.getAttribute(selector) || 'light';
    }
    return 'light';
}
exports.default = {
    themes: exports.themes,
    getTheme,
    getThemeNames,
    getDefaultTheme,
    hasTheme,
    applyTheme,
    removeTheme,
    toggleTheme,
    getCurrentTheme,
};
//# sourceMappingURL=index.js.map