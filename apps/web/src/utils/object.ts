/**
 * Object utility functions
 */

/**
 * Checks if a value is a plain object
 * @param value - The value to check
 * @returns True if value is a plain object
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null &&
         typeof value === 'object' &&
         value.constructor === Object;
}

/**
 * Deep clones an object
 * @param obj - The object to clone
 * @returns Deep cloned object
 * @example
 * const original = { a: { b: 1 } };
 * const cloned = deepClone(original);
 * cloned.a.b = 2; // Doesn't affect original
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }

  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }

  return obj;
}

/**
 * Gets all keys from an object including nested keys
 * @param obj - The object to get keys from
 * @param prefix - Prefix for nested keys (used internally)
 * @returns Array of all keys (dot notation for nested)
 * @example
 * deepKeys({ a: { b: 1, c: { d: 2 } } }) // ['a.b', 'a.c.d']
 */
export function deepKeys(
  obj: Record<string, unknown>,
  prefix: string = ''
): string[] {
  const keys: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (isPlainObject(obj[key])) {
        keys.push(...deepKeys(obj[key] as Record<string, unknown>, newKey));
      } else {
        keys.push(newKey);
      }
    }
  }

  return keys;
}

/**
 * Gets a nested value from an object using dot notation
 * @param obj - The object to get value from
 * @param path - Dot notation path to the value
 * @returns The nested value or undefined
 * @example
 * get({ a: { b: { c: 1 } } }, 'a.b.c') // 1
 */
export function get(
  obj: Record<string, unknown>,
  path: string
): unknown {
  if (!path) return obj;

  return path.split('.').reduce((current, key) => {
    return (current as Record<string, unknown>)?.[key];
  }, obj);
}

/**
 * Sets a nested value in an object using dot notation
 * @param obj - The object to set value in
 * @param path - Dot notation path to set
 * @param value - The value to set
 * @returns The modified object
 * @example
 * set({}, 'a.b.c', 1) // { a: { b: { c: 1 } } }
 */
export function set(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): Record<string, unknown> {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const target = keys.reduce((current, key) => {
    if (!current[key] || !isPlainObject(current[key])) {
      current[key] = {};
    }
    return current[key] as Record<string, unknown>;
  }, obj);

  target[lastKey] = value;
  return obj;
}

/**
 * Checks if an object has a specific key (including nested keys)
 * @param obj - The object to check
 * @param key - The key to look for
 * @returns True if key exists
 * @example
 * hasKey({ a: { b: 1 } }, 'a.b') // true
 */
export function hasKey(obj: Record<string, unknown>, key: string): boolean {
  try {
    return get(obj, key) !== undefined;
  } catch {
    return false;
  }
}

/**
 * Picks specific keys from an object
 * @param obj - The object to pick from
 * @param keys - Array of keys to pick
 * @returns New object with only picked keys
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Omits specific keys from an object
 * @param obj - The object to omit from
 * @param keys - Array of keys to omit
 * @returns New object without omitted keys
 * @example
 * omit({ a: 1, b: 2, c: 3 }, ['b']) // { a: 1, c: 3 }
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

/**
 * Merges multiple objects deeply
 * @param target - The target object to merge into
 * @param sources - Source objects to merge from
 * @returns Merged object
 * @example
 * deepMerge({ a: 1 }, { b: 2 }, { a: { c: 3 } }) // { a: { c: 3 }, b: 2 }
 */
export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  ...sources: Record<string, unknown>[]
): T {
  const result = deepClone(target);

  for (const source of sources) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (
          isPlainObject(result[key]) &&
          isPlainObject(source[key])
        ) {
          result[key] = deepMerge(
            result[key] as Record<string, unknown>,
            source[key] as Record<string, unknown>
          );
        } else {
          result[key] = deepClone(source[key]);
        }
      }
    }
  }

  return result;
}