# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built as a single-page React app. It's deployed to GitHub Pages (via the `docs` folder). The site is component-driven with content primarily pulled from a JSON file.

## Common Commands

| Task | Command |
|------|---------|
| **Start dev server** | `npm run dev` |
| **Build for production** | `npm run build` |
| **Type-check code** | `npm run typecheck` |
| **Lint code** | `npm run lint` |
| **Format code** | `npm run format` |
| **Check formatting** | `npm run format:check` |
| **Deploy to GitHub Pages** | `npm run deploy` |

Notes:
- `npm run dev` runs typecheck automatically before starting Vite
- `npm run build` builds to the `docs` folder (configured for GitHub Pages)
- ESLint config extends `eslint:recommended` + `@typescript-eslint/recommended` + `prettier`
- Prettier is configured: 80 char line width, 2-space tabs, single quotes, trailing commas (es5)

## Architecture

### High-Level Structure

```
src/
  components/
    - Page sections: Hero, About, Projects, Photography, Navbar, Footer
    - UI components: button, card, separator (Radix UI + Tailwind)
  assets/
    - content/en.json: Centralized content (may contain project data, text)
    - Images and media
  App.tsx: Main app component with scroll state management
  main.tsx: React DOM entry point
  globals.css: Global Tailwind styles
```

### Key Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type safety (somewhat relaxed config)
- **Vite**: Build tool with fast HMR
- **Tailwind CSS + Radix UI**: Component library and styling system

### Build System

- **Entry point**: `src/main.tsx`
- **Build output**: `docs/` folder (for GitHub Pages)
- **Alias**: `@/` resolves to `src/`
- **Esbuild minification**, no source maps in production
- **Single CSS bundle** (cssCodeSplit: false)

### TypeScript Config Notes

- Target: ES2020
- Strict mode: **disabled** (`"strict": false`)
- Unused variable/parameter checks: **disabled**
- This allows for more flexible development but sacrifices some type safety

## Content & Data Flow

Content is likely managed in `src/assets/content/en.json`. Component sections (Hero, About, Projects, etc.) consume this data. When adding new content or sections, check this file first for the data structure.

## Styling

- Global entry point: `src/globals.css`
- Uses Tailwind utility classes
- Radix UI components for accessible, pre-styled interactive elements
- `class-variance-authority` for component variants
- Icons from `lucide-react`

## Deployment

The site is deployed via GitHub Pages using `gh-pages` package:
- `npm run deploy` pushes the `docs` folder to the `gh-pages` branch
- Build output must be in `docs/` (already configured in vite.config.ts)
