import { computed, ref } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'system-ui.theme'
const mode = ref<ThemeMode>('light')

function applyTheme(next: ThemeMode) {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  root.setAttribute('data-theme', next)
}

export function loadThemeFromStorage(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark') return raw
  return 'light'
}

function systemPreferredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

export function setTheme(next: ThemeMode) {
  mode.value = next
  applyTheme(next)
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next)
  }
}

export function initTheme() {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
  const next = stored === 'light' || stored === 'dark' ? stored : systemPreferredTheme()
  setTheme(next)
}

export function useTheme() {
  const isDark = computed(() => mode.value === 'dark')

  function cycle() {
    setTheme(mode.value === 'dark' ? 'light' : 'dark')
  }

  return {
    mode,
    isDark,
    setTheme,
    cycle,
  }
}

