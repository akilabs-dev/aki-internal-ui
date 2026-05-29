import type { AlpineExtractorId } from '@/lib/vue-to-alpine'

/** Shown above HTML markup when the component needs Alpine.js */
export const HTML_ALPINE_SETUP_HINT = `<!--
  Alpine.js setup required — import and run the module from the "Alpine JS" tab
  before this markup (e.g. in your entry file: main.ts).
-->

`

const ACCORDION_ALPINE_SETUP = `import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

Alpine.data('accordionDemo', () => ({
  open: 'item-1',

  init() {
    const defaultOpen = this.$root?.dataset?.defaultOpen
    if (defaultOpen) {
      this.open = defaultOpen
    }
  },

  toggle(id) {
    this.open = this.open === id ? null : id
  },

  expanded(id) {
    return this.open === id
  },
}))

Alpine.plugin(collapse)
Alpine.start()
`

const ALERT_DIALOG_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('alertDialogDemo', () => ({
  open: false,

  openDialog() {
    this.open = true
  },

  close() {
    this.open = false
  },
}))

Alpine.start()
`

export function getAlpineSetupSource(extractor: AlpineExtractorId): string | null {
  switch (extractor) {
    case 'accordion':
      return ACCORDION_ALPINE_SETUP
    case 'alert-dialog':
      return ALERT_DIALOG_ALPINE_SETUP
    case 'alert':
      return null
    default:
      return null
  }
}

export function hasAlpineSetup(extractor: AlpineExtractorId): boolean {
  return getAlpineSetupSource(extractor) != null
}
