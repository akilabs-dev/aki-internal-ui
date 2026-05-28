# Library entries

Part of the **Akilabs UI Library** — developers check **approved examples** here before building UI.

Each entry should include: brand/form rules where relevant, live preview, reference screenshot,
**Figma link** to the approved frame, copyable HTML/Vue/CSS, Usage notes for HTML vs Vue projects,
and `codeLocation` in this repo.

## Folder per component (multiple variants)

When a sidebar item has **2+ versions** (Navbar 1, Navbar 2, …), use a folder:

```
entries/card/
  index.ts       → exports cardEntry (menu item)
  variant-1.ts   → card1Variant
  variant-2.ts   → card2Variant

previews/card/
  Card1.vue
  Card2.vue
```

Register the menu item once in `registry.ts`:

```ts
import { cardEntry } from './entries/card'
```

## Vue preview → HTML copy tab (shared helper)

**Preview** always uses the Vue component (`preview: Card1`).

**HTML / Vue / CSS / Usage** tabs come from `src/library/utils/`:

| Helper | Use |
|--------|-----|
| `htmlFromVuePreview(vueSource)` | Markup only from `import X from '...vue?raw'` |
| `codeFromVuePreview({ ... })` | Full `code: { html, css, vue?, usage }` block — **Vue** tab is the raw `.vue` file |

### Figma link (required per variant)

The **Approved example** checklist shows Figma status. Paste frame links in **`src/library/figma-links.ts`**:

```ts
'card--card1': 'https://www.figma.com/design/FILE_KEY/...?node-id=1-234',
```

Get the URL in Figma: select the frame → right-click → **Copy link**.

Or use `figmaUrl` on the entry/variant, or `VITE_FIGMA_FILE_URL` in `.env` as a fallback.

### Standard variant file

```ts
import type { LibraryVariant } from '../../types'
import Card1 from '../../../components/previews/card/Card1.vue'
import Card1Source from '../../../components/previews/card/Card1.vue?raw'
import { codeFromVuePreview } from '../../utils'

export const card1Variant: LibraryVariant = {
  id: 'card1',
  label: 'Card',
  codeLocation: 'src/components/previews/card/Card1.vue',
  preview: Card1,
  code: codeFromVuePreview({
    vueSource: Card1Source,
    vueUsageImport: '@/components/previews/card/Card1.vue',
    vueUsageName: 'Card1',
    // optional:
    // extraCss: '...',      // appended to tailwindCopyCss
    // extraHtml: '<script>...</script>',  // after template (e.g. navbar menu)
    // css: '/* custom */',  // replace default tailwindCopyCss
  }),
}
```

Edit **only** the `.vue` preview file; the HTML tab updates when the app rebuilds.

### When NOT to use the helper

| Case | Approach |
|------|----------|
| Forms with validation | Manual HTML + Alpine `x-data` (see `entries/form/`) |
| Carousels with JS in CSS tab | Manual HTML + script in `extraCss` (Vue uses `v-for` / state) |
| Hero Section 3 | `hero-section3-html.ts` + custom CSS |
| Contact form / brand colors | Single-file entries, manual `code.html` |

## Single-file entries

One preview, no variants — keep a single file:

```
entries/contact-form.ts
previews/ContactFormPreview.vue
```
