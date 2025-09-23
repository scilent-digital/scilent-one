/**
 * Combines clsx and tailwind-merge for optimal className handling
 * This is a common pattern in modern React applications with Tailwind CSS
 *
 * @param {...string} inputs - Class names or conditional class objects
 * @returns {string} - Merged and deduplicated class string
 */
export function cn(...inputs: string[]): string;
/**
 * Creates a CSS custom property string for use in style attributes
 *
 * @param {string} property - CSS property name (e.g., 'color', 'background-color')
 * @param {string} value - CSS property value
 * @param {string} [fallback] - Fallback value if CSS custom property is not defined
 * @returns {string} - CSS custom property string
 */
export function cssVar(property: string, value: string, fallback?: string): string;
/**
 * Creates responsive CSS custom property strings
 *
 * @param {string} property - CSS property name
 * @param {Object} breakpoints - Object with breakpoint keys and values
 * @param {string} [fallback] - Fallback value
 * @returns {Object} - Object with responsive CSS custom property strings
 */
export function responsiveCSSVar(property: string, breakpoints: Object, fallback?: string): Object;
/**
 * Generates CSS for a color palette with opacity variations
 *
 * @param {string} colorName - Name of the color (e.g., 'primary', 'secondary')
 * @param {Object} colorScale - Color scale object with numeric keys
 * @param {number} [opacity=1] - Base opacity (0-1)
 * @returns {Object} - CSS custom properties for the color palette
 */
export function generateColorPalette(colorName: string, colorScale: Object, opacity?: number): Object;
/**
 * Creates CSS for focus-visible styles with proper accessibility
 *
 * @param {Object} [options] - Focus style options
 * @param {string} [options.color='primary-500'] - Focus ring color
 * @param {string} [options.width='2px'] - Focus ring width
 * @param {string} [options.offset='2px'] - Focus ring offset
 * @param {string} [options.style='solid'] - Focus ring style
 * @returns {string} - CSS classes for focus-visible
 */
export function focusVisible({ color, width, offset, style }?: {
    color?: string | undefined;
    width?: string | undefined;
    offset?: string | undefined;
    style?: string | undefined;
}): string;
/**
 * Creates CSS for hover and focus states
 *
 * @param {Object} [options] - Interaction style options
 * @param {string} [options.hoverColor] - Hover background color
 * @param {string} [options.focusColor] - Focus background color
 * @param {string} [options.activeColor] - Active background color
 * @param {number} [options.scale=1] - Hover scale factor
 * @returns {string} - CSS classes for interactive states
 */
export function interactive({ hoverColor, focusColor, activeColor, scale }?: {
    hoverColor?: string | undefined;
    focusColor?: string | undefined;
    activeColor?: string | undefined;
    scale?: number | undefined;
}): string;
/**
 * Creates consistent spacing utilities
 *
 * @param {Object} [options] - Spacing options
 * @param {string} [options.padding] - Padding value
 * @param {string} [options.margin] - Margin value
 * @param {string} [options.gap] - Gap value
 * @returns {string} - CSS classes for spacing
 */
export function spacing({ padding, margin, gap }?: {
    padding?: string | undefined;
    margin?: string | undefined;
    gap?: string | undefined;
}): string;
/**
 * Creates consistent border utilities
 *
 * @param {Object} [options] - Border options
 * @param {string} [options.width='1'] - Border width
 * @param {string} [options.color='neutral-200'] - Border color
 * @param {string} [options.radius='md'] - Border radius
 * @param {string} [options.style='solid'] - Border style
 * @returns {string} - CSS classes for borders
 */
export function border({ width, color, radius, style }?: {
    width?: string | undefined;
    color?: string | undefined;
    radius?: string | undefined;
    style?: string | undefined;
}): string;
/**
 * Creates consistent shadow utilities
 *
 * @param {string} [level='md'] - Shadow level
 * @returns {string} - CSS classes for shadows
 */
export function shadow(level?: string): string;
/**
 * Creates consistent typography utilities
 *
 * @param {Object} [options] - Typography options
 * @param {string} [options.size='base'] - Font size
 * @param {string} [options.weight='normal'] - Font weight
 * @param {string} [options.color='foreground'] - Text color
 * @param {string} [options.align='left'] - Text alignment
 * @param {string} [options.transform] - Text transform
 * @returns {string} - CSS classes for typography
 */
export function typography({ size, weight, color, align, transform }?: {
    size?: string | undefined;
    weight?: string | undefined;
    color?: string | undefined;
    align?: string | undefined;
    transform?: string | undefined;
}): string;
/**
 * Creates animation utilities
 *
 * @param {Object} [options] - Animation options
 * @param {string} [options.duration='200ms'] - Animation duration
 * @param {string} [options.easing='ease-in-out'] - Animation easing
 * @param {string} [options.property='all'] - Animated property
 * @param {string} [options.fill='both'] - Animation fill mode
 * @returns {Object} - CSS animation properties
 */
export function animation({ duration, easing, property, fill }?: {
    duration?: string | undefined;
    easing?: string | undefined;
    property?: string | undefined;
    fill?: string | undefined;
}): Object;
/**
 * Creates responsive utility classes
 *
 * @param {Object} breakpoints - Responsive breakpoint utilities
 * @returns {string} - Combined responsive classes
 */
export function responsive(breakpoints: Object): string;
/**
 * Creates a complete component style object
 *
 * @param {Object} [options] - Component style options
 * @returns {Object} - Complete style configuration
 */
export function componentStyles(options?: Object): Object;
/**
 * Validates if a color value is valid
 *
 * @param {string} color - Color value to validate
 * @returns {boolean} - Whether the color is valid
 */
export function isValidColor(color: string): boolean;
/**
 * Converts a color to different formats
 *
 * @param {string} color - Input color
 * @param {string} format - Output format ('hex', 'rgb', 'hsl')
 * @returns {string} - Converted color
 */
export function convertColor(color: string, format?: string): string;
declare namespace _default {
    export { cn };
    export { cssVar };
    export { responsiveCSSVar };
    export { generateColorPalette };
    export { focusVisible };
    export { interactive };
    export { spacing };
    export { border };
    export { shadow };
    export { typography };
    export { animation };
    export { responsive };
    export { componentStyles };
    export { isValidColor };
    export { convertColor };
}
export default _default;
//# sourceMappingURL=index.d.ts.map