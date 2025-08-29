import { ThemeToggle } from '../../components/ThemeToggle';
import { ColorDemo } from './components/ColorDemo';
import { TypographyDemo } from './components/TypographyDemo';
import { ComponentDemo } from './components/ComponentDemo';
import { SpacingDemo } from './components/SpacingDemo';
import { ThemeDemo } from './components/ThemeDemo';

export default function StylesPage() {
  return (
    <div className='min-h-screen bg-background-primary'>
      {/* Header */}
      <header className='border-b border-border-primary bg-surface-primary sticky top-0 z-50'>
        <div className='page-container py-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-text-primary'>
                Design System Demo
              </h1>
              <p className='text-text-secondary'>
                @repo/styles package showcase
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className='bg-surface-secondary border-b border-border-primary'>
        <div className='page-container py-3'>
          <div className='flex space-x-6 overflow-x-auto'>
            {[
              { id: 'colors', label: 'Colors' },
              { id: 'typography', label: 'Typography' },
              { id: 'components', label: 'Components' },
              { id: 'spacing', label: 'Spacing' },
              { id: 'themes', label: 'Themes' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className='nav-link whitespace-nowrap'
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='page-container space-y-16 py-8'>
        {/* Introduction */}
        <section className='text-center'>
          <h2 className='text-4xl font-bold text-text-primary mb-4'>
            Comprehensive Design System
          </h2>
          <p className='text-xl text-text-secondary max-w-3xl mx-auto'>
            This page demonstrates all the features of the @repo/styles package,
            including semantic colors, typography, component classes, and robust
            dark/light mode support.
          </p>
        </section>

        {/* Color System */}
        <section id='colors'>
          <h2 className='text-3xl font-bold text-text-primary mb-6'>
            Color System
          </h2>
          <ColorDemo />
        </section>

        {/* Typography */}
        <section id='typography'>
          <h2 className='text-3xl font-bold text-text-primary mb-6'>
            Typography
          </h2>
          <TypographyDemo />
        </section>

        {/* Components */}
        <section id='components'>
          <h2 className='text-3xl font-bold text-text-primary mb-6'>
            Component Classes
          </h2>
          <ComponentDemo />
        </section>

        {/* Spacing */}
        <section id='spacing'>
          <h2 className='text-3xl font-bold text-text-primary mb-6'>
            Spacing & Layout
          </h2>
          <SpacingDemo />
        </section>

        {/* Themes */}
        <section id='themes'>
          <h2 className='text-3xl font-bold text-text-primary mb-6'>
            Theme System
          </h2>
          <ThemeDemo />
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t border-border-primary bg-surface-secondary mt-16'>
        <div className='page-container py-8 text-center'>
          <p className='text-text-secondary'>
            Built with ❤️ using @repo/styles design system
          </p>
        </div>
      </footer>
    </div>
  );
}