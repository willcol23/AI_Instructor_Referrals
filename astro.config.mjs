import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project site URL: https://willcol23.github.io/AI_Instructor_Referrals/
// If a custom domain is added later, set site to it and base to '/'.
export default defineConfig({
  site: 'https://willcol23.github.io',
  base: '/AI_Instructor_Referrals',
  integrations: [sitemap()],
});