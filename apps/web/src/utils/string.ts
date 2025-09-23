/**
 * String utility functions
 */

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 * @example
 * capitalize('hello world') // 'Hello world'
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-case string
 * @example
 * kebabCase('Hello World') // 'hello-world'
 */
export function kebabCase(str: string): string {
  if (!str) return str;
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns The camelCase string
 * @example
 * camelCase('hello-world_test') // 'helloWorldTest'
 */
export function camelCase(str: string): string {
  if (!str) return str;
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 * @param str - The string to truncate
 * @param maxLength - Maximum length of the string
 * @param suffix - Suffix to add when truncating (default: '...')
 * @returns The truncated string
 * @example
 * truncate('This is a long string', 10) // 'This is...'
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Checks if a string is a valid email address
 * @param email - The email string to validate
 * @returns True if valid email, false otherwise
 * @example
 * isEmail('user@example.com') // true
 * isEmail('invalid-email') // false
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Removes all whitespace from a string
 * @param str - The string to clean
 * @returns The string without whitespace
 * @example
 * removeWhitespace('  hello  world  ') // 'helloworld'
 */
export function removeWhitespace(str: string): string {
  if (!str) return str;
  return str.replace(/\s/g, '');
}

/**
 * Checks if a string is empty or contains only whitespace
 * @param str - The string to check
 * @returns True if empty or whitespace-only, false otherwise
 * @example
 * isBlank('   ') // true
 * isBlank('hello') // false
 */
export function isBlank(str: string): boolean {
  return !str || str.trim().length === 0;
}