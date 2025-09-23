/**
 * Unit tests for object utility functions
 */

import { describe, it, expect } from 'vitest';
import {
  isPlainObject,
  deepClone,
  deepKeys,
  get,
  set,
  hasKey,
  pick,
  omit,
  deepMerge,
} from './object';

describe('Object Utilities', () => {
  describe('isPlainObject', () => {
    it('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1 })).toBe(true);
    });

    it('should return false for non-objects', () => {
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject(undefined)).toBe(false);
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject('')).toBe(false);
      expect(isPlainObject(123)).toBe(false);
    });

    it('should return false for object instances', () => {
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject(new Array())).toBe(false);
    });
  });

  describe('deepClone', () => {
    it('should clone primitive values', () => {
      expect(deepClone(123)).toBe(123);
      expect(deepClone('hello')).toBe('hello');
      expect(deepClone(null)).toBe(null);
    });

    it('should clone arrays', () => {
      const original = [1, [2, 3], 4];
      const cloned = deepClone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned[1]).not.toBe(original[1]);
    });

    it('should clone objects', () => {
      const original = { a: { b: 1 }, c: 2 };
      const cloned = deepClone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.a).not.toBe(original.a);
    });

    it('should clone dates', () => {
      const original = new Date('2024-01-15');
      const cloned = deepClone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
    });
  });

  describe('deepKeys', () => {
    it('should get all keys from flat object', () => {
      expect(deepKeys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
    });

    it('should get all keys from nested object', () => {
      const obj = {
        a: { b: { c: 1, d: 2 } },
        e: 3
      };
      expect(deepKeys(obj)).toEqual(['a.b.c', 'a.b.d', 'e']);
    });

    it('should handle empty objects', () => {
      expect(deepKeys({})).toEqual([]);
    });
  });

  describe('get', () => {
    const obj = {
      a: {
        b: {
          c: 1,
          d: [1, 2, 3]
        }
      },
      e: 'hello'
    };

    it('should get nested values', () => {
      expect(get(obj, 'a.b.c')).toBe(1);
      expect(get(obj, 'a.b.d')).toEqual([1, 2, 3]);
      expect(get(obj, 'e')).toBe('hello');
    });

    it('should return undefined for non-existent paths', () => {
      expect(get(obj, 'a.b.x')).toBeUndefined();
      expect(get(obj, 'x.y.z')).toBeUndefined();
    });

    it('should handle empty path', () => {
      expect(get(obj, '')).toEqual(obj);
    });
  });

  describe('set', () => {
    it('should set nested values', () => {
      const obj = {};
      const result = set(obj, 'a.b.c', 1);
      expect(result).toEqual({ a: { b: { c: 1 } } });
    });

    it('should modify existing objects', () => {
      const obj = { a: { b: 2 } };
      const result = set(obj, 'a.b', 3);
      expect(result).toEqual({ a: { b: 3 } });
    });

    it('should handle deep paths', () => {
      const obj = {};
      const result = set(obj, 'a.b.c.d.e', 'value');
      expect(result).toEqual({
        a: {
          b: {
            c: {
              d: {
                e: 'value'
              }
            }
          }
        }
      });
    });
  });

  describe('hasKey', () => {
    const obj = {
      a: {
        b: {
          c: 1
        }
      },
      d: 'hello'
    };

    it('should return true for existing keys', () => {
      expect(hasKey(obj, 'a')).toBe(true);
      expect(hasKey(obj, 'a.b.c')).toBe(true);
      expect(hasKey(obj, 'd')).toBe(true);
    });

    it('should return false for non-existing keys', () => {
      expect(hasKey(obj, 'x')).toBe(false);
      expect(hasKey(obj, 'a.x.c')).toBe(false);
      expect(hasKey(obj, 'a.b.x')).toBe(false);
    });
  });

  describe('pick', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };

    it('should pick specified keys', () => {
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should ignore non-existent keys', () => {
      expect(pick(obj, ['a', 'x'] as any)).toEqual({ a: 1 });
    });

    it('should handle empty key array', () => {
      expect(pick(obj, [])).toEqual({});
    });
  });

  describe('omit', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };

    it('should omit specified keys', () => {
      expect(omit(obj, ['b', 'd'])).toEqual({ a: 1, c: 3 });
    });

    it('should handle non-existent keys', () => {
      expect(omit(obj, ['x'] as any)).toEqual(obj);
    });

    it('should handle empty key array', () => {
      expect(omit(obj, [])).toEqual(obj);
    });
  });

  describe('deepMerge', () => {
    it('should merge flat objects', () => {
      const result = deepMerge({ a: 1 }, { b: 2 }, { c: 3 });
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should merge nested objects', () => {
      const result = deepMerge(
        { a: { b: 1 } },
        { a: { c: 2 } }
      );
      expect(result).toEqual({ a: { b: 1, c: 2 } });
    });

    it('should handle arrays', () => {
      const result = deepMerge(
        { a: [1, 2] },
        { a: [3, 4] }
      );
      expect(result).toEqual({ a: [3, 4] });
    });

    it('should handle multiple objects', () => {
      const result = deepMerge(
        { a: 1 },
        { b: 2 },
        { c: 3 },
        { d: 4 }
      );
      expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

    it('should handle deep nesting', () => {
      const result = deepMerge(
        { a: { b: { c: 1 } } },
        { a: { b: { d: 2 } } }
      );
      expect(result).toEqual({ a: { b: { c: 1, d: 2 } } });
    });
  });
});