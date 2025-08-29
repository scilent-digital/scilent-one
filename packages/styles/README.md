# @repo/styles

A comprehensive design system package that provides shared Tailwind CSS configurations, design tokens, and theme management for consistent styling across the monorepo. Built for Tailwind CSS v4 with robust dark/light mode support and semantic color systems.

## 🎨 What's Included

- **Design Tokens**: Comprehensive color palettes, typography scales, spacing systems
- **Theme System**: Automatic dark/light mode with CSS variables
- **Tailwind Configurations**: Pre-configured for different project types
- **Component Classes**: Ready-to-use utility classes for common UI patterns
- **Semantic Colors**: Meaningful color names that adapt to themes

## 🚀 Quick Start

### Installation

In your app or package, install the styles package:

```bash
pnpm add -D @repo/styles
```

### Next.js Setup

#### 1. Tailwind Configuration

Create `tailwind.config.js`:

```javascript
const nextjsConfig = require('@repo/styles/tailwind/nextjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...nextjsConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
```

#### 2. Global CSS

Update your `globals.css`:

```css
/**
 * Global styles for your app
 * Uses the shared design system from @repo/styles
 */

@import '@repo/styles/themes/globals.css';

/* Add any app-specific global styles here */
```

#### 3. PostCSS Configuration

Ensure your `postcss.config.mjs` includes Tailwind:

```javascript
const config = {
  plugins: ['@tailwindcss/postcss'],
};

export default config;
```

## 🎨 Design System

### Color System

The design system provides a comprehensive color palette with semantic naming:

#### Raw Colors

```javascript
// Available color scales
brand.50 → brand.950    // Primary brand colors
neutral.50 → neutral.950 // Grays and neutrals
success.50 → success.950 // Success states
warning.50 → warning.950 // Warning states
error.50 → error.950    // Error states
info.50 → info.950      // Info states
```

#### Semantic Colors (Theme-Aware)

```css
/* Background colors */
bg-background-primary    /* Main app background */
bg-background-secondary  /* Cards, panels */
bg-surface-primary      /* White/dark surfaces */
bg-surface-elevated     /* Modals, dropdowns */

/* Text colors */
text-text-primary       /* Main text */
text-text-secondary     /* Secondary text */
text-text-link          /* Links */

/* Border colors */
border-border-primary   /* Default borders */
border-border-focus     /* Focus rings */

/* Brand colors */
bg-brand-primary        /* Primary buttons */
text-brand-primary      /* Brand text */

/* State colors */
text-state-success      /* Success text */
bg-state-error-bg       /* Error backgrounds */
border-state-warning-border /* Warning borders */
```

### Typography

The typography system provides consistent text styling:

```css
/* Font families */
font-sans               /* Geist Sans */
font-mono               /* Geist Mono */
font-serif              /* System serif */

/* Font sizes with optimized line heights */
text-xs → text-9xl      /* Complete scale */

/* Font weights */
font-thin → font-black  /* 100-900 weights */
```

### Spacing

Consistent spacing scale based on rem units:

```css
/* Spacing scale */
p-0.5 → p-96           /* Padding */
m-0.5 → m-96           /* Margin */
gap-0.5 → gap-96       /* Flexbox/Grid gaps */

/* Border radius */
rounded-none → rounded-3xl /* Border radius scale */
```

## 🌙 Dark/Light Mode

The theme system supports both automatic (system preference) and manual theme switching:

### Automatic Theme Switching

By default, the theme responds to system preferences:

```css
/* Automatically switches based on prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  /* Dark theme variables */
}
```

### Manual Theme Switching

Add the `dark` class to enable dark mode manually:

