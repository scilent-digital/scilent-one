/**
 * Array utility functions
 */

/**
 * Removes duplicate values from an array
 * @param array - The array to deduplicate
 * @returns New array with unique values
 * @example
 * unique([1, 2, 2, 3, 1]) // [1, 2, 3]
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Chunks an array into smaller arrays of specified size
 * @param array - The array to chunk
 * @param size - Size of each chunk
 * @returns Array of chunks
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param array - The array to shuffle
 * @returns New shuffled array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // Randomly shuffled array
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Groups array elements by a key function
 * @param array - The array to group
 * @param keyFn - Function that returns the grouping key
 * @returns Object with grouped elements
 * @example
 * groupBy(['apple', 'banana', 'cherry'], item => item[0])
 * // { 'a': ['apple'], 'b': ['banana'], 'c': ['cherry'] }
 */
export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

/**
 * Removes falsy values from an array
 * @param array - The array to compact
 * @returns New array without falsy values
 * @example
 * compact([1, 0, 'hello', '', null, undefined, true]) // [1, 'hello', true]
 */
export function compact<T>(array: T[]): NonNullable<T>[] {
  return array.filter(Boolean) as NonNullable<T>[];
}

/**
 * Gets the last element of an array
 * @param array - The array
 * @returns The last element or undefined if empty
 * @example
 * last([1, 2, 3]) // 3
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

/**
 * Gets the first element of an array
 * @param array - The array
 * @returns The first element or undefined if empty
 * @example
 * first([1, 2, 3]) // 1
 */
export function first<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * Checks if an array contains a specific value
 * @param array - The array to search
 * @param value - The value to find
 * @returns True if value is found
 * @example
 * contains([1, 2, 3], 2) // true
 */
export function contains<T>(array: T[], value: T): boolean {
  return array.includes(value);
}

/**
 * Sorts an array of objects by a property
 * @param array - The array to sort
 * @param key - The property to sort by
 * @param direction - Sort direction (default: 'asc')
 * @returns New sorted array
 * @example
 * sortBy([{name: 'John', age: 25}, {name: 'Jane', age: 30}], 'age') // Sorted by age ascending
 */
export function sortBy<T>(
  array: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Finds the intersection of two arrays
 * @param array1 - First array
 * @param array2 - Second array
 * @returns Array containing common elements (unique)
 * @example
 * intersection([1, 2, 3], [2, 3, 4]) // [2, 3]
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
  return unique(array1.filter(item => array2.includes(item)));
}