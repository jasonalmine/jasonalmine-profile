# Jason Almine Profile

A separate, template-based profile for Jason Almine at `profile.jasonalmine.com`. The main portfolio at `jasonalmine.com` remains a separate site.

The site uses the profile rail, contour background, bento home, and phone navigation from [portfolio-template](https://github.com/jasonalmine/portfolio-template). Its content and visual system are tailored to Jason's Operator and Builder portfolio. The full case studies and booking page link to the main portfolio.

## Run locally

```bash
npm ci
npm run dev
npm run build
npm run lint
```

## Update content

- Identity and contact details: `src/data/profile.ts`
- Selected work: `featuredWork` in `src/data/projects.ts`
- Home, services, about, and contact copy: `src/components/Home.tsx`, `src/views/ServicesView.tsx`, `src/components/AboutGrid.tsx`, and `src/components/ContactGrid.tsx`
- Visual system: `src/styles/tokens.css` and `src/styles/profile.css`
- Search and sharing metadata: `index.html`

The 4 work links point to `/work#<slug>` on the main portfolio. Update the matching case study there before changing a claim here.

## Deployment

This repository deploys to its own Vercel project. `vercel.json` serves `index.html` for direct React Router paths. Assign only `profile.jasonalmine.com` to that project.

## Credits and license

Based on [portfolio-template](https://github.com/jasonalmine/portfolio-template). The original contour technique and icon credits are in that repository. This copy retains the [PolyForm Noncommercial license and personal-portfolio permission](LICENSE).
