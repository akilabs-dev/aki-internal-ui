export function createHoverCardDemoData() {
  return {
    open: false,
    openTimer: null as ReturnType<typeof setTimeout> | null,
    closeTimer: null as ReturnType<typeof setTimeout> | null,
    openDelay: 700,
    closeDelay: 300,

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

    clearOpenTimer() {
      if (this.openTimer) {
        clearTimeout(this.openTimer)
        this.openTimer = null
      }
    },

    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
    },

    scheduleOpen() {
      this.clearCloseTimer()
      if (this.open) return
      if (this.openTimer) return
      this.openTimer = setTimeout(() => {
        this.open = true
        this.openTimer = null
      }, this.openDelay)
    },

    scheduleClose() {
      this.clearOpenTimer()
      if (!this.open) return
      if (this.closeTimer) return
      this.closeTimer = setTimeout(() => {
        this.open = false
        this.closeTimer = null
      }, this.closeDelay)
    },

    onTriggerEnter() {
      this.scheduleOpen()
    },

    onTriggerLeave() {
      this.scheduleClose()
    },

    onContentEnter() {
      this.clearCloseTimer()
      if (!this.open) {
        this.scheduleOpen()
      }
    },

    onContentLeave() {
      this.scheduleClose()
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
