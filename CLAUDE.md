# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Project Architecture

This is a Next.js 15.4.1 application using:
- **App Router** (located in `/app` directory)
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **ESLint** for code linting
- **React 19.1.0**

### Key Configuration Files
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration with path alias `@/*` mapped to root
- `eslint.config.mjs`: ESLint configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind

### Application Structure
- `/app`: App Router pages and layouts
  - `layout.tsx`: Root layout with Geist font configuration
  - `page.tsx`: Home page component
  - `globals.css`: Global styles including Tailwind directives
- `/public`: Static assets (SVG icons)

### Font System
The application uses Geist fonts (Geist Sans and Geist Mono) loaded via `next/font/google` and configured as CSS variables `--font-geist-sans` and `--font-geist-mono`.