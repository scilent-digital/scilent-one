/**
 * Test setup file for Vitest
 *
 * This file is automatically loaded before each test file when using Vitest.
 * It configures the testing environment and provides global utilities.
 */

import '@testing-library/jest-dom';
import { expect, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
// This provides additional matchers like toBeInTheDocument, toHaveClass, etc.
expect.extend(matchers);

/**
 * Cleanup after each test
 * This ensures that React components are properly unmounted and
 * DOM is cleaned between tests to prevent interference
 */
afterEach(() => {
  cleanup();
});

/**
 * Global test configuration
 * You can add any global setup logic here that should run before all tests
 */
beforeAll(() => {
  // Mock window.matchMedia which is commonly used in UI libraries
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });

  // Mock IntersectionObserver which is commonly used for lazy loading
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    unobserve() {}
  };

  // Mock ResizeObserver which is used by some UI libraries
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    unobserve() {}
  };
});