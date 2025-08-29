/**
 * Component classes demonstration
 * Shows all the pre-built component utilities from the design system
 */

export function ComponentDemo() {
  return (
    <div className='space-y-8'>
      {/* Buttons */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Button Components
        </h3>
        <div className='card p-6 space-y-6'>
          {/* Button Variants */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Button Variants</h4>
            <div className='flex flex-wrap gap-3'>
              <button className='btn btn-primary'>
                Primary Button
              </button>
              <button className='btn btn-secondary'>
                Secondary Button
              </button>
              <button className='btn btn-ghost'>
                Ghost Button
              </button>
              <button className='btn btn-primary' disabled>
                Disabled Button
              </button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Button Sizes</h4>
            <div className='flex flex-wrap items-center gap-3'>
              <button className='btn btn-primary text-xs px-2 py-1'>
                Small
              </button>
              <button className='btn btn-primary'>
                Default
              </button>
              <button className='btn btn-primary text-lg px-6 py-3'>
                Large
              </button>
            </div>
          </div>

          {/* Code Examples */}
          <div className='bg-surface-tertiary p-4 rounded-lg'>
            <code className='text-sm font-mono text-text-primary'>
{`<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-ghost">Ghost</button>`}
            </code>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Card Components
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-2'>Basic Card</h4>
            <p className='text-text-secondary mb-4'>
              A simple card with basic styling and border.
            </p>
            <code className='text-sm font-mono text-text-tertiary bg-surface-secondary px-2 py-1 rounded'>
              className="card"
            </code>
          </div>
          
          <div className='card-elevated p-6'>
            <h4 className='font-medium text-text-primary mb-2'>Elevated Card</h4>
            <p className='text-text-secondary mb-4'>
              An elevated card with enhanced shadow for emphasis.
            </p>
            <code className='text-sm font-mono text-text-tertiary bg-surface-secondary px-2 py-1 rounded'>
              className="card-elevated"
            </code>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Status Components
        </h3>
        <div className='card p-6 space-y-6'>
          <div>
            <h4 className='font-medium text-text-primary mb-3'>Status Badges</h4>
            <div className='flex flex-wrap gap-3'>
              <span className='status-badge status-success'>
                Success
              </span>
              <span className='status-badge status-warning'>
                Warning
              </span>
              <span className='status-badge status-error'>
                Error
              </span>
              <span className='status-badge status-info'>
                Info
              </span>
            </div>
          </div>

          <div>
            <h4 className='font-medium text-text-primary mb-3'>Status in Context</h4>
            <div className='space-y-3'>
              <div className='flex items-center justify-between p-3 bg-state-success-bg border border-state-success-border rounded'>
                <span className='text-state-success font-medium'>Operation completed successfully</span>
                <span className='status-badge status-success'>Success</span>
              </div>
              <div className='flex items-center justify-between p-3 bg-state-warning-bg border border-state-warning-border rounded'>
                <span className='text-state-warning font-medium'>Please review your settings</span>
                <span className='status-badge status-warning'>Warning</span>
              </div>
              <div className='flex items-center justify-between p-3 bg-state-error-bg border border-state-error-border rounded'>
                <span className='text-state-error font-medium'>An error occurred</span>
                <span className='status-badge status-error'>Error</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Components */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Form Components
        </h3>
        <div className='card p-6 max-w-lg'>
          <h4 className='font-medium text-text-primary mb-4'>Sample Form</h4>
          <div className='space-y-4'>
            <div className='form-group'>
              <label className='form-label'>
                Email Address
              </label>
              <input 
                className='input' 
                type='email'
                placeholder='Enter your email...'
              />
            </div>
            
            <div className='form-group'>
              <label className='form-label'>
                Password
              </label>
              <input 
                className='input' 
                type='password'
                placeholder='Enter your password...'
              />
            </div>
            
            <div className='form-group'>
              <label className='form-label'>
                Message (with error)
              </label>
              <textarea 
                className='input min-h-[100px] border-border-error focus-visible:ring-border-error' 
                placeholder='Enter your message...'
              />
              <div className='form-error'>
                This field is required
              </div>
            </div>
            
            <div className='flex gap-3'>
              <button className='btn btn-primary flex-1'>
                Submit
              </button>
              <button className='btn btn-ghost'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Components */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Navigation Components
        </h3>
        <div className='card p-6'>
          <h4 className='font-medium text-text-primary mb-3'>Navigation Links</h4>
          <nav className='flex space-x-6'>
            <a href='#' className='nav-link nav-link-active'>
              Home
            </a>
            <a href='#' className='nav-link'>
              About
            </a>
            <a href='#' className='nav-link'>
              Services
            </a>
            <a href='#' className='nav-link'>
              Contact
            </a>
          </nav>
          
          <div className='mt-4 bg-surface-secondary p-3 rounded'>
            <code className='text-sm font-mono text-text-primary'>
{`<a className="nav-link nav-link-active">Active</a>
<a className="nav-link">Inactive</a>`}
            </code>
          </div>
        </div>
      </div>

      {/* Interactive States */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Interactive States
        </h3>
        <div className='card p-6'>
          <h4 className='font-medium text-text-primary mb-3'>Hover & Focus Examples</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <button className='p-4 bg-surface-secondary hover:bg-interactive-hover border border-border-primary rounded transition-colors text-text-primary'>
              Hover me to see background change
            </button>
            <button className='p-4 bg-surface-secondary active:bg-interactive-active border border-border-primary rounded transition-colors text-text-primary'>
              Click me to see active state
            </button>
            <input 
              className='input'
              placeholder='Focus me to see focus ring'
            />
            <button className='btn btn-secondary focus-visible:ring-4 focus-visible:ring-border-focus focus-visible:ring-opacity-50'>
              Focus me with keyboard
            </button>
          </div>
        </div>
      </div>

      {/* Component Code Reference */}
      <div>
        <h3 className='text-xl font-semibold text-text-primary mb-4'>
          Component Class Reference
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Button Classes</h4>
            <div className='space-y-2 text-sm font-mono'>
              <div><code className='text-brand-primary'>.btn</code> <span className='text-text-tertiary'>- Base button styles</span></div>
              <div><code className='text-brand-primary'>.btn-primary</code> <span className='text-text-tertiary'>- Primary button</span></div>
              <div><code className='text-brand-primary'>.btn-secondary</code> <span className='text-text-tertiary'>- Secondary button</span></div>
              <div><code className='text-brand-primary'>.btn-ghost</code> <span className='text-text-tertiary'>- Ghost button</span></div>
            </div>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Form Classes</h4>
            <div className='space-y-2 text-sm font-mono'>
              <div><code className='text-brand-primary'>.input</code> <span className='text-text-tertiary'>- Form input</span></div>
              <div><code className='text-brand-primary'>.form-group</code> <span className='text-text-tertiary'>- Form field wrapper</span></div>
              <div><code className='text-brand-primary'>.form-label</code> <span className='text-text-tertiary'>- Form label</span></div>
              <div><code className='text-brand-primary'>.form-error</code> <span className='text-text-tertiary'>- Error message</span></div>
            </div>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Layout Classes</h4>
            <div className='space-y-2 text-sm font-mono'>
              <div><code className='text-brand-primary'>.page-container</code> <span className='text-text-tertiary'>- Main page wrapper</span></div>
              <div><code className='text-brand-primary'>.section</code> <span className='text-text-tertiary'>- Content section</span></div>
              <div><code className='text-brand-primary'>.hero-section</code> <span className='text-text-tertiary'>- Hero/banner section</span></div>
            </div>
          </div>

          <div className='card p-6'>
            <h4 className='font-medium text-text-primary mb-3'>Status Classes</h4>
            <div className='space-y-2 text-sm font-mono'>
              <div><code className='text-brand-primary'>.status-badge</code> <span className='text-text-tertiary'>- Base status badge</span></div>
              <div><code className='text-brand-primary'>.status-success</code> <span className='text-text-tertiary'>- Success status</span></div>
              <div><code className='text-brand-primary'>.status-warning</code> <span className='text-text-tertiary'>- Warning status</span></div>
              <div><code className='text-brand-primary'>.status-error</code> <span className='text-text-tertiary'>- Error status</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}