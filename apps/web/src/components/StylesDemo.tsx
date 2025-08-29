'use client';

import React, { useState } from 'react';

export function StylesDemo() {
  const [theme, setTheme] = useState('default');
  
  React.useEffect(() => {
    // Apply theme class to document
    document.documentElement.className = document.documentElement.className
      .replace(/theme-\w+/g, '');
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className="min-h-screen bg-neutral-50 p-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-display-1 text-primary-600 mb-4 animate-fade-in">
            Design System Demo
          </h1>
          <p className="text-body-large text-neutral-700 max-w-2xl mx-auto animate-slide-in-up">
            Showcasing the comprehensive styles package with colors, typography, animations, and theming.
          </p>
        </header>

        {/* Theme Switcher */}
        <section className="text-center">
          <h2 className="text-heading-2 text-neutral-800 mb-6">Theme Variants</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {['default', 'purple', 'emerald', 'orange'].map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all duration-300
                  ${theme === themeOption 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'bg-white text-primary-500 border-2 border-primary-500 hover-lift'
                  }
                `}
              >
                {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-heading-2 text-neutral-800 mb-6">Color System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="text-heading-4 text-primary-600">Primary</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-primary-100 rounded-lg animate-scale-in flex items-center justify-center text-primary-800 font-medium">100</div>
                <div className="w-full h-12 bg-primary-300 rounded-lg animate-scale-in flex items-center justify-center text-primary-800 font-medium">300</div>
                <div className="w-full h-12 bg-primary-500 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">500</div>
                <div className="w-full h-12 bg-primary-700 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">700</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-heading-4 text-success-600">Success</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-success-100 rounded-lg animate-scale-in flex items-center justify-center text-success-800 font-medium">100</div>
                <div className="w-full h-12 bg-success-300 rounded-lg animate-scale-in flex items-center justify-center text-success-800 font-medium">300</div>
                <div className="w-full h-12 bg-success-500 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">500</div>
                <div className="w-full h-12 bg-success-700 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">700</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-heading-4 text-warning-600">Warning</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-warning-100 rounded-lg animate-scale-in flex items-center justify-center text-warning-800 font-medium">100</div>
                <div className="w-full h-12 bg-warning-300 rounded-lg animate-scale-in flex items-center justify-center text-warning-800 font-medium">300</div>
                <div className="w-full h-12 bg-warning-500 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">500</div>
                <div className="w-full h-12 bg-warning-700 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">700</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-heading-4 text-error-600">Error</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-error-100 rounded-lg animate-scale-in flex items-center justify-center text-error-800 font-medium">100</div>
                <div className="w-full h-12 bg-error-300 rounded-lg animate-scale-in flex items-center justify-center text-error-800 font-medium">300</div>
                <div className="w-full h-12 bg-error-500 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">500</div>
                <div className="w-full h-12 bg-error-700 rounded-lg animate-scale-in flex items-center justify-center text-white font-medium">700</div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-heading-2 text-neutral-800 mb-6">Typography Scale</h2>
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="text-display-1 text-primary-600">Display Text</div>
            <div className="text-heading-1 text-neutral-800">Heading 1</div>
            <div className="text-heading-2 text-neutral-800">Heading 2</div>
            <div className="text-heading-3 text-neutral-800">Heading 3</div>
            <div className="text-body-large text-neutral-700">Large body text for important content and descriptions.</div>
            <div className="text-body-base text-neutral-700">Standard body text for regular content and paragraphs.</div>
            <div className="text-body-small text-neutral-600">Small body text for captions and secondary information.</div>
            <div className="text-caption text-neutral-500">FORM LABELS AND CAPTIONS</div>
            <code className="text-code-inline bg-neutral-100 px-2 py-1 rounded text-neutral-800">inline code example</code>
          </div>
        </section>

        {/* Components & Interactions */}
        <section>
          <h2 className="text-heading-2 text-neutral-800 mb-6">Interactive Components</h2>
          
          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-neutral-700 mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary hover-lift">Primary Button</button>
              <button className="btn-secondary hover-scale">Secondary Button</button>
              <button className="bg-success-500 text-white px-6 py-3 rounded-lg font-medium hover-glow-success transition-all duration-300">
                Success Action
              </button>
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover-scale transition-all duration-300">
                Gradient Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-heading-3 text-neutral-700 mb-4">Cards & Layouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card card-hover animate-fade-in">
                <h4 className="text-heading-4 text-primary-600 mb-3">Standard Card</h4>
                <p className="text-body-base text-neutral-700 mb-4">
                  This card demonstrates the standard card styling with hover effects.
                </p>
                <button className="btn-primary">Action</button>
              </div>
              
              <div className="glass p-6 rounded-xl animate-slide-in-up">
                <h4 className="text-heading-4 text-neutral-800 mb-3">Glass Effect</h4>
                <p className="text-body-base text-neutral-700 mb-4">
                  Modern glass morphism effect with backdrop blur.
                </p>
                <button className="btn-secondary">Learn More</button>
              </div>
              
              <div className="bg-gradient-primary text-white p-6 rounded-xl animate-bounce-in">
                <h4 className="text-heading-4 mb-3">Gradient Card</h4>
                <p className="text-body-base opacity-90 mb-4">
                  Eye-catching gradient background with smooth animations.
                </p>
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover-scale transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Animations Showcase */}
          <div>
            <h3 className="text-heading-3 text-neutral-700 mb-4">Animations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-100 p-6 rounded-lg text-center animate-float">
                <div className="text-primary-600 font-medium">Float</div>
              </div>
              <div className="bg-success-100 p-6 rounded-lg text-center animate-pulse-subtle">
                <div className="text-success-600 font-medium">Pulse</div>
              </div>
              <div className="bg-warning-100 p-6 rounded-lg text-center animate-glow">
                <div className="text-warning-600 font-medium">Glow</div>
              </div>
              <div className="bg-error-100 p-6 rounded-lg text-center animate-spin-slow">
                <div className="text-error-600 font-medium">Rotate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-neutral-200">
          <p className="text-body-base text-neutral-600">
            Built with the <code className="text-code-inline bg-neutral-100 px-2 py-1 rounded">@repo/styles</code> design system
          </p>
        </footer>
      </div>
    </div>
  );
}