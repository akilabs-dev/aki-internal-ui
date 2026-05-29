<script setup lang="ts">
import { computed, defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue'

const CodePanel = defineAsyncComponent(() => import('@/components/CodePanel.vue'))
import DocsPageHeader from '@/components/DocsPageHeader.vue'

type ThemeFile = { id: string; css: string }

const FULL_CONFIG_PREAMBLE = `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));
`

const THEME_INLINE_BLOCK = `@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}
`

const LAYER_BASE_BLOCK = `@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
    letter-spacing: var(--tracking-normal);
  }
}
`

const themeRawImports = import.meta.glob('@/themes/*.css', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function toId(path: string) {
  const base = path.split('/').pop() || path
  return base.replace(/\.css$/i, '')
}

const themes = computed<ThemeFile[]>(() => {
  return Object.entries(themeRawImports)
    .map(([path, css]) => ({ id: toId(path), css }))
    .sort((a, b) => a.id.localeCompare(b.id))
})

const activeThemeId = ref<string>('default')
const activeCss = computed(() => themes.value.find((t) => t.id === activeThemeId.value)?.css ?? '')

function readActiveThemeIdFromDom() {
  activeThemeId.value = document.documentElement.dataset.theme || 'default'
}

let observer: MutationObserver | null = null

onMounted(() => {
  readActiveThemeIdFromDom()
  observer = new MutationObserver(() => readActiveThemeIdFromDom())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})

function extractTokenBlock(css: string, selector: string) {
  // Match e.g. :root[data-theme="x"] { ... } or :root.dark[data-theme="x"] { ... }
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\}`, 'm')
  const match = css.match(re)
  return (match?.[1] ?? '').trim()
}

function toTokenLines(block: string) {
  return block
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('--'))
}

const lightTokenLines = computed(() => {
  const selector = `:root[data-theme="${activeThemeId.value}"]`
  return toTokenLines(extractTokenBlock(activeCss.value, selector))
})

const darkTokenLines = computed(() => {
  const selector = `:root.dark[data-theme="${activeThemeId.value}"]`
  return toTokenLines(extractTokenBlock(activeCss.value, selector))
})

const fullConfiguration = computed(() => {
  const lightLines = lightTokenLines.value
  const darkLines = darkTokenLines.value

  const rootBlock = `:root {\n  ${lightLines.join('\n  ')}\n}\n`
  const darkBlock = darkLines.length
    ? `\n.dark {\n  ${darkLines.join('\n  ')}\n}\n`
    : ''

  return [
    FULL_CONFIG_PREAMBLE.trim(),
    '',
    rootBlock.trimEnd(),
    darkBlock.trimEnd(),
    '',
    THEME_INLINE_BLOCK.trimEnd(),
    '',
    LAYER_BASE_BLOCK.trimEnd(),
    '',
  ]
    .filter((p) => p.length > 0)
    .join('\n')
    .trimEnd()
})

</script>

<template>
  <div class="space-y-8">
    <DocsPageHeader :headline="`Tokens for “${activeThemeId}”`" />

    <section class="space-y-2">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Full configuration preview
      </h2>
      <p class="text-muted-foreground text-xs">
        Source: <code class="text-foreground">src/themes/{{ activeThemeId }}.css</code>
      </p>
      <CodePanel language="css" :code="fullConfiguration" empty-label="Formatting…" />
    </section>
  </div>
</template>

