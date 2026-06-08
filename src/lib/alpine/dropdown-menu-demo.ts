import {
  appearanceMenuItems,
  positionMenuDefault,
} from '@/demos/dropdown-menu/dropdown-menu-demo.data'

function createDropdownMenuDemoBase() {
  return {
    open: false,
    submenuOpen: false,
    subCloseTimer: null as ReturnType<typeof setTimeout> | null,

    init() {
      ;(this as any).$watch('open', (isOpen: boolean) => {
        if (!isOpen) {
          this.closeSub()
          return
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.positionMenu()
          })
        })
      })

      ;(this as any).$watch('submenuOpen', (isOpen: boolean) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.positionSubMenu()
          })
        })
      })
    },

    toggleMenu() {
      this.open = !this.open
      if (!this.open) {
        this.closeSub()
      }
    },

    closeMenu() {
      this.open = false
      this.closeSub()
    },

    openSub() {
      if (this.subCloseTimer) {
        clearTimeout(this.subCloseTimer)
        this.subCloseTimer = null
      }
      this.submenuOpen = true
    },

    closeSubDelayed() {
      this.subCloseTimer = setTimeout(() => {
        this.submenuOpen = false
        this.subCloseTimer = null
      }, 150)
    },

    closeSub() {
      if (this.subCloseTimer) {
        clearTimeout(this.subCloseTimer)
        this.subCloseTimer = null
      }
      this.submenuOpen = false
    },

    positionMenu() {
      const trigger = (this as any).$refs.trigger as HTMLElement | undefined
      const menu = (this as any).$refs.content as HTMLElement | undefined
      if (!trigger || !menu) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      menu.style.position = 'fixed'
      menu.style.top = `${rect.bottom + offset}px`
      menu.style.left = `${rect.left}px`
      menu.style.zIndex = '50'

      if (this.submenuOpen) {
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

export function createDropdownMenuAccountDemoData() {
  return createDropdownMenuDemoBase()
}

export function createDropdownMenuAppearanceDemoData() {
  return {
    ...createDropdownMenuDemoBase(),
    showStatusBar: appearanceMenuItems.statusBar.defaultChecked,
    showActivityBar: appearanceMenuItems.activityBar.defaultChecked,
    showPanel: appearanceMenuItems.panel.defaultChecked,

    toggleCheckbox(key: 'showStatusBar' | 'showActivityBar' | 'showPanel') {
      ;(this as any)[key] = !(this as any)[key]
    },
  }
}

export function createDropdownMenuPositionDemoData() {
  return {
    ...createDropdownMenuDemoBase(),
    position: positionMenuDefault,

    setPosition(value: string) {
      this.position = value
    },
  }
}
