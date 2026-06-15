export function createSheetDemoData() {
  return {
    open: false,

    openSheet() {
      this.open = true
    },

    close() {
      this.open = false
    },
  }
}
