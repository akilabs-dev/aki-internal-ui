<script setup lang="ts">
import { useTheme } from '../../composables/useTheme'

defineProps<{
  title: string
  subtitle?: string
  showCommand?: boolean
}>()

const emit = defineEmits<{
  'open-command': []
}>()

const { isDark, cycle: cycleTheme } = useTheme()
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-950"
  >
    <div>
      <h1 class="text-lg font-semibold text-slate-900 dark:text-slate-50">{{ title }}</h1>
      <p v-if="subtitle" class="text-sm text-slate-500 dark:text-slate-400">{{ subtitle }}</p>
    </div>

    <div class="flex items-center gap-2 border border-slate-400">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-200"
        title="Toggle theme (Light ↔ Dark)"
        @click="cycleTheme"
      >
        <svg
          v-if="isDark"
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        <svg
          v-else
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      </button>

      <button
        v-if="showCommand"
        type="button"
        class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:bg-slate-800 dark:hover:text-violet-200"
        title="Open command menu (Ctrl+K)"
        @click="emit('open-command')"
      >
        <span aria-hidden="true">⌘</span>
        Command
        <kbd
          class="hidden rounded bg-white px-1.5 py-0.5 font-mono text-xs text-slate-500 ring-1 ring-slate-200 sm:inline dark:bg-slate-950 dark:text-slate-400 dark:ring-slate-800"
        >
          Ctrl+K
        </kbd>
      </button>
    </div>
  </header>
</template>
