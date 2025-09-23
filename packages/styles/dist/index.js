"use strict";
/**
 * @fileoverview Main entry point for the styles package
 *
 * This file exports all the utilities, configurations, and theme definitions
 * from the styles package, providing a single entry point for consumers.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.version = exports.cva = exports.twMerge = exports.clsx = exports.getCurrentTheme = exports.toggleTheme = exports.removeTheme = exports.applyTheme = exports.hasTheme = exports.getDefaultTheme = exports.getThemeNames = exports.getTheme = exports.themes = exports.darkTheme = exports.lightTheme = exports.responsiveCSSVar = exports.cssVar = exports.cn = exports.utils = exports.getCSSVariable = exports.rgbToHex = exports.hexToRgb = exports.cssVariables = exports.tokens = exports.tailwindConfig = void 0;
exports.init = init;
const tslib_1 = require("tslib");
// Export Tailwind configuration
var tailwind_1 = require("./tailwind");
Object.defineProperty(exports, "tailwindConfig", { enumerable: true, get: function () { return tslib_1.__importDefault(tailwind_1).default; } });
// Export design tokens
var tokens_1 = require("./tokens");
Object.defineProperty(exports, "tokens", { enumerable: true, get: function () { return tslib_1.__importDefault(tokens_1).default; } });
Object.defineProperty(exports, "cssVariables", { enumerable: true, get: function () { return tokens_1.cssVariables; } });
Object.defineProperty(exports, "hexToRgb", { enumerable: true, get: function () { return tokens_1.hexToRgb; } });
Object.defineProperty(exports, "rgbToHex", { enumerable: true, get: function () { return tokens_1.rgbToHex; } });
Object.defineProperty(exports, "getCSSVariable", { enumerable: true, get: function () { return tokens_1.getCSSVariable; } });
// Export utility functions
var utils_1 = require("./utils");
Object.defineProperty(exports, "utils", { enumerable: true, get: function () { return tslib_1.__importDefault(utils_1).default; } });
Object.defineProperty(exports, "cn", { enumerable: true, get: function () { return utils_1.cn; } });
Object.defineProperty(exports, "cssVar", { enumerable: true, get: function () { return utils_1.cssVar; } });
Object.defineProperty(exports, "responsiveCSSVar", { enumerable: true, get: function () { return utils_1.responsiveCSSVar; } });
// Export themes
var themes_1 = require("./themes");
Object.defineProperty(exports, "lightTheme", { enumerable: true, get: function () { return themes_1.lightTheme; } });
Object.defineProperty(exports, "darkTheme", { enumerable: true, get: function () { return themes_1.darkTheme; } });
Object.defineProperty(exports, "themes", { enumerable: true, get: function () { return themes_1.themes; } });
Object.defineProperty(exports, "getTheme", { enumerable: true, get: function () { return themes_1.getTheme; } });
Object.defineProperty(exports, "getThemeNames", { enumerable: true, get: function () { return themes_1.getThemeNames; } });
Object.defineProperty(exports, "getDefaultTheme", { enumerable: true, get: function () { return themes_1.getDefaultTheme; } });
Object.defineProperty(exports, "hasTheme", { enumerable: true, get: function () { return themes_1.hasTheme; } });
Object.defineProperty(exports, "applyTheme", { enumerable: true, get: function () { return themes_1.applyTheme; } });
Object.defineProperty(exports, "removeTheme", { enumerable: true, get: function () { return themes_1.removeTheme; } });
Object.defineProperty(exports, "toggleTheme", { enumerable: true, get: function () { return themes_1.toggleTheme; } });
Object.defineProperty(exports, "getCurrentTheme", { enumerable: true, get: function () { return themes_1.getCurrentTheme; } });
// Re-export commonly used dependencies
var clsx_1 = require("clsx");
Object.defineProperty(exports, "clsx", { enumerable: true, get: function () { return clsx_1.clsx; } });
var tailwind_merge_1 = require("tailwind-merge");
Object.defineProperty(exports, "twMerge", { enumerable: true, get: function () { return tailwind_merge_1.twMerge; } });
var class_variance_authority_1 = require("class-variance-authority");
Object.defineProperty(exports, "cva", { enumerable: true, get: function () { return class_variance_authority_1.cva; } });
/**
 * Initialize the styles package
 *
 * This function can be called to initialize the styles package
 * with default configurations and apply the default theme.
 *
 * @param {Object} [options] - Initialization options
 * @param {string} [options.defaultTheme='light'] - Default theme to apply
 * @param {boolean} [options.autoApply=true] - Whether to automatically apply the theme
 */
function init(options = {}) {
    const { defaultTheme = 'light', autoApply = true } = options;
    if (autoApply && typeof document !== 'undefined') {
        applyTheme(defaultTheme);
    }
    // Log initialization
    console.log(`🎨 Styles package initialized with theme: ${defaultTheme}`);
}
/**
 * Version information
 */
exports.version = '0.1.0';
/**
 * Package information
 */
exports.info = {
    name: '@repo/styles',
    version: exports.version,
    description: 'Shared design system and styling configuration with Tailwind CSS',
    repository: 'https://github.com/your-org/scilent-one',
    license: 'MIT',
};
exports.default = {
    init,
    info: exports.info,
    version: exports.version,
};
//# sourceMappingURL=index.js.map