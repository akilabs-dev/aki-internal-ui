<script setup lang="ts">
import { computed } from 'vue'
import { useCopyCode } from '../../composables/useCopyCode'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { copied, copy } = useCopyCode()

const tailwindCssSnippet = `@import "tailwindcss";

/* Tailwind v4: make dark: respond to html[data-theme="dark"] */
@custom-variant dark (&:where(:root[data-theme='dark'] *));`

const bootstrapSnippet = `<script>
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
</script>`

const apiSnippet = `// Force theme
document.documentElement.setAttribute('data-theme', 'dark'); // or 'light'
localStorage.setItem('system-ui.theme', 'dark');`

const copyLabel = computed(() => (copied.value ? 'Copied' : 'Copy'))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-60 flex items-start justify-center bg-slate-900/50 px-4 pt-[10vh] dark:bg-slate-950/70"
      role="dialog"
      aria-modal="true"
      aria-label="Theme setup"
      @click.self="emit('close')"
    >
      <div
        class="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800"
      >
        <header
          class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800"
        >
          <div>
            <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-50">Theme setup</h2>
            <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Light/Dark using
              <code class="rounded bg-slate-100 px-1 py-0.5 font-mono dark:bg-slate-900">data-theme</code>
              + Tailwind v4.
            </p>
          </div>
          <button
            type="button"
            class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            @click="emit('close')"
          >
            Close
          </button>
        </header>

        <div class="space-y-5 p-5">
          <section class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">1) Tailwind config</p>
            <p class="text-sm text-slate-700 dark:text-slate-200">
              Put this in your Tailwind input CSS.
            </p>
            <div class="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
              <div
                class="flex items-center justify-between bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              >
                <span>CSS snippet</span>
                <button
                  type="button"
                  class="rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-800 dark:hover:bg-slate-900"
                  @click="copy(tailwindCssSnippet)"
                >
                  {{ copyLabel }}
                </button>
              </div>
              <pre
                class="max-h-44 overflow-auto bg-white p-3 text-xs text-slate-800 dark:bg-slate-950 dark:text-slate-100"
              ><code>{{ tailwindCssSnippet }}</code></pre>
            </div>
          </section>

          <section class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">2) HTML bootstrap</p>
            <p class="text-sm text-slate-700 dark:text-slate-200">
              Add this in <strong>HTML head</strong> before your app renders.
            </p>
            <div class="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
              <div
                class="flex items-center justify-between bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              >
                <span>HTML snippet</span>
                <button
                  type="button"
                  class="rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-800 dark:hover:bg-slate-900"
                  @click="copy(bootstrapSnippet)"
                >
                  {{ copyLabel }}
                </button>
              </div>
              <pre
                class="max-h-44 overflow-auto bg-white p-3 text-xs text-slate-800 dark:bg-slate-950 dark:text-slate-100"
              ><code>{{ bootstrapSnippet }}</code></pre>
            </div>
          </section>

          <section class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">3) Variables / API</p>
            <p class="text-sm text-slate-700 dark:text-slate-200">
              Theme is controlled by
              <code class="rounded bg-slate-100 px-1 py-0.5 font-mono dark:bg-slate-900">data-theme</code>
              on
              <code class="rounded bg-slate-100 px-1 py-0.5 font-mono dark:bg-slate-900">html</code>.
            </p>
            <div class="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
              <div
                class="flex items-center justify-between bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              >
                <span>JS snippet</span>
                <button
                  type="button"
                  class="rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-800 dark:hover:bg-slate-900"
                  @click="copy(apiSnippet)"
                >
                  {{ copyLabel }}
                </button>
              </div>
              <pre
                class="max-h-44 overflow-auto bg-white p-3 text-xs text-slate-800 dark:bg-slate-950 dark:text-slate-100"
              ><code>{{ apiSnippet }}</code></pre>
            </div>
          </section>

          <p class="text-xs text-slate-500 dark:text-slate-400">
            Full guide:
            <code class="rounded bg-slate-100 px-1 py-0.5 font-mono dark:bg-slate-900">docs/THEME_REUSE_GUIDE.md</code>
          </p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

