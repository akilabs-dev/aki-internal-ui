# Japanese Style

A documentation playground for **shadcn-vue** components with live previews, copyable Vue source, and **Alpine.js** HTML exports. Switch theme styles and light/dark mode from the UI, then copy tokens and samples into your own project.

**Live site:** [akilabs-dev.github.io/aki-internal-ui](https://akilabs-dev.github.io/aki-internal-ui/) (GitHub Pages)

## Features

- **Component docs** — Preview, Vue source, HTML markup, and Alpine.js setup (where applicable)
- **Vue + Alpine** — Toggle between Vue demos and static / Alpine-powered HTML previews
- **Theming** — Multiple theme styles (`src/themes/*.css`) with a token export page
- **Code panel** — Syntax highlighting (Shiki), formatting (Prettier), and copy
- **Figma links** — Edit-in-Figma buttons on supported demos

### Documented components

| Component | Vue | Alpine HTML |
|-----------|-----|-------------|
| Accordion | ✓ | ✓ (`@alpinejs/collapse`) |
| Alert | ✓ | ✓ (static) |
| Alert Dialog | ✓ | ✓ |

More components are listed in the sidebar as placeholders for future work.

## Tech stack

- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [reka-ui](https://reka-ui.com/) / shadcn-vue-style primitives
- [Alpine.js](https://alpinejs.dev/) for HTML previews
- [Shiki](https://shiki.style/) + [Prettier](https://prettier.io/) in the code panel

## Requirements

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

## Getting started

```bash
bun install
bun run dev
```

Open the URL shown in the terminal (default Vite dev server).

### Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start the dev server |
| `bun run build` | Type-check and build for production |
| `bun run preview` | Serve the production build locally |

## Project layout

```
src/
├── components/       # App shell, ComponentPreview, CodePanel, UI primitives
├── demos/            # Per-component Vue demos and data
├── lib/              # Alpine init, extractors, themes, routing helpers
├── pages/            # Docs and component doc pages
├── router/           # Routes and page title meta
└── themes/           # CSS variable theme files
```

## Adding a component

1. Add the demo under `src/demos/<name>/`.
2. Create `src/pages/components/<Name>Page.vue` using `ComponentPreview`.
3. Register the route in `src/router/index.ts` and an entry in `src/lib/component-docs.ts` (sidebar + pagination).
4. For Alpine support, add an extractor in `src/lib/extractors/` and register it in `src/lib/vue-to-alpine.ts` and `src/lib/alpine/init-alpine.ts`.

## Deployment

Production builds are deployed to **GitHub Pages** on push to `main` via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions
2. Push to `main` — the workflow runs `bun install --frozen-lockfile` and `bun run build`
3. The site is published from the `dist` artifact

For project Pages URLs, `vite.config.ts` sets `base` to `/aki-internal-ui/` when `GITHUB_PAGES=true` (set automatically in CI). Use `bun run preview` locally to test a production build at `/`.

## License

Private — internal use unless otherwise specified by the repository owner.
