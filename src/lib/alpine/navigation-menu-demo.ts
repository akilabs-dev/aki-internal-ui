import type { NavigationMenuKey } from '@/demos/navigation-menu/navigation-menu-demo.data'

export function createNavigationMenuDemoData(initialMenu: NavigationMenuKey | null = null) {
  return {
    activeMenu: initialMenu as NavigationMenuKey | null,

    isOpen(key: NavigationMenuKey) {
      return this.activeMenu === key
    },

    toggleMenu(key: NavigationMenuKey) {
      this.activeMenu = this.activeMenu === key ? null : key
    },

    closeMenus() {
      this.activeMenu = null
    },
  }
}
