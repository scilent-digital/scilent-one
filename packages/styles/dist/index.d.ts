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
export function init(options?: {
    defaultTheme?: string | undefined;
    autoApply?: boolean | undefined;
}): void;
export { default as tailwindConfig } from "./tailwind";
export { clsx } from "clsx";
export { twMerge } from "tailwind-merge";
export { cva } from "class-variance-authority";
/**
 * Version information
 */
export const version: "0.1.0";
export namespace info {
    export let name: string;
    export { version };
    export let description: string;
    export let repository: string;
    export let license: string;
}
declare namespace _default {
    export { init };
    export { info };
    export { version };
}
export default _default;
export { default as tokens, cssVariables, hexToRgb, rgbToHex, getCSSVariable } from "./tokens";
export { default as utils, cn, cssVar, responsiveCSSVar } from "./utils";
export { lightTheme, darkTheme, themes, getTheme, getThemeNames, getDefaultTheme, hasTheme, applyTheme, removeTheme, toggleTheme, getCurrentTheme } from "./themes";
//# sourceMappingURL=index.d.ts.map