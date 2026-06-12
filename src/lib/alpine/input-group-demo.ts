type MenuKey = 'auto' | 'file' | 'search'
type TooltipKey = 'url-info' | 'password' | 'email' | 'api' | 'email-label'

export function createInputGroupDemoData() {
  return {
    activeMenu: null as MenuKey | null,
    tooltipOpen: null as TooltipKey | null,
    copied: false,
    isFavorite: false,
    securePopoverOpen: false,
    copyTimer: null as ReturnType<typeof setTimeout> | null,

    toggleMenu(key: MenuKey) {
      if (this.activeMenu === key) {
        this.activeMenu = null
        return
      }
      this.activeMenu = key
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.positionMenu(key))
      })
    },

    closeMenus() {
      this.activeMenu = null
    },

    positionMenu(key: MenuKey) {
      const trigger = (this as unknown as { $refs: Record<string, HTMLElement> }).$refs[`${key}MenuTrigger`]
      const menu = (this as unknown as { $refs: Record<string, HTMLElement> }).$refs[`${key}MenuContent`]
      if (!trigger || !menu) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      menu.style.position = 'fixed'
      menu.style.zIndex = '50'

      if (key === 'auto') {
        menu.style.top = `${rect.top - menu.offsetHeight - offset}px`
        menu.style.left = `${rect.left}px`
      } else {
        menu.style.top = `${rect.bottom + offset}px`
        menu.style.left = `${rect.right - menu.offsetWidth}px`
      }
    },

    openTooltip(key: TooltipKey, event: Event) {
      this.tooltipOpen = key
      const target = event.currentTarget as HTMLElement
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.positionTooltip(target))
      })
    },

    closeTooltip() {
      this.tooltipOpen = null
    },

    tooltipLabel() {
      const labels: Record<TooltipKey, string> = {
        'url-info': 'This is content in a tooltip.',
        password: 'Password must be at least 8 characters',
        email: "We'll use this to send you notifications",
        'email-label': "We'll use this to send you notifications",
        api: 'Click for help with API keys',
      }
      return this.tooltipOpen ? labels[this.tooltipOpen] : ''
    },

    positionTooltip(trigger: HTMLElement) {
      const tooltip = (this as unknown as { $refs: Record<string, HTMLElement> }).$refs.tooltipContent
      if (!tooltip || !this.tooltipOpen) return

      const rect = trigger.getBoundingClientRect()
      tooltip.style.position = 'fixed'
      tooltip.style.zIndex = '50'

      if (this.tooltipOpen === 'api') {
        tooltip.style.top = `${rect.top + rect.height / 2 - tooltip.offsetHeight / 2}px`
        tooltip.style.left = `${rect.left - tooltip.offsetWidth - 8}px`
        return
      }

      tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`
      tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`
    },

    copyUrl() {
      const value = 'https://x.com/shadcn'
      if (navigator.clipboard?.writeText) {
        void navigator.clipboard.writeText(value)
      }
      this.copied = true
      if (this.copyTimer) clearTimeout(this.copyTimer)
      this.copyTimer = setTimeout(() => {
        this.copied = false
      }, 2000)
    },

    toggleFavorite() {
      this.isFavorite = !this.isFavorite
    },

    toggleSecurePopover() {
      this.securePopoverOpen = !this.securePopoverOpen
      if (this.securePopoverOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.positionSecurePopover())
        })
      }
    },

    closeSecurePopover() {
      this.securePopoverOpen = false
    },

    positionSecurePopover() {
      const trigger = (this as unknown as { $refs: Record<string, HTMLElement> }).$refs.securePopoverTrigger
      const content = (this as unknown as { $refs: Record<string, HTMLElement> }).$refs.securePopoverContent
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      content.style.position = 'fixed'
      content.style.top = `${rect.bottom + 4}px`
      content.style.left = `${rect.left}px`
      content.style.zIndex = '50'
    },
  }
}
