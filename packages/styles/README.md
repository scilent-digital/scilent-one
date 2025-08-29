# @repo/styles

A comprehensive design system package featuring Tailwind CSS configuration, themes, animations, typography, and utility classes for modern web applications.

## 📦 What's Included

- **🎨 Color System**: Comprehensive color palettes with semantic tokens and theme variants
- **🎭 Theming**: Dynamic theme switching with CSS custom properties
- **✨ Animations**: Subtle, high-quality animations and transitions
- **📝 Typography**: Complete typography scale with semantic variants
- **🛠️ Utilities**: Custom utility classes for common patterns
- **🏗️ Tailwind Config**: Pre-configured Tailwind CSS setup with extensions

## 🚀 Quick Start

### Installation

This package is designed to be used within a monorepo. Add it to your app's dependencies:

```json
{
  "dependencies": {
    "@repo/styles": "workspace:*"
  }
}
```

### Basic Setup

1. **Import the global styles** in your app's main CSS file:

```css
@import "@repo/styles/globals.css";
```

2. **Extend the Tailwind config** in your app's `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import baseConfig from '@repo/styles/tailwind.config';

const config: Config = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/styles/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
```

3. **Update your PostCSS config** to include Tailwind:

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};
export default config;
```

## 🎨 Color System

The color system provides a comprehensive palette organized into:

- **Neutral**: Complete grayscale from 50-950
- **Primary**: Brand colors (customizable per theme)
- **Secondary**: Supporting colors
- **Semantic**: Success, warning, error, info

### Using Colors

```tsx
// Tailwind classes
<div className="bg-primary-500 text-white" />
<div className="bg-success-100 text-success-800" />

// CSS custom properties
<div style={{ backgroundColor: 'var(--color-primary-500)' }} />
```

### Theme Variants

Switch between pre-built color themes:

```typescript
import { themes, createTheme } from '@repo/styles/themes';

// Use pre-built themes
const purpleTheme = themes.purple;
const emeraldTheme = themes.emerald;

// Create custom theme
const customTheme = createTheme('orange');
```

### CSS Theme Classes

Apply theme variants using CSS classes:

```tsx
<div className="theme-purple">
  <button className="btn-primary">Purple themed button</button>
</div>

<div className="theme-emerald">
  <button className="btn-primary">Emerald themed button</button>
</div>
```

## ✨ Animations

Pre-built animations for smooth, professional interactions:

### Entrance Animations

```tsx
<div className="animate-fade-in">Fades in smoothly</div>
<div className="animate-slide-in-up">Slides in from bottom</div>
<div className="animate-scale-in">Scales in with bounce</div>
<div className="animate-bounce-in">Bounces in dramatically</div>
```

### Continuous Animations

```tsx
<div className="animate-float">Gentle floating motion</div>
<div className="animate-pulse-subtle">Subtle pulsing</div>
<div className="animate-spin-slow">Slow rotation</div>
<div className="animate-glow">Glowing effect</div>
```

### Interactive Animations

```tsx
<button className="hover-lift transition-hover-lift">
  Lifts on hover
</button>

<button className="hover-scale transition-hover-scale">
  Scales on hover
</button>

<button className="hover-glow">
  Glows on hover
</button>
```

### Custom Animation Values

Access animation building blocks programmatically:

```typescript
import { durations, timingFunctions, keyframes } from '@repo/styles/animations';

// Use in CSS-in-JS
const customAnimation = {
  animation: `${keyframes['fade-in']} ${durations.normal} ${timingFunctions.smooth}`,
};
```

## 📝 Typography

Comprehensive typography system with semantic variants:

### Heading Variants

```tsx
<h1 className="text-display-1">Display Text</h1>
<h2 className="text-heading-1">Main Heading</h2>
<h3 className="text-heading-2">Section Heading</h3>
<h4 className="text-heading-3">Subsection</h4>
```

### Body Text

```tsx
<p className="text-body-large">Large body text</p>
<p className="text-body-base">Standard body text</p>
<p className="text-body-small">Small body text</p>
```

### Specialized Text

```tsx
<span className="text-caption">FORM LABEL</span>
<code className="text-code-inline">inline code</code>
<pre className="text-code-block">code block</pre>
```

### Font Families

```tsx
<p className="font-sans">Default sans-serif</p>
<p className="font-serif">Serif text</p>
<p className="font-mono">Monospace code</p>
<p className="font-display">Display headings</p>
```

## 🛠️ Utility Classes

Enhanced utility classes for common patterns:

### Glass Morphism

```tsx
<div className="glass p-6 rounded-lg">
  Glassmorphism card
</div>

<div className="glass-dark p-6 rounded-lg">
  Dark glassmorphism
</div>
```

### Gradients

```tsx
<div className="gradient-primary p-6">Primary gradient</div>
<div className="gradient-success p-6">Success gradient</div>
<div className="gradient-rainbow p-6">Animated rainbow</div>
```

### Focus States

```tsx
<button className="focus-ring">Accessible focus ring</button>
<input className="focus-ring-inset" />
<button className="focus-ring-error">Error focus state</button>
```

### Component Utilities

```tsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>

<div className="card">Basic card</div>
<div className="card card-hover">Hoverable card</div>
```

## 🌙 Dark Mode

Dark mode is supported through both system preference and class-based switching:

### System Preference (Automatic)

Dark mode automatically activates based on user's system preference.

### Manual Toggle

```tsx
// Toggle dark mode class
<div className="dark">
  <p className="text-neutral-900">This text adapts to dark mode</p>
</div>
```

