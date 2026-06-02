/** Alpine.data factory for the breadcrumb ellipsis menu (HTML preview + init). */
export function createBreadcrumbEllipsisDemoData() {
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
