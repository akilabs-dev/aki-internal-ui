export type ButtonGroupMenuPlacement = 'top' | 'bottom'

/** Shared Alpine.data factory for the button group demo (HTML preview + init). */
export function createButtonGroupDemoData(
  menuPlacement: ButtonGroupMenuPlacement = 'bottom',
) {
  return {
    menuPlacement,
    menuOpen: false,
    subOpen: false,
    label: 'personal',
    subCloseTimer: null as ReturnType<typeof setTimeout> | null,

    init() {
      ;(this as any).$watch('menuOpen', (open: boolean) => {
        if (!open) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.positionMenu()
          })
        })
      })

      ;(this as any).$watch('subOpen', (open: boolean) => {
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

    setLabel(value: string) {
      this.label = value
    },

    positionMenu() {
      const trigger = (this as any).$refs.menuTrigger as HTMLElement | undefined
      const menu = (this as any).$refs.menuContent as HTMLElement | undefined
      if (!trigger || !menu) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      menu.style.position = 'fixed'
      menu.style.top =
        menuPlacement === 'top'
          ? `${rect.top - menu.offsetHeight - offset}px`
          : `${rect.bottom + offset}px`
      menu.style.left = `${rect.right - menu.offsetWidth}px`
      menu.style.zIndex = '50'

      if (this.subOpen) {
        this.positionSubMenu()
      }
    },

    positionSubMenu() {
      const trigger = (this as any).$refs.subTrigger as HTMLElement | undefined
      const sub = (this as any).$refs.subContent as HTMLElement | undefined
      if (!trigger || !sub) return

      const rect = trigger.getBoundingClientRect()
      sub.style.position = 'fixed'
      sub.style.top = `${rect.top}px`
      sub.style.left = `${rect.right + 4}px`
      sub.style.zIndex = '51'
    },
  }
}
