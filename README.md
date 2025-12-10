# Billing Electricity Manager ⚡

A modern Electron desktop app scaffolded with Vite, React, TypeScript and Tailwind CSS — configured for fast development, linting, and consistent formatting.

## Features

- **Electron + Vite**: fast dev loop for the renderer with HMR and a ready main + preload setup.
- **React + TypeScript**: type-safe UI development with React and TSX.
- **Tailwind CSS**: utility-first styling with PostCSS support.
- **ESLint + Prettier**: opinionated linting and formatting with auto-fix support.
- **Electron Forge**: production packaging via `npm run make`.

## Requirements

- Node.js >= 22.x
- npm >= 11.x
- Git

> Tip: Use Node version managers (nvm / nvm-windows / fnm) to keep consistent versions across machines.

## Installation

1. Clone the repository

```bash
git clone https://github.com/<your-username>/billing-electricity-manager.git
cd billing-electricity-manager
```

2. Install dependencies

```bash
npm install
```

3. Run in development mode

```bash
npm run start
```

This starts the Vite dev server for the renderer and launches Electron with hot-reload for the UI.

## Build (Production)

Build and package the app for your platform using Electron Forge:

```bash
npm run make
```

> Note: Packaging creates distributables in the `out` (or platform-specific) folder depending on your Electron Forge configuration.

## Code Quality & Formatting

- Lint the codebase

```bash
npm run lint
```

- Lint and auto-fix problems

```bash
npm run lint:fix
```

- Format with Prettier

```bash
npm run format
```

> Tip: Many projects wire these scripts in `package.json` (see examples below). Commit hooks (husky) can run linting/formatting before commits.

Example `package.json` script snippets:

```json
{
  "scripts": {
    "start": "vite",
    "lint": "eslint . --ext .ts,.tsx,.js",
    "lint:fix": "eslint . --ext .ts,.tsx,.js --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "make": "electron-forge make"
  }
}
```

### ESLint + Prettier configuration notes

> Keep ESLint and Prettier integrated using `eslint-config-prettier` and `eslint-plugin-prettier` (or run Prettier as a separate step). Example small configs:

`.eslintrc.json` (example)

```json
{
  "root": true,
  "env": { "browser": true, "es2021": true, "node": true },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react", "react-hooks", "prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off"
  }
}
```

`.prettierrc` (example)

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

## Project Structure

```
billing-electricity-manager/
├─ package.json
├─ tsconfig.json
├─ vite.*.config.mjs
├─ src/
│  ├─ main.js              # Electron main process entry
│  ├─ preload.js           # Electron preload script
│  ├─ renderer.js          # simple renderer bootstrap (non-React)
│  └─ app/
│     ├─ app.tsx           # React root
│     ├─ main.tsx          # Renderer entry for React
│     ├─ index.html
│     ├─ global.css        # Tailwind base imports
│     └─ global.d.ts
└─ README.md
```

## Tailwind CSS Notes

- The Tailwind entry is typically in `src/app/global.css` (or `src/index.css`). Add custom utilities or components there.

Example `global.css` snippet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add custom styles below */
.app-root {
  @apply min-h-screen bg-gray-50;
}
```

> Tip: Update `tailwind.config.js` to add custom colors, fonts, and purge/content paths (`src/**/*.{html,js,ts,tsx}`).

## ESLint + Prettier Rules Highlights

- **React Hooks**: `react-hooks/rules-of-hooks: error`, `react-hooks/exhaustive-deps: warn` — enforces correct Hooks usage.
- **Indentation**: use `tabWidth: 2` and `useTabs: false` in Prettier; ESLint `indent` can be disabled in favor of Prettier.
- **Quotes**: `singleQuote: true` in Prettier; ESLint `quotes: ["error", "single"]` if enforced.
- **Spacing**: Prettier controls spacing rules (bracket spacing, object spacing). Prefer Prettier for formatting, ESLint for code quality.

Example ESLint rules excerpt:

```json
"rules": {
	"react-hooks/rules-of-hooks": "error",
	"react-hooks/exhaustive-deps": "warn",
	"quotes": ["error", "single", { "avoidEscape": true }],
	"indent": ["error", 2],
	"comma-dangle": ["error", "always-multiline"]
}
```

> Note: When using Prettier, include `eslint-config-prettier` to turn off ESLint rules that conflict with Prettier.

## Additional Notes (VS Code)

- Recommended extensions:
  - `esbenp.prettier-vscode` (Prettier)
  - `dbaeumer.vscode-eslint` (ESLint)
  - `ms-vscode.vscode-typescript-next` (TypeScript tooling, optional)

- Recommended settings (add to `.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": ["javascript", "typescript", "typescriptreact", "javascriptreact"]
}
```
