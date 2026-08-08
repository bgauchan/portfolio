# Bardan Gauchan — Portfolio

Personal portfolio website for **Bardan Gauchan** (Design Engineer / UX Designer, Calgary, Canada).

Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (Next.js core-web-vitals)

## Structure

- `app/page.tsx` — single-page layout (`Sidebar` + `PortfolioGrid`)
- `app/projects.ts` — all portfolio content, grouped by role
- `app/components/` — `Sidebar`, `PortfolioGrid`, `Heading`, `Button`, `GoogleAnalytics`
- `public/` — images, logos, and icons
- `resume.md` — source of truth for role descriptions on work cards

## Design system

Read [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) before adding or editing UI.

## Deployment

Hosted on Vercel — a push to `main` triggers a standard `next build`.
