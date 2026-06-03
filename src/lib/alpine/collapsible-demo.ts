export function createCollapsibleDemoData(initialOpen = false) {
  return {
    open: initialOpen,

    toggle() {
      this.open = !this.open
    },
  }
}
