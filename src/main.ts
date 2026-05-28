import { createApp } from 'vue'
import { ensureAlpine } from '@/lib/alpine/init-alpine'
import './style.css'
import App from './App.vue'

// Start Alpine before Vue so it does not walk the Vue-rendered tree on first start.
ensureAlpine()

createApp(App).mount('#app')
