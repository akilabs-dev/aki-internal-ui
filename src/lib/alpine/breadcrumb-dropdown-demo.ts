/** Alpine.data factory for the breadcrumb dropdown demo (HTML preview + init). */
export function createBreadcrumbDropdownDemoData() {
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
