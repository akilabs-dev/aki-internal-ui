import {
  getDefaultCheckboxState,
  type CheckboxAlpineStateKey,
} from '@/demos/checkbox/checkbox-demo.data'

export function createCheckboxDemoData() {
  const defaults = getDefaultCheckboxState()

  return {
    terms: defaults.terms,
    terms2: defaults.terms2,
    toggle2: defaults.toggle2,
    toggle3: defaults.toggle3,

    isChecked(key: CheckboxAlpineStateKey) {
      return Boolean((this as Record<string, unknown>)[key])
    },

    toggle(key: CheckboxAlpineStateKey) {
      ;(this as Record<string, unknown>)[key] = !this.isChecked(key)
    },
  }
}
