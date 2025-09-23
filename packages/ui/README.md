# @repo/ui

A comprehensive UI component library built with React, TypeScript, and Tailwind CSS. This package provides reusable components based on Radix UI primitives and follows modern design patterns.

## Features

- 🎨 **Modern Components**: Built with Radix UI primitives for accessibility
- 🎯 **TypeScript First**: Full TypeScript support with proper type definitions
- 🎨 **Tailwind CSS**: Styled with Tailwind CSS for consistency
- ♿ **Accessible**: WCAG compliant with proper ARIA attributes
- 🧩 **Composable**: Flexible components that can be composed together
- 📱 **Responsive**: Mobile-first responsive design

## Installation

The UI package is designed to be used within the scilent-one monorepo. It should be automatically available to all workspace packages.

```bash
# Install dependencies (from monorepo root)
pnpm install
```

## Usage

### Basic Usage

Import and use components in your React applications:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@repo/ui';

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Button Component

The Button component supports multiple variants and sizes:

```tsx
import { Button } from '@repo/ui';

// Different variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>

// Loading state
<Button loading>Loading...</Button>

// As child (polymorphic)
<Button asChild>
  <a href="/link">Link Button</a>
</Button>
```

### Form Components

Use form components for consistent form styling:

```tsx
import { Input, Label, Button } from '@repo/ui';

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Modal/Dialog

Use the Dialog component for modal overlays:

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui';

export function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <p>Dialog content goes here...</p>
      </DialogContent>
    </Dialog>
  );
}
```

## Components

### Layout Components

- **Card**: Container for grouping content
- **Separator**: Visual divider between sections

### Form Components

- **Button**: Interactive button with multiple variants
- **Input**: Text input with error states and adornments
- **Label**: Form labels with proper accessibility
- **Textarea**: Multi-line text input
- **Checkbox**: Checkbox input
- **RadioGroup**: Radio button group
- **Select**: Dropdown select component
- **Switch**: Toggle switch component
- **Slider**: Range slider component
- **Form**: Form validation and handling utilities

### Navigation Components

- **Tabs**: Tabbed interface for content organization
- **NavigationMenu**: Complex navigation menus
- **Menubar**: Desktop-style menu bar

### Overlay Components

- **Dialog**: Modal dialogs and popovers
- **Sheet**: Side panel/drawer component
- **AlertDialog**: Confirmation dialogs
- **Tooltip**: Contextual help text
- **Popover**: Floating content containers
- **HoverCard**: Cards that appear on hover

### Data Display

- **Badge**: Status indicators and labels
- **Avatar**: User profile images with fallbacks
- **Progress**: Progress bars and indicators
- **Calendar**: Date picker component

### Feedback Components

- **Toast**: Notification messages
- **Progress**: Loading and progress indicators

## Styling and Theming

Components use CSS custom properties for theming. The default theme variables are:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #f1f5f9;
  --accent-foreground: #0f172a;
  --card: #ffffff;
  --card-foreground: #0f172a;
  --popover: #ffffff;
  --popover-foreground: #0f172a;
  --primary: #0ea5e9;
  --primary-foreground: #ffffff;
  /* ... and more */
}
```

## Customization

### Custom Variants

You can create custom variants for components using the `cn` utility:

```tsx
import { Button, buttonVariants } from '@repo/ui';
import { cn } from '@repo/ui';

const CustomButton = ({ className, ...props }) => (
  <Button
    className={cn(buttonVariants({ variant: 'default' }), className)}
    {...props}
  />
);
```

### Custom Styling

Override component styles by passing custom className:

```tsx
<Button className="bg-red-500 hover:bg-red-600">
  Custom Red Button
</Button>
```

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- WCAG 2.1 AA compliance

## TypeScript Support

Full TypeScript support with proper type definitions:

```tsx
import type { ButtonProps } from '@repo/ui';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}
```

## Performance

- Tree-shakeable exports
- Minimal bundle size impact
- Optimized for modern React (hooks-based)
- CSS-in-JS free (uses Tailwind CSS)

## Development

### Adding New Components

1. Create component file in `src/components/`
2. Export from `src/index.ts`
3. Add to package.json exports if needed
4. Update this README

### Testing Components

```tsx
import { render } from '@testing-library/react';
import { Button } from '@repo/ui';

test('renders button', () => {
  render(<Button>Click me</Button>);
});
```

## Contributing

When contributing to the UI package:

1. Follow existing patterns and conventions
2. Ensure accessibility standards are met
3. Add proper TypeScript types
4. Test components thoroughly
5. Update documentation

## License

MIT