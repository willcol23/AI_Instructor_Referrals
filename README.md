# AI Instructor Referrals

Static Astro site for AI tutor/trainer referral links, deployed to GitHub Pages.

- `src/data/referrals.json` — referral platforms (edit to add/remove)
- `src/data/videos.json` — embedded YouTube videos
- `src/content/blog/*.md` — blog posts

```
npm install
npm run dev
npm run build
```

Deploys via GitHub Actions on push to `main` (Settings → Pages → Source: GitHub Actions).