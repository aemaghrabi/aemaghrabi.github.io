# Ahmed El-Maghrabi, portfolio

Personal portfolio site, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), from Design 3 ("Hybrid: business need to product") of the portfolio design canvas. It follows the Personal Design System: navy and teal on warm paper, DM Sans for text and JetBrains Mono for numbers and labels.

## Pages

| Route | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/clients/` | `src/pages/clients.astro` |
| `/projects/` | `src/pages/projects.astro` |
| `/contact/` | `src/pages/contact.astro` |

## Develop

Requires Node 22 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build locally
```

## Where things live

- `src/config.ts`: site settings, contact details and the client-name switch.
- `src/data/clients.ts`: clients, with both a real name and a generic description.
- `src/data/projects.ts`: case studies (need, what we built, outcome, tags).
- `src/styles/global.css`: design tokens for light and dark mode, mapped into Tailwind.
- `src/components/`: Header, Footer, ThemeToggle, Logo, ApiCard, CaseRow, CtaBand and smaller pieces.
- `public/images/`: logos (navy and white) and the contact QR code.

## Client names

Set `SHOW_CLIENT_NAMES` in `src/config.ts`:

- `true` shows real client names.
- `false` shows each client's generic description instead, on every page.

Clients with `alwaysGeneric: true` in `src/data/clients.ts` (the business search engine startup) are always shown by their description.

## Project gallery

The Projects page shows a screenshot gallery for Intellija, FindFill and SharpStat (images in `public/images/gallery/`, content in `src/data/gallery.ts`). Pick the style with the `GALLERY_STYLE` build variable:

| Value | Result |
| --- | --- |
| `slideshows` (default) | A row per project, each with its own slideshow, arrows and dots |
| `lightbox` | A cover card per project; opening one shows its screens full size |
| `off` | No gallery |

```sh
npm run build                          # slideshows
GALLERY_STYLE=lightbox npm run build   # cover cards + lightbox
GALLERY_STYLE=off npm run build        # no gallery
```

You can also put `GALLERY_STYLE=lightbox` in a `.env` file, or set it as a repository variable for the deploy workflow. Each style needs a few lines of inline JavaScript for its arrows and dialog. Without JavaScript, the first screenshot of each project still shows.

## Light and dark mode

The site opens in light mode. The Light / Dark switch in the header and footer adds or removes the `dark` class on `<html>` and remembers the choice in `localStorage`. This small inline script in `src/layouts/BaseLayout.astro` is the only client-side JavaScript; everything else is static HTML and CSS.

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages at https://aemaghrabi.github.io:

1. In the repository settings, under Pages, set the source to **GitHub Actions**.
2. The workflow runs on every push to `main`, or by hand from the Actions tab.
