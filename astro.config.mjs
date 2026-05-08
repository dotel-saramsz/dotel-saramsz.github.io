import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saramsha.com',
  trailingSlash: 'always',
  markdown: {
    smartypants: true,
  },
});
