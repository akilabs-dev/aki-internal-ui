export function createItemActionsDemoData() {
  return {
    onAction(_label: string) {
      // Demo action handler for HTML preview buttons.
    },
  }
}

export function createItemSelectDemoData() {
  return {
    open: false,

    init() {
      ;(this as unknown as { $watch: (key: string, cb: (value: boolean) => void) => void }).$watch(
        'open',
        (isOpen: boolean) => {
          if (!isOpen) return
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.positionMenu()
            })
          })
        },
      )
    },

    toggleMenu() {
      this.open = !this.open
    },

    closeMenu() {
      this.open = false
    },

    positionMenu() {
      const trigger = (this as unknown as { $refs: { trigger?: HTMLElement } }).$refs.trigger
      const menu = (this as unknown as { $refs: { content?: HTMLElement } }).$refs.content
      if (!trigger || !menu) return

      const rect = trigger.getBoundingClientRect()
      menu.style.position = 'fixed'
      menu.style.top = `${rect.bottom + 4}px`
      menu.style.left = `${rect.right - menu.offsetWidth}px`
      menu.style.zIndex = '50'
    },
  }
}
