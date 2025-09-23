/**
 * Unit tests for number utility functions
 */

import { describe, it, expect } from 'vitest';
import {
  formatCurrency,
  formatNumber,
  clamp,
  roundToStep,
  isEven,
  isOdd,
  randomBetween,
  percentage,
} from './number';

describe('Number Utilities', () => {
  describe('formatCurrency', () => {
    it('should format numbers as USD currency', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(0)).toBe('$0.00');
    });

    it('should format numbers with different currencies', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
      expect(formatCurrency(1234.56, 'GBP')).toBe('£1,234.56');
    });

    it('should handle different locales', () => {
      expect(formatCurrency(1234.56, 'USD', 'de-DE')).toBe('1.234,56\u00A0$');
    });
  });

  describe('formatNumber', () => {
    it('should format numbers with default decimal places', () => {
      expect(formatNumber(1234.567)).toBe('1,234.57');
    });

    it('should format numbers with custom decimal places', () => {
      expect(formatNumber(1234.567, 0)).toBe('1,235');
      expect(formatNumber(1234.567, 3)).toBe('1,234.567');
    });

    it('should handle whole numbers', () => {
      expect(formatNumber(1234)).toBe('1,234.00');
    });
  });

  describe('clamp', () => {
    it('should return the number if within range', () => {
      expect(clamp(15, 10, 20)).toBe(15);
    });

    it('should return min if number is below range', () => {
      expect(clamp(5, 10, 20)).toBe(10);
    });

    it('should return max if number is above range', () => {
      expect(clamp(25, 10, 20)).toBe(20);
    });

    it('should handle negative numbers', () => {
      expect(clamp(-5, -10, 10)).toBe(-5);
      expect(clamp(-15, -10, 10)).toBe(-10);
      expect(clamp(15, -10, 10)).toBe(10);
    });
  });

  describe('roundToStep', () => {
    it('should round to nearest step with default step of 1', () => {
      expect(roundToStep(15.7)).toBe(16);
      expect(roundToStep(15.3)).toBe(15);
    });

    it('should round to nearest step with custom step', () => {
      expect(roundToStep(17, 5)).toBe(15);
      expect(roundToStep(18, 5)).toBe(20);
    });

    it('should handle exact step values', () => {
      expect(roundToStep(20, 5)).toBe(20);
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(5)).toBe(false);
      expect(isEven(1)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('should return true for odd numbers', () => {
      expect(isOdd(5)).toBe(true);
      expect(isOdd(1)).toBe(true);
      expect(isOdd(-1)).toBe(true);
    });

    it('should return false for even numbers', () => {
      expect(isOdd(4)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-2)).toBe(false);
    });
  });

  describe('randomBetween', () => {
    it('should return a number between min and max inclusive', () => {
      for (let i = 0; i < 100; i++) {
        const result = randomBetween(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    it('should handle negative ranges', () => {
      const result = randomBetween(-5, 5);
      expect(result).toBeGreaterThanOrEqual(-5);
      expect(result).toBeLessThanOrEqual(5);
    });
  });

  describe('percentage', () => {
    it('should calculate percentage correctly', () => {
      expect(percentage(75, 100)).toBe(75);
      expect(percentage(50, 200)).toBe(25);
    });

    it('should handle decimal places', () => {
      expect(percentage(33.33, 100, 2)).toBe(33.33);
    });

    it('should handle zero total', () => {
      expect(percentage(100, 0)).toBe(0);
    });

    it('should handle zero value', () => {
      expect(percentage(0, 100)).toBe(0);
    });
  });
});