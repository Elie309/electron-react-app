// eslint.config.mjs
import tseslint from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      // Console.log
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // React specific rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
      ],

      // Prevent unused state or variables in JSX
      'react/no-unused-state': 'warn',
      'react/no-unused-prop-types': 'warn',
      'react/jsx-key': 'error',

      // Ensure self-closing tags where possible
      'react/self-closing-comp': 'warn',

      // Enforce consistent JSX spacing
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],

      // Warn about deprecated React lifecycle methods
      'react/no-deprecated': 'warn',
    },
  },
];