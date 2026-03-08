# Portfolio v2

Personal portfolio website built with Astro, TypeScript, and Tailwind CSS. Deployed on Vercel at [joelorzet.dev](https://joelorzet.dev).

## Tech Stack

- Astro (SSG) with React islands
- TypeScript
- Tailwind CSS
- nanostores (cross-island state)
- Vercel (@astrojs/vercel adapter)

## Features

- 8 switchable color themes (4 dark, 4 light) with localStorage persistence
- Responsive design with mobile navigation
- React islands for interactive components (Header, Hero, Projects, ContactForm, FooterServices)
- SEO optimized with JSON-LD schemas and sitemap generation
- Contact form with service pre-fill from the services page

## Pages

- `/` Main portfolio with all sections (Hero, About, Skills, Experience, Contact)
- `/services` "Work With Me" page with service offerings, process, and maintenance plans

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm

### Installation

```bash
git clone https://github.com/joelorzet/portfolio-v2.git
cd portfolio-v2
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio-v2/
├── src/
│   ├── assets/          # Images and custom SVG icons
│   ├── components/      # Astro and React components
│   ├── config/          # Site data, SEO config, theme palettes
│   ├── layouts/         # BaseLayout (SEO head) and PageLayout (Header + Footer)
│   ├── pages/           # index.astro, services.astro
│   ├── stores/          # nanostores for cross-island state
│   └── interfaces/      # TypeScript interfaces
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## License

This project is licensed under the MIT License.
