# Styles Package - Complete Design System

## Overview

The `@repo/styles` package provides a comprehensive design system built on Tailwind CSS v4, featuring:

- 🎨 **Dynamic Theme System** with 4 built-in variants (default, purple, emerald, orange)
- ✨ **20+ Subtle Animations** optimized for web applications
- 📝 **Complete Typography Scale** with semantic variants
- 🌙 **Automatic Dark Mode** with manual override support
- 🛠️ **50+ Custom Utilities** for common design patterns
- ♿ **Accessibility-First** approach with WCAG compliance
- 📱 **Mobile-First Responsive** design system

## Quick Start

### 1. Installation
The package is already set up in this monorepo. For new apps:

```bash
pnpm add @repo/styles
```

### 2. Configuration
Update your `tailwind.config.ts`:

```typescript
import baseConfig from '@repo/styles/tailwind.config';

export default {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/styles/src/**/*.{js,ts,jsx,tsx}",
  ],
};
```

### 3. Import Styles
In your global CSS:

```css
@import "@repo/styles/globals.css";
```

## Key Features

### 🎨 Theme System
- **4 Built-in Themes**: Default (blue), Purple, Emerald, Orange
- **CSS Custom Properties**: Seamless theme switching
- **Dynamic Theming**: Runtime theme changes via CSS classes

```tsx
// Apply theme
<div className="theme-purple">
  <button className="btn-primary">Purple-themed button</button>
</div>

// Theme switching
document.documentElement.classList.add('theme-emerald');
```

### ✨ Animation Library
High-quality, subtle animations that enhance UX:

- **Entrance**: fade-in, slide-in-*, scale-in, bounce-in
- **Continuous**: float, pulse-subtle, spin-slow, glow
- **Interactive**: hover-lift, hover-scale, hover-glow

```tsx
<div className="animate-fade-in">Smooth entrance</div>
<button className="hover-lift">Lifts on hover</button>
<div className="animate-float">Gentle floating</div>
```

### 📝 Typography System
Comprehensive typography with semantic variants:

```tsx
<h1 className="text-display-1">Hero Text</h1>
<h2 className="text-heading-1">Section Title</h2>
<p className="text-body-large">Important content</p>
<span className="text-caption">FORM LABEL</span>
<code className="text-code-inline">code snippet</code>
```

### 🌙 Dark Mode
Automatic system preference detection with manual override:

```tsx
// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
```

### 🛠️ Utility Classes
Extended utilities for common patterns:

```tsx
<div className="glass">Glass morphism effect</div>
<div className="gradient-primary">Gradient background</div>
<button className="focus-ring">Accessible focus</button>
<div className="card card-hover">Interactive card</div>
```

## Color System

### Semantic Colors
- **Primary**: Brand colors (theme-dependent)
- **Secondary**: Supporting colors
- **Success**: #22c55e (green)
- **Warning**: #f59e0b (amber)
- **Error**: #ef4444 (red)
- **Info**: #06b6d4 (cyan)
- **Neutral**: Complete grayscale (50-950)

### Usage
```tsx
// Tailwind classes
<div className="bg-primary-500 text-white" />
<div className="bg-success-100 text-success-800" />

// CSS custom properties
<div style={{ backgroundColor: 'var(--color-primary-500)' }} />
```

## Component Examples

### Button Component
```tsx
export function Button({ variant = 'primary', children, ...props }) {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${variant === 'primary' ? 'btn-primary hover-lift' : 'btn-secondary hover-scale'}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Card Component
```tsx
export function Card({ children, hover = false }) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''}`}>
      {children}
    </div>
  );
}
```

## Customization

### Adding Custom Colors
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
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
```typescript
export default {
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

## Performance

- **Tree Shaking**: Only used utilities are included
- **CSS Variables**: Minimal runtime overhead
- **Optimized Animations**: GPU-accelerated transforms
- **Reduced Motion**: Respects accessibility preferences

## Accessibility

- **WCAG AA Compliant**: High contrast color ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Animation fallbacks
- **Semantic Colors**: Clear naming conventions

## File Structure

```
packages/styles/
├── src/
│   ├── colors/           # Color system & themes
│   ├── fonts/            # Typography scales
│   ├── animations/       # Keyframes & transitions
│   ├── themes/           # Theme configuration
│   ├── utilities/        # Custom utilities
│   ├── tailwind.config.ts # Main config
│   ├── globals.css       # Global styles
│   └── index.ts          # Package exports
├── README.md             # Full documentation
├── SETUP.md              # Setup guide
└── CHANGELOG.md          # Version history
```

## Best Practices

1. **Use Semantic Colors**: Prefer `primary-500` over specific colors
2. **Leverage CSS Variables**: Enable dynamic theming
3. **Keep Animations Subtle**: Enhance, don't distract
4. **Test Accessibility**: Keyboard navigation, screen readers
5. **Responsive First**: Mobile-first approach
6. **Performance Aware**: Monitor bundle size

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## Integration Status

✅ **Package Created**: Complete design system package  
✅ **Tailwind Config**: Comprehensive configuration  
✅ **Color System**: 4 themes with semantic tokens  
✅ **Animation Library**: 20+ optimized animations  
✅ **Typography**: Complete scale with variants  
✅ **Utility Classes**: 50+ custom utilities  
✅ **Next.js Integration**: Properly configured  
✅ **Documentation**: README, Setup guide, examples  
✅ **Demo Component**: Interactive showcase  

## Next Steps

When using this template:

1. **Customize Themes**: Adjust colors to match your brand
2. **Add Components**: Build UI library using the design system
3. **Extend Animations**: Add project-specific animations
4. **Performance Tune**: Optimize for your use case
5. **Accessibility Test**: Ensure WCAG compliance

The styles package provides a solid foundation for building modern, accessible web applications with consistent design and smooth interactions.