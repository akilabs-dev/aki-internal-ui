import {
  menubarDefaults,
  type MenubarProfile,
} from '@/demos/menubar/menubar-demo.data'

export type MenubarMenuKey = 'file' | 'edit' | 'view' | 'profiles'
export type MenubarSubmenuKey = 'share' | 'find'

export function createMenubarDemoData() {
  return {
    activeMenu: null as MenubarMenuKey | null,
    activeSubmenu: null as MenubarSubmenuKey | null,
    subCloseTimer: null as ReturnType<typeof setTimeout> | null,

    bookmarksBar: menubarDefaults.bookmarksBar,
    fullUrls: menubarDefaults.fullUrls,
    profile: menubarDefaults.profile as MenubarProfile,

    init() {
      ;(this as any).$watch('activeMenu', (menu: MenubarMenuKey | null) => {
        if (!menu) {
          this.closeSubmenu()
          return
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.positionMenu(menu)
          })
        })
      })

      ;(this as any).$watch('activeSubmenu', (sub: MenubarSubmenuKey | null) => {
        if (!sub) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.positionSubmenu(sub)
          })
        })
      })
    },

    isMenuOpen(menu: MenubarMenuKey) {
      return this.activeMenu === menu
    },

    toggleMenu(menu: MenubarMenuKey) {
      this.activeMenu = this.activeMenu === menu ? null : menu
      if (this.activeMenu !== menu) {
        this.closeSubmenu()
      } else {
        this.activeSubmenu = null
      }
    },

    closeMenus() {
      this.activeMenu = null
      this.closeSubmenu()
    },

    openSubmenu(key: MenubarSubmenuKey) {
      if (this.subCloseTimer) {
        clearTimeout(this.subCloseTimer)
        this.subCloseTimer = null
      }
      this.activeSubmenu = key
    },

    closeSubmenuDelayed() {
      this.subCloseTimer = setTimeout(() => {
        this.activeSubmenu = null
        this.subCloseTimer = null
      }, 150)
    },

    closeSubmenu() {
      if (this.subCloseTimer) {
        clearTimeout(this.subCloseTimer)
        this.subCloseTimer = null
      }
      this.activeSubmenu = null
    },

    positionMenu(menu: MenubarMenuKey) {
      const trigger = (this as any).$refs[`${menu}Trigger`] as HTMLElement | undefined
      const content = (this as any).$refs[`${menu}Content`] as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      content.style.position = 'fixed'
      content.style.top = `${rect.bottom + 8}px`
      content.style.left = `${rect.left}px`
      content.style.zIndex = '50'

      if (this.activeSubmenu) {
        this.positionSubmenu(this.activeSubmenu)
      }
    },

    positionSubmenu(key: MenubarSubmenuKey) {
      const trigger = (this as any).$refs[`${key}SubTrigger`] as HTMLElement | undefined
      const content = (this as any).$refs[`${key}SubContent`] as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      content.style.position = 'fixed'
      content.style.top = `${rect.top}px`
      content.style.left = `${rect.right + 4}px`
      content.style.zIndex = '51'
    },

    toggleCheckbox(key: 'bookmarksBar' | 'fullUrls') {
      this[key] = !this[key]
    },

    setProfile(value: MenubarProfile) {
      this.profile = value
    },
  }
}
