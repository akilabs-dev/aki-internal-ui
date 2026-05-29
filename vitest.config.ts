import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
    },
    dedupe: ['vue'],
  },
  base: '/aki-internal-ui/', // GitHub Pages base path (public repository name)
  test: {
    environment: 'happy-dom',
  },
})
