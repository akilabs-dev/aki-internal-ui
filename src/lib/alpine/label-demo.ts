export function createLabelDemoData() {
  return {
    terms: false,
    termsPreview: true,

    isChecked(key: 'terms' | 'termsPreview') {
      return Boolean((this as Record<string, unknown>)[key])
    },

    toggle(key: 'terms' | 'termsPreview') {
      ;(this as Record<string, unknown>)[key] = !this.isChecked(key)
    },
  }
}
