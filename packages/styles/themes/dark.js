/**
 * @fileoverview Dark theme configuration
 *
 * This file defines the dark theme variables and styles for the design system.
 * It includes all the necessary CSS custom properties for backgrounds, text,
 * borders, and other UI elements in the dark theme.
 */

export const darkTheme = {
  name: 'dark',
  label: 'Dark Theme',

  // Base colors
  background: '#0a0a0a',
  foreground: '#ededed',

  // Muted colors for subtle elements
  muted: '#1e293b',
  'muted-foreground': '#94a3b8',

  // Accent colors for highlights
  accent: '#1e293b',
  'accent-foreground': '#f1f5f9',

  // Card colors
  card: '#0f172a',
  'card-foreground': '#f1f5f9',

  // Popover colors
  popover: '#0f172a',
  'popover-foreground': '#f1f5f9',

  // Border colors
  border: '#1e293b',
  input: '#1e293b',
  ring: '#0ea5e9',

  // Destructive colors for errors/deletions
  destructive: '#ef4444',
  'destructive-foreground': '#ffffff',

  // Primary colors
  primary: '#0ea5e9',
  'primary-foreground': '#ffffff',

  // Secondary colors
  secondary: '#1e293b',
  'secondary-foreground': '#f1f5f9',

  // Success colors
  success: '#22c55e',
  'success-foreground': '#ffffff',

  // Warning colors
  warning: '#f59e0b',
  'warning-foreground': '#ffffff',

  // Info colors
  info: '#3b82f6',
  'info-foreground': '#ffffff',

  // Additional semantic colors
  link: '#38bdf8',
  'link-hover': '#7dd3fc',

  // Form colors
  'form-label': '#cbd5e1',
  'form-help': '#94a3b8',
  'form-error': '#f87171',

  // Navigation colors
  'nav-background': '#020617',
  'nav-foreground': '#cbd5e1',
  'nav-border': '#1e293b',

  // Sidebar colors
  'sidebar-background': '#020617',
  'sidebar-foreground': '#cbd5e1',
  'sidebar-border': '#1e293b',

  // Header colors
  'header-background': '#020617',
  'header-foreground': '#f1f5f9',
  'header-border': '#1e293b',

  // Footer colors
  'footer-background': '#0f172a',
  'footer-foreground': '#94a3b8',
  'footer-border': '#1e293b',
};

/**
 * CSS custom properties for the dark theme
 * This string can be used in CSS files or injected into the document head
 */
export const darkThemeCSS = `
[data-theme="dark"] {
  /* Dark Theme Variables */
  --background: ${darkTheme.background};
  --foreground: ${darkTheme.foreground};

  --muted: ${darkTheme.muted};
  --muted-foreground: ${darkTheme['muted-foreground']};

  --accent: ${darkTheme.accent};
  --accent-foreground: ${darkTheme['accent-foreground']};

  --card: ${darkTheme.card};
  --card-foreground: ${darkTheme['card-foreground']};

  --popover: ${darkTheme.popover};
  --popover-foreground: ${darkTheme['popover-foreground']};

  --border: ${darkTheme.border};
  --input: ${darkTheme.input};
  --ring: ${darkTheme.ring};

  --destructive: ${darkTheme.destructive};
  --destructive-foreground: ${darkTheme['destructive-foreground']};

  --primary: ${darkTheme.primary};
  --primary-foreground: ${darkTheme['primary-foreground']};

  --secondary: ${darkTheme.secondary};
  --secondary-foreground: ${darkTheme['secondary-foreground']};

  --success: ${darkTheme.success};
  --success-foreground: ${darkTheme['success-foreground']};

  --warning: ${darkTheme.warning};
  --warning-foreground: ${darkTheme['warning-foreground']};

  --info: ${darkTheme.info};
  --info-foreground: ${darkTheme['info-foreground']};

  --link: ${darkTheme.link};
  --link-hover: ${darkTheme['link-hover']};

  --form-label: ${darkTheme['form-label']};
  --form-help: ${darkTheme['form-help']};
  --form-error: ${darkTheme['form-error']};

  --nav-background: ${darkTheme['nav-background']};
  --nav-foreground: ${darkTheme['nav-foreground']};
  --nav-border: ${darkTheme['nav-border']};

  --sidebar-background: ${darkTheme['sidebar-background']};
  --sidebar-foreground: ${darkTheme['sidebar-foreground']};
  --sidebar-border: ${darkTheme['sidebar-border']};

  --header-background: ${darkTheme['header-background']};
  --header-foreground: ${darkTheme['header-foreground']};
  --header-border: ${darkTheme['header-border']};

  --footer-background: ${darkTheme['footer-background']};
  --footer-foreground: ${darkTheme['footer-foreground']};
  --footer-border: ${darkTheme['footer-border']};
}
`;

export default darkTheme;