/**
 * Utility Classes Configuration
 * 
 * Defines custom utility classes that extend Tailwind's base utilities
 * for common patterns and enhanced developer experience.
 */

import { animations, transitions, transforms, shadows } from '../animations';
import { typographyVariants } from '../fonts';

// Animation utilities that can be applied via classes
export const animationUtilities = {
  // Entrance animations
  '.animate-fade-in': {
    animation: animations['fade-in'],
  },
  '.animate-slide-in-right': {
    animation: animations['slide-in-right'],
  },
  '.animate-slide-in-left': {
    animation: animations['slide-in-left'],
  },
  '.animate-slide-in-up': {
    animation: animations['slide-in-up'],
  },
  '.animate-slide-in-down': {
    animation: animations['slide-in-down'],
  },
  '.animate-scale-in': {
    animation: animations['scale-in'],
  },
  '.animate-bounce-in': {
    animation: animations['bounce-in'],
  },
  
  // Exit animations
  '.animate-fade-out': {
    animation: animations['fade-out'],
  },
  '.animate-scale-out': {
    animation: animations['scale-out'],
  },
  
  // Continuous animations
  '.animate-spin-slow': {
    animation: animations['spin-slow'],
  },
  '.animate-pulse-subtle': {
    animation: animations['pulse-subtle'],
  },
  '.animate-pulse-scale': {
    animation: animations['pulse-scale'],
  },
  '.animate-float': {
    animation: animations['float'],
  },
  '.animate-glow': {
    animation: animations['glow'],
  },
  '.animate-gradient-shift': {
    animation: animations['gradient-shift'],
  },
  
  // Interactive animations
  '.animate-shake': {
    animation: animations['shake'],
  },
} as const;

// Transition utilities
export const transitionUtilities = {
  '.transition-smooth': {
    transition: transitions.all,
  },
  '.transition-colors-smooth': {
    transition: transitions.colors,
  },
  '.transition-opacity-smooth': {
    transition: transitions.opacity,
  },
  '.transition-transform-smooth': {
    transition: transitions.transform,
  },
  '.transition-shadow-smooth': {
    transition: transitions.shadow,
  },
  '.transition-hover-lift': {
    transition: transitions['hover-lift'],
  },
  '.transition-hover-scale': {
    transition: transitions['hover-scale'],
  },
  '.transition-hover-colors': {
    transition: transitions['hover-colors'],
  },
} as const;

// Interactive hover utilities
export const hoverUtilities = {
  '.hover-lift': {
    '&:hover': {
      transform: transforms['hover-lift'],
      boxShadow: shadows['hover-lift'],
    },
  },
  '.hover-scale': {
    '&:hover': {
      transform: transforms['hover-scale'],
    },
  },
  '.hover-scale-sm': {
    '&:hover': {
      transform: transforms['hover-scale-sm'],
    },
  },
  '.hover-glow': {
    '&:hover': {
      boxShadow: shadows.glow,
    },
  },
  '.hover-glow-success': {
    '&:hover': {
      boxShadow: shadows['glow-success'],
    },
  },
  '.hover-glow-warning': {
    '&:hover': {
      boxShadow: shadows['glow-warning'],
    },
  },
  '.hover-glow-error': {
    '&:hover': {
      boxShadow: shadows['glow-error'],
    },
  },
} as const;

// Active state utilities
export const activeUtilities = {
  '.active-scale': {
    '&:active': {
      transform: transforms['active-scale'],
    },
  },
} as const;

// Typography utilities
export const typographyUtilities = Object.fromEntries(
  Object.entries(typographyVariants).map(([key, styles]) => [
    `.text-${key}`,
    styles,
  ])
) as const;

// Focus utilities for accessibility
export const focusUtilities = {
  '.focus-ring': {
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      boxShadow: '0 0 0 2px var(--color-primary-500)',
    },
  },
  '.focus-ring-inset': {
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: '-2px',
      boxShadow: 'inset 0 0 0 2px var(--color-primary-500)',
    },
  },
  '.focus-ring-success': {
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      boxShadow: '0 0 0 2px var(--color-success-500)',
    },
  },
  '.focus-ring-error': {
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      boxShadow: '0 0 0 2px var(--color-error-500)',
    },
  },
} as const;

// Gradient utilities
export const gradientUtilities = {
  '.gradient-primary': {
    background: 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%)',
  },
  '.gradient-secondary': {
    background: 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-secondary-600) 100%)',
  },
  '.gradient-success': {
    background: 'linear-gradient(135deg, var(--color-success-500) 0%, var(--color-success-600) 100%)',
  },
  '.gradient-warning': {
    background: 'linear-gradient(135deg, var(--color-warning-500) 0%, var(--color-warning-600) 100%)',
  },
  '.gradient-error': {
    background: 'linear-gradient(135deg, var(--color-error-500) 0%, var(--color-error-600) 100%)',
  },
  '.gradient-rainbow': {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundSize: '200% 200%',
    animation: animations['gradient-shift'],
  },
} as const;

// Glass morphism utilities
export const glassMorphismUtilities = {
  '.glass': {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  '.glass-dark': {
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
} as const;

// Component-specific utilities
export const componentUtilities = {
  // Button variants
  '.btn-primary': {
    backgroundColor: 'var(--color-primary-500)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-md)',
    fontWeight: '500',
    transition: transitions['hover-colors'],
    '&:hover': {
      backgroundColor: 'var(--color-primary-600)',
    },
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      boxShadow: '0 0 0 2px var(--color-primary-500)',
    },
  },
  
  '.btn-secondary': {
    backgroundColor: 'transparent',
    color: 'var(--color-primary-500)',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-primary-500)',
    fontWeight: '500',
    transition: transitions['hover-colors'],
    '&:hover': {
      backgroundColor: 'var(--color-primary-500)',
      color: 'white',
    },
  },
  
  // Card variants
  '.card': {
    backgroundColor: 'white',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    padding: '1.5rem',
    transition: transitions['hover-lift'],
  },
  
  '.card-hover': {
    '&:hover': {
      transform: transforms['hover-lift'],
      boxShadow: 'var(--shadow-lg)',
    },
  },
} as const;

// Combine all utilities
export const allUtilities = {
  ...animationUtilities,
  ...transitionUtilities,
  ...hoverUtilities,
  ...activeUtilities,
  ...typographyUtilities,
  ...focusUtilities,
  ...gradientUtilities,
  ...glassMorphismUtilities,
  ...componentUtilities,
} as const;

export type UtilityClass = keyof typeof allUtilities;