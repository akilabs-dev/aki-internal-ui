type KbdTooltipKey = 'save' | 'print'

export function createKbdTooltipDemoData() {
  return {
    tooltipOpen: null as KbdTooltipKey | null,

    openTooltip(key: KbdTooltipKey, event: Event) {
      this.tooltipOpen = key
      const target = event.currentTarget as HTMLElement
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.positionTooltip(key, target)
        })
      })
    },

    closeTooltip() {
      this.tooltipOpen = null
    },

    positionTooltip(key: KbdTooltipKey, trigger: HTMLElement) {
      const tooltip = (this as unknown as { $refs: Record<string, HTMLElement> }).$refs[
        `${key}Tooltip`
      ]
      if (!tooltip) return

      const rect = trigger.getBoundingClientRect()
      tooltip.style.position = 'fixed'
      tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`
      tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`
      tooltip.style.zIndex = '50'
    },
  }
}