```tsx
// Toggle dark mode by adding/removing 'dark' class
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

## 🧩 Component Classes

Pre-built component classes for common UI patterns:

### Buttons

```css
.btn                    /* Base button styles */
.btn-primary           /* Primary button */
.btn-secondary         /* Secondary button */
.btn-ghost             /* Ghost button */
```

### Cards

```css
.card                  /* Basic card */
.card-elevated         /* Elevated card with shadow */
```

### Forms

```css
.input                 /* Form input */
.form-group           /* Form field wrapper */
.form-label           /* Form label */
.form-error           /* Error text */
```

### Navigation

```css
.nav-link             /* Navigation link */
.nav-link-active      /* Active navigation link */
```

### Status

```css
.status-badge         /* Base status badge */
.status-success       /* Success status */
.status-warning       /* Warning status */
.status-error         /* Error status */
.status-info          /* Info status */
```

### Layout

```css
.page-container       /* Main page wrapper */
.section              /* Content section */
.hero-section         /* Hero/banner section */
```

## 🛠 Customization

### Extending Colors

Add custom colors to your Tailwind config:

```javascript
module.exports = {
  ...nextjsConfig,
  theme: {
    ...nextjsConfig.theme,
    extend: {
      ...nextjsConfig.theme.extend,
      colors: {
        // Add custom colors
        accent: {
          50: '#...',
          500: '#...',
          900: '#...',
        },
      },
    },
  },
};
```

### Custom CSS Variables

Override theme variables in your CSS:

```css
:root {
  /* Override any design token */
  --brand-primary: #your-color;
  --border-radius-base: 8px;
}

.dark {
  /* Dark theme overrides */
  --brand-primary: #your-dark-color;
}
```

### Adding Custom Components

Extend the component classes:

```javascript
// In your tailwind.config.js
module.exports = {
  // ... other config
  plugins: [
    ...nextjsConfig.plugins,
    function({ addComponents }) {
      addComponents({
        '.my-component': {
          '@apply bg-surface-primary text-text-primary rounded-lg p-4': {},
        },
      });
    },
  ],
};
```

## 📦 API Reference

### Design Tokens

```javascript
import { tokens } from '@repo/styles';

// Access design tokens
const { colors, typography, spacing } = tokens;

// Use in JavaScript
const primaryColor = colors.brand[500];
const headingFont = typography.fontFamily.sans;
```

### Themes

```javascript
import { themes } from '@repo/styles';

// Access theme configurations
const { lightTheme, darkTheme } = themes;

// Generate CSS variables
const cssVars = themes.generateCSSVariables(lightTheme);
```

### Tailwind Configs

```javascript
// Use specific configurations
const baseConfig = require('@repo/styles/tailwind/base');
const nextjsConfig = require('@repo/styles/tailwind/nextjs');
```

## 🎯 Best Practices

### 1. Use Semantic Colors

```tsx
// ✅ Good - semantic, theme-aware
<div className="bg-surface-primary text-text-primary border-border-primary">

// ❌ Avoid - hardcoded colors
<div className="bg-white text-black border-gray-200">
```

### 2. Leverage Component Classes

```tsx
// ✅ Good - consistent styling
<button className="btn btn-primary">Click me</button>

// ❌ Avoid - custom utility combinations
<button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>
```

### 3. Use Layout Classes

```tsx
// ✅ Good - consistent layout
<main className="page-container">
  <section className="section">
    <div className="hero-section">
      <h1>Welcome</h1>
    </div>
  </section>
</main>
```

### 4. Consistent Spacing

```tsx
// ✅ Good - design system spacing
<div className="space-y-6">
  <div className="mb-4">
  <div className="p-6">

// ❌ Avoid - arbitrary values
<div className="space-y-[23px]">
```

## 🔧 Troubleshooting

### CSS Variables Not Working

Make sure you're importing the global CSS:

```css
/* In your globals.css */
@import '@repo/styles/themes/globals.css';
```

### Colors Not Updating in Dark Mode

Ensure you're using semantic color classes:

```tsx
// ✅ This will update with theme
<div className="text-text-primary">

// ❌ This won't update
<div className="text-gray-900">
```

### Tailwind Classes Not Found

Verify your Tailwind config extends the styles package:

```javascript
// Make sure you're extending the config
const nextjsConfig = require('@repo/styles/tailwind/nextjs');
module.exports = nextjsConfig;
```

## 🚀 Examples

### Theme Toggle Component

```tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check system preference on mount
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };
  
  return (
    <button 
      onClick={toggleTheme}
      className="btn btn-ghost p-2"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

### Status Card Component

```tsx
interface StatusCardProps {
  status: 'success' | 'warning' | 'error' | 'info';
  title: string;
  description: string;
}

export function StatusCard({ status, title, description }: StatusCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-start space-x-3">
        <div className={`status-badge status-${status}`}>
          {status}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          <p className="text-text-secondary mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
```

## 📄 License

This package is part of the monorepo template and is licensed under MIT.