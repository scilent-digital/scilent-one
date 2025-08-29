/**
 * Animation System Configuration
 *
 * Defines subtle, high-quality animations and transitions
 * for enhanced user experience across web applications.
 */

// Timing functions for smooth, natural motion
export const timingFunctions = {
  // Standard easing curves
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
  'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
  'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',

  // Custom curves for smooth, modern animations
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design standard
  'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)', // Smooth entrance
  'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)', // Smooth exit
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Subtle bounce
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Spring-like motion
} as const;

// Duration scale for consistent timing
export const durations = {
  instant: '0ms',
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  slower: '500ms',
  slowest: '750ms',
} as const;

// Keyframe animations
export const keyframes = {
  // Fade animations
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'fade-out': {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },

  // Slide animations
  'slide-in-right': {
    '0%': { transform: 'translateX(100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  'slide-in-left': {
    '0%': { transform: 'translateX(-100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  'slide-in-up': {
    '0%': { transform: 'translateY(100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  'slide-in-down': {
    '0%': { transform: 'translateY(-100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },

  // Scale animations
  'scale-in': {
    '0%': { transform: 'scale(0.95)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  'scale-out': {
    '0%': { transform: 'scale(1)', opacity: '1' },
    '100%': { transform: 'scale(0.95)', opacity: '0' },
  },

  // Bounce animations
  'bounce-in': {
    '0%': { transform: 'scale(0.3)', opacity: '0' },
    '50%': { transform: 'scale(1.05)' },
    '70%': { transform: 'scale(0.9)' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },

  // Rotation animations
  'spin-slow': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },

  // Pulse animations
  'pulse-subtle': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.8' },
  },
  'pulse-scale': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
  },

  // Shake animation
  shake: {
    '0%, 100%': { transform: 'translateX(0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
    '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
  },

  // Glow animation
  glow: {
    '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
    '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
  },

  // Float animation
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },

  // Gradient shift
  'gradient-shift': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
} as const;

// Animation utilities combining keyframes, duration, and timing
export const animations = {
  // Entrance animations
  'fade-in': `fade-in ${durations.normal} ${timingFunctions.smooth} forwards`,
  'slide-in-right': `slide-in-right ${durations.normal} ${timingFunctions.smooth} forwards`,
  'slide-in-left': `slide-in-left ${durations.normal} ${timingFunctions.smooth} forwards`,
  'slide-in-up': `slide-in-up ${durations.normal} ${timingFunctions.smooth} forwards`,
  'slide-in-down': `slide-in-down ${durations.normal} ${timingFunctions.smooth} forwards`,
  'scale-in': `scale-in ${durations.fast} ${timingFunctions.smooth} forwards`,
  'bounce-in': `bounce-in ${durations.slow} ${timingFunctions.ease} forwards`,

  // Exit animations
  'fade-out': `fade-out ${durations.fast} ${timingFunctions.smooth} forwards`,
  'scale-out': `scale-out ${durations.fast} ${timingFunctions.smooth} forwards`,

  // Continuous animations
  'spin-slow': `spin-slow 3s ${timingFunctions.ease} infinite`,
  'pulse-subtle': `pulse-subtle 2s ${timingFunctions.ease} infinite`,
  'pulse-scale': `pulse-scale 2s ${timingFunctions.ease} infinite`,
  float: `float 3s ${timingFunctions.ease} infinite`,
  glow: `glow 2s ${timingFunctions.ease} infinite`,
  'gradient-shift': `gradient-shift 3s ${timingFunctions.ease} infinite`,

  // Interactive animations
  shake: `shake ${durations.slow} ${timingFunctions.ease} 1`,
} as const;

// Transition utilities for common use cases
export const transitions = {
  // Standard transitions
  all: `all ${durations.normal} ${timingFunctions.smooth}`,
  colors: `color ${durations.fast} ${timingFunctions.smooth}, background-color ${durations.fast} ${timingFunctions.smooth}, border-color ${durations.fast} ${timingFunctions.smooth}`,
  opacity: `opacity ${durations.fast} ${timingFunctions.smooth}`,
  transform: `transform ${durations.normal} ${timingFunctions.smooth}`,
  shadow: `box-shadow ${durations.normal} ${timingFunctions.smooth}`,

  // Interactive transitions
  'hover-lift': `transform ${durations.fast} ${timingFunctions.smooth}, box-shadow ${durations.fast} ${timingFunctions.smooth}`,
  'hover-scale': `transform ${durations.fast} ${timingFunctions.smooth}`,
  'hover-colors': `color ${durations.fast} ${timingFunctions.smooth}, background-color ${durations.fast} ${timingFunctions.smooth}`,
} as const;

// Common transform utilities
export const transforms = {
  'hover-lift': 'translateY(-2px)',
  'hover-scale': 'scale(1.05)',
  'hover-scale-sm': 'scale(1.02)',
  'active-scale': 'scale(0.98)',
} as const;

// Shadow utilities for depth
export const shadowAnimations = {
  'hover-lift':
    '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  'glow-success': '0 0 20px rgba(34, 197, 94, 0.3)',
  'glow-warning': '0 0 20px rgba(245, 158, 11, 0.3)',
  'glow-error': '0 0 20px rgba(239, 68, 68, 0.3)',
} as const;

// Export types
export type TimingFunction = keyof typeof timingFunctions;
export type Duration = keyof typeof durations;
export type Keyframe = keyof typeof keyframes;
export type Animation = keyof typeof animations;
export type Transition = keyof typeof transitions;
