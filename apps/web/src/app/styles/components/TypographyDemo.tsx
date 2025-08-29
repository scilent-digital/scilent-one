/**
 * Typography demonstration component
 * Shows font scales, weights, and semantic typography usage
 */

export function TypographyDemo() {
  return (
    <div className='space-y-8'>
      {/* Font Families */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Font Families
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3 font-sans'>Sans Serif (Default)</h4>
            <p className='font-sans text-text-secondary mb-2'>
              The quick brown fox jumps over the lazy dog.
            </p>
            <code className='text-sm font-mono text-text-tertiary'>font-sans</code>
          </div>
          
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3 font-mono'>Monospace</h4>
            <p className='font-mono text-text-secondary mb-2'>
              The quick brown fox jumps over the lazy dog.
            </p>
            <code className='text-sm font-mono text-text-tertiary'>font-mono</code>
          </div>
          
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3 font-serif'>Serif</h4>
            <p className='font-serif text-text-secondary mb-2'>
              The quick brown fox jumps over the lazy dog.
            </p>
            <code className='text-sm font-mono text-text-tertiary'>font-serif</code>
          </div>
        </div>
      </div>

      {/* Font Size Scale */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Font Size Scale
        </h3>
        <div className='card p-6 space-y-4'>
          {[
            { size: 'text-xs', label: 'Extra Small (12px)' },
            { size: 'text-sm', label: 'Small (14px)' },
            { size: 'text-base', label: 'Base (16px)' },
            { size: 'text-lg', label: 'Large (18px)' },
            { size: 'text-xl', label: 'Extra Large (20px)' },
            { size: 'text-2xl', label: '2X Large (24px)' },
            { size: 'text-3xl', label: '3X Large (30px)' },
            { size: 'text-4xl', label: '4X Large (36px)' },
            { size: 'text-5xl', label: '5X Large (48px)' },
            { size: 'text-6xl', label: '6X Large (60px)' },
          ].map(({ size, label }) => (
            <div key={size} className='flex items-baseline space-x-4'>
              <div className={`${size} text-text-primary flex-1`}>
                Sample Text
              </div>
              <code className='text-sm font-mono text-text-tertiary'>
                {size}
              </code>
              <span className='text-sm text-text-tertiary'>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Font Weights
        </h3>
        <div className='card p-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              { weight: 'font-thin', label: 'Thin (100)' },
              { weight: 'font-extralight', label: 'Extra Light (200)' },
              { weight: 'font-light', label: 'Light (300)' },
              { weight: 'font-normal', label: 'Normal (400)' },
              { weight: 'font-medium', label: 'Medium (500)' },
              { weight: 'font-semibold', label: 'Semibold (600)' },
              { weight: 'font-bold', label: 'Bold (700)' },
              { weight: 'font-extrabold', label: 'Extra Bold (800)' },
              { weight: 'font-black', label: 'Black (900)' },
            ].map(({ weight, label }) => (
              <div key={weight} className='flex items-center justify-between'>
                <span className={`${weight} text-text-primary text-lg`}>
                  Sample Text
                </span>
                <div className='text-right'>
                  <code className='text-sm font-mono text-text-tertiary block'>
                    {weight}
                  </code>
                  <span className='text-xs text-text-tertiary'>
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Semantic Typography */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Semantic Typography
        </h3>
        <div className='card p-6 space-y-6'>
          {/* Headings */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Headings</h4>
            <div className='space-y-3'>
              <h1 className='text-4xl font-bold text-text-primary'>
                Heading 1 - Main Page Title
              </h1>
              <h2 className='text-3xl font-bold text-text-primary'>
                Heading 2 - Section Title
              </h2>
              <h3 className='text-2xl font-semibold text-text-primary'>
                Heading 3 - Subsection Title
              </h3>
              <h4 className='text-xl font-semibold text-text-primary'>
                Heading 4 - Component Title
              </h4>
              <h5 className='text-lg font-medium text-text-primary'>
                Heading 5 - Small Title
              </h5>
              <h6 className='text-base font-medium text-text-primary'>
                Heading 6 - Smallest Title
              </h6>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Body Text</h4>
            <div className='space-y-4'>
              <p className='text-lg text-text-primary'>
                Large body text - Used for important content and lead paragraphs that need emphasis.
              </p>
              <p className='text-base text-text-primary'>
                Base body text - The standard text size for most content. This should be comfortable to read and provide good readability across devices.
              </p>
              <p className='text-sm text-text-secondary'>
                Small body text - Used for secondary information, captions, and less important content.
              </p>
              <p className='text-xs text-text-tertiary'>
                Extra small text - Used for fine print, timestamps, and minimal information.
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Links</h4>
            <div className='space-y-2'>
              <p className='text-text-primary'>
                This is a paragraph with a <a href='#' className='text-text-link hover:text-text-link-hover underline transition-colors'>sample link</a> that demonstrates link styling.
              </p>
              <p className='text-text-secondary'>
                Links automatically adapt to the theme: <a href='#' className='text-text-link hover:text-text-link-hover underline transition-colors'>another link example</a>.
              </p>
            </div>
          </div>

          {/* Code */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Code</h4>
            <div className='space-y-3'>
              <p className='text-text-primary'>
                Inline code: <code className='bg-surface-secondary text-text-primary px-2 py-1 rounded font-mono text-sm'>const example = true;</code>
              </p>
              <pre className='bg-surface-tertiary text-text-primary p-4 rounded-lg overflow-x-auto'>
                <code className='font-mono text-sm'>
{`// Code block example
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message);`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}