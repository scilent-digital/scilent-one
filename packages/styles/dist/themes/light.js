"use strict";
/**
 * @fileoverview Light theme configuration
 *
 * This file defines the light theme variables and styles for the design system.
 * It includes all the necessary CSS custom properties for backgrounds, text,
 * borders, and other UI elements in the light theme.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightThemeCSS = exports.lightTheme = void 0;
exports.lightTheme = {
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
exports.lightThemeCSS = `
:root {
  /* Light Theme Variables */
  --background: ${exports.lightTheme.background};
  --foreground: ${exports.lightTheme.foreground};

  --muted: ${exports.lightTheme.muted};
  --muted-foreground: ${exports.lightTheme['muted-foreground']};

  --accent: ${exports.lightTheme.accent};
  --accent-foreground: ${exports.lightTheme['accent-foreground']};

  --card: ${exports.lightTheme.card};
  --card-foreground: ${exports.lightTheme['card-foreground']};

  --popover: ${exports.lightTheme.popover};
  --popover-foreground: ${exports.lightTheme['popover-foreground']};

  --border: ${exports.lightTheme.border};
  --input: ${exports.lightTheme.input};
  --ring: ${exports.lightTheme.ring};

  --destructive: ${exports.lightTheme.destructive};
  --destructive-foreground: ${exports.lightTheme['destructive-foreground']};

  --primary: ${exports.lightTheme.primary};
  --primary-foreground: ${exports.lightTheme['primary-foreground']};

  --secondary: ${exports.lightTheme.secondary};
  --secondary-foreground: ${exports.lightTheme['secondary-foreground']};

  --success: ${exports.lightTheme.success};
  --success-foreground: ${exports.lightTheme['success-foreground']};

  --warning: ${exports.lightTheme.warning};
  --warning-foreground: ${exports.lightTheme['warning-foreground']};

  --info: ${exports.lightTheme.info};
  --info-foreground: ${exports.lightTheme['info-foreground']};

  --link: ${exports.lightTheme.link};
  --link-hover: ${exports.lightTheme['link-hover']};

  --form-label: ${exports.lightTheme['form-label']};
  --form-help: ${exports.lightTheme['form-help']};
  --form-error: ${exports.lightTheme['form-error']};

  --nav-background: ${exports.lightTheme['nav-background']};
  --nav-foreground: ${exports.lightTheme['nav-foreground']};
  --nav-border: ${exports.lightTheme['nav-border']};

  --sidebar-background: ${exports.lightTheme['sidebar-background']};
  --sidebar-foreground: ${exports.lightTheme['sidebar-foreground']};
  --sidebar-border: ${exports.lightTheme['sidebar-border']};

  --header-background: ${exports.lightTheme['header-background']};
  --header-foreground: ${exports.lightTheme['header-foreground']};
  --header-border: ${exports.lightTheme['header-border']};

  --footer-background: ${exports.lightTheme['footer-background']};
  --footer-foreground: ${exports.lightTheme['footer-foreground']};
  --footer-border: ${exports.lightTheme['footer-border']};
}
`;
exports.default = exports.lightTheme;
//# sourceMappingURL=light.js.map