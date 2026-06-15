import { radioGroupDefaultValue } from '@/demos/radio-group/radio-group-demo.data'

export function createRadioGroupDemoData() {
  return {
    value: radioGroupDefaultValue as string,

    select(nextValue: string) {
      this.value = nextValue
    },

    isChecked(optionValue: string) {
      return this.value === optionValue
    },
  }
}
