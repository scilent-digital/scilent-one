/**
 * @fileoverview Utility functions for the UI components
 *
 * This file contains utility functions used across the UI components,
 * primarily for className handling and common operations.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines clsx and tailwind-merge for optimal className handling
 * This is a common pattern in modern React applications with Tailwind CSS
 *
 * @param inputs - Class names or conditional class objects
 * @returns Merged and deduplicated class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}