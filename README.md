# Astro Starter Template

A clean, modern Astro starter scaffolding ready for development. This is a blank template stripped of personal branding, specific contents, and pre-packaged assets, providing a pristine foundation to build custom websites.

## Features
- Blog with Markdown/MDX, featured post, and tag listings
- Typed collections for posts, authors, and socials in `src/content.config.ts`
- Site-wide search via Pagefind with an accessible modal
- SEO-ready: OpenGraph/Twitter, canonical links, and preloaded fonts in `src/components/BaseHead.astro`
- Themes `light/dark/blue` with persistent toggle; debug toggle for layout borders
- RSS (`/rss.xml`) and sitemap (`/sitemap-index.xml`) generated automatically

## Requirements
- Astro @latest
- Tailwind CSS
- Node.js / Bun / npm

## Install & Run

```sh
# Install dependencies
bun install   # or npm install

# Start development server
bun run dev   # or npm run dev

# Production build
bun run build # or npm run build

# Preview the build
bun run preview # or npm run preview
```

## Content Collections
- **Posts**: Add `.md` or `.mdx` files under `src/content/blog/`. Schema validates `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `tags[]`.
- **Projects**: Add `.md` or `.mdx` files under `src/content/projects/`.
- **Authors**: Define team/author profiles in `src/content/authors/`.
- **Socials**: Manage site-wide social links in `src/content/socials.yml`.
- **Testimonials**: Manage client feedback quotes in `src/content/testimonials.yml`.

## Configuration
- Modify global metadata (site title, description, location, timezone, locale) in `src/site-config.yml`.
- Modify build options, site URL, and integrations in `astro.config.mjs`.
- Customize layout CSS styles in `src/styles/global.css`.
