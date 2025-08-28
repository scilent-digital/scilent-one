# Scilent One - Digital Project Template

A modern, production-ready web application template built with the latest technologies and best practices.

## 🚀 Tech Stack

- **[Next.js 15.5.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript 5.7.2](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.1.12](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Turborepo 2.3.1](https://turbo.build/repo)** - Monorepo management
- **[pnpm 10.15.0](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 📁 Project Structure

```
scilent-one/
├── apps/
│   └── web/                 # Next.js application
│       ├── src/
│       │   ├── app/         # App Router pages
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   └── globals.css
│       │   └── components/  # Reusable components
│       ├── public/          # Static assets
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.ts
│       └── tailwind.config.ts
├── packages/
│   └── eslint-config/       # Shared ESLint configuration
│       ├── package.json
│       └── next.js
├── package.json             # Root package.json
├── pnpm-workspace.yaml      # pnpm workspace configuration
├── turbo.json              # Turborepo configuration
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Prettier ignore patterns
└── README.md
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- pnpm (will be installed automatically)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd scilent-one
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Root Level Commands

- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all apps for production
- `pnpm lint` - Run ESLint across all workspaces
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

### App-Specific Commands

Navigate to the app directory or use workspace commands:

```bash
# Run from root
pnpm --filter web dev
pnpm --filter web build
pnpm --filter web lint

# Or run from app directory
cd apps/web
pnpm dev
pnpm build
pnpm lint
```

## 🔧 Configuration

### Package Manager

This project uses **pnpm** for package management:

- Configured with `packageManager` field in package.json
- Workspaces defined in `pnpm-workspace.yaml`
- Faster installs and smaller disk usage compared to npm/yarn

### Monorepo Setup

**Turborepo** manages the monorepo:

- `turbo.json` defines build pipeline and caching
- Optimized task running with dependency tracking
- Built-in caching for faster builds

### Code Quality

**ESLint + Prettier** for consistent code:

- Shared ESLint config in `packages/eslint-config`
- Next.js recommended rules with TypeScript support
- Prettier for consistent formatting
- Pre-configured for React and Next.js best practices

### Styling

**Tailwind CSS v4** for styling:

- Latest version with improved performance
- PostCSS integration
- Dark mode support configured
- Custom design system ready

## 🏗 Adding New Apps

To add a new app to the monorepo:

1. Create a new directory in `apps/`
2. Initialize with your preferred framework
3. Update the app's `package.json` name
4. Add necessary scripts (dev, build, lint, type-check)
5. Install dependencies with `pnpm install`

## 📦 Adding New Packages

To create shared packages:

1. Create a new directory in `packages/`
2. Initialize with `package.json`
3. Set the name to `@repo/package-name`
4. Make it private: `"private": true`
5. Export from `index.ts` or specified main file

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Connect your repository to Vercel
2. Set the framework preset to "Next.js"
3. Set the root directory to `apps/web`
4. Deploy

### Docker

```dockerfile
# Example Dockerfile for Next.js app
FROM node:18-alpine AS base
RUN npm install -g pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/web/package.json ./apps/web/
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY . .
RUN pnpm build --filter=web

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json
EXPOSE 3000
CMD ["pnpm", "start", "--filter=web"]
```

## 🔄 Development Workflow

1. **Start development**: `pnpm dev`
2. **Make changes** in your preferred editor
3. **Run linting**: `pnpm lint` (auto-fixes many issues)
4. **Format code**: `pnpm format`
5. **Type check**: `pnpm type-check`
6. **Build**: `pnpm build` (test production builds)
7. **Commit** your changes

## 🎯 Best Practices

- Use TypeScript for all new code
- Follow the existing directory structure
- Write self-documenting code with clear naming
- Use Tailwind utilities over custom CSS when possible
- Leverage Turborepo's caching by keeping tasks deterministic
- Keep packages focused and small
- Use proper semantic versioning for internal packages

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Documentation](https://pnpm.io/motivation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🎉**
