import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

/** Base path for GitHub Pages project sites (see deploy-pages workflow). */
function githubPagesBase(): string {
  if (process.env.GITHUB_PAGES !== 'true') return '/'

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo || repo.endsWith('.github.io')) return '/'

  return `/${repo}/`
}

// https://vite.dev/config/
export default defineConfig({
  base: githubPagesBase(),
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
    },
    dedupe: ['vue'],
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
  ssr: {
    noExternal: ['reka-ui', '@vueuse/core', '@lucide/vue'],
  },
})
