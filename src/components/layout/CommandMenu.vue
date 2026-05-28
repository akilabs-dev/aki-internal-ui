<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { getCommandMenuItems } from '../../library/registry'
import { useTheme } from '../../composables/useTheme'

const props = defineProps<{
  open: boolean
  activeId: string
}>()

const emit = defineEmits<{
  close: []
  navigate: [id: string]
}>()

const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const { mode: themeMode, setTheme } = useTheme()

const items = computed(() => {
  const base = getCommandMenuItems()
  return [
    ...base,
    { id: '__theme_light', label: 'Theme: Light', icon: '☀️' },
    { id: '__theme_dark', label: 'Theme: Dark', icon: '🌙' },
  ]
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return items.value
  return items.value.filter((item) => item.label.toLowerCase().includes(q))
})

function select(id: string) {
  if (id === '__theme_light') {
    if (themeMode.value !== 'light') setTheme('light')
    emit('close')
    return
  }
  if (id === '__theme_dark') {
    if (themeMode.value !== 'dark') setTheme('dark')
    emit('close')
    return
  }
  emit('navigate', id)
  emit('close')
}

function onKeydown(e: KeyboardEvent) {
  if (!props.open) return
  if (e.key === 'Escape') {
    e.preventDefault()
    emit('close')
  }
}

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      query.value = ''
      await nextTick()
      inputRef.value?.focus()
    }
  },
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 px-4 pt-[15vh] dark:bg-slate-950/70"
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      @click.self="emit('close')"
    >
      <div class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
        <div class="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
          <input
            ref="inputRef"
            v-model="query"
            type="search"
            placeholder="Search command menu…"
            class="w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
          />
        </div>

        <ul class="max-h-72 overflow-y-auto py-2" role="listbox">
          <li
            v-if="filtered.length === 0"
            class="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400"
          >
            No matches
          </li>
          <li v-for="item in filtered" :key="item.id" role="option">
            <button
              type="button"
              class="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-violet-50 dark:hover:bg-slate-900"
              :class="
                activeId === item.id
                  ? 'bg-violet-50 text-violet-900 dark:bg-slate-900 dark:text-slate-50'
                  : 'text-slate-700 dark:text-slate-200'
              "
              @click="select(item.id)"
            >
              <span class="text-base" aria-hidden="true">{{ item.icon }}</span>
              <span class="font-medium">{{ item.label }}</span>
              <span
                v-if="activeId === item.id"
                class="ml-auto text-xs font-medium text-violet-600 dark:text-violet-300"
              >
                Open
              </span>
            </button>
          </li>
        </ul>

        <p class="border-t border-slate-100 px-4 py-2 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
          <kbd class="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-900">Esc</kbd>
          close ·
          <kbd class="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-900">Ctrl</kbd>+
          <kbd class="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-900">K</kbd>
          open
        </p>
      </div>
    </div>
  </Teleport>
</template>
