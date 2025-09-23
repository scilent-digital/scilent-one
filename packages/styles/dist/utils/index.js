"use strict";
/**
 * @fileoverview Utility functions for the styles package
 *
 * This module provides utility functions for working with CSS classes,
 * design tokens, and styling operations across the monorepo.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
exports.cssVar = cssVar;
exports.responsiveCSSVar = responsiveCSSVar;
exports.generateColorPalette = generateColorPalette;
exports.focusVisible = focusVisible;
exports.interactive = interactive;
exports.spacing = spacing;
exports.border = border;
exports.shadow = shadow;
exports.typography = typography;
exports.animation = animation;
exports.responsive = responsive;
exports.componentStyles = componentStyles;
exports.isValidColor = isValidColor;
exports.convertColor = convertColor;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
/**
 * Combines clsx and tailwind-merge for optimal className handling
 * This is a common pattern in modern React applications with Tailwind CSS
 *
 * @param {...string} inputs - Class names or conditional class objects
 * @returns {string} - Merged and deduplicated class string
 */
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
/**
 * Creates a CSS custom property string for use in style attributes
 *
 * @param {string} property - CSS property name (e.g., 'color', 'background-color')
 * @param {string} value - CSS property value
 * @param {string} [fallback] - Fallback value if CSS custom property is not defined
 * @returns {string} - CSS custom property string
 */
function cssVar(property, value, fallback = '') {
    const fallbackValue = fallback || value;
    return `var(--${property}, ${fallbackValue})`;
}
/**
 * Creates responsive CSS custom property strings
 *
 * @param {string} property - CSS property name
 * @param {Object} breakpoints - Object with breakpoint keys and values
 * @param {string} [fallback] - Fallback value
 * @returns {Object} - Object with responsive CSS custom property strings
 */
function responsiveCSSVar(property, breakpoints, fallback = '') {
    const result = {};
    Object.entries(breakpoints).forEach(([breakpoint, value]) => {
        if (breakpoint === 'base') {
            result.default = cssVar(property, value, fallback);
        }
        else {
            result[breakpoint] = cssVar(`${breakpoint}-${property}`, value, fallback);
        }
    });
    return result;
}
/**
 * Generates CSS for a color palette with opacity variations
 *
 * @param {string} colorName - Name of the color (e.g., 'primary', 'secondary')
 * @param {Object} colorScale - Color scale object with numeric keys
 * @param {number} [opacity=1] - Base opacity (0-1)
 * @returns {Object} - CSS custom properties for the color palette
 */
function generateColorPalette(colorName, colorScale, opacity = 1) {
    const palette = {};
    Object.entries(colorScale).forEach(([key, value]) => {
        palette[`${colorName}-${key}`] = value;
        // Generate opacity variations
        if (opacity < 1) {
            palette[`${colorName}-${key}-alpha`] = `${value}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
        }
    });
    return palette;
}
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
function focusVisible({ color = 'primary-500', width = '2px', offset = '2px', style = 'solid' } = {}) {
    return cn('focus-visible:outline-none', `focus-visible:ring-${width}`, `focus-visible:ring-${color}`, `focus-visible:ring-offset-${offset}`, `focus-visible:ring-${style}`);
}
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
function interactive({ hoverColor, focusColor, activeColor, scale = 1 } = {}) {
    const classes = [];
    if (hoverColor) {
        classes.push(`hover:bg-${hoverColor}`);
    }
    if (focusColor) {
        classes.push(`focus:bg-${focusColor}`);
    }
    if (activeColor) {
        classes.push(`active:bg-${activeColor}`);
    }
    if (scale !== 1) {
        classes.push(`hover:scale-[${scale}]`);
        classes.push('transition-transform', 'duration-200');
    }
    return cn(...classes);
}
/**
 * Creates consistent spacing utilities
 *
 * @param {Object} [options] - Spacing options
 * @param {string} [options.padding] - Padding value
 * @param {string} [options.margin] - Margin value
 * @param {string} [options.gap] - Gap value
 * @returns {string} - CSS classes for spacing
 */
function spacing({ padding, margin, gap } = {}) {
    const classes = [];
    if (padding) {
        classes.push(`p-${padding}`);
    }
    if (margin) {
        classes.push(`m-${margin}`);
    }
    if (gap) {
        classes.push(`gap-${gap}`);
    }
    return cn(...classes);
}
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
function border({ width = '1', color = 'neutral-200', radius = 'md', style = 'solid' } = {}) {
    return cn(`border-${width}`, `border-${color}`, `rounded-${radius}`, `border-${style}`);
}
/**
 * Creates consistent shadow utilities
 *
 * @param {string} [level='md'] - Shadow level
 * @returns {string} - CSS classes for shadows
 */
function shadow(level = 'md') {
    return `shadow-${level}`;
}
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
function typography({ size = 'base', weight = 'normal', color = 'foreground', align = 'left', transform } = {}) {
    const classes = [
        `text-${size}`,
        `font-${weight}`,
        `text-${color}`,
        `text-${align}`
    ];
    if (transform) {
        classes.push(transform);
    }
    return cn(...classes);
}
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
function animation({ duration = '200ms', easing = 'ease-in-out', property = 'all', fill = 'both' } = {}) {
    return {
        transition: `${property} ${duration} ${easing}`,
        animationFillMode: fill,
    };
}
/**
 * Creates responsive utility classes
 *
 * @param {Object} breakpoints - Responsive breakpoint utilities
 * @returns {string} - Combined responsive classes
 */
function responsive(breakpoints) {
    const classes = [];
    Object.entries(breakpoints).forEach(([breakpoint, className]) => {
        if (breakpoint === 'base') {
            classes.push(className);
        }
        else {
            classes.push(`${breakpoint}:${className}`);
        }
    });
    return cn(...classes);
}
/**
 * Creates a complete component style object
 *
 * @param {Object} [options] - Component style options
 * @returns {Object} - Complete style configuration
 */
function componentStyles(options = {}) {
    const styles = {
        base: '',
        variants: {},
        ...options
    };
    return styles;
}
/**
 * Validates if a color value is valid
 *
 * @param {string} color - Color value to validate
 * @returns {boolean} - Whether the color is valid
 */
function isValidColor(color) {
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$|^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0?\.\d+|1)\)$|^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$|^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(0?\.\d+|1)\)$/;
    return colorRegex.test(color);
}
/**
 * Converts a color to different formats
 *
 * @param {string} color - Input color
 * @param {string} format - Output format ('hex', 'rgb', 'hsl')
 * @returns {string} - Converted color
 */
function convertColor(color, format = 'hex') {
    // This would implement color conversion logic
    // For now, return the input color
    return color;
}
exports.default = {
    cn,
    cssVar,
    responsiveCSSVar,
    generateColorPalette,
    focusVisible,
    interactive,
    spacing,
    border,
    shadow,
    typography,
    animation,
    responsive,
    componentStyles,
    isValidColor,
    convertColor,
};
//# sourceMappingURL=index.js.map