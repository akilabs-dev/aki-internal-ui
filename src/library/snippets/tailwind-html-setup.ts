/**
 * Shared Usage → HTML project steps for Tailwind (npm package only — no CDN).
 */
export const tailwindHtmlSetup = `<!-- TAILWIND — install package (do not use cdn.tailwindcss.com) -->

<!-- 1. Install in your project root -->
npm install tailwindcss @tailwindcss/cli

<!-- 2. Create input.css (e.g. src/input.css or resources/css/app.css) -->
@import "tailwindcss";

<!-- 3. Build CSS (run after changes, or add to npm scripts) -->
npx @tailwindcss/cli -i ./src/input.css -o ./public/css/app.css

<!-- 4. Link the built file in your HTML layout -->
<link rel="stylesheet" href="/css/app.css" />

<!-- ── Dark mode ──
This library uses:
- Light: <html data-theme="light">
- Dark:  <html data-theme="dark">
If nothing is saved, it defaults to the OS preference.
-->
<script>
  (function () {
    try {
      var saved = localStorage.getItem('system-ui.theme');
      var next = (saved === 'light' || saved === 'dark')
        ? saved
        : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', next);
    } catch {}
  })();
</script>

<!-- ── Laravel + Vite (common on Laragon) ── -->
npm install tailwindcss @tailwindcss/vite
<!-- vite.config: add tailwindcss() from @tailwindcss/vite -->
<!-- resources/css/app.css: @import "tailwindcss"; -->
<!-- layout blade: @vite(['resources/css/app.css', 'resources/js/app.js']) -->

<!-- Utility classes only work after the built CSS is loaded. -->`
