import { createApp } from 'vue'
import { ensureAlpine } from '@/lib/alpine/init-alpine'
import {
  applyTheme,
  applyThemeStyle,
  getStoredThemeMode,
  getStoredThemeStyle,
} from '@/lib/theme'
import { router } from '@/router'
import './style.css'
import App from './App.vue'

// Load all theme token files so new themes are auto-included.
import.meta.glob('./themes/*.css', { eager: true })

// Start Alpine before Vue so it does not walk the Vue-rendered tree on first start.
ensureAlpine()

// Apply stored theme settings as early as possible.
applyThemeStyle(getStoredThemeStyle())
applyTheme(getStoredThemeMode())

createApp(App).use(router).mount('#app')
