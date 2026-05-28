import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

let started = false

export function registerAlpineData() {
  Alpine.data('accordionDemo', () => ({
    open: 'item-1' as string | null,

    init() {
      const defaultOpen = (this.$root as HTMLElement).dataset.defaultOpen
      if (defaultOpen) {
        this.open = defaultOpen
      }
    },

    toggle(id: string) {
      this.open = this.open === id ? null : id
    },

    expanded(id: string) {
      return this.open === id
    },
  }))
}

export function ensureAlpine() {
  if (started) return
  Alpine.plugin(collapse)
  registerAlpineData()
  window.Alpine = Alpine
  Alpine.start()
  started = true
}

export function initAlpineOnElement(el: HTMLElement) {
  ensureAlpine()
  Alpine.initTree(el)
}

export function destroyAlpineOnElement(el: HTMLElement) {
  if ('destroyTree' in Alpine && typeof Alpine.destroyTree === 'function') {
    Alpine.destroyTree(el)
  }
}
