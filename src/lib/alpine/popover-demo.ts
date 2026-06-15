export function createPopoverDemoData(initialOpen = false) {
  return {
    open: initialOpen,

    init() {
      ;(this as any).$watch('open', (isOpen: boolean) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.position()
          })
        })
      })

      if (this.open) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.position()
          })
        })
      }
    },

    toggle() {
      this.open = !this.open
    },

    close() {
      this.open = false
    },

    position() {
      const trigger = (this as any).$refs.trigger as HTMLElement | undefined
      const content = (this as any).$refs.content as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      content.style.top = `${rect.bottom + offset}px`
      content.style.left = `${rect.left}px`
      content.style.zIndex = '50'
    },
  }
}
