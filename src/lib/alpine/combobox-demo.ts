import {
  comboboxEmptyLabel,
  comboboxFrameworks,
  comboboxPlaceholder,
  comboboxStatuses,
  comboboxStatusEmptyLabel,
  comboboxStatusTriggerPlaceholder,
  type ComboboxFramework,
  type ComboboxStatus,
} from '@/demos/combobox/combobox-demo.data'

type ComboboxOption = { value: string; label: string }

function createComboboxDemoBase(config: {
  initialOpen?: boolean
  initialValue?: string
  options: ComboboxOption[]
  placeholder: string
  emptyLabel: string
  triggerLabel?: (value: string, options: ComboboxOption[]) => string
}) {
  const {
    initialOpen = false,
    initialValue = '',
    options,
    placeholder,
    emptyLabel,
    triggerLabel,
  } = config

  return {
    open: initialOpen,
    value: initialValue,
    search: '',
    options,
    emptyLabel,

    init() {
      ;(this as any).$watch('open', (isOpen: boolean) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.position()
          })
        })
      })

      if (this.open) {
        requestAnimationFrame(() => {
          this.position()
          this.focusSearch()
        })
      }
    },

    get selectedLabel() {
      if (triggerLabel) {
        return triggerLabel(this.value, this.options)
      }
      const match = this.options.find((o) => o.value === this.value)
      return match?.label ?? placeholder
    },

    filteredOptions() {
      const query = this.search.trim().toLowerCase()
      if (!query) return this.options
      return this.options.filter((o) =>
        o.label.toLowerCase().includes(query),
      )
    },

    toggle() {
      this.open = !this.open
      if (this.open) {
        ;(this as any).$nextTick(() => this.focusSearch())
      }
    },

    focusSearch() {
      const content = (this as any).$refs.content as HTMLElement | undefined
      const input = content?.querySelector<HTMLInputElement>(
        '[data-slot="command-input"]',
      )
      input?.focus()
    },

    close() {
      this.open = false
    },

    selectOption(selectedValue: string) {
      this.value = this.value === selectedValue ? '' : selectedValue
      this.open = false
      this.search = ''
    },

    isSelected(value: string) {
      return this.value === value
    },

    position() {
      const trigger = (this as any).$refs.trigger as HTMLElement | undefined
      const content = (this as any).$refs.content as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      const spaceBelow = window.innerHeight - rect.bottom - offset
      const spaceAbove = rect.top - offset
      const openUp =
        content.offsetHeight > spaceBelow && spaceAbove > spaceBelow

      content.style.top = openUp
        ? `${Math.max(8, rect.top - content.offsetHeight - offset)}px`
        : `${Math.min(
            window.innerHeight - 8 - content.offsetHeight,
            rect.bottom + offset,
          )}px`
      content.style.left = `${rect.left}px`
      content.style.zIndex = '50'
    },
  }
}

export function createComboboxDemoData(
  initialOpen = false,
  initialValue = '',
) {
  const base = createComboboxDemoBase({
    initialOpen,
    initialValue,
    options: comboboxFrameworks as ComboboxFramework[],
    placeholder: comboboxPlaceholder,
    emptyLabel: comboboxEmptyLabel,
  })

  return {
    ...base,
    frameworks: base.options,
    filteredFrameworks() {
      return this.filteredOptions()
    },
    selectFramework(selectedValue: string) {
      this.selectOption(selectedValue)
    },
  }
}

/** Figma #3 — inline open menu in row (search only, no floating popover) */
export function createStatusSearchPanelDemoData() {
  return {
    search: '',
    statuses: comboboxStatuses as ComboboxStatus[],

    filteredStatuses() {
      const query = this.search.trim().toLowerCase()
      if (!query) return this.statuses
      return this.statuses.filter((s) =>
        s.label.toLowerCase().includes(query),
      )
    },
  }
}

export function createStatusComboboxDemoData(
  initialOpen = false,
  initialValue = '',
) {
  const base = createComboboxDemoBase({
    initialOpen,
    initialValue,
    options: comboboxStatuses as ComboboxStatus[],
    placeholder: comboboxStatusTriggerPlaceholder,
    emptyLabel: comboboxStatusEmptyLabel,
    triggerLabel: (value, options) => {
      if (!value) return comboboxStatusTriggerPlaceholder
      const match = options.find((o) => o.value === value)
      return match?.label ?? comboboxStatusTriggerPlaceholder
    },
  })

  return {
    ...base,
    statuses: base.options,
    filteredStatuses() {
      return this.filteredOptions()
    },
    selectStatus(selectedValue: string) {
      this.selectOption(selectedValue)
    },
    get showStatusPlus(): boolean {
      return !this.value
    },
  }
}

export function createComboboxTaskDemoData(initialOpen = false) {
  return {
    open: initialOpen,

    init() {
      ;(this as any).$watch('open', (isOpen: boolean) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.position())
        })
      })

      if (this.open) {
        requestAnimationFrame(() => this.position())
      }
    },

    toggle() {
      this.open = !this.open
    },

    close() {
      this.open = false
    },

    position() {
      const trigger = (this as any).$refs.trigger as HTMLElement | undefined
      const content = (this as any).$refs.content as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      content.style.top = `${rect.bottom + offset}px`
      content.style.left = `${rect.right - content.offsetWidth}px`
      content.style.zIndex = '50'
    },
  }
}
