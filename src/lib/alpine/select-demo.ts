import type { SelectGroup } from '@/demos/select/select-demo.data'
import { findSelectLabel } from '@/demos/select/select-demo.data'

export function createSelectDemoData(config: {
  placeholder: string
  groups: readonly SelectGroup[]
  defaultValue?: string
}) {
  return {
    open: false,
    value: config.defaultValue ?? '',
    placeholder: config.placeholder,
    groups: config.groups,

    init() {
      ;(this as any).$watch('open', (isOpen: boolean) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.position()
          })
        })
      })
    },

    toggle() {
      this.open = !this.open
    },

    close() {
      this.open = false
    },

    select(nextValue: string) {
      this.value = nextValue
      this.close()
    },

    label() {
      if (!this.value) return this.placeholder
      return findSelectLabel(this.groups, this.value) ?? this.placeholder
    },

    isSelected(optionValue: string) {
      return this.value === optionValue
    },

    isPlaceholder() {
      return !this.value
    },

    position() {
      const trigger = (this as any).$refs.trigger as HTMLElement | undefined
      const content = (this as any).$refs.content as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      content.style.top = `${rect.bottom + offset}px`
      content.style.left = `${rect.left}px`
      content.style.minWidth = `${rect.width}px`
      content.style.zIndex = '50'
    },
  }
}
