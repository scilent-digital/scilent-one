import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-50 to-brand-100 dark:from-background-secondary dark:to-background-tertiary'>
      {/* Theme toggle in top right */}
      <div className='absolute top-4 right-4'>
        <ThemeToggle />
      </div>
      
      <div className='page-container'>
        <div className='hero-section'>
          <h1 className='text-6xl font-bold text-text-primary mb-4'>
            Scilent One
          </h1>
          <p className='text-xl text-text-secondary mb-8'>
            Digital Project Template
          </p>
          <div className='card inline-flex items-center px-6 py-3 mb-8'>
            <span className='text-state-success mr-2'>✓</span>
            <span className='text-text-primary'>
              Next.js + React + TypeScript + Tailwind CSS + Turborepo
            </span>
          </div>
          
          {/* Demo of design system components */}
          <div className='max-w-2xl mx-auto space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='status-badge status-success'>
                Success Status
              </div>
              <div className='status-badge status-warning'>
                Warning Status
              </div>
              <div className='status-badge status-error'>
                Error Status
              </div>
              <div className='status-badge status-info'>
                Info Status
              </div>
            </div>
            
            <div className='flex flex-wrap gap-4 justify-center'>
              <button className='btn btn-primary'>
                Primary Button
              </button>
              <button className='btn btn-secondary'>
                Secondary Button
              </button>
              <button className='btn btn-ghost'>
                Ghost Button
              </button>
            </div>
            
            <div className='card-elevated p-6 max-w-md mx-auto'>
              <h3 className='text-lg font-semibold text-text-primary mb-2'>
                Design System Demo
              </h3>
              <p className='text-text-secondary mb-4'>
                This card demonstrates the design system with semantic colors that automatically adapt to light and dark themes.
              </p>
              <div className='form-group'>
                <label className='form-label'>
                  Sample Input
                </label>
                <input 
                  className='input' 
                  placeholder='Enter some text...'
                  type='text'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
