/**
 * Get a theme by name
 *
 * @param {string} name - Theme name
 * @returns {Object|null} - Theme object or null if not found
 */
export function getTheme(name: string): Object | null;
/**
 * Get all available theme names
 *
 * @returns {string[]} - Array of theme names
 */
export function getThemeNames(): string[];
/**
 * Get the default theme
 *
 * @returns {Object} - Default theme object
 */
export function getDefaultTheme(): Object;
/**
 * Check if a theme exists
 *
 * @param {string} name - Theme name to check
 * @returns {boolean} - Whether the theme exists
 */
export function hasTheme(name: string): boolean;
/**
 * Apply a theme to the document
 *
 * @param {string} themeName - Name of the theme to apply
 * @param {Object} [options] - Options for theme application
 * @param {string} [options.selector='data-theme'] - CSS selector to use for theme
 */
export function applyTheme(themeName: string, options?: {
    selector?: string | undefined;
}): void;
/**
 * Remove theme from the document
 *
 * @param {Object} [options] - Options for theme removal
 * @param {string} [options.selector='data-theme'] - CSS selector to remove
 */
export function removeTheme(options?: {
    selector?: string | undefined;
}): void;
/**
 * Toggle between light and dark themes
 *
 * @param {Object} [options] - Options for theme toggling
 * @param {string} [options.selector='data-theme'] - CSS selector to use
 */
export function toggleTheme(options?: {
    selector?: string | undefined;
}): void;
/**
 * Get the current theme from the document
 *
 * @param {Object} [options] - Options for getting current theme
 * @param {string} [options.selector='data-theme'] - CSS selector to check
 * @returns {string} - Current theme name
 */
export function getCurrentTheme(options?: {
    selector?: string | undefined;
}): string;
/**
 * Available themes in the design system
 */
export const themes: {
    name: string;
    label: string;
    default: boolean;
}[];
declare namespace _default {
    export { themes };
    export { getTheme };
    export { getThemeNames };
    export { getDefaultTheme };
    export { hasTheme };
    export { applyTheme };
    export { removeTheme };
    export { toggleTheme };
    export { getCurrentTheme };
}
export default _default;
export { default as lightTheme, lightThemeCSS } from "./light";
export { default as darkTheme, darkThemeCSS } from "./dark";
//# sourceMappingURL=index.d.ts.map