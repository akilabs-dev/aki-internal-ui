# Theme (Light/Dark) — Reuse Guide

This repo implements a simple **Light/Dark** theme system that works with **Tailwind v4** and can be copied into other projects.

## How it works (contract)

- The active theme is controlled by a single attribute on the root element:
  - Light: `<html data-theme="light">`
  - Dark: `<html data-theme="dark">`
- The user choice is stored in `localStorage`:
  - Key: `system-ui.theme`
  - Value: `light` or `dark`

## What to copy into another project

### 1) Tailwind CSS entry file

In your Tailwind input CSS (for example `src/input.css`, `resources/css/app.css`, etc.):

```css
@import "tailwindcss";

/* Tailwind v4: make `dark:` respond to html[data-theme="dark"] */
@custom-variant dark (&:where(:root[data-theme='dark'] *));
```

Now you can use Tailwind classes like:

- `bg-white dark:bg-slate-950`
- `text-slate-900 dark:text-slate-100`
- `border-slate-200 dark:border-slate-800`

### 2) Theme bootstrap script (prevents flicker)

Add this **before your app renders** (ideally in `<head>`):

```html
<script>
  (function () {
    try {
      var saved = localStorage.getItem('system-ui.theme');
      var next =
        saved === 'light' || saved === 'dark'
          ? saved
          : (window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark'
            : 'light';
      document.documentElement.setAttribute('data-theme', next);
    } catch {}
  })();
</script>
```

### 3) Theme toggle logic (framework-agnostic)

Any button can toggle like this:

```html
<button type="button" onclick="toggleTheme()">Toggle theme</button>
<script>
  function toggleTheme() {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('system-ui.theme', next); } catch {}
  }
</script>
```

## Vue usage (like this repo)

This repo uses `src/composables/useTheme.ts`:

- `initTheme()` is called in `src/main.ts` to apply the saved/system theme early.
- Components call:
  - `useTheme().cycle()` to toggle
  - `useTheme().setTheme('light'|'dark')` to force a theme

Minimal pattern to copy into another Vue app:

```ts
// main.ts
import { initTheme } from './composables/useTheme'
initTheme()
```

## HTML-only usage

- You still need to **build Tailwind CSS** and include it in your page.
- Add the **bootstrap script** above.
- Use Tailwind `dark:` classes in your HTML.

## Laravel + Vite usage (common on Laragon)

1) Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

2) In `vite.config.*`, add the Tailwind plugin (`@tailwindcss/vite`).

3) In `resources/css/app.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where(:root[data-theme='dark'] *));
```

4) In your Blade layout `<head>`, add the **bootstrap script** (above) before `@vite(...)`.

## Notes / gotchas

- **No “system” mode** is stored; if nothing is saved, the bootstrap script uses OS preference.
- If you want **strict** theme (ignore OS preference), remove the `matchMedia` part and default to `light`.
- If you already use Tailwind’s default media-based dark mode elsewhere, this approach is different: it’s **manual** via `data-theme`.

