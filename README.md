# OpenCreate Official Website

The official website for **OpenCreate**, an open-source initiative dedicated to developing high-performance, privacy-first creative tools for designers and artists.

[opencreate-app.github.io](https://opencreate-app.github.io)

## 🚀 Features

- **Performance Focused**: Built with React 19 and Vite for near-instant load times and 60fps animations.
- **Dynamic Downloads**: Automatically detects the user's operating system (Windows, macOS, Linux) and provides the correct download link for the latest **OpenCreate Forge** release.
- **Static Prerendering**: Custom SSR/SSG logic to ensure fast initial page loads and excellent SEO.
- **Modern UI**: Clean, accessible design powered by Tailwind CSS v4 and Framer Motion.
- **Privacy First**: No invasive telemetry or tracking.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Static Site Generation**: Custom prerendering script in `scripts/prerender.tsx`.

## 📦 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/opencreate-app/opencreate-app.github.io.git
   cd opencreate-app.github.io
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

### Development

Run the development server:

```bash
npm run dev
```

### Build & Prerender

Build the project for production (this includes compiling TS, building with Vite, and running the prerendering script):

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

- `src/pages`: Main application views (HomePage, ForgePage).
- `src/components`: Reusable UI components and primitives.
- `src/hooks`: Custom React logic, including platform detection and GitHub API integration.
- `src/routing`: Lightweight custom routing implementation.
- `scripts`: Prerendering and build automation scripts.
- `public`: Static assets, logos, and global configurations.

## 🤝 Contributing

We believe creative tools should belong to the community. Feel free to report bugs, suggest features, or submit pull requests.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Created by **Gabriel Borges**.
