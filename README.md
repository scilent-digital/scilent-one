# Scilent One - Digital Project Template

A modern, production-ready web application template built with the latest technologies and best practices. This template emphasizes code quality, developer experience, and maintainability through comprehensive tooling and configuration.

## 🚀 Tech Stack

- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.1](https://react.dev/)** - UI library
- **[TypeScript 5.9.2](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.1.13](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Turborepo 2.3.7](https://turbo.build/repo)** - Monorepo management
- **[pnpm 10.15.1](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[@repo/tooling](./packages/tooling)** - Unified ESLint, TypeScript, and Prettier configurations
- **[@repo/styles](./packages/styles)** - Shared design system with Tailwind CSS and themes
- **[@repo/ui](./packages/ui)** - Reusable UI components built with React and Tailwind CSS

## 📁 Project Structure

```
scilent-one/
├── apps/
│   └── web/                     # Next.js application
│       ├── src/
│       │   ├── app/             # App Router pages
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   ├── styles/       # Styles demo page
│       │   │   │   └── page.tsx
│       │   │   ├── components/   # Components demo page
│       │   │   │   └── page.tsx
│       │   │   └── globals.css
│       │   └── components/      # Reusable components
│       ├── public/              # Static assets
│       ├── package.json
│       ├── tsconfig.json        # Uses @repo/tooling/typescript/nextjs
│       ├── eslint.config.mjs    # Uses @repo/tooling/eslint/next
│       ├── .prettierrc.js       # Uses @repo/tooling/prettier
│       ├── next.config.ts
│       ├── tailwind.config.js   # Uses @repo/styles/tailwind
│       └── postcss.config.mjs
├── packages/
│   ├── tooling/                 # Shared development tooling
│   │   ├── eslint/              # ESLint configurations
│   │   │   ├── base.js          # Base TypeScript rules
│   │   │   ├── react.js         # React-specific rules
│   │   │   └── next.js          # Next.js optimizations
│   │   ├── typescript/          # TypeScript configurations
│   │   │   ├── base.json        # Base TypeScript config
│   │   │   ├── react.json       # React projects
│   │   │   └── nextjs.json      # Next.js projects
│   │   ├── prettier/            # Prettier configuration
│   │   │   └── index.js         # Formatting rules
│   │   ├── package.json
│   │   ├── README.md            # Detailed tooling documentation
│   │   └── SETUP.md             # Step-by-step setup guide
│   ├── styles/                  # Shared design system
│   │   ├── tailwind/            # Tailwind CSS configuration
│   │   │   └── index.js         # Shared Tailwind config
│   │   ├── tokens/              # Design tokens
│   │   │   └── index.js         # Color, typography, spacing tokens
│   │   ├── themes/              # Theme configurations
│   │   │   ├── light.js         # Light theme
│   │   │   ├── dark.js          # Dark theme
│   │   │   └── index.js         # Theme utilities
│   │   ├── utils/               # Utility functions
│   │   │   └── index.js         # Styling utilities
│   │   ├── package.json
│   │   └── README.md            # Design system documentation
│   └── ui/                      # UI component library
│       ├── src/
│       │   ├── components/       # UI components
│       │   │   ├── button.tsx   # Button component
│       │   │   ├── input.tsx    # Input component
│       │   │   ├── card.tsx     # Card component
│       │   │   ├── badge.tsx    # Badge component
│       │   │   ├── avatar.tsx   # Avatar component
│       │   │   ├── separator.tsx # Separator component
│       │   │   ├── tabs.tsx     # Tabs component
│       │   │   ├── dialog.tsx   # Dialog component
│       │   │   ├── alert-dialog.tsx # Alert dialog component
│       │   │   ├── switch.tsx   # Switch component
│       │   │   ├── progress.tsx # Progress component
│       │   │   ├── slider.tsx   # Slider component
│       │   │   ├── select.tsx   # Select component
│       │   │   ├── textarea.tsx # Textarea component
│       │   │   ├── label.tsx    # Label component
│       │   │   └── calendar.tsx # Calendar component
│       │   ├── lib/             # Internal utilities
│       │   │   └── utils.ts      # Component utilities
│       │   └── index.ts         # Main exports
│       ├── package.json
│       └── README.md            # UI components documentation
├── package.json                 # Root package.json
├── pnpm-workspace.yaml          # pnpm workspace configuration
├── turbo.json                   # Turborepo configuration
├── eslint.config.mjs            # Root ESLint config
├── .prettierrc.js               # Root Prettier config
├── .prettierignore              # Prettier ignore patterns
└── README.md
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- pnpm (will be installed automatically)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url> my-project
   cd my-project
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Run ESLint on all packages
- `pnpm lint:check` - Check for linting issues without fixing
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm typecheck` - Run TypeScript type checking

## 🧰 Tooling Package

This template includes a comprehensive tooling package (`@repo/tooling`) that provides:

### Features

- **ESLint Configurations**: Multiple configurations for different project types
  - Base TypeScript configuration with import rules and strict type checking
  - React configuration with hooks and accessibility rules
  - Next.js configuration with performance and Core Web Vitals optimizations

- **TypeScript Configurations**: Reusable tsconfig.json files
  - Strict type checking with modern JavaScript support
  - Project-specific optimizations for React and Next.js
  - Path mapping and incremental compilation support

- **Prettier Configuration**: Consistent code formatting
  - Modern JavaScript defaults (single quotes, trailing commas)
  - File-specific rules for JSON, Markdown, and YAML
  - Comprehensive ignore patterns for build outputs and dependencies

### Quick Setup for New Projects

When adding a new package or app to the monorepo:

1. **Install the tooling package**:
   ```bash
   pnpm add -D @repo/tooling eslint prettier typescript
   ```

2. **For Next.js apps**, create `eslint.config.mjs`:
   ```javascript
   import nextConfig from '@repo/tooling/eslint/next';
   export default nextConfig;
   ```

3. **Create `tsconfig.json`**:
   ```json
   {
     "extends": "@repo/tooling/typescript/nextjs"
   }
   ```

4. **Create `.prettierrc.js`**:
   ```javascript
   module.exports = require('@repo/tooling/prettier');
   ```

For detailed setup instructions, see [`packages/tooling/SETUP.md`](./packages/tooling/SETUP.md).

## 🎨 Design System & UI Components

This template includes a comprehensive design system and UI component library:

### @repo/styles - Design System Package

A shared design system with:
- **Tailwind CSS Configuration**: Centralized styling configuration
- **Design Tokens**: Consistent colors, typography, spacing, and shadows
- **Theme Support**: Light and dark theme configurations
- **Utility Functions**: Helper functions for styling operations

### @repo/ui - UI Component Library

A collection of reusable UI components:
- **Form Components**: Buttons, inputs, selects, switches, sliders
- **Layout Components**: Cards, separators, tabs
- **Overlay Components**: Dialogs, alert dialogs, tooltips
- **Data Display**: Badges, avatars, progress indicators
- **Navigation**: Tabs, menus, navigation components

### Demo Pages

Explore the design system and components:
- **[/styles](http://localhost:3000/styles)** - Interactive design system showcase
- **[/components](http://localhost:3000/components)** - UI components demonstration

### Usage Examples

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import { tokens, lightTheme } from '@repo/styles';

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

For detailed documentation, see:
- [Design System Guide](./packages/styles/README.md)
- [UI Components Guide](./packages/ui/README.md)

## 🎯 Development Workflow

### Code Quality

This template enforces high code quality through:

- **Static Analysis**: ESLint catches potential bugs and enforces best practices
- **Type Safety**: TypeScript provides compile-time error checking
- **Code Formatting**: Prettier ensures consistent code style
- **Import Organization**: Automatic import sorting and unused import removal

### Editor Setup

For the best development experience, install these VS Code extensions:

- **ESLint** (`ms-vscode.vscode-eslint`)
- **Prettier** (`esbenp.prettier-vscode`)
- **TypeScript Importer** (`pmneo.tsimporter`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)

The repository includes `.vscode/settings.json` with optimized configuration.

### Monorepo Benefits

- **Shared Dependencies**: Common packages are hoisted to the root
- **Consistent Tooling**: Same ESLint, TypeScript, and Prettier configs across all packages
- **Fast Builds**: Turborepo caches and parallelizes builds
- **Type Safety**: Cross-package type checking and imports

## 🏗 Architecture Decisions

### Why This Structure?

- **Scalability**: Easy to add new apps and packages
- **Maintainability**: Shared tooling reduces configuration drift
- **Developer Experience**: Consistent setup across all projects
- **Performance**: Optimized build pipeline with caching

### Package Organization

- **`apps/`**: Deployable applications (web apps, mobile apps, etc.)
- **`packages/`**: Shared libraries and tooling
- **`tooling/`**: Development configurations and tools

### Technology Choices

- **Next.js**: Full-stack React framework with excellent DX
- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **TypeScript**: Type safety and better developer experience
- **Turborepo**: Efficient monorepo management with smart caching
- **pnpm**: Fast package manager with efficient disk usage

## 📦 Adding New Packages

### Creating a New App

1. **Create the app directory**:
   ```bash
   mkdir apps/my-new-app
   cd apps/my-new-app
   ```

2. **Initialize package.json**:
   ```bash
   pnpm init
   ```

3. **Install dependencies** including the tooling package:
   ```bash
   pnpm add -D @repo/tooling eslint prettier typescript
   ```

4. **Set up configurations** following the [setup guide](./packages/tooling/SETUP.md)

5. **Add to Turborepo** by updating `turbo.json` if needed

### Creating a Shared Package

1. **Create the package directory**:
   ```bash
   mkdir packages/my-package
   cd packages/my-package
   ```

2. **Follow the same setup process** as above

3. **Export the package** in the main `package.json` if it should be publishable

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `pnpm turbo build --filter=web`
   - Output Directory: `apps/web/.next`
   - Install Command: `pnpm install`

### Self-Hosted

1. **Build the application**:
   ```bash
   pnpm build
   ```

2. **Start the production server**:
   ```bash
   cd apps/web
   pnpm start
   ```

## 🤝 Contributing

### Development Guidelines

- Follow the established code style (enforced by ESLint/Prettier)
- Write TypeScript for all new code
- Add tests for new functionality
- Update documentation for significant changes

### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the coding standards
3. **Run quality checks**:
   ```bash
   pnpm lint:check
   pnpm format:check
   pnpm typecheck
   pnpm build
   ```
4. **Submit a pull request** with a clear description

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Tooling Package Guide](./packages/tooling/README.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This template is built on top of excellent open-source projects and follows industry best practices for modern web development. Special thanks to the teams behind Next.js, React, TypeScript, Tailwind CSS, and all the other tools that make this template possible.

**Happy coding! 🎉**
