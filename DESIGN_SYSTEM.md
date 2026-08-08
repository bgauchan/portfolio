# Design System

Design tokens and component conventions for this portfolio site. Agents should follow these when adding or editing UI.

## Fonts

Loaded via `next/font/google` (self-hosted at build time).

| Token | Font | Usage |
| --- | --- | --- |
| `font-body` | Inter | All body text (applied globally in `app/layout.tsx`) |
| `font-heading` | Caprasimo, weight 400 | All headings via `Heading` component |

### Type scale

| Token | Class | Where used |
| --- | --- | --- |
| `display` | `text-5xl lg:text-6xl` | `Heading` h1 — sidebar hero |
| `heading-lg` | `text-3xl lg:text-4xl` | `Heading` h2 — section titles ("Work") |
| `heading-sm` | `text-2xl` | `Heading` h3 — role headings |
| `body` | inherited (16px, color `#5d5b5b`) | Project card descriptions |
| `body-lg` | `text-lg lg:text-[1.07rem] leading-7` | Sidebar bio paragraph |
| `label` | `text-sm font-medium` | Card CTA links |
| `button` | `text-sm md:text-md font-medium` | `Button` component |

## Colors

### Core palette

| Token | Value | Usage |
| --- | --- | --- |
| `color-background` | `#F9F7F4` (beige) | Page background (see gotcha in AGENTS.md) |
| `color-surface` | `#FFFFFF` | Sidebar, project cards |
| `color-ink` | `#000000` | Text, primary buttons, borders |
| `color-text` | `#5d5b5b` | Body copy (set in `globals.css`) |
| `color-border` | `#EDE8E2` | Card borders, sidebar divider |

### Shadows

| Token | Value | Usage |
| --- | --- | --- |
| `shadow-card` | `0 20px 40px 0 rgba(0, 0, 0, 0.05)` | Project cards (inline style in `PortfolioGrid.tsx`) |

### Brand gradients (project cards, `bgColor` in `projects.ts`)

| Project | Gradient |
| --- | --- |
| PopSQL | `linear-gradient(0deg, #F98653, #FF2C6B)` — orange → pink |
| CircleCI | `radial-gradient(181.1% 161.28% at 118.08% 164.21%, #66EDFF 15.1%, #01CBF7 48.18%, #7149E9 100%), radial-gradient(758.54% 128.61% at 0 1.52%, #0DB66F 0, #73B7F6 100%)` — cyan/purple + green/blue |
| Labelbox | `radial-gradient(226.64% 1035.02% at 1.92% -0.04%, #22262A 0, rgba(34, 38, 42, 0.42) 100%)` — dark charcoal |

## Components

### Heading (`app/components/Heading.tsx`)
- Wraps h1/h2/h3 with Caprasimo; `type` prop selects level, `customClasses` appended.
- Always `text-black`.

### Button (`app/components/Button.tsx`)
- `type="primary"` — `bg-black text-white`, pill (`rounded-[50px]`, `py-3`).
- Default (secondary) — `border border-black text-black`, fills black on hover (`hover:bg-black hover:text-white`).
- Rendered as an `<a>` with `link` prop.

### Sidebar (`app/components/Sidebar.tsx`)
- White surface, right/bottom border `color-border`.
- 430px fixed column on xl (`xl:grid-cols-[430px_1fr]` in `app/page.tsx`).
- Contains: hero illustration, h1 heading, bio (`body-lg`), social icon links (LinkedIn/GitHub/Dribbble/CodePen, `hover:scale-125`), primary + secondary buttons.

### Portfolio card (`app/components/PortfolioCard.tsx`)
- `bg-white` (or `bgColor` gradient) `rounded-xl`, border `color-border`, `shadow-card`.
- Grid: `md:grid-cols-[1fr_300px]` (text | media) for most cards; cards with `bgColor` are full-width two-column; PopSQL special-cased (`isPopsql`) as a wider 2-col-span card.
- Logo + description (`color-text`) + CTA link (`label` style, arrow icon that flips white on gradient cards).
- Media: `image` (single wide) or `images[]` (2x2 grid of thumbnails).

### Project section (`app/components/ProjectSection.tsx`)
- Reusable role section: `<h3>` role heading (via `Heading`) + responsive card grid.
- Grid: single column by default, `2xl:grid-cols-2` at 1900px+, `4xl:grid-cols-4` at 2400px+; `gap-3`, `mt-6`.
- Props: `title` (string, role heading text) and `projects` (array of `Project`).
- Used by `PortfolioGrid` for all three roles — keeps every section on the same layout.

### Portfolio grid (`app/components/PortfolioGrid.tsx`)
- Full `Work` section: `h2` heading + one `ProjectSection` per role (`Design Engineer`, `Product Designer`, `UX Engineer`).
- Section wrapper: `px-6 md:px-12 py-10`, `flex flex-col gap-10`.

## Layout tokens

| Token | Value |
| --- | --- |
| Sidebar width | `430px` |
| Card radius | `rounded-xl` |
| CTA radius | `rounded-md` |
| Button radius | `rounded-[50px]` |
| Section padding | `px-6 md:px-12 py-10` |
| Grid gaps | cards `gap-3`/`gap-4`, card content `gap-10`, image grid `gap-3` |
| Breakpoints | `sm`, `md`, `lg`, `xl`, `2xl`, custom `3xl: 1900px`, `height-920` (raw min-height 920px) |

## Interaction states

| Element | Hover |
| --- | --- |
| Secondary button | `bg-black text-white` |
| Card CTA link | `bg-black border-black text-white` |
| Social icons | `scale-125` |
| Hero illustration | `-translate-y-5` |
| PopSQL inline link | `underline` |
