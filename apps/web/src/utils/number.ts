/**
 * Number utility functions
 */

/**
 * Formats a number as currency
 * @param amount - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale for formatting (default: 'en-US')
 * @returns The formatted currency string
 * @example
 * formatCurrency(1234.56) // '$1,234.56'
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Formats a number with specified decimal places
 * @param num - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns The formatted number string
 * @example
 * formatNumber(1234.567, 2) // '1,234.57'
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

/**
 * Clamps a number between a minimum and maximum value
 * @param num - The number to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns The clamped number
 * @example
 * clamp(15, 10, 20) // 15
 * clamp(5, 10, 20) // 10
 * clamp(25, 10, 20) // 20
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * Rounds a number to the nearest step value
 * @param num - The number to round
 * @param step - The step size (default: 1)
 * @returns The rounded number
 * @example
 * roundToStep(15.7, 5) // 15
 * roundToStep(17.3, 5) // 20
 */
export function roundToStep(num: number, step: number = 1): number {
  return Math.round(num / step) * step;
}

/**
 * Checks if a number is even
 * @param num - The number to check
 * @returns True if even, false otherwise
 * @example
 * isEven(4) // true
 * isEven(5) // false
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Checks if a number is odd
 * @param num - The number to check
 * @returns True if odd, false otherwise
 * @example
 * isOdd(4) // false
 * isOdd(5) // true
 */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * Generates a random number between min and max (inclusive)
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random number between min and max
 * @example
 * randomBetween(1, 10) // Random number between 1 and 10
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates the percentage of a value relative to a total
 * @param value - The value
 * @param total - The total
 * @param decimals - Number of decimal places (default: 1)
 * @returns The percentage
 * @example
 * percentage(75, 100, 2) // 75.00
 */
export function percentage(value: number, total: number, decimals: number = 1): number {
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(decimals));
}