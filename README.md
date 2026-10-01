# L'Alchimiste — Fine Dining & Gastronomy Website Template

[![Astro 5](https://img.shields.io/badge/Astro-v5.0+-BC52EE.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-1.0+-FBF0DF.svg?style=flat&logo=bun&logoColor=black)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy with GitHub Pages](https://github.com/robinsehnalik/finedining/actions/workflows/astro.yml/badge.svg)](https://github.com/robinsehnalik/finedining/actions/workflows/astro.yml)

**L'Alchimiste** is a high-performance, editorial website template tailored for Michelin-guide, fine-dining restaurants, luxury culinary ateliers, and wine bars. Built with **Astro 5**, **Tailwind CSS v4**, and modern web platform APIs, it delivers a smooth aesthetic experience with instant bilingual localization and zero-runtime layout shift.

---

## ✨ Highlights & Features

- **🏛️ Haute Cuisine Editorial Design**: Clean paper background, Cormorant Garamond serif headers, Space Mono metadata indices, and refined grid layouts.
- **🌐 Instant Client-Side Bilingual Toggle (EN / CZ)**: Instant language switching without page reloads using HTML `data-lang` attributes and persistent `localStorage` memory.
- **📱 Native HTML Popover Navigation**: Mobile-first, opaque fullscreen navigation drawer powered by the modern HTML Popover API (`popovertarget`).
- **⚡ Performant CSS-Only Animations**: Hardware-accelerated transitions and scroll-driven reveal effects (`animation-timeline`) with zero layout shift.
- **🍽️ Dedicated Culinary Architecture**:
  - **Home (`/`)**: Hero storytelling, award recognitions (Michelin Guide 2025, Gault & Millau, TripAdvisor, B-Corp), signature tasting menu highlights, and Chef’s Notebook narrative.
  - **Menu (`/menu`)**: Multi-course tasting experience (7 courses), à la carte starters, mains, desserts, and curated wine pairings.
  - **Reservation (`/reservation`)**: Interactive table booking inquiry form, opening schedule, and booking policy terms.
  - **Groups & Private Events (`/groups`)**: Private Dining Room (8–14 guests) and Exclusive Buyout (up to 40 seated / 60 standing guests) packages.
  - **Mentions & Press (`/mentions`)**: Critical accolades, ratings, and food press coverage.
- **🔍 Static Search**: Pre-configured [Pagefind](https://pagefind.app/) search indexing.
- **📝 Pages CMS Ready**: Out-of-the-box `.pages.yml` configuration ready for [Pages CMS](https://pagescms.org).
- **🚀 Built for SEO & Core Web Vitals**: Strict semantic HTML structure, pre-configured OpenGraph & Twitter metadata, preloaded typography, and automated XML sitemaps.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Astro 5](https://astro.build)** | Zero-JS static site generation (SSG) & content layer |
| **[Tailwind CSS v4](https://tailwindcss.com)** | Modern utility styling via `@tailwindcss/vite` |
| **[Pagefind](https://pagefind.app)** | Offline static search index |
| **[GSAP](https://gsap.com)** | Smooth animation utilities |
| **[Astro SEO & Sitemap](https://github.com/jonasmerlin/astro-seo)** | Automated search engine metadata & sitemaps |
| **[Bun](https://bun.sh)** | Ultra-fast package manager and build runner |

---

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) (recommended) or [Node.js](https://nodejs.org) (v18.17.0+ or v20+)
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/robinsehnalik/finedining.git
cd finedining

# Install dependencies with Bun
bun install

# Or with npm / pnpm / yarn
npm install
```

### Local Development

Start the development server at `http://localhost:4321`:

```bash
bun run dev
# or npm run dev
```

### Production Build & Preview

```bash
# Build static site to /dist directory
bun run build
# or npm run build

# Preview production build locally
bun run preview
# or npm run preview
```

---

## 📂 Project Structure

```text
├── .github/workflows/   # Automated GitHub Pages CI/CD deployment
├── public/              # Static assets (favicons, awards icons, robots.txt)
├── src/
│   ├── assets/          # High-resolution optimized imagery (WebP conversion)
│   ├── components/      # Reusable Astro components
│   │   ├── BaseHead.astro       # SEO metadata, OpenGraph, font preloads
│   │   ├── Header.astro         # Top bar & native Popover fullscreen overlay
│   │   ├── Hero.astro           # Hero presentation & marquee / badges
│   │   ├── Footer.astro         # Operating hours, newsletter, address & socials
│   │   ├── SearchModal.astro    # Accessible Pagefind search modal
│   │   └── ThemeToggle.astro    # Light / dark / custom theme selector
│   ├── layouts/         # Page templates (PageLayout, BlogPost, BaseLayout)
│   ├── pages/           # Astro page routes
│   │   ├── index.astro          # Landing & Chef's Notebook
│   │   ├── menu.astro           # Tasting & à la carte menu
│   │   ├── reservation.astro    # Online booking form
│   │   ├── groups.astro         # Private dining & buyout information
│   │   ├── mentions.astro       # Michelin awards & press coverage
│   │   └── 404.astro            # Custom 404 error page
│   ├── styles/
│   │   └── global.css           # Design tokens, color palette & typography
│   ├── utils/
│   │   ├── consts.ts            # Dynamic site configuration loader
│   │   └── slugify.ts           # URL helper utilities
│   ├── content.config.ts        # Typed Astro content schemas
│   └── site-config.yml          # Global site metadata (title, locale, location)
├── .pages.yml           # Pages CMS configuration schema
├── astro.config.mjs     # Astro integrations & Vite plugins
└── package.json
```

---

## ⚙️ Configuration & Customization

### 1. Site Metadata (`src/site-config.yml`)
Update your restaurant branding, location, timezone, and primary locale:
```yaml
site:
  title: "L'Alchimiste"
  description: "An upscale fine dining restaurant experience."
  based: "Prague, Czech Republic"
  timezone: "Europe/Prague"
  locale: "cs-CZ"
```

### 2. Styling & Theme Tokens (`src/styles/global.css`)
Adjust the design variables to match your brand palette:
```css
:root {
  --color-paper: #f8f6f0;   /* Warm background */
  --color-ink: #111111;     /* Primary text */
  --color-accent: #c49a45;  /* Subtle gold accent */
  --color-muted: #767676;   /* Subtitles & borders */
}
```

### 3. Bilingual Content Switcher
Each bilingual element uses `data-lang` attributes:
```html
<span data-lang="en">Tasting Menu</span>
<span data-lang="cz">Degustační Menu</span>
```
The active language is automatically tracked and updated in `<html>` (`data-lang="en"` or `data-lang="cz"`), styled dynamically via CSS without content flashing.

---

## 🚢 Deployment

### Automated GitHub Pages Deployment

This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/astro.yml`](.github/workflows/astro.yml).

1. Go to your GitHub repository settings: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to the `main` branch to trigger an automatic build and deployment.

### Other Hosting Providers

This template can be deployed anywhere with static hosting:

- **[Vercel](https://vercel.com/)**: Connect your repo and select the Astro framework preset.
- **[Netlify](https://www.netlify.com/)**: Build command: `bun run build` (or `npm run build`), Publish directory: `dist`.
- **[Cloudflare Pages](https://pages.cloudflare.com/)**: Framework preset: Astro, Build output: `dist`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
