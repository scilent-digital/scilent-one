/**
 * Spacing and layout demonstration component
 * Shows the spacing scale and layout utilities
 */

export function SpacingDemo() {
  return (
    <div className='space-y-8'>
      {/* Spacing Scale */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Spacing Scale
        </h3>
        <div className='card p-6'>
          <h4 className='font-medium text-text-primary mb-3'>Padding Examples</h4>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { size: 'p-1', label: '4px', value: '1' },
              { size: 'p-2', label: '8px', value: '2' },
              { size: 'p-4', label: '16px', value: '4' },
              { size: 'p-6', label: '24px', value: '6' },
              { size: 'p-8', label: '32px', value: '8' },
              { size: 'p-12', label: '48px', value: '12' },
              { size: 'p-16', label: '64px', value: '16' },
              { size: 'p-20', label: '80px', value: '20' },
            ].map(({ size, label, value }) => (
              <div key={size} className='text-center'>
                <div className='bg-surface-secondary border border-border-primary rounded mb-2'>
                  <div className={`${size} bg-brand-100 border border-brand-300 rounded`}>
                    <div className='bg-brand-500 rounded text-xs text-white text-center'>
                      {value}
                    </div>
                  </div>
                </div>
                <code className='text-xs font-mono text-text-tertiary'>{size}</code>
                <div className='text-xs text-text-tertiary'>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layout Components */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Layout Components
        </h3>
        <div className='space-y-6'>
          {/* Page Container */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Page Container</h4>
            <div className='bg-surface-secondary border border-border-primary rounded-lg p-4'>
              <div className='page-container bg-surface-primary border border-border-secondary rounded p-4'>
                <p className='text-text-primary text-center'>
                  .page-container - Responsive container with max-width and padding
                </p>
              </div>
            </div>
          </div>

          {/* Section */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Section Spacing</h4>
            <div className='bg-surface-secondary border border-border-primary rounded-lg'>
              <div className='section bg-surface-primary border-l-4 border-brand-primary'>
                <p className='text-text-primary text-center'>
                  .section - Consistent vertical spacing for content sections
                </p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Hero Section</h4>
            <div className='bg-surface-secondary border border-border-primary rounded-lg'>
              <div className='hero-section bg-gradient-to-r from-brand-50 to-brand-100 dark:from-brand-950 dark:to-brand-900'>
                <h2 className='text-3xl font-bold text-text-primary mb-2'>
                  Hero Title
                </h2>
                <p className='text-text-secondary'>
                  .hero-section - Extra spacing and center alignment for hero content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Border Radius
        </h3>
        <div className='card p-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { class: 'rounded-none', label: 'none' },
              { class: 'rounded-sm', label: 'sm' },
              { class: 'rounded', label: 'base' },
              { class: 'rounded-md', label: 'md' },
              { class: 'rounded-lg', label: 'lg' },
              { class: 'rounded-xl', label: 'xl' },
              { class: 'rounded-2xl', label: '2xl' },
              { class: 'rounded-full', label: 'full' },
            ].map(({ class: className, label }) => (
              <div key={className} className='text-center'>
                <div className={`w-16 h-16 bg-brand-500 ${className} mb-2 mx-auto`}></div>
                <code className='text-xs font-mono text-text-tertiary'>{className}</code>
                <div className='text-xs text-text-tertiary'>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shadows */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Shadows
        </h3>
        <div className='card p-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { class: 'shadow-sm', label: 'Small Shadow' },
              { class: 'shadow', label: 'Base Shadow' },
              { class: 'shadow-md', label: 'Medium Shadow' },
              { class: 'shadow-lg', label: 'Large Shadow' },
              { class: 'shadow-xl', label: 'Extra Large Shadow' },
              { class: 'shadow-2xl', label: '2X Large Shadow' },
            ].map(({ class: className, label }) => (
              <div key={className} className='text-center'>
                <div className={`bg-surface-primary border border-border-primary rounded-lg p-6 ${className} mb-2`}>
                  <div className='text-sm text-text-primary font-medium'>
                    {label}
                  </div>
                </div>
                <code className='text-xs font-mono text-text-tertiary'>{className}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Grid */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Responsive Layout
        </h3>
        <div className='card p-6'>
          <h4 className='font-medium text-text-primary mb-3'>Responsive Grid</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className='bg-brand-100 dark:bg-brand-900 border border-brand-300 dark:border-brand-700 rounded p-4 text-center'>
                <div className='text-sm text-text-primary font-medium'>
                  Item {i + 1}
                </div>
              </div>
            ))}
          </div>
          <code className='text-sm font-mono text-text-tertiary bg-surface-secondary px-2 py-1 rounded'>
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
          </code>
        </div>
      </div>

      {/* Flexbox Utilities */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Flexbox Utilities
        </h3>
        <div className='space-y-4'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Justify Content</h4>
            <div className='space-y-3'>
              <div className='flex justify-start space-x-2 p-3 bg-surface-secondary rounded'>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <code className='text-xs text-text-tertiary ml-auto'>justify-start</code>
              </div>
              <div className='flex justify-center space-x-2 p-3 bg-surface-secondary rounded'>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <code className='text-xs text-text-tertiary ml-4'>justify-center</code>
              </div>
              <div className='flex justify-between p-3 bg-surface-secondary rounded'>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <div className='w-8 h-8 bg-brand-500 rounded'></div>
                <code className='text-xs text-text-tertiary'>justify-between</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}