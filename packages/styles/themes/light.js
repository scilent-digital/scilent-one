/**
 * @fileoverview Light theme configuration
 *
 * This file defines the light theme variables and styles for the design system.
 * It includes all the necessary CSS custom properties for backgrounds, text,
 * borders, and other UI elements in the light theme.
 */

export const lightTheme = {
  name: 'light',
  label: 'Light Theme',

  // Base colors
  background: '#ffffff',
  foreground: '#171717',

  // Muted colors for subtle elements
  muted: '#f1f5f9',
  'muted-foreground': '#64748b',

  // Accent colors for highlights
  accent: '#f1f5f9',
  'accent-foreground': '#0f172a',

  // Card colors
  card: '#ffffff',
  'card-foreground': '#0f172a',

  // Popover colors
  popover: '#ffffff',
  'popover-foreground': '#0f172a',

  // Border colors
  border: '#e2e8f0',
  input: '#e2e8f0',
  ring: '#0ea5e9',

  // Destructive colors for errors/deletions
  destructive: '#ef4444',
  'destructive-foreground': '#ffffff',

  // Primary colors
  primary: '#0ea5e9',
  'primary-foreground': '#ffffff',

  // Secondary colors
  secondary: '#f1f5f9',
  'secondary-foreground': '#0f172a',

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
  link: '#0ea5e9',
  'link-hover': '#0284c7',

  // Form colors
  'form-label': '#374151',
  'form-help': '#6b7280',
  'form-error': '#ef4444',

  // Navigation colors
  'nav-background': '#ffffff',
  'nav-foreground': '#374151',
  'nav-border': '#e5e7eb',

  // Sidebar colors
  'sidebar-background': '#f8fafc',
  'sidebar-foreground': '#334155',
  'sidebar-border': '#e2e8f0',

  // Header colors
  'header-background': '#ffffff',
  'header-foreground': '#0f172a',
  'header-border': '#e2e8f0',

  // Footer colors
  'footer-background': '#f1f5f9',
  'footer-foreground': '#64748b',
  'footer-border': '#e2e8f0',
};

/**
 * CSS custom properties for the light theme
 * This string can be used in CSS files or injected into the document head
 */
export const lightThemeCSS = `
:root {
  /* Light Theme Variables */
  --background: ${lightTheme.background};
  --foreground: ${lightTheme.foreground};

  --muted: ${lightTheme.muted};
  --muted-foreground: ${lightTheme['muted-foreground']};

  --accent: ${lightTheme.accent};
  --accent-foreground: ${lightTheme['accent-foreground']};

  --card: ${lightTheme.card};
  --card-foreground: ${lightTheme['card-foreground']};

  --popover: ${lightTheme.popover};
  --popover-foreground: ${lightTheme['popover-foreground']};

  --border: ${lightTheme.border};
  --input: ${lightTheme.input};
  --ring: ${lightTheme.ring};

  --destructive: ${lightTheme.destructive};
  --destructive-foreground: ${lightTheme['destructive-foreground']};

  --primary: ${lightTheme.primary};
  --primary-foreground: ${lightTheme['primary-foreground']};

  --secondary: ${lightTheme.secondary};
  --secondary-foreground: ${lightTheme['secondary-foreground']};

  --success: ${lightTheme.success};
  --success-foreground: ${lightTheme['success-foreground']};

  --warning: ${lightTheme.warning};
  --warning-foreground: ${lightTheme['warning-foreground']};

  --info: ${lightTheme.info};
  --info-foreground: ${lightTheme['info-foreground']};

  --link: ${lightTheme.link};
  --link-hover: ${lightTheme['link-hover']};

  --form-label: ${lightTheme['form-label']};
  --form-help: ${lightTheme['form-help']};
  --form-error: ${lightTheme['form-error']};

  --nav-background: ${lightTheme['nav-background']};
  --nav-foreground: ${lightTheme['nav-foreground']};
  --nav-border: ${lightTheme['nav-border']};

  --sidebar-background: ${lightTheme['sidebar-background']};
  --sidebar-foreground: ${lightTheme['sidebar-foreground']};
  --sidebar-border: ${lightTheme['sidebar-border']};

  --header-background: ${lightTheme['header-background']};
  --header-foreground: ${lightTheme['header-foreground']};
  --header-border: ${lightTheme['header-border']};

  --footer-background: ${lightTheme['footer-background']};
  --footer-foreground: ${lightTheme['footer-foreground']};
  --footer-border: ${lightTheme['footer-border']};
}
`;

export default lightTheme;