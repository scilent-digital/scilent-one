# @repo/ui

A comprehensive UI component library built with [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/). This package provides reusable, accessible, and customizable components for building modern web applications.

## 🎯 Features

- **Built on Radix UI**: Unstyled, accessible components as foundation
- **Tailwind CSS**: Utility-first styling with CSS variables for theming
- **TypeScript**: Full type safety and excellent developer experience
- **Tree-shakable**: Import only what you need
- **Customizable**: Easy to customize and extend components
- **Accessible**: WCAG compliant components out of the box

## 📦 Components Included

### Core UI Components
- **Button** - Versatile button component with multiple variants
- **Input** - Text input with consistent styling
- **Label** - Form labels with proper accessibility
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox input with custom styling
- **Switch** - Toggle switch component
- **Select** - Dropdown selection component

### Layout Components
- **Card** - Content container with header, body, and footer
- **Separator** - Visual divider component
- **Accordion** - Collapsible content sections

### Overlay Components
- **Dialog** - Modal dialog component
- **Alert Dialog** - Confirmation dialog for destructive actions
- **Popover** - Floating content container
- **Tooltip** - Contextual information on hover
- **Dropdown Menu** - Context menu with multiple options

### Navigation Components
- **Navigation Menu** - Horizontal navigation with dropdowns
- **Tabs** - Tab-based navigation
- **Navbar** - Complete navigation bar with mobile support
- **Sidebar** - Collapsible sidebar navigation

### Feedback Components
- **Toast** - Notification messages
- **Badge** - Status indicators and labels

### Data Display Components
- **Table** - Data table with sorting and styling
- **Data Table** - Enhanced table with built-in sorting and interaction
- **Avatar** - User profile pictures with fallbacks

### Layout Components
- **Drawer** - Slide-out panel from any direction
- **Form Field** - Complete form field with label, description, and error states

## 🚀 Installation

```bash
pnpm add @repo/ui
```

## 📖 Usage

### Basic Components

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@repo/ui'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">Sign In</Button>
      </CardContent>
    </Card>
  )
}
```

### Complex Components

```tsx
import { Navbar, Sidebar, DataTable } from '@repo/ui'
import { Home, Settings, Users } from 'lucide-react'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
]

const sidebarItems = [
  { title: 'Dashboard', href: '/dashboard', icon: <Home className="h-4 w-4" /> },
  { title: 'Users', href: '/users', icon: <Users className="h-4 w-4" /> },
  { title: 'Settings', href: '/settings', icon: <Settings className="h-4 w-4" /> },
]

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar items={navItems} logo={<span>My App</span>} />
      <div className="flex">
        <Sidebar items={sidebarItems} collapsible />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
```

### Data Table

```tsx
import { DataTable, type Column } from '@repo/ui'

interface User {
  id: string
  name: string
  email: string
  role: string
}

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { 
    key: 'role', 
    title: 'Role',
    render: (value) => <Badge variant="secondary">{value}</Badge>
  },
]

function UsersTable({ users }: { users: User[] }) {
  return (
    <DataTable 
      data={users} 
      columns={columns}
      onRowClick={(user) => console.log('Selected user:', user)}
    />
  )
}
```

### Toast Notifications

```tsx
import { useToast } from '@repo/ui'

function MyComponent() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your action was completed successfully.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

## 🎨 Theming

The components use CSS variables for theming. You can customize the appearance by modifying the CSS variables in your app's global styles:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

## 🛠 Development

### Building

```bash
pnpm build
```

### Linting

```bash
pnpm lint
```

### Type Checking

```bash
pnpm type-check
```

## 📄 License

MIT