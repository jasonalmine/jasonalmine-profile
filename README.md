# Jason Almine Profile

A separate colorway of [portfolio-template](https://github.com/jasonalmine/portfolio-template), assigned to `profile.jasonalmine.com`. The main portfolio at `jasonalmine.com` remains a separate site.

The template's layout, navigation, and placeholder copy are retained. The warm light and dark palettes follow Jason's Operator's Notebook colors. Search indexing is disabled while placeholder content remains.

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

Replace placeholder copy and review claims before enabling search indexing.

## Deployment

This repository deploys to its own Vercel project. `vercel.json` serves `index.html` for direct React Router paths. Assign only `profile.jasonalmine.com` to that project.

## Credits and license

Based on [portfolio-template](https://github.com/jasonalmine/portfolio-template). The original contour technique and icon credits are in that repository. This copy retains the [PolyForm Noncommercial license and personal-portfolio permission](LICENSE).
