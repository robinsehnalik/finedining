# L'Alchimiste Frontend Development Best Practices

Guidelines for writing clean, performant, and search-optimized code for this project.

## 1. Mobile-First Responsive Design
- Write CSS styles starting from the smallest viewport (mobile screens).
- Use `min-width` media queries to layer on styles for tablet and desktop screen sizes:
  ```css
  /* Mobile styling (default) */
  .hero-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  /* Desktop overrides */
  @media (min-width: 768px) {
    .hero-container {
      flex-direction: row;
      gap: 4rem;
    }
  }
  ```

## 2. Performant CSS-Only Animations
- Avoid executing JavaScript on page load for visual entry transitions (e.g. fade-ins, slides).
- Use CSS keyframes and hardware-accelerated properties (`opacity`, `transform` translate/scale) for load-in animations to prevent layout shifts:
  ```css
  @keyframes load-fade-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ```
- Use modern Scroll-driven CSS animations (`animation-timeline: scroll()`) for scroll-bound interactions (like parallax and shrinking headers) to keep JS thread usage at zero.

## 3. SEO-Friendly Markup & Semantic HTML
- Ensure every page contains exactly one `<h1>` tag inside the main section.
- Use appropriate semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`).
- Keep all interactive links descriptive. Never use generic labels like "Click Here" or "Read More".
- Provide clear `alt` text for all structural images.

## 4. Opaque Navigation Overlays
- Ensure fullscreen navigation overlays (`popover` elements) use high background opacity (`opacity: 0.98` or `1.0`) to avoid background color-blending issues and enhance text readability.
- Maintain simple keyboard accessibility by providing clear close buttons.
