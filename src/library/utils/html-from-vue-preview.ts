import type { LibraryCode } from '../types'
import { tailwindCopyCss } from '../snippets/tailwind-copy-css'
import { tailwindHtmlSetup } from '../snippets/tailwind-html-setup'
import { extractTemplateFromVueSfc } from './extract-vue-template'

export type { LibraryCode }

export type VuePreviewCodeOptions = {
  /** Raw .vue file from `import Source from './Component.vue?raw'` */
  vueSource: string
  /** Path shown in Usage → Vue tab */
  vueUsageImport: string
  /** Component name for Usage → Vue tab */
  vueUsageName: string
  /** Override default tailwindCopyCss */
  css?: string
  /** Appended after css (e.g. carousel JS, hero custom CSS) */
  extraCss?: string
  /** Comment block after tailwindHtmlSetup in Usage → HTML */
  usageHtmlNote?: string
  /** Appended after template HTML (e.g. <script> for static HTML navbar) */
  extraHtml?: string
}

/**
 * Extract paste-ready HTML from a preview .vue file.
 * Removes Vue/Alpine bindings and aria-* used only for a11y in the app.
 */
export function htmlFromVuePreview(vueSource: string): string {
  let html = extractTemplateFromVueSfc(vueSource)
  if (!html) return '<!-- No <template> found in .vue file -->'

  html = html
    .replace(/\s(?:v-[a-z0-9.-]+|:class|:key|@[a-z]+|x-[a-z0-9.-]+)(?:="[^"]*"|='[^']*'|=\{[^}]*\})?/gi, '')
    .replace(/\saria-[a-z]+="[^"]*"/gi, '')
    .trim()

  return html
}

/** Standard library code tabs (HTML / CSS / Usage) from one preview .vue file */
export function codeFromVuePreview(options: VuePreviewCodeOptions): LibraryCode {
  const baseCss = options.css ?? tailwindCopyCss
  const css = options.extraCss ? `${baseCss}\n\n${options.extraCss}` : baseCss

  const html = options.extraHtml
    ? `${htmlFromVuePreview(options.vueSource)}\n\n${options.extraHtml}`
    : htmlFromVuePreview(options.vueSource)

  return {
    html,
    css,
    vue: options.vueSource,
    usage: {
      html: `${tailwindHtmlSetup}

${options.usageHtmlNote ?? '<!-- HTML tab is synced from the preview .vue <template> -->'}`,
      vue: `<script setup lang="ts">
import ${options.vueUsageName} from '${options.vueUsageImport}'
</script>

<template>
  <${options.vueUsageName} />
</template>`,
    },
  }
}
