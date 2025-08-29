/**
 * Color system demonstration component
 * Shows the complete color palette and semantic color usage
 */

export function ColorDemo() {
  return (
    <div className='space-y-8'>
      {/* Semantic Colors */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Semantic Colors (Theme-Aware)
        </h3>
        <p className='text-text-secondary mb-6'>
          These colors automatically adapt to light and dark themes using CSS variables.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Background Colors */}
          <div className='card p-4'>
            <h4 className='font-medium text-text-primary mb-3'>Background</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-background-primary border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-background-primary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-background-secondary border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-background-secondary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-background-tertiary border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-background-tertiary</span>
              </div>
            </div>
          </div>

          {/* Surface Colors */}
          <div className='card p-4'>
            <h4 className='font-medium text-text-primary mb-3'>Surface</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-surface-primary border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-surface-primary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-surface-secondary border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-surface-secondary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-surface-elevated border border-border-primary rounded shadow-md'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-surface-elevated</span>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className='card p-4'>
            <h4 className='font-medium text-text-primary mb-3'>Text</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-text-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-text-primary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-text-secondary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-text-secondary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-text-link rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-text-link</span>
              </div>
            </div>
          </div>

          {/* Brand Colors */}
          <div className='card p-4'>
            <h4 className='font-medium text-text-primary mb-3'>Brand</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-brand-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-brand-primary</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-brand-secondary border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-brand-secondary</span>
              </div>
            </div>
          </div>

          {/* State Colors */}
          <div className='card p-4'>
            <h4 className='font-medium text-text-primary mb-3'>States</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-state-success rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-state-success</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-state-warning rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-state-warning</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-state-error rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-state-error</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-state-info rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>text-state-info</span>
              </div>
            </div>
          </div>

          {/* Interactive Colors */}
          <div className='card p-4'>
            <h4 className='font-medium text-text-primary mb-3'>Interactive</h4>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-interactive-hover border border-border-primary rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-interactive-hover</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-interactive-focus rounded'></div>
                <span className='text-sm font-mono text-text-secondary'>bg-interactive-focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Raw Color Palettes */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Raw Color Palettes
        </h3>
        <p className='text-text-secondary mb-6'>
          Complete color scales available for custom usage.
        </p>

        <div className='grid gap-8'>
          {/* Brand Palette */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Brand Colors</h4>
            <div className='flex flex-wrap gap-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className='text-center'>
                  <div 
                    className={`w-16 h-16 rounded-lg border border-border-primary bg-brand-${shade}`}
                  ></div>
                  <div className='text-xs text-text-tertiary mt-1 font-mono'>
                    {shade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Palette */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Neutral Colors</h4>
            <div className='flex flex-wrap gap-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className='text-center'>
                  <div 
                    className={`w-16 h-16 rounded-lg border border-border-primary bg-neutral-${shade}`}
                  ></div>
                  <div className='text-xs text-text-tertiary mt-1 font-mono'>
                    {shade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* State Palettes */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Success */}
            <div>
              <h4 className='font-medium text-text-primary mb-3'>Success Colors</h4>
              <div className='flex flex-wrap gap-1'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className='text-center'>
                    <div 
                      className={`w-12 h-12 rounded border border-border-primary bg-success-${shade}`}
                    ></div>
                    <div className='text-xs text-text-tertiary mt-1 font-mono'>
                      {shade}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Error */}
            <div>
              <h4 className='font-medium text-text-primary mb-3'>Error Colors</h4>
              <div className='flex flex-wrap gap-1'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className='text-center'>
                    <div 
                      className={`w-12 h-12 rounded border border-border-primary bg-error-${shade}`}
                    ></div>
                    <div className='text-xs text-text-tertiary mt-1 font-mono'>
                      {shade}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Usage Examples */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Color Usage Examples
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Semantic Usage</h4>
            <div className='space-y-3'>
              <div className='p-3 bg-surface-secondary rounded border border-border-primary'>
                <code className='text-sm font-mono text-text-primary'>
                  className="bg-surface-secondary text-text-primary border-border-primary"
                </code>
              </div>
              <div className='p-3 bg-brand-primary text-text-inverse rounded'>
                <code className='text-sm font-mono'>
                  className="bg-brand-primary text-text-inverse"
                </code>
              </div>
            </div>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>State Colors</h4>
            <div className='space-y-3'>
              <div className='p-3 bg-state-success-bg text-state-success border border-state-success-border rounded'>
                <code className='text-sm font-mono'>
                  Success: bg-state-success-bg text-state-success
                </code>
              </div>
              <div className='p-3 bg-state-error-bg text-state-error border border-state-error-border rounded'>
                <code className='text-sm font-mono'>
                  Error: bg-state-error-bg text-state-error
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}