const baseConfig = require("./base");

/**
 * ESLint configuration for React projects
 * Extends the base configuration with React-specific rules
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: [
    ...baseConfig.plugins,
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    ...baseConfig.env,
    browser: true,
  },
  globals: {
    React: "readonly",
    JSX: "readonly",
  },
  settings: {
    ...baseConfig.settings,
    react: {
      version: "detect",
    },
  },
  rules: {
    ...baseConfig.rules,
    
    // React rules
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/prop-types": "off", // Using TypeScript for prop validation
    "react/jsx-uses-react": "off", // Not needed in React 17+
    "react/jsx-uses-vars": "error",
    "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    "react/jsx-no-target-blank": ["error", { allowReferrer: false }],
    "react/jsx-pascal-case": "error",
    
    // React Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    
    // Accessibility rules
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
  },
  overrides: [
    ...baseConfig.overrides,
    {
      files: ["*.tsx"],
      rules: {
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      },
    },
  ],
};