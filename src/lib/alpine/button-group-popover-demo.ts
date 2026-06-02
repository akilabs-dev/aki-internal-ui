export function createButtonGroupPopoverDemoData() {
  return {
    open: false,

    init() {
      ;(this as any).$watch('open', (isOpen: boolean) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.position()
          })
        })
      })
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
      const spaceBelow = window.innerHeight - rect.bottom - offset
      const spaceAbove = rect.top - offset
      const openUp = content.offsetHeight > spaceBelow && spaceAbove > spaceBelow

      content.style.top = openUp
        ? `${Math.max(8, rect.top - content.offsetHeight - offset)}px`
        : `${Math.min(window.innerHeight - 8 - content.offsetHeight, rect.bottom + offset)}px`
      content.style.left = `${rect.right - content.offsetWidth}px`
      content.style.zIndex = '50'
    },
  }
}

