# saramsha.com

Personal site, built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # produces ./dist
npm run preview  # serve the built site locally
```

## Deploy

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. The custom domain `saramsha.com` is served via
`public/CNAME`.

To enable the workflow on first use: in the GitHub repo settings, go to
**Pages → Source** and set it to **GitHub Actions**.

## Layout

- `src/pages/` — routes (`.astro` files map to URLs).
- `src/layouts/Base.astro` — shared shell (header, footer, head metadata).
- `src/content/writing/` — blog posts (markdown, frontmatter validated by `src/content.config.ts`).
- `src/content/achievements/` — achievement detail pages.
- `src/styles/global.css` — site-wide styles.
- `public/` — static files copied verbatim into the build (`CNAME`, `assets/`).

## Notes

- Math in `writing/traffic-map.md` is preserved as raw `$$...$$` and won't
  render until KaTeX (`remark-math` + `rehype-katex`) is wired in
  `astro.config.mjs`.
