/**
 * Unit tests for string utility functions
 */

import { describe, it, expect } from 'vitest';
import {
  capitalize,
  kebabCase,
  camelCase,
  truncate,
  isEmail,
  removeWhitespace,
  isBlank,
} from './string';

describe('String Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('test')).toBe('Test');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should handle strings that are already capitalized', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });

  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
    });

    it('should convert PascalCase to kebab-case', () => {
      expect(kebabCase('HelloWorld')).toBe('hello-world');
    });

    it('should convert spaces to kebab-case', () => {
      expect(kebabCase('hello world')).toBe('hello-world');
    });

    it('should handle multiple consecutive separators', () => {
      expect(kebabCase('hello__world__test')).toBe('hello-world-test');
    });

    it('should handle empty strings', () => {
      expect(kebabCase('')).toBe('');
    });
  });

  describe('camelCase', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
    });

    it('should convert snake_case to camelCase', () => {
      expect(camelCase('hello_world')).toBe('helloWorld');
    });

    it('should convert multiple separators to camelCase', () => {
      expect(camelCase('hello--world__test')).toBe('helloWorldTest');
    });

    it('should handle empty strings', () => {
      expect(camelCase('')).toBe('');
    });

    it('should handle strings with no separators', () => {
      expect(camelCase('helloworld')).toBe('helloworld');
    });
  });

  describe('truncate', () => {
    it('should truncate strings longer than maxLength', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should not truncate strings shorter than maxLength', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should use custom suffix', () => {
      expect(truncate('hello world', 8, '***')).toBe('hello***');
    });

    it('should handle empty strings', () => {
      expect(truncate('', 5)).toBe('');
    });

    it('should handle exact length matches', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });
  });

  describe('isEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isEmail('user@example.com')).toBe(true);
      expect(isEmail('test.user@domain.co.uk')).toBe(true);
      expect(isEmail('user+tag@example.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('user@')).toBe(false);
      expect(isEmail('user.example.com')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isEmail('')).toBe(false);
      expect(isEmail('user@.com')).toBe(false);
    });
  });

  describe('removeWhitespace', () => {
    it('should remove all whitespace from strings', () => {
      expect(removeWhitespace('  hello  world  ')).toBe('helloworld');
    });

    it('should handle strings with different types of whitespace', () => {
      expect(removeWhitespace('hello\tworld\n\r\f')).toBe('helloworld');
    });

    it('should handle empty strings', () => {
      expect(removeWhitespace('')).toBe('');
    });

    it('should handle strings with no whitespace', () => {
      expect(removeWhitespace('helloworld')).toBe('helloworld');
    });
  });

  describe('isBlank', () => {
    it('should return true for blank strings', () => {
      expect(isBlank('   ')).toBe(true);
      expect(isBlank('\t\n\r')).toBe(true);
      expect(isBlank('')).toBe(true);
    });

    it('should return false for non-blank strings', () => {
      expect(isBlank('hello')).toBe(false);
      expect(isBlank('  hello  ')).toBe(false);
    });

    it('should handle null and undefined', () => {
      expect(isBlank(null as any)).toBe(true);
      expect(isBlank(undefined as any)).toBe(true);
    });
  });
});