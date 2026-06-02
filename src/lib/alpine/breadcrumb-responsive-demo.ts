/** Alpine.data factory for the responsive collapsed breadcrumb (HTML preview + init). */
export function createBreadcrumbResponsiveDemoData() {
  return {
    menuOpen: false,

    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    closeMenu() {
      this.menuOpen = false
    },
  }
}
