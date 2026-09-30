# Jason Almine Profile

A separate colorway of [portfolio-template](https://github.com/jasonalmine/portfolio-template), intended for `profile.jasonalmine.com`. The main portfolio at `jasonalmine.com` remains a separate site.

The template's layout and navigation are retained. Its content uses Jason's published profile, case studies, and contact details. The warm light and dark palettes follow the Operator's Notebook colors. Search indexing remains disabled until the custom domain is live and verified.

## Run locally

```bash
npm ci
npm run dev
npm run build
npm run lint
```

## Update content

- Identity and contact details: `src/data/profile.ts`
- Home bento content: `src/components/HomeBento.tsx`
- Projects, services, about, and contact content: their existing files in `src/components/` and `src/views/`
- Color system: `src/styles/tokens.css`, `src/styles/home.css`, and `src/components/HeroCanvasV2.tsx`
- Search and sharing metadata: `index.html`

Keep project figures aligned with the dated, scoped evidence on the main portfolio before enabling search indexing.

## Deployment

This repository deploys to its own Vercel project. `vercel.json` serves `index.html` for direct React Router paths. Assign only `profile.jasonalmine.com` to that project.

## Credits and license

Based on [portfolio-template](https://github.com/jasonalmine/portfolio-template). The original contour technique and icon credits are in that repository. This copy retains the [PolyForm Noncommercial license and personal-portfolio permission](LICENSE).
