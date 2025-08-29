'use client';

import { useEffect, useState } from 'react';

/**
 * Theme toggle component that switches between light and dark modes
 * Uses the design system from @repo/styles
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has a preference stored or system preference
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="btn btn-ghost p-2 w-10 h-10">
        <div className="w-4 h-4 bg-text-tertiary rounded animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost p-2"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="text-lg">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}