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

const BUTTON_GROUP_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('buttonGroupDemo', () => ({
  menuOpen: false,
  subOpen: false,
  label: 'personal',
  subCloseTimer: null,

  init() {
    this.$watch('menuOpen', (open) => {
      if (!open) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.positionMenu()
        })
      })
    })

    this.$watch('subOpen', (open) => {
      if (!open) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.positionSubMenu()
        })
      })
    })
  },

  toggleMenu() {
    this.menuOpen = !this.menuOpen
    if (!this.menuOpen) {
      this.closeSub()
    }
  },

  closeMenu() {
    this.menuOpen = false
    this.closeSub()
  },

  openSub() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.subOpen = true
  },

  closeSubDelayed() {
    this.subCloseTimer = setTimeout(() => {
      this.subOpen = false
      this.subCloseTimer = null
    }, 150)
  },

  closeSub() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.subOpen = false
  },

  setLabel(value) {
    this.label = value
  },

  positionMenu() {
    const trigger = this.$refs.menuTrigger
    const menu = this.$refs.menuContent
    if (!trigger || !menu) return

    const rect = trigger.getBoundingClientRect()
    menu.style.position = 'fixed'
    menu.style.top = \`\${rect.bottom + 4}px\`
    menu.style.left = \`\${rect.right - menu.offsetWidth}px\`
    menu.style.zIndex = '50'

    if (this.subOpen) {
      this.positionSubMenu()
    }
  },

  positionSubMenu() {
    const trigger = this.$refs.subTrigger
    const sub = this.$refs.subContent
    if (!trigger || !sub) return

    const rect = trigger.getBoundingClientRect()
    sub.style.position = 'fixed'
    sub.style.top = \`\${rect.top}px\`
    sub.style.left = \`\${rect.right + 4}px\`
    sub.style.zIndex = '51'
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
    case 'button-group':
      return BUTTON_GROUP_ALPINE_SETUP
    case 'alert':
      return null
    default:
      return null
  }
}

export function hasAlpineSetup(extractor: AlpineExtractorId): boolean {
  return getAlpineSetupSource(extractor) != null
}
