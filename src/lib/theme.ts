export type ThemeMode = 'light' | 'dark' | 'system'
export type ThemeStyle = string

const MODE_KEY = 'theme-mode'
const STYLE_KEY = 'theme-style'

export function getStoredThemeMode(): ThemeMode {
  const raw = localStorage.getItem(MODE_KEY)
  return raw === 'light' || raw === 'dark' || raw === 'system' ? raw : 'system'
}

export function storeThemeMode(mode: ThemeMode) {
  localStorage.setItem(MODE_KEY, mode)
}

export function getStoredThemeStyle(): ThemeStyle {
  const raw = localStorage.getItem(STYLE_KEY)
  return raw || 'default'
}

export function storeThemeStyle(style: ThemeStyle) {
  localStorage.setItem(STYLE_KEY, style)
}

export function getSystemPrefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  const isDark = mode === 'dark' || (mode === 'system' && getSystemPrefersDark())
  root.classList.toggle('dark', isDark)
}

export function applyThemeStyle(style: ThemeStyle) {
  const root = document.documentElement
  root.dataset.theme = style
}

