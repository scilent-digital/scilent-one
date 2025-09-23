/**
 * Unit tests for array utility functions
 */

import { describe, it, expect } from 'vitest';
import {
  unique,
  chunk,
  shuffle,
  groupBy,
  compact,
  last,
  first,
  contains,
  sortBy,
  intersection,
} from './array';

describe('Array Utilities', () => {
  describe('unique', () => {
    it('should remove duplicate values from array', () => {
      expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle arrays with no duplicates', () => {
      expect(unique([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle empty arrays', () => {
      expect(unique([])).toEqual([]);
    });

    it('should work with strings', () => {
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('should work with mixed types', () => {
      expect(unique([1, 'a', 1, 'a', 2])).toEqual([1, 'a', 2]);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks of specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should handle chunk size larger than array', () => {
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    it('should handle empty arrays', () => {
      expect(chunk([], 2)).toEqual([]);
    });

    it('should handle chunk size of 1', () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });
  });

  describe('shuffle', () => {
    it('should return an array of same length', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = shuffle(array);
      expect(shuffled).toHaveLength(5);
    });

    it('should contain the same elements', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = shuffle(array);
      expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty arrays', () => {
      expect(shuffle([])).toEqual([]);
    });

    it('should handle single element arrays', () => {
      expect(shuffle([1])).toEqual([1]);
    });
  });

  describe('groupBy', () => {
    it('should group by string keys', () => {
      const array = ['apple', 'banana', 'cherry', 'date'];
      const result = groupBy(array, item => item[0]);
      expect(result).toEqual({
        'a': ['apple'],
        'b': ['banana'],
        'c': ['cherry'],
        'd': ['date']
      });
    });

    it('should group by number keys', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const result = groupBy(array, item => item % 2);
      expect(result).toEqual({
        0: [2, 4, 6],
        1: [1, 3, 5]
      });
    });

    it('should handle objects', () => {
      const array = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 25 }
      ];
      const result = groupBy(array, item => item.age);
      expect(result).toEqual({
        25: [
          { name: 'John', age: 25 },
          { name: 'Bob', age: 25 }
        ],
        30: [{ name: 'Jane', age: 30 }]
      });
    });
  });

  describe('compact', () => {
    it('should remove falsy values', () => {
      expect(compact([1, 0, 'hello', '', null, undefined, true, false]))
        .toEqual([1, 'hello', true]);
    });

    it('should handle empty arrays', () => {
      expect(compact([])).toEqual([]);
    });

    it('should handle arrays with no falsy values', () => {
      expect(compact([1, 'hello', true])).toEqual([1, 'hello', true]);
    });
  });

  describe('last', () => {
    it('should return the last element', () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    it('should return undefined for empty arrays', () => {
      expect(last([])).toBeUndefined();
    });
  });

  describe('first', () => {
    it('should return the first element', () => {
      expect(first([1, 2, 3])).toBe(1);
    });

    it('should return undefined for empty arrays', () => {
      expect(first([])).toBeUndefined();
    });
  });

  describe('contains', () => {
    it('should return true if array contains value', () => {
      expect(contains([1, 2, 3], 2)).toBe(true);
    });

    it('should return false if array does not contain value', () => {
      expect(contains([1, 2, 3], 4)).toBe(false);
    });

    it('should work with strings', () => {
      expect(contains(['a', 'b', 'c'], 'b')).toBe(true);
    });

    it('should handle empty arrays', () => {
      expect(contains([], 'test')).toBe(false);
    });
  });

  describe('sortBy', () => {
    it('should sort by property in ascending order', () => {
      const array = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
      ];
      const result = sortBy(array, 'age');
      expect(result).toEqual([
        { name: 'Jane', age: 25 },
        { name: 'John', age: 30 },
        { name: 'Bob', age: 35 }
      ]);
    });

    it('should sort by property in descending order', () => {
      const array = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
      ];
      const result = sortBy(array, 'age', 'desc');
      expect(result).toEqual([
        { name: 'Bob', age: 35 },
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 }
      ]);
    });

    it('should handle string properties', () => {
      const array = [
        { name: 'Charlie' },
        { name: 'Alice' },
        { name: 'Bob' }
      ];
      const result = sortBy(array, 'name');
      expect(result).toEqual([
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Charlie' }
      ]);
    });
  });

  describe('intersection', () => {
    it('should find intersection of two arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    it('should handle no common elements', () => {
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(intersection([], [1, 2])).toEqual([]);
      expect(intersection([1, 2], [])).toEqual([]);
    });

    it('should handle duplicate elements', () => {
      expect(intersection([1, 1, 2, 3], [1, 2, 2, 4])).toEqual([1, 2]);
    });
  });
});