# AGENTS.md

Guidance for AI agents and developers working on this repository.

## What this project is

A personal portfolio website for **Bardan Gauchan** (Design Engineer / UX Designer, based in Calgary, Canada).

- **Framework**: Next.js 14 (App Router) + React 18
- **Language**: TypeScript (converted from JS in the latest commit)
- **Styling**: Tailwind CSS
- **Fonts**: `next/font/google` — Inter (body) + Caprasimo (headings)
- **Deployment**: Hosted on Vercel (standard `next build`)

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
| `resume.md` | Resume content used as the source of truth for role descriptions when adding/updating work cards |

## How project cards work

A project entry in `app/projects.ts` may include:
- `logo`, `logoWidth`, `logoHeight` — brand logo rendered from `public/`
- `desc` — short description
- `ctaText` / `ctaUrl` — external link (portfolio sites or Notion case studies)
- `bgColor` — background gradient; when present, the card text renders white (the Descript card is special-cased as `isDescript` in `PortfolioGrid.tsx`, which applies the gradient via a Tailwind arbitrary-value class instead of the inline `style`; the PopSQL card is special-cased as `isPopsql` for wider `lg`/`xl` image columns)
- `image` — single wide thumbnail, OR `images[]` — 2x2 grid of thumbnails (used by the design category)

Card grid columns are responsive: single column by default, `2xl:grid-cols-2`, and `4xl:grid-cols-4` (Design Engineer row). All cards use the Product Designer layout (`md:grid-cols-[1fr_300px]`, `2xl:grid-cols-1`), so the image sits beside the text until the row becomes multi-column.

`tailwind.config.ts` adds custom screens: `height-920` (raw height query), `3xl` (1900px), and `4xl` (2400px). Note: because `screens` contains an object entry (`height-920`), arbitrary `min-[...]`/`max-[...]` variants are unsupported — use named breakpoints instead.

## Known issues / gotchas

- `app/page.tsx` uses a static `bg-[#F9F7F4]` class for the beige background. If you change the color, use a static class or inline style — dynamic template-literal classes like `` `bg-[${color}]` `` are invisible to Tailwind at build time and won't be generated.
- Custom fonts loaded via `next/font` are self-hosted/subsetted at build time.

## Design system

Before adding or editing any UI, read [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) and follow its tokens (colors, fonts, type scale, spacing, radii, components). Reuse the existing `Heading`, `Button`, `Sidebar`, and `PortfolioGrid` components instead of re-creating styles inline.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Next.js lint