### JavaScript Theme Switching

```typescript
// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Set specific theme
function setTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
```

## 📱 Responsive Design

Built-in responsive breakpoints:

```typescript
const breakpoints = {
  xs: '475px',   // Extra small devices
  sm: '640px',   // Small devices
  md: '768px',   // Medium devices  
  lg: '1024px',  // Large devices
  xl: '1280px',  // Extra large devices
  '2xl': '1536px' // 2X large devices
};
```

### Responsive Classes

```tsx
<div className="
  text-sm 
  md:text-base 
  lg:text-lg 
  xl:text-xl
">
  Responsive text sizing
</div>

<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4
">
  Responsive grid
</div>
```

## 🔧 Customization

### Extending Colors

Add custom colors to your app's Tailwind config:

```typescript
// tailwind.config.ts
const config: Config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
    },
  },
};
```

### Custom Animations

Add your own animations:

```typescript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      animation: {
        'custom-bounce': 'custom-bounce 2s infinite',
      },
    },
  },
};
```

### Custom Utilities

Create app-specific utility classes:

```typescript
// tailwind.config.ts
const config: Config = {
  plugins: [
    ...baseConfig.plugins,
    function({ addUtilities }) {
      addUtilities({
        '.app-container': {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        },
      });
    },
  ],
};
```

## 📚 API Reference

### Colors

```typescript
import { 
  baseColors, 
  semanticColors, 
  themeVariants, 
  getThemeColors 
} from '@repo/styles/colors';

// Get colors for a specific theme
const colors = getThemeColors('purple');
```

### Themes

```typescript
import { 
  createTheme, 
  themes, 
  generateCSSVariables 
} from '@repo/styles/themes';

// Create a custom theme
const theme = createTheme('emerald');

// Generate CSS variables
const cssVars = generateCSSVariables(theme);
```

### Typography

```typescript
import { 
  fontFamilies, 
  fontSizes, 
  typographyVariants 
} from '@repo/styles/fonts';

// Access typography values
const displayFont = fontFamilies.display;
const headingStyles = typographyVariants['heading-1'];
```

### Animations

```typescript
import { 
  animations, 
  transitions, 
  durations, 
  timingFunctions 
} from '@repo/styles/animations';

// Use in CSS-in-JS
const animatedStyles = {
  animation: animations['fade-in'],
  transition: transitions.smooth,
};
```

## 🛠️ Development

### Package Structure

```
packages/styles/
├── src/
│   ├── colors/           # Color system
│   ├── fonts/            # Typography
│   ├── animations/       # Animations & transitions
│   ├── themes/           # Theme configuration
│   ├── utilities/        # Custom utilities
│   ├── tailwind.config.ts # Main Tailwind config
│   └── globals.css       # Global styles
├── package.json
└── README.md
```

### Adding New Features

1. **Colors**: Add to `src/colors/index.ts`
2. **Animations**: Add to `src/animations/index.ts`
3. **Typography**: Add to `src/fonts/index.ts`
4. **Utilities**: Add to `src/utilities/index.ts`
5. **Themes**: Update `src/themes/index.ts`

### Best Practices

- Use semantic color tokens instead of specific color names
- Prefer CSS custom properties for theme-aware styles
- Keep animations subtle and performant
- Test with reduced motion preferences
- Ensure accessibility with proper contrast ratios
- Document new additions with examples

## 🎯 Usage Examples

### Complete Component Example

```tsx
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-hover-colors focus-ring
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const variantClasses = {
    primary: 'btn-primary hover-lift',
    secondary: 'btn-secondary hover-scale-sm',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Theme Switching Example

```tsx
import React, { useState } from 'react';

export function ThemeDemo() {
  const [theme, setTheme] = useState('default');
  
  return (
    <div className={`theme-${theme} min-h-screen bg-neutral-50 p-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-heading-1 text-neutral-900 mb-8">
          Theme Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card card-hover">
            <h3 className="text-heading-3 text-primary-600 mb-4">
              Primary Colors
            </h3>
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary-100 rounded animate-fade-in" />
              <div className="w-full h-12 bg-primary-300 rounded animate-fade-in" />
              <div className="w-full h-12 bg-primary-500 rounded animate-fade-in" />
            </div>
          </div>
          
          <div className="card card-hover">
            <h3 className="text-heading-3 text-success-600 mb-4">
              Success States
            </h3>
            <button className="btn-primary w-full mb-2 hover-glow-success">
              Success Action
            </button>
            <div className="text-body-small text-success-700">
              Operation completed successfully
            </div>
          </div>
          
          <div className="card card-hover">
            <h3 className="text-heading-3 text-neutral-600 mb-4">
              Animations
            </h3>
            <div className="animate-float bg-gradient-primary text-white p-4 rounded-lg text-center">
              Floating Element
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button
            className="btn-primary"
            onClick={() => setTheme('default')}
          >
            Default
          </button>
          <button
            className="btn-primary"
            onClick={() => setTheme('purple')}
          >
            Purple
          </button>
          <button
            className="btn-primary"
            onClick={() => setTheme('emerald')}
          >
            Emerald
          </button>
          <button
            className="btn-primary"
            onClick={() => setTheme('orange')}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}
```

## 🔗 Related Packages

This styles package is designed to work seamlessly with other monorepo packages:

- **@repo/ui**: UI component library (uses this styles package)
- **@repo/utils**: Utility functions for theme management
- **@repo/icons**: Icon library with consistent styling

## 📄 License

This package is part of the monorepo template and follows the same license as the parent project.