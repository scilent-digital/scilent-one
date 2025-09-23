# @repo/styles

A comprehensive design system and styling package for the scilent-one monorepo. This package provides shared Tailwind CSS configuration, design tokens, utility functions, and theme support to ensure consistency across all applications and components.

## Features

- 🎨 **Modern Design System**: Based on Tailwind CSS v4 with custom design tokens
- 🌙 **Dark Mode Support**: Built-in light and dark theme configurations
- 🧩 **Utility Functions**: Helper functions for common styling operations
- 📱 **Responsive Design**: Mobile-first responsive utilities
- ♿ **Accessibility**: Focus management and accessibility utilities
- 🔧 **TypeScript Support**: Full TypeScript definitions and type safety

## Installation

The styles package is designed to be used within the scilent-one monorepo. It should be automatically available to all workspace packages.

```bash
# Install dependencies (from monorepo root)
pnpm install
```

## Usage

### Basic Usage

Import and use the styles package in your components:

```tsx
import { cn, tokens, lightTheme } from '@repo/styles';

export function MyComponent() {
  return (
    <div className={cn(
      'p-4 rounded-lg',
      'bg-primary-500 text-white'
    )}>
      <h1 className="text-2xl font-bold">
        Hello World
      </h1>
    </div>
  );
}
```

### Using Design Tokens

Access design tokens for consistent styling:

```tsx
import { tokens } from '@repo/styles';

const colors = tokens.colors.primary;
const spacing = tokens.spacing;
const typography = tokens.typography;
```

### Applying Themes

Use the theme utilities to manage light/dark themes:

```tsx
import { applyTheme, toggleTheme, getCurrentTheme } from '@repo/styles';

// Apply a specific theme
applyTheme('dark');

// Toggle between themes
toggleTheme();

// Get current theme
const currentTheme = getCurrentTheme();
```

### Tailwind Configuration

The package includes a pre-configured Tailwind setup that you can extend or use directly:

```tsx
import { tailwindConfig } from '@repo/styles';

// Use in your tailwind.config.js
export default {
  ...tailwindConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // your content paths
  ],
};
```

## Configuration

### Tailwind CSS Setup

The package includes a comprehensive Tailwind configuration with:

- Custom color palette (primary, secondary, semantic colors)
- Typography scale with responsive sizing
- Spacing system based on rem units
- Animation and transition utilities
- Shadow and border radius scales
- Z-index management

### Design Tokens

Design tokens are available in `/tokens` and include:

- **Colors**: Primary, secondary, semantic (success, warning, error, info)
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale from 1px to 384px
- **Border Radius**: Scale from 2px to 24px
- **Shadows**: Elevation system with 8 shadow levels
- **Z-Index**: Layering system for UI components

### Themes

Two themes are available:

- **Light Theme**: Clean, bright interface with high contrast
- **Dark Theme**: Dark interface optimized for low-light environments

Both themes support all design tokens and can be easily extended.

## Utility Functions

### `cn()` - Class Name Utility

Combines clsx and tailwind-merge for optimal className handling:

```tsx
import { cn } from '@repo/styles';

const classes = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);
```

### `cssVar()` - CSS Variables

Create CSS custom property strings:

```tsx
import { cssVar } from '@repo/styles';

const color = cssVar('primary-500', '#default-color');
```

### `focusVisible()` - Focus Management

Create accessible focus styles:

```tsx
import { focusVisible } from '@repo/styles';

const focusClasses = focusVisible({
  color: 'primary-500',
  width: '2px',
  offset: '2px'
});
```

## CSS Custom Properties

The package generates CSS custom properties that can be used in your stylesheets:

```css
@import '@repo/styles/tokens';

.my-component {
  background: var(--primary-500);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
}
```

## TypeScript Support

The package includes full TypeScript definitions:

```tsx
import type { Theme } from '@repo/styles';

const theme: Theme = getTheme('dark');
```

## Examples

### Creating a Button Component

```tsx
import { cn, tokens, interactive } from '@repo/styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';

  const variants = {
    primary: 'bg-primary-500 text-primary-foreground hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-secondary-foreground hover:bg-secondary-600',
    outline: 'border border-input bg-background hover:bg-accent',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        interactive({ scale: 1.02 })
      )}
    >
      {children}
    </button>
  );
}
```

### Creating a Card Component

```tsx
import { cn, tokens } from '@repo/styles';

export function Card({ children, className }) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
```

## Development

### Adding New Design Tokens

To add new design tokens, edit the `/tokens/index.js` file:

```js
export const tokens = {
  colors: {
    // Add new colors here
    brand: {
      50: '#your-color',
      // ... more shades
    },
  },
  // Add other token categories
};
```

### Creating New Themes

To create a new theme, add a new file in `/themes/`:

```js
export const customTheme = {
  name: 'custom',
  label: 'Custom Theme',
  background: '#your-background-color',
  // ... other theme variables
};

export const customThemeCSS = \`
:root[data-theme="custom"] {
  --background: \${customTheme.background};
  /* ... other CSS variables */
}
\`;
```

## Contributing

When contributing to the styles package:

1. Follow the existing code style and naming conventions
2. Add TypeScript types for new utilities
3. Update this README if adding new features
4. Test changes across different themes and breakpoints
5. Ensure accessibility standards are maintained

## License

MIT