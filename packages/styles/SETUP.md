# Styles Package Setup Guide

This guide walks you through setting up the `@repo/styles` package in a new application or when forking this template repository.

## 🚀 Initial Setup

### 1. Install Dependencies

In your app directory, add the styles package:

```bash
# From your app directory (e.g., apps/web/)
pnpm add @repo/styles
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "@repo/styles": "workspace:*"
  }
}
```

### 2. Configure Tailwind CSS

Create or update your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import baseConfig from '@repo/styles/tailwind.config';

const config: Config = {
  ...baseConfig,
  content: [
    // Your app's content paths
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Include styles package
    "../../packages/styles/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      // Add app-specific customizations here
    },
  },
};

export default config;
```

### 3. Setup PostCSS

Ensure your `postcss.config.mjs` includes Tailwind:

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### 4. Import Global Styles

In your main CSS file (e.g., `src/app/globals.css`):

```css
@import "@repo/styles/globals.css";

/* Add any app-specific global styles here */
```

### 5. Update Package Dependencies

Make sure your app has the required peer dependencies:

```json
{
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

## 🎨 Theme Configuration

### Setting Default Theme

The package includes several pre-built themes. To set a default theme for your app:

```typescript
// In your root layout or app component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-default">
      <body>{children}</body>
    </html>
  );
}
```

Available theme classes:
- `theme-default` (blue)
- `theme-purple` 
- `theme-emerald`
- `theme-orange`

### Dynamic Theme Switching

For apps that need theme switching:

```typescript
// utils/theme.ts
export function setTheme(theme: 'default' | 'purple' | 'emerald' | 'orange') {
  // Remove existing theme classes
  document.documentElement.className = document.documentElement.className
    .replace(/theme-\w+/g, '');
  
  // Add new theme class
  document.documentElement.classList.add(`theme-${theme}`);
  
  // Optional: Save to localStorage
  localStorage.setItem('theme', theme);
}

export function initializeTheme() {
  const saved = localStorage.getItem('theme') as any;
  const theme = saved || 'default';
  setTheme(theme);
}
```

## 🌙 Dark Mode Setup

The package supports both automatic and manual dark mode:

### Automatic Dark Mode

Dark mode activates automatically based on system preference (already configured).

### Manual Dark Mode Toggle

```typescript
// utils/darkMode.ts
export function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem(
    'darkMode', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}

export function initializeDarkMode() {
  const saved = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}
```

## 📝 Typography Setup

### Font Loading

The package assumes you're using Inter and JetBrains Mono. Add these to your HTML head:

```html
<!-- In your layout.tsx or index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" 
  rel="stylesheet" 
/>
```

### Next.js Font Optimization

For Next.js apps, use `next/font`:

```typescript
// app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

Then update your Tailwind config to use the CSS variables:

```typescript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
```

## 🎯 Testing Your Setup

Create a test component to verify everything is working:

```tsx
// components/StylesTest.tsx
export function StylesTest() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Typography Test */}
        <section>
          <h1 className="text-display-1 text-primary-600 mb-4">
            Styles Package Test
          </h1>
          <p className="text-body-large text-neutral-700">
            This component tests various features of the styles package.
          </p>
        </section>

        {/* Color Test */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary-500 text-white p-4 rounded-lg text-center">
            Primary
          </div>
          <div className="bg-success-500 text-white p-4 rounded-lg text-center">
            Success
          </div>
          <div className="bg-warning-500 text-white p-4 rounded-lg text-center">
            Warning
          </div>
          <div className="bg-error-500 text-white p-4 rounded-lg text-center">
            Error
          </div>
        </section>

        {/* Animation Test */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card animate-fade-in">
              <h3 className="text-heading-3 mb-2">Fade In</h3>
              <p className="text-body-base">This card fades in smoothly</p>
            </div>
            
            <div className="card animate-scale-in">
              <h3 className="text-heading-3 mb-2">Scale In</h3>
              <p className="text-body-base">This card scales in</p>
            </div>
            
            <div className="card animate-bounce-in">
              <h3 className="text-heading-3 mb-2">Bounce In</h3>
              <p className="text-body-base">This card bounces in</p>
            </div>
          </div>
        </section>

        {/* Interactive Test */}
        <section className="flex gap-4">
          <button className="btn-primary hover-lift">
            Primary Button
          </button>
          <button className="btn-secondary hover-scale">
            Secondary Button
          </button>
          <button className="bg-success-500 text-white px-4 py-2 rounded-lg hover-glow-success">
            Success Button
          </button>
        </section>
      </div>
    </div>
  );
}
```

## 🛠️ Customization Examples

### Adding Custom Colors

```typescript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        accent: '#ff6b6b',
      },
    },
  },
};
```

### Custom Animations

```typescript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
      },
    },
  },
};
```

### Custom Utilities

```typescript
// tailwind.config.ts
const config: Config = {
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.container-app': {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          '@media (min-width: 640px)': {
            padding: '0 2rem',
          },
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      });
    },
  ],
};
```

## 🔍 Troubleshooting

### Common Issues

**CSS not loading:**
- Verify the import path in your global CSS file
- Check that the styles package is installed correctly
- Ensure PostCSS is configured properly

**Colors not working:**
- Make sure you're using the correct CSS variable format
- Check that your Tailwind config extends the base config
- Verify content paths include the styles package

**Animations not working:**
- Ensure keyframes are properly imported
- Check that the animation classes are being applied
- Verify Tailwind is processing the animation classes

**Dark mode not switching:**
- Check that the `dark` class is being added to the HTML element
- Verify dark mode CSS variables are defined
- Ensure your Tailwind config includes `darkMode: ['class', 'media']`

### Debug Commands

```bash
# Check if styles package is installed
pnpm list @repo/styles

# Verify Tailwind build
npx tailwindcss --init --dry-run

# Check PostCSS processing
npx postcss --version
```

## 📱 Mobile & Responsive

The styles package includes responsive utilities. Test on different screen sizes:

```tsx
<div className="
  text-sm sm:text-base md:text-lg lg:text-xl
  p-4 sm:p-6 md:p-8 lg:p-12
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
">
  Responsive content
</div>
```

## ♿ Accessibility

The package includes accessibility features:

- Focus rings with `focus-ring` utilities
- High contrast colors
- Reduced motion support
- Semantic color naming

Test accessibility:
- Use screen readers
- Test keyboard navigation
- Verify color contrast ratios
- Test with reduced motion preferences

## 🚀 Production Deployment

Before deploying:

1. **Build and test locally:**
```bash
npm run build
npm run start
```

2. **Check bundle size:**
```bash
npx @next/bundle-analyzer
```

3. **Test performance:**
- Lighthouse scores
- Core Web Vitals
- Animation performance

4. **Verify cross-browser:**
- Chrome, Firefox, Safari
- Mobile browsers
- Older browser support

## 📋 Checklist

When setting up in a new project:

- [ ] Package installed and added to dependencies
- [ ] Tailwind config extends base config
- [ ] PostCSS configured
- [ ] Global CSS imports styles package
- [ ] Fonts loaded (Inter, JetBrains Mono)
- [ ] Default theme set
- [ ] Dark mode configured (if needed)
- [ ] Test component created and working
- [ ] Responsive design tested
- [ ] Accessibility verified
- [ ] Performance optimized

## 🆘 Getting Help

If you encounter issues:

1. Check this setup guide
2. Review the main README.md
3. Look at the example implementations
4. Check the package source code
5. Create an issue in the repository

The styles package is designed to be comprehensive yet flexible. Take time to explore all the features and customize them to fit your project's needs!