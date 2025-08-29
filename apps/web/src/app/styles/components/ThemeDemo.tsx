'use client';

import { useState } from 'react';

/**
 * Theme system demonstration component
 * Shows how themes work and provides interactive examples
 */

export function ThemeDemo() {
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  return (
    <div className='space-y-8'>
      {/* Theme Overview */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Theme System Overview
        </h3>
        <div className='card p-6'>
          <p className='text-text-secondary mb-4'>
            The design system supports both automatic theme detection (based on system preference) 
            and manual theme switching. All semantic colors automatically adapt between themes.
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-medium text-text-primary mb-2'>Automatic Detection</h4>
              <ul className='text-sm text-text-secondary space-y-1'>
                <li>• Responds to <code className='font-mono bg-surface-secondary px-1 rounded'>prefers-color-scheme</code></li>
                <li>• Smooth CSS transitions</li>
                <li>• No JavaScript required</li>
              </ul>
            </div>
            <div>
              <h4 className='font-medium text-text-primary mb-2'>Manual Control</h4>
              <ul className='text-sm text-text-secondary space-y-1'>
                <li>• Add <code className='font-mono bg-surface-secondary px-1 rounded'>.dark</code> class to HTML</li>
                <li>• LocalStorage persistence</li>
                <li>• Theme toggle component</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Preview */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Theme Preview
        </h3>
        <div className='card p-6'>
          <div className='mb-4'>
            <h4 className='font-medium text-text-primary mb-3'>Preview Mode</h4>
            <div className='flex gap-2'>
              <button
                onClick={() => setPreviewTheme('light')}
                className={`btn ${previewTheme === 'light' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Light
              </button>
              <button
                onClick={() => setPreviewTheme('dark')}
                className={`btn ${previewTheme === 'dark' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Dark
              </button>
              <button
                onClick={() => setPreviewTheme('auto')}
                className={`btn ${previewTheme === 'auto' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Auto
              </button>
            </div>
          </div>

          {/* Theme Preview Cards */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Light Theme Preview */}
            <div className='border border-border-primary rounded-lg overflow-hidden'>
              <div className='bg-neutral-100 border-b border-neutral-200 p-3'>
                <h5 className='font-medium text-neutral-900'>Light Theme</h5>
              </div>
              <div className='p-6 bg-white'>
                <div className='space-y-4'>
                  <h4 className='text-lg font-semibold text-neutral-900'>Sample Content</h4>
                  <p className='text-neutral-700'>
                    This is how content looks in light theme with proper contrast and readability.
                  </p>
                  <div className='flex gap-2'>
                    <button className='px-3 py-2 bg-blue-600 text-white rounded text-sm font-medium'>
                      Primary
                    </button>
                    <button className='px-3 py-2 bg-neutral-100 text-neutral-900 border border-neutral-300 rounded text-sm font-medium'>
                      Secondary
                    </button>
                  </div>
                  <div className='p-3 bg-green-50 border border-green-200 rounded text-green-800 text-sm'>
                    Success message example
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Theme Preview */}
            <div className='border border-neutral-700 rounded-lg overflow-hidden'>
              <div className='bg-neutral-800 border-b border-neutral-700 p-3'>
                <h5 className='font-medium text-neutral-100'>Dark Theme</h5>
              </div>
              <div className='p-6 bg-neutral-900'>
                <div className='space-y-4'>
                  <h4 className='text-lg font-semibold text-neutral-100'>Sample Content</h4>
                  <p className='text-neutral-300'>
                    This is how content looks in dark theme with proper contrast and readability.
                  </p>
                  <div className='flex gap-2'>
                    <button className='px-3 py-2 bg-blue-500 text-white rounded text-sm font-medium'>
                      Primary
                    </button>
                    <button className='px-3 py-2 bg-neutral-800 text-neutral-100 border border-neutral-600 rounded text-sm font-medium'>
                      Secondary
                    </button>
                  </div>
                  <div className='p-3 bg-green-950 border border-green-800 rounded text-green-400 text-sm'>
                    Success message example
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Variables */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          CSS Variables
        </h3>
        <div className='card p-6'>
          <h4 className='font-medium text-text-primary mb-3'>How It Works</h4>
          <p className='text-text-secondary mb-4'>
            The theme system uses CSS variables that automatically update based on the active theme.
          </p>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div>
              <h5 className='font-medium text-text-primary mb-2'>Light Theme Variables</h5>
              <pre className='bg-surface-tertiary text-text-primary p-4 rounded-lg text-sm'>
                <code>{`:root {
  --text-primary: #171717;
  --background-primary: #fafafa;
  --border-primary: #e5e5e5;
  --brand-primary: #0284c7;
}`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className='font-medium text-text-primary mb-2'>Dark Theme Variables</h5>
              <pre className='bg-surface-tertiary text-text-primary p-4 rounded-lg text-sm'>
                <code>{`.dark {
  --text-primary: #fafafa;
  --background-primary: #0a0a0a;
  --border-primary: #262626;
  --brand-primary: #0ea5e9;
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Examples */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Implementation Examples
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>React Component</h4>
            <pre className='bg-surface-tertiary text-text-primary p-4 rounded-lg text-sm overflow-x-auto'>
              <code>{`// ThemeToggle.tsx
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  const toggle = () => {
    document.documentElement
      .classList.toggle('dark', !isDark);
  }
}`}</code>
            </pre>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>CSS Usage</h4>
            <pre className='bg-surface-tertiary text-text-primary p-4 rounded-lg text-sm overflow-x-auto'>
              <code>{`/* Semantic colors automatically adapt */
.my-component {
  background: var(--surface-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Theme Best Practices
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-state-success mb-3'>✅ Do This</h4>
            <div className='space-y-3 text-sm'>
              <div className='p-3 bg-state-success-bg border border-state-success-border rounded'>
                <code className='font-mono text-text-primary'>
                  className="bg-surface-primary text-text-primary"
                </code>
                <p className='text-state-success mt-1'>Use semantic color classes</p>
              </div>
              <div className='p-3 bg-state-success-bg border border-state-success-border rounded'>
                <code className='font-mono text-text-primary'>
                  style={`{{ color: 'var(--text-primary)' }}`}
                </code>
                <p className='text-state-success mt-1'>Use CSS variables in custom styles</p>
              </div>
            </div>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-state-error mb-3'>❌ Avoid This</h4>
            <div className='space-y-3 text-sm'>
              <div className='p-3 bg-state-error-bg border border-state-error-border rounded'>
                <code className='font-mono text-text-primary'>
                  className="bg-white text-black dark:bg-gray-900 dark:text-white"
                </code>
                <p className='text-state-error mt-1'>Don&apos;t use hardcoded theme classes</p>
              </div>
              <div className='p-3 bg-state-error-bg border border-state-error-border rounded'>
                <code className='font-mono text-text-primary'>
                  style={`{{ color: isDark ? '#fff' : '#000' }}`}
                </code>
                <p className='text-state-error mt-1'>Don&apos;t manually handle theme logic</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Transition Demo */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Smooth Theme Transitions
        </h3>
        <div className='card p-6'>
          <p className='text-text-secondary mb-4'>
            All theme changes include smooth CSS transitions. Toggle the theme using the button in the header to see the effect.
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-4 bg-surface-secondary border border-border-primary rounded-lg text-center'>
              <div className='w-8 h-8 bg-brand-primary rounded-full mx-auto mb-2'></div>
              <p className='text-text-primary font-medium'>Colors</p>
              <p className='text-text-tertiary text-sm'>Smooth color transitions</p>
            </div>
            
            <div className='p-4 bg-surface-secondary border border-border-primary rounded-lg text-center'>
              <div className='w-8 h-8 bg-surface-elevated border border-border-secondary rounded mx-auto mb-2'></div>
              <p className='text-text-primary font-medium'>Surfaces</p>
              <p className='text-text-tertiary text-sm'>Background adaptations</p>
            </div>
            
            <div className='p-4 bg-surface-secondary border border-border-primary rounded-lg text-center'>
              <div className='w-8 h-8 border-2 border-border-focus rounded mx-auto mb-2'></div>
              <p className='text-text-primary font-medium'>Borders</p>
              <p className='text-text-tertiary text-sm'>Border color updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Variables Reference */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          CSS Variables Reference
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Background Variables</h4>
            <div className='space-y-2 text-sm font-mono'>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--background-primary</span>
                <span className='text-text-tertiary'>Main app background</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--background-secondary</span>
                <span className='text-text-tertiary'>Cards, panels</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--surface-primary</span>
                <span className='text-text-tertiary'>White/dark surfaces</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--surface-elevated</span>
                <span className='text-text-tertiary'>Modals, dropdowns</span>
              </div>
            </div>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Text Variables</h4>
            <div className='space-y-2 text-sm font-mono'>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--text-primary</span>
                <span className='text-text-tertiary'>Main text</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--text-secondary</span>
                <span className='text-text-tertiary'>Secondary text</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--text-link</span>
                <span className='text-text-tertiary'>Link colors</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-brand-primary'>--border-primary</span>
                <span className='text-text-tertiary'>Default borders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Theme Example */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Custom Theme Extension
        </h3>
        <div className='card p-6'>
          <h4 className='font-medium text-text-primary mb-3'>Adding Custom Variables</h4>
          <p className='text-text-secondary mb-4'>
            You can easily extend the theme system with custom CSS variables:
          </p>
          
          <pre className='bg-surface-tertiary text-text-primary p-4 rounded-lg text-sm overflow-x-auto'>
            <code>{`/* Add to your CSS */
:root {
  --accent-primary: #your-color;
  --custom-spacing: 2.5rem;
}

.dark {
  --accent-primary: #your-dark-color;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}