# AGENTS.md

Guidance for AI agents and developers working on this repository.

## What this project is

A personal portfolio website for **Bardan Gauchan** (Design Engineer / UX Designer, based in Calgary, Canada).

- **Framework**: Next.js 14 (App Router) + React 18
- **Language**: TypeScript (converted from JS in the latest commit)
- **Styling**: Tailwind CSS
- **Fonts**: `next/font/google` — Inter (body) + Caprasimo (headings)
- **Deployment**: Static site hosted on GitHub Pages (previously built with `next export` into an `out/` folder)

## Architecture

Everything is static — there is no backend, CMS, or database. All content lives in code and image assets.

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Single-page layout: `Sidebar` (fixed 430px column) + `PortfolioGrid` (scrollable) |
| `app/layout.tsx` | Root layout: fonts, global styles, Google Analytics (`G-PMJF30VQD6`) |
| `app/projects.ts` | All portfolio content as typed data, grouped by role: `marketing` (Design Engineer), `design` (Product Designer), `eng` (UX Engineer) |
| `app/types/project.ts` | `Project` and `Projects` interfaces used by `projects.ts` and components |
| `app/components/Sidebar.tsx` | Bio, social links (LinkedIn/GitHub/Dribbble/CodePen), Resume + "Let's work together" buttons |
| `app/components/PortfolioGrid.tsx` | Renders project cards from `projects.ts`, grouped by role heading |
| `app/components/Heading.tsx` | h1/h2/h3 wrappers using the Caprasimo font |
| `app/components/Button.tsx` | Primary (filled black) and secondary (outlined) button styles |
| `app/components/GoogleAnalytics.tsx` | GA4 script injected into the layout |

## How project cards work

A project entry in `app/projects.ts` may include:
- `logo`, `logoWidth`, `logoHeight` — brand logo rendered from `public/`
- `desc` — short description
- `ctaText` / `ctaUrl` — external link (portfolio sites or Notion case studies)
- `bgColor` — background gradient; when present, the card text renders white and the card gets a wide two-column layout (the PopSQL card is special-cased as `isPopsql` in `PortfolioGrid.tsx`)
- `image` — single wide thumbnail, OR `images[]` — 2x2 grid of thumbnails (used by the design category)

## Known issues / gotchas

- `app/page.tsx` sets the background via the dynamic class `` `bg-[${bgColors.beige}]` `` — Tailwind cannot see this class at build time, so the beige background likely won't apply. Fix by using an inline style or a static class like `bg-[#F9F7F4]`.
- The PopSQL CTA URL is malformed: `https:///popsql.com/`.
- Custom fonts loaded via `next/font` only work at build time; confirm they are self-hosted/subsetted for static export.

## Design system

Before adding or editing any UI, read [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) and follow its tokens (colors, fonts, type scale, spacing, radii, components). Reuse the existing `Heading`, `Button`, `Sidebar`, and `PortfolioGrid` components instead of re-creating styles inline.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Next.js lint
