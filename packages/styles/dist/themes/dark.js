"use strict";
/**
 * @fileoverview Dark theme configuration
 *
 * This file defines the dark theme variables and styles for the design system.
 * It includes all the necessary CSS custom properties for backgrounds, text,
 * borders, and other UI elements in the dark theme.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkThemeCSS = exports.darkTheme = void 0;
exports.darkTheme = {
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
exports.darkThemeCSS = `
[data-theme="dark"] {
  /* Dark Theme Variables */
  --background: ${exports.darkTheme.background};
  --foreground: ${exports.darkTheme.foreground};

  --muted: ${exports.darkTheme.muted};
  --muted-foreground: ${exports.darkTheme['muted-foreground']};

  --accent: ${exports.darkTheme.accent};
  --accent-foreground: ${exports.darkTheme['accent-foreground']};

  --card: ${exports.darkTheme.card};
  --card-foreground: ${exports.darkTheme['card-foreground']};

  --popover: ${exports.darkTheme.popover};
  --popover-foreground: ${exports.darkTheme['popover-foreground']};

  --border: ${exports.darkTheme.border};
  --input: ${exports.darkTheme.input};
  --ring: ${exports.darkTheme.ring};

  --destructive: ${exports.darkTheme.destructive};
  --destructive-foreground: ${exports.darkTheme['destructive-foreground']};

  --primary: ${exports.darkTheme.primary};
  --primary-foreground: ${exports.darkTheme['primary-foreground']};

  --secondary: ${exports.darkTheme.secondary};
  --secondary-foreground: ${exports.darkTheme['secondary-foreground']};

  --success: ${exports.darkTheme.success};
  --success-foreground: ${exports.darkTheme['success-foreground']};

  --warning: ${exports.darkTheme.warning};
  --warning-foreground: ${exports.darkTheme['warning-foreground']};

  --info: ${exports.darkTheme.info};
  --info-foreground: ${exports.darkTheme['info-foreground']};

  --link: ${exports.darkTheme.link};
  --link-hover: ${exports.darkTheme['link-hover']};

  --form-label: ${exports.darkTheme['form-label']};
  --form-help: ${exports.darkTheme['form-help']};
  --form-error: ${exports.darkTheme['form-error']};

  --nav-background: ${exports.darkTheme['nav-background']};
  --nav-foreground: ${exports.darkTheme['nav-foreground']};
  --nav-border: ${exports.darkTheme['nav-border']};

  --sidebar-background: ${exports.darkTheme['sidebar-background']};
  --sidebar-foreground: ${exports.darkTheme['sidebar-foreground']};
  --sidebar-border: ${exports.darkTheme['sidebar-border']};

  --header-background: ${exports.darkTheme['header-background']};
  --header-foreground: ${exports.darkTheme['header-foreground']};
  --header-border: ${exports.darkTheme['header-border']};

  --footer-background: ${exports.darkTheme['footer-background']};
  --footer-foreground: ${exports.darkTheme['footer-foreground']};
  --footer-border: ${exports.darkTheme['footer-border']};
}
`;
exports.default = exports.darkTheme;
//# sourceMappingURL=dark.js.map