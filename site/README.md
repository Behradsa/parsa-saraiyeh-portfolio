# parsa-sa.com — the new site (Astro)

One responsive page per screen size range (no separate mobile file), English and German.

## Change text

All words live in `site/src/i18n/`, one folder per language:

| File | What it holds |
|---|---|
| `en/ui.json`, `de/ui.json` | Header, menu, footer, buttons, page titles for link previews |
| `en/home.json`, `de/home.json` | Everything on the home page |
| `en/cases/<project>.json`, `de/cases/<project>.json` | One case study each (Carriot, Snapp!Trip, Omid, Homano) |

Edit the English and the German file the same way. `npm run check:i18n` (also run by every build)
stops the build if the two languages no longer match — a missing field, a different number of items,
or a picture/link that is only changed in one of them.

Email, LinkedIn, CV file and the order of the case studies are in `site/src/data/site.json`.

## Change pictures

Pictures are in `public/images/`. In the text files they are written as `/images/<file>`.
In case studies, a picture's `h` is its height on the 1440px desktop design; leave it out to keep the
picture's own proportions. `frame: true` shows a screen top-aligned in a tinted box (`bg`).

## Change the look

- Colours and the type families: `site/src/styles/global.css` (top of the file).
- Each section is a component in `site/src/components/home/` with its own styles and behaviour.
  Desktop styles come first; the `@media (max-width: 819px)` block under them is the phone version.
- Case-study layout: `site/src/pages/[...lang]/[slug].astro`.

## Run it

- `npm run dev:new` — local preview with live reload.
- `npm run build` — builds the old app (`/old/`), copies `public/`, then builds this site.

While it is being tested it is published at `/next/` and hidden from search engines.
To make it the main site: in `astro.config.mjs` set `BASE` to `'/'`, and remove the old
`index.html`, `m.html`, the case `.html` files and `de/` from `public/`.
