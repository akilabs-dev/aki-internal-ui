<script setup lang="ts">
import { akilabsBrand } from '../../library/brand'
import { useTheme } from '../../composables/useTheme'

export interface NavSection {
  label: string
  items: { id: string; label: string; icon: string }[]
}

defineProps<{
  sections: NavSection[]
  activeId: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()

const { isDark, cycle: cycleTheme } = useTheme()
</script>

<template>
  <aside
    class="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
  >
    <div class="flex h-16 items-center gap-3 border-b border-slate-200 px-5 dark:border-slate-800">
      <img
        src="/logo.svg"
        alt=""
        class="h-9 w-9 shrink-0 rounded-lg bg-white"
        width="36"
        height="36"
      />
      <div class="min-w-0">
        <p class="truncate text-sm font-semibold leading-tight text-slate-900 dark:text-white">
          {{ akilabsBrand.shortName }}
        </p>
        <p class="truncate text-xs text-slate-500 dark:text-slate-400">
          {{ akilabsBrand.sidebarTagline }}
        </p>
      </div>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-4" aria-label="Library navigation">
      <div v-for="section in sections" :key="section.label" class="mb-5">
        <p class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
          {{ section.label }}
        </p>
        <ul class="space-y-1">
          <li v-for="item in section.items" :key="item.id">
            <button
              type="button"
              class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors"
              :class="
                activeId === item.id
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              "
              :aria-current="activeId === item.id ? 'page' : undefined"
              @click="emit('navigate', item.id)"
            >
              <span class="text-base" aria-hidden="true">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="border-t border-slate-200 p-3 dark:border-slate-800">
      <button
        type="button"
        class="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-200"
        title="Toggle theme (Light ↔ Dark)"
        @click="cycleTheme"
      >
          <span class="flex items-center gap-2">
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
            Theme
          </span>

          <span class="text-xs text-slate-500 dark:text-slate-400">
            {{ isDark ? 'Dark' : 'Light' }}
          </span>
      </button>
    </div>
  </aside>
</template>
