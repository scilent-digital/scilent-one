import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for conflicting classes
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
/**
 * Format a string to title case
 */
export function formatTitle(str) {
    return str
        .split(/[-_\s]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
/**
 * Generate initials from a name
 */
export function getInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
}
//# sourceMappingURL=utils.js.map