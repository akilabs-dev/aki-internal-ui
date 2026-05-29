import { copyFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

/** Base path for GitHub Pages project sites (see deploy-pages workflow). */
function githubPagesBase(): string {
  if (process.env.GITHUB_PAGES !== 'true') return '/'

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo || repo.endsWith('.github.io')) return '/'

  return `/${repo}/`
}

/**
 * GitHub Pages has no SPA rewrite, so a hard refresh on a deep route 404s.
 * Emit 404.html as a copy of the built index.html; Pages serves it for any
 * missing path and the router resolves the real route client-side.
 */
function spaPagesFallback(): Plugin {
  let outDir = ''
  return {
    name: 'spa-pages-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const index = path.join(outDir, 'index.html')
      if (existsSync(index)) copyFileSync(index, path.join(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: githubPagesBase(),
  plugins: [vue(), tailwindcss(), spaPagesFallback()],
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
  build: {
    // Shiki oniguruma wasm (~622 kB) and Prettier vue/typescript are lazy-loaded.
    chunkSizeWarningLimit: 900,
    rolldownOptions: {
      output: {
        codeSplitting: true,
      },
      onwarn(warning, defaultHandler) {
        if (warning.code === 'INVALID_ANNOTATION') return
        defaultHandler(warning)
      },
    },
  },
})
