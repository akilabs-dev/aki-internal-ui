import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

let started = false

export function registerAlpineData() {
  Alpine.data('accordionDemo', () => ({
    open: 'item-1' as string | null,

    init() {
      const defaultOpen = ((this as any).$root as HTMLElement | undefined)?.dataset
        ?.defaultOpen
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

export function initAlpineOnElement(el: any) {
  ensureAlpine()
  ;(Alpine as any).initTree(el)
}

export function destroyAlpineOnElement(el: any) {
  const maybeDestroyTree = (Alpine as any).destroyTree as unknown
  if (typeof maybeDestroyTree === 'function') {
    maybeDestroyTree(el)
  }
}
