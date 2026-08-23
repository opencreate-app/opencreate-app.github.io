# Project Instructions: OpenCreate Website

This project is the official website for **OpenCreate**, an open-source initiative for creative tools. It is a React-based single-page application (SPA) optimized for performance and visual impact.

## 1. Project Overview

- **Core Technologies**: React 19, TypeScript, Vite.
- **Styling**: Tailwind CSS (v4) with Vanilla CSS additions in `src/styles.css`.
- **Animations**: Framer Motion.
- **Icons**: Lucide React + Custom SVG icons in `src/components/Icons.tsx`.
- **Architecture**:
  - **Routing**: A lightweight custom routing implementation found in `src/App.tsx` and `src/routing/`. It uses `window.history.pushState` and `popstate` events.
  - **Prerendering**: A custom prerendering script (`scripts/prerender.tsx`) is used to generate static HTML for key routes during the build process.
  - **Pages**: Main pages are located in `src/pages/`.
  - **Components**: Reusable UI elements are in `src/components/`.

## 2. Building and Running

### Development

- `npm run dev`: Starts the Vite development server.
- `npm run dev:host`: Starts the Vite development server with network access.

### Production

- `npm run build`: Compiles TypeScript, builds the Vite production bundle, and runs the prerendering script.
- `npm run preview`: Previews the production build locally.
- `npm run prerender`: Runs the standalone prerendering script (requires `tsx`).

### Maintenance

- `npm run lint`: Runs ESLint for code quality and style checks.

## 3. Development Conventions

- **Component Patterns**: Prefer functional components with hooks. Use `Reveal` component (wrapping Framer Motion) for entry animations.
- **TypeScript**: Strict typing is preferred. Define interfaces for props and API responses (e.g., `src/hooks/useForgeRelease.ts`).
- **Styling**: Utilize Tailwind utility classes for layout and spacing. Complex gradients and custom styles should be kept in `src/styles.css`.
- **Icons**: Check `src/components/Icons.tsx` for brand logos (Windows, macOS, Linux, etc.) before adding new ones. Use Lucide for general UI icons.
- **Dynamic Data**: Data from external sources (like GitHub Releases) should be fetched via custom hooks (e.g., `useForgeRelease`).
- **Meta Tags**: Use the `useDocumentMeta` hook on page components to manage SEO and metadata, sourcing values from `src/siteMeta.ts`.

## 4. Key Directories

- `/src/pages`: Contains the main page views (HomePage, ForgePage).
- `/src/components`: UI primitives and reusable layout pieces.
- `/src/hooks`: Custom React logic (metadata management, API fetching).
- `/public`: Static assets like SVG logos and favicon.
- `/scripts`: Build-time scripts for static site generation.
