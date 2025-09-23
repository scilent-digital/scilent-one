/**
 * Vitest configuration for Next.js web application
 *
 * This configuration sets up Vitest to work with Next.js, including:
 * - TypeScript support
 * - React component testing with jsdom
 * - Path aliases matching Next.js configuration
 * - Code coverage with v8 provider
 * - Test environment setup
 */

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    /**
     * Test environment: jsdom for DOM APIs in Node.js
     * This allows testing React components and DOM manipulation
     */
    environment: 'jsdom',

    /**
     * Setup files to run before tests
     * These files can contain global test setup, mocks, etc.
     */
    setupFiles: ['./src/test/setup.ts'],

    /**
     * Global test configuration
     */
    globals: true,

    /**
     * File patterns to include/exclude for testing
     */
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', '.next', 'dist', 'build', 'coverage'],

    /**
     * Coverage configuration using v8 provider
     * Generates detailed coverage reports
     */
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '.next/',
        'dist/',
        'build/',
        'coverage/',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        'src/test/',
        '**/*.stories.{js,ts,jsx,tsx}',
      ],
      /**
       * Coverage thresholds - adjust based on project requirements
       * These ensure a minimum level of test coverage
       */
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },
  },

  /**
   * Path resolution configuration
   * Matches Next.js path aliases for consistent imports
   */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  /**
   * ESBuild configuration for faster builds during testing
   */
  esbuild: {
    // Remove console.log in production builds
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
});