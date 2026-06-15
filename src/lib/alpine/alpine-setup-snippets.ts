import type { AlpineExtractorId } from '@/lib/vue-to-alpine'

const ACCORDION_ALPINE_SETUP = `import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

Alpine.data('accordionDemo', () => ({
  open: 'item-1',

  init() {
    const defaultOpen = this.$root?.dataset?.defaultOpen
    if (defaultOpen) {
      this.open = defaultOpen
    }
  },

  toggle(id) {
    this.open = this.open === id ? null : id
  },

  expanded(id) {
    return this.open === id
  },
}))

Alpine.plugin(collapse)
Alpine.start()
`

const ALERT_DIALOG_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('alertDialogDemo', () => ({
  open: false,

  openDialog() {
    this.open = true
  },

  close() {
    this.open = false
  },
}))

Alpine.start()
`

const CALENDAR_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('calendarDemo', () => ({
  viewYear: new Date().getFullYear(),
  viewMonth: new Date().getMonth() + 1,
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth() + 1,
  selectedDay: new Date().getDate(),
  minYear: 1925,
  maxYear: 2035,
  weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  init() {
    const root = this.$root
    this.minYear = Number(root.dataset.minYear) || 1925
    this.maxYear = Number(root.dataset.maxYear) || 2035
    const now = new Date()
    this.viewYear = now.getFullYear()
    this.viewMonth = now.getMonth() + 1
    this.selectedYear = now.getFullYear()
    this.selectedMonth = now.getMonth() + 1
    this.selectedDay = now.getDate()
  },

  get years() {
    const result = []
    for (let year = this.minYear; year <= this.maxYear; year++) {
      result.push(year)
    }
    return result
  },

  get months() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },

  monthLabel(month) {
    return new Date(2000, month - 1, 1).toLocaleString(undefined, { month: 'short' })
  },

  prevMonth() {
    if (this.viewMonth === 1) {
      this.viewMonth = 12
      this.viewYear -= 1
    } else {
      this.viewMonth -= 1
    }
    this.clampViewYear()
  },

  nextMonth() {
    if (this.viewMonth === 12) {
      this.viewMonth = 1
      this.viewYear += 1
    } else {
      this.viewMonth += 1
    }
    this.clampViewYear()
  },

  clampViewYear() {
    if (this.viewYear < this.minYear) this.viewYear = this.minYear
    if (this.viewYear > this.maxYear) this.viewYear = this.maxYear
  },

  onViewChange() {
    this.clampViewYear()
  },

  isOutOfRange(year) {
    return year < this.minYear || year > this.maxYear
  },

  get weeks() {
    const year = this.viewYear
    const month = this.viewMonth
    const first = new Date(year, month - 1, 1)
    const daysInMonth = new Date(year, month, 0).getDate()
    const startDow = first.getDay()
    const cells = []

    const prevMonth = month === 1 ? 12 : month - 1
    const prevYear = month === 1 ? year - 1 : year
    const prevDaysInMonth = new Date(prevYear, prevMonth, 0).getDate()
    for (let index = startDow - 1; index >= 0; index--) {
      const day = prevDaysInMonth - index
      cells.push({
        day,
        month: prevMonth,
        year: prevYear,
        outside: true,
        disabled: this.isOutOfRange(prevYear),
        key: \`\${prevYear}-\${prevMonth}-\${day}\`,
      })
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({
        day,
        month,
        year,
        outside: false,
        disabled: this.isOutOfRange(year),
        key: \`\${year}-\${month}-\${day}\`,
      })
    }

    const nextMonth = month === 12 ? 1 : month + 1
    const nextYear = month === 12 ? year + 1 : year
    let trailingDay = 1
    while (cells.length % 7 !== 0) {
      cells.push({
        day: trailingDay,
        month: nextMonth,
        year: nextYear,
        outside: true,
        disabled: this.isOutOfRange(nextYear),
        key: \`\${nextYear}-\${nextMonth}-\${trailingDay}\`,
      })
      trailingDay += 1
    }

    const weeks = []
    for (let index = 0; index < cells.length; index += 7) {
      weeks.push(cells.slice(index, index + 7))
    }
    return weeks
  },

  selectDay(cell) {
    if (cell.disabled) return
    this.selectedYear = cell.year
    this.selectedMonth = cell.month
    this.selectedDay = cell.day
    if (cell.outside) {
      this.viewYear = cell.year
      this.viewMonth = cell.month
    }
  },

  isSelected(cell) {
    return (
      cell.year === this.selectedYear
      && cell.month === this.selectedMonth
      && cell.day === this.selectedDay
    )
  },

  isToday(cell) {
    const today = new Date()
    return (
      cell.year === today.getFullYear()
      && cell.month === today.getMonth() + 1
      && cell.day === today.getDate()
    )
  },

  cellClass(cell) {
    const base =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] size-8 p-0 font-normal cursor-default hover:bg-accent hover:text-accent-foreground'
    const parts = [base]
    if (this.isSelected(cell)) {
      parts.push('bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground')
    } else if (this.isToday(cell)) {
      parts.push('bg-accent text-accent-foreground')
    }
    if (cell.outside) parts.push('text-muted-foreground')
    if (cell.disabled) parts.push('text-muted-foreground opacity-50')
    return parts.join(' ')
  },
}))

Alpine.start()
`

const BREADCRUMB_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('breadcrumbDropdownDemo', () => ({
  menuOpen: false,

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  },

  closeMenu() {
    this.menuOpen = false
  },
}))

Alpine.data('breadcrumbEllipsisDemo', () => ({
  menuOpen: false,

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  },

  closeMenu() {
    this.menuOpen = false
  },
}))

Alpine.data('breadcrumbResponsiveDemo', () => ({
  menuOpen: false,

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  },

  closeMenu() {
    this.menuOpen = false
  },
}))

Alpine.start()
`

const BUTTON_GROUP_ALPINE_SETUP = `import Alpine from 'alpinejs'

const createButtonGroupDemo = (menuPlacement = 'bottom') => ({
  menuPlacement,
  menuOpen: false,
  subOpen: false,
  label: 'personal',
  subCloseTimer: null,

  init() {
    this.$watch('menuOpen', (open) => {
      if (!open) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.positionMenu()
        })
      })
    })

    this.$watch('subOpen', (open) => {
      if (!open) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.positionSubMenu()
        })
      })
    })
  },

  toggleMenu() {
    this.menuOpen = !this.menuOpen
    if (!this.menuOpen) {
      this.closeSub()
    }
  },

  closeMenu() {
    this.menuOpen = false
    this.closeSub()
  },

  openSub() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.subOpen = true
  },

  closeSubDelayed() {
    this.subCloseTimer = setTimeout(() => {
      this.subOpen = false
      this.subCloseTimer = null
    }, 150)
  },

  closeSub() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.subOpen = false
  },

  setLabel(value) {
    this.label = value
  },

  positionMenu() {
    const trigger = this.$refs.menuTrigger
    const menu = this.$refs.menuContent
    if (!trigger || !menu) return

    const rect = trigger.getBoundingClientRect()
    const offset = 4
    menu.style.position = 'fixed'
    menu.style.top =
      this.menuPlacement === 'top'
        ? \`\${rect.top - menu.offsetHeight - offset}px\`
        : \`\${rect.bottom + offset}px\`
    menu.style.left = \`\${rect.right - menu.offsetWidth}px\`
    menu.style.zIndex = '50'

    if (this.subOpen) {
      this.positionSubMenu()
    }
  },

  positionSubMenu() {
    const trigger = this.$refs.subTrigger
    const sub = this.$refs.subContent
    if (!trigger || !sub) return

    const rect = trigger.getBoundingClientRect()
    sub.style.position = 'fixed'
    sub.style.top = \`\${rect.top}px\`
    sub.style.left = \`\${rect.right + 4}px\`
    sub.style.zIndex = '51'
  },
})

Alpine.data('buttonGroupDemo', () => createButtonGroupDemo('bottom'))
Alpine.data('buttonGroupDemoTop', () => createButtonGroupDemo('top'))

Alpine.data('buttonGroupMessageDemo', () => ({
  voiceEnabled: false,
  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled
  },
}))

Alpine.data('buttonGroupPopoverDemo', () => ({
  open: false,
  init() {
    this.$watch('open', (isOpen) => {
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
  position() {
    const trigger = this.$refs.trigger
    const content = this.$refs.content
    if (!trigger || !content) return

    const rect = trigger.getBoundingClientRect()
    const offset = 4
    content.style.position = 'fixed'
    content.style.top = \`\\\${rect.bottom + offset}px\`
    content.style.left = \`\\\${rect.right - content.offsetWidth}px\`
    content.style.zIndex = '50'
  },
}))

Alpine.start()
`

const COMBOBOX_ALPINE_SETUP = `import Alpine from 'alpinejs'

const comboboxFrameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

function comboboxDemo(initialOpen = false, initialValue = '') {
  return {
    open: initialOpen,
    value: initialValue,
    search: '',
    frameworks: comboboxFrameworks,

    init() {
      this.$watch('open', (isOpen) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.position())
        })
      })
      if (this.open) {
        requestAnimationFrame(() => this.position())
      }
    },

    get selectedLabel() {
      const match = this.frameworks.find((f) => f.value === this.value)
      return match?.label ?? 'Select framework...'
    },

    filteredFrameworks() {
      const query = this.search.trim().toLowerCase()
      if (!query) return this.frameworks
      return this.frameworks.filter((f) =>
        f.label.toLowerCase().includes(query),
      )
    },

    toggle() {
      this.open = !this.open
    },

    close() {
      this.open = false
    },

    selectFramework(selectedValue) {
      this.value = this.value === selectedValue ? '' : selectedValue
      this.open = false
      this.search = ''
    },

    isSelected(value) {
      return this.value === value
    },

    position() {
      const trigger = this.$refs.trigger
      const content = this.$refs.content
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      const spaceBelow = window.innerHeight - rect.bottom - offset
      const spaceAbove = rect.top - offset
      const openUp =
        content.offsetHeight > spaceBelow && spaceAbove > spaceBelow

      content.style.top = openUp
        ? String(Math.max(8, rect.top - content.offsetHeight - offset))
        : String(Math.min(window.innerHeight - 8 - content.offsetHeight, rect.bottom + offset))
      content.style.left = String(rect.left)
      content.style.zIndex = '50'
    },
  }
}

Alpine.data('comboboxDemoClosed', () => comboboxDemo(false))
Alpine.data('comboboxDemoOpen', () => comboboxDemo(true, 'next.js'))

const comboboxStatuses = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'todo', label: 'Todo' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
  { value: 'canceled', label: 'Canceled' },
]

function statusComboboxDemo(initialOpen = false, initialValue = '') {
  return {
    open: initialOpen,
    value: initialValue,
    search: '',
    statuses: comboboxStatuses,

    init() {
      this.$watch('open', (isOpen) => {
        if (!isOpen) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.position())
        })
      })
      if (this.open) {
        requestAnimationFrame(() => this.position())
      }
    },

    get selectedLabel() {
      if (!this.value) return 'Set status'
      const match = this.statuses.find((s) => s.value === this.value)
      return match?.label ?? 'Set status'
    },

    get showStatusPlus() {
      return !this.value
    },

    filteredStatuses() {
      const query = this.search.trim().toLowerCase()
      if (!query) return this.statuses
      return this.statuses.filter((s) =>
        s.label.toLowerCase().includes(query),
      )
    },

    toggle() {
      this.open = !this.open
      if (this.open) {
        this.$nextTick(() => {
          const input = this.$refs.content?.querySelector('[data-slot="command-input"]')
          input?.focus()
        })
      }
    },

    close() {
      this.open = false
    },

    selectStatus(selectedValue) {
      this.value = this.value === selectedValue ? '' : selectedValue
      this.open = false
      this.search = ''
    },

    position() {
      const trigger = this.$refs.trigger
      const content = this.$refs.content
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      const spaceBelow = window.innerHeight - rect.bottom - offset
      const spaceAbove = rect.top - offset
      const openUp =
        content.offsetHeight > spaceBelow && spaceAbove > spaceBelow

      content.style.top = openUp
        ? String(Math.max(8, rect.top - content.offsetHeight - offset))
        : String(Math.min(window.innerHeight - 8 - content.offsetHeight, rect.bottom + offset))
      content.style.left = String(rect.left)
      content.style.zIndex = '50'
    },
  }
}

Alpine.data('comboboxStatusClosed', () => statusComboboxDemo(false))
Alpine.data('comboboxStatusClosed2', () => statusComboboxDemo(false))

Alpine.data('comboboxStatusOpen', () => ({
  search: '',
  statuses: comboboxStatuses,
  filteredStatuses() {
    const query = this.search.trim().toLowerCase()
    if (!query) return this.statuses
    return this.statuses.filter((s) =>
      s.label.toLowerCase().includes(query),
    )
  },
}))

function comboboxTaskDemo(initialOpen = false) {
  return {
    open: initialOpen,
    init() {
      this.$watch('open', (isOpen) => {
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
      const trigger = this.$refs.trigger
      const content = this.$refs.content
      if (!trigger || !content) return
      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      content.style.top = String(rect.bottom + offset)
      content.style.left = String(rect.right - content.offsetWidth)
      content.style.zIndex = '50'
    },
  }
}

Alpine.data('comboboxStatusBtnClosed', () => statusComboboxDemo(false))
Alpine.data('comboboxStatusBtnOpen', () => statusComboboxDemo(false))

Alpine.data('comboboxTaskClosed', () => comboboxTaskDemo(false))
Alpine.data('comboboxTaskOpen', () => comboboxTaskDemo(false))

Alpine.start()
`

const COMMAND_ALPINE_SETUP = `import Alpine from 'alpinejs'

function filterItems(items, search) {
  const query = search.trim().toLowerCase()
  if (!query) return items
  return items.filter((item) => item.label.toLowerCase().includes(query))
}

function commandDemo() {
  return {
    search: '',
    emptyLabel: 'No results found.',
    suggestionItems: [
      { value: 'calendar', label: 'Calendar' },
      { value: 'emoji', label: 'Search emoji' },
      { value: 'calculator', label: 'Calculator', disabled: true },
    ],
    settingsItems: [
      { value: 'profile', label: 'Profile', shortcut: '⌘P' },
      { value: 'billing', label: 'Billing', shortcut: '⌘B' },
      { value: 'settings', label: 'Settings', shortcut: '⌘S' },
    ],

    filteredSuggestions() {
      return filterItems(this.suggestionItems, this.search)
    },

    filteredSettings() {
      return filterItems(this.settingsItems, this.search)
    },

    showEmpty() {
      return (
        this.search.trim() !== ''
        && this.filteredSuggestions().length === 0
        && this.filteredSettings().length === 0
      )
    },

    select(value) {
      const item = [...this.suggestionItems, ...this.settingsItems].find(
        (entry) => entry.value === value,
      )
      if (item?.disabled) return
      this.search = ''
    },
  }
}

Alpine.data('commandDemo', commandDemo)

Alpine.start()
`

const COLLAPSIBLE_ALPINE_SETUP = `import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

function collapsibleDemo(initialOpen = false) {
  return {
    open: initialOpen,
    toggle() {
      this.open = !this.open
    },
  }
}

Alpine.data('collapsibleDemoClosed', () => collapsibleDemo(false))
Alpine.data('collapsibleDemoOpen', () => collapsibleDemo(true))

Alpine.plugin(collapse)
Alpine.start()
`

const CHECKBOX_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('checkboxDemo', () => ({
  terms: false,
  terms2: false,
  toggle2: false,
  toggle3: true,

  isChecked(key) {
    return Boolean(this[key])
  },

  toggle(key) {
    this[key] = !this.isChecked(key)
  },
}))

Alpine.start()
`

const CONTEXT_MENU_ALPINE_SETUP = `import Alpine from 'alpinejs'

function contextMenuDemoClosed() {
  return {
    open: false,
    x: 0,
    y: 0,
    submenuOpen: false,
    ignoreOutsideOnce: false,
    showBookmarks: true,
    showFullUrls: false,
    person: 'pedro',

    openAt(event) {
      event.preventDefault()
      this.open = true
      this.submenuOpen = false
      this.x = event.clientX
      this.y = event.clientY
      this.ignoreOutsideOnce = true
      setTimeout(() => {
        this.ignoreOutsideOnce = false
      }, 0)
    },

    close() {
      this.open = false
      this.submenuOpen = false
    },

    toggleSubmenu(force) {
      this.submenuOpen = typeof force === 'boolean' ? force : !this.submenuOpen
    },

    toggleCheckbox(key) {
      this[key] = !this[key]
    },

    setPerson(value) {
      this.person = value
    },
  }
}

Alpine.data('contextMenuDemoClosed', contextMenuDemoClosed)
Alpine.data('contextMenuDemoClosed2', contextMenuDemoClosed)

Alpine.start()
`

const CAROUSEL_ALPINE_SETUP = `import EmblaCarousel from 'embla-carousel'
import Alpine from 'alpinejs'

Alpine.data('carouselDemo', () => ({
  embla: null,
  variant: 'basic',
  canScrollPrev: false,
  canScrollNext: false,
  current: 1,
  totalCount: 5,

  init() {
    const root = this.$root
    const variant = root.dataset.carouselVariant || 'basic'
    this.variant = variant

    const viewport = this.$refs.viewport
    if (!viewport) return

    const axis = variant === 'vertical' ? 'y' : 'x'
    const align = variant === 'basic' ? 'center' : 'start'

    this.embla = EmblaCarousel(viewport, { axis, align })

    const update = () => {
      if (!this.embla) return
      this.canScrollPrev = this.embla.canScrollPrev()
      this.canScrollNext = this.embla.canScrollNext()
      if (variant === 'status') {
        this.totalCount = this.embla.scrollSnapList().length
        this.current = this.embla.selectedScrollSnap() + 1
      }
    }

    this.embla.on('init', update)
    this.embla.on('reInit', update)
    this.embla.on('select', update)
    update()
  },

  destroy() {
    this.embla?.destroy()
    this.embla = null
  },

  scrollPrev() {
    this.embla?.scrollPrev()
  },

  scrollNext() {
    this.embla?.scrollNext()
  },

  onKeydown(event) {
    const prevKey = this.variant === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
    const nextKey = this.variant === 'vertical' ? 'ArrowDown' : 'ArrowRight'

    if (event.key === prevKey) {
      event.preventDefault()
      this.scrollPrev()
      return
    }

    if (event.key === nextKey) {
      event.preventDefault()
      this.scrollNext()
    }
  },
}))

Alpine.start()
`

const DATA_TABLE_ALPINE_SETUP = `import Alpine from 'alpinejs'

const payments = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'abe45@gmail.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'monserrat44@gmail.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'silas22@gmail.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
]

Alpine.data('dataTableDemo', () => ({
  payments: payments.map((payment) => ({ ...payment })),
  emailFilter: '',
  sortAsc: true,
  selected: {},
  pageIndex: 0,
  pageSize: 5,
  columnsOpen: false,
  colVisibility: { status: true, email: true, amount: true },
  actionsOpenId: null,

  getFilteredPayments() {
    const query = this.emailFilter.trim().toLowerCase()
    return this.payments.filter(
      (payment) => !query || payment.email.toLowerCase().includes(query),
    )
  },

  getSortedPayments() {
    const rows = [...this.getFilteredPayments()]
    rows.sort((a, b) => {
      const cmp = a.email.localeCompare(b.email)
      return this.sortAsc ? cmp : -cmp
    })
    return rows
  },

  getPageCount() {
    return Math.max(1, Math.ceil(this.getSortedPayments().length / this.pageSize))
  },

  getPageRows() {
    const start = this.pageIndex * this.pageSize
    return this.getSortedPayments().slice(start, start + this.pageSize)
  },

  toggleEmailSort() {
    this.sortAsc = !this.sortAsc
    this.pageIndex = 0
  },

  isRowSelected(id) {
    return Boolean(this.selected[id])
  },

  toggleRow(id) {
    if (this.selected[id]) delete this.selected[id]
    else this.selected[id] = true
  },

  isAllPageSelected() {
    const rows = this.getPageRows()
    return rows.length > 0 && rows.every((row) => this.isRowSelected(row.id))
  },

  isSomePageSelected() {
    const rows = this.getPageRows()
    const some = rows.some((row) => this.isRowSelected(row.id))
    const all = this.isAllPageSelected()
    return some && !all
  },

  toggleAllPage() {
    const rows = this.getPageRows()
    if (this.isAllPageSelected()) {
      rows.forEach((row) => { delete this.selected[row.id] })
    } else {
      rows.forEach((row) => { this.selected[row.id] = true })
    }
  },

  selectedCount() {
    return this.getSortedPayments().filter((row) => this.isRowSelected(row.id)).length
  },

  totalFiltered() {
    return this.getSortedPayments().length
  },

  canPrevious() {
    return this.pageIndex > 0
  },

  canNext() {
    return this.pageIndex < this.getPageCount() - 1
  },

  previousPage() {
    if (this.canPrevious()) this.pageIndex -= 1
  },

  nextPage() {
    if (this.canNext()) this.pageIndex += 1
  },

  toggleColumn(column) {
    this.colVisibility[column] = !this.colVisibility[column]
  },

  formatAmount(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  },

  copyId(id) {
    navigator.clipboard?.writeText(id)
  },

  toggleColumnsMenu() {
    this.columnsOpen = !this.columnsOpen
    this.actionsOpenId = null
  },

  toggleActions(id) {
    this.actionsOpenId = this.actionsOpenId === id ? null : id
    this.columnsOpen = false
  },

  closeMenus() {
    this.columnsOpen = false
    this.actionsOpenId = null
  },

  onFilterInput(event) {
    this.emailFilter = event.target.value
    this.pageIndex = 0
  },
}))

Alpine.start()
`

const FIELD_ALPINE_SETUP = `import Alpine from 'alpinejs'

const selectKeys = ['month', 'year', 'department']

Alpine.data('fieldDemo', () => ({
  sameAsShipping: true,
  hardDisks: true,
  externalDisks: false,
  cdsDvds: false,
  connectedServers: false,
  syncFolders: true,
  subscription: 'monthly',
  mfaEnabled: false,
  computeEnv: 'kubernetes',
  pushTasks: false,
  emailTasks: false,
  priceMin: 200,
  priceMax: 800,
  month: '',
  monthLabel: '',
  monthOpen: false,
  year: '',
  yearLabel: '',
  yearOpen: false,
  department: '',
  departmentLabel: '',
  departmentOpen: false,

  init() {
    selectKeys.forEach((key) => {
      this.$watch(key + 'Open', (open) => {
        if (!open) return
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.positionSelect(key))
        })
      })
    })
  },

  isChecked(key) {
    return Boolean(this[key])
  },

  toggleCheckbox(key) {
    this[key] = !this[key]
  },

  setSubscription(value) {
    this.subscription = value
  },

  setComputeEnv(value) {
    this.computeEnv = value
  },

  toggleMfa() {
    this.mfaEnabled = !this.mfaEnabled
  },

  toggleSelect(key) {
    const openKey = key + 'Open'
    const wasOpen = this[openKey]
    this.monthOpen = false
    this.yearOpen = false
    this.departmentOpen = false
    this[openKey] = !wasOpen
  },

  closeSelect(key) {
    this[key + 'Open'] = false
  },

  setSelect(key, value, label) {
    this[key] = value
    this[key + 'Label'] = label
    this[key + 'Open'] = false
  },

  selectDisplay(key, placeholder) {
    return this[key + 'Label'] || placeholder
  },

  positionSelect(key) {
    const trigger = this.$refs[key + 'Trigger']
    const content = this.$refs[key + 'Content']
    if (!trigger || !content) return

    const rect = trigger.getBoundingClientRect()
    const offset = 4
    content.style.position = 'fixed'
    content.style.top = \`\${rect.bottom + offset}px\`
    content.style.left = \`\${rect.left}px\`
    content.style.minWidth = \`\${rect.width}px\`
    content.style.zIndex = '50'
  },

  activePriceThumb: null,

  priceMinPercent() {
    return (this.priceMin / 1000) * 100
  },

  priceMaxPercent() {
    return (this.priceMax / 1000) * 100
  },

  priceRangeLeft() {
    return this.priceMinPercent()
  },

  priceRangeWidth() {
    return this.priceMaxPercent() - this.priceMinPercent()
  },

  priceThumbZIndex(which) {
    if (this.activePriceThumb === which) return 3
    if (which === 'max' && this.priceMin > 900) return 3
    return which === 'min' ? 2 : 1
  },

  snapPrice(value) {
    return Math.round(value / 10) * 10
  },

  priceFromPointer(event) {
    const slider = this.$refs.priceSlider
    if (!slider) return 0
    const rect = slider.getBoundingClientRect()
    const percent = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
    return this.snapPrice(percent * 1000)
  },

  setPriceValue(which, value) {
    if (which === 'min') {
      this.priceMin = Math.min(value, this.priceMax - 10)
      return
    }
    this.priceMax = Math.max(value, this.priceMin + 10)
  },

  startPriceDrag(which, event) {
    event.preventDefault()
    this.activePriceThumb = which
    const target = event.currentTarget
    target?.setPointerCapture?.(event.pointerId)

    const move = (moveEvent) => {
      this.setPriceValue(which, this.priceFromPointer(moveEvent))
    }

    const end = (endEvent) => {
      target?.releasePointerCapture?.(endEvent.pointerId)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
      this.activePriceThumb = null
    }

    this.setPriceValue(which, this.priceFromPointer(event))
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', end)
    window.addEventListener('pointercancel', end)
  },

  onPriceTrackPointerDown(event) {
    if (event.target.closest('[data-slot="slider-thumb"]')) return
    const value = this.priceFromPointer(event)
    const distanceToMin = Math.abs(value - this.priceMin)
    const distanceToMax = Math.abs(value - this.priceMax)
    this.startPriceDrag(distanceToMin <= distanceToMax ? 'min' : 'max', event)
  },
}))

Alpine.start()
`

const HOVER_CARD_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('hoverCardDemo', () => ({
  open: false,
  openTimer: null,
  closeTimer: null,
  openDelay: 700,
  closeDelay: 300,

  init() {
    this.$watch('open', (isOpen) => {
      if (!isOpen) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.position())
      })
    })
  },

  clearOpenTimer() {
    if (this.openTimer) {
      clearTimeout(this.openTimer)
      this.openTimer = null
    }
  },

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  },

  scheduleOpen() {
    this.clearCloseTimer()
    if (this.open) return
    if (this.openTimer) return
    this.openTimer = setTimeout(() => {
      this.open = true
      this.openTimer = null
    }, this.openDelay)
  },

  scheduleClose() {
    this.clearOpenTimer()
    if (!this.open) return
    if (this.closeTimer) return
    this.closeTimer = setTimeout(() => {
      this.open = false
      this.closeTimer = null
    }, this.closeDelay)
  },

  onTriggerEnter() {
    this.scheduleOpen()
  },

  onTriggerLeave() {
    this.scheduleClose()
  },

  onContentEnter() {
    this.clearCloseTimer()
    if (!this.open) this.scheduleOpen()
  },

  onContentLeave() {
    this.scheduleClose()
  },

  position() {
    const trigger = this.$refs.trigger
    const content = this.$refs.content
    if (!trigger || !content) return

    const rect = trigger.getBoundingClientRect()
    const offset = 4
    content.style.position = 'fixed'
    content.style.top = \`\${rect.bottom + offset}px\`
    content.style.left = \`\${rect.left}px\`
    content.style.zIndex = '50'
  },
}))

Alpine.start()
`

const INPUT_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('inputDemo', () => ({
  subscribeEmail: '',

  onSubscribe(event) {
    event.preventDefault()
  },
}))

Alpine.start()
`

const INPUT_GROUP_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('inputGroupDemo', () => ({
  activeMenu: null,
  tooltipOpen: null,
  copied: false,
  isFavorite: false,
  securePopoverOpen: false,
  copyTimer: null,

  toggleMenu(key) {
    if (this.activeMenu === key) {
      this.activeMenu = null
      return
    }
    this.activeMenu = key
    this.$nextTick(() => this.positionMenu(key))
  },

  closeMenus() {
    this.activeMenu = null
  },

  positionMenu(key) {
    const trigger = this.$refs[\`\${key}MenuTrigger\`]
    const menu = this.$refs[\`\${key}MenuContent\`]
    if (!trigger || !menu) return

    const rect = trigger.getBoundingClientRect()
    const offset = 4
    menu.style.position = 'fixed'
    menu.style.zIndex = '50'

    if (key === 'auto') {
      menu.style.top = \`\${rect.top - menu.offsetHeight - offset}px\`
      menu.style.left = \`\${rect.left}px\`
    } else {
      menu.style.top = \`\${rect.bottom + offset}px\`
      menu.style.left = \`\${rect.right - menu.offsetWidth}px\`
    }
  },

  openTooltip(key, event) {
    this.tooltipOpen = key
    this.$nextTick(() => this.positionTooltip(event.currentTarget))
  },

  closeTooltip() {
    this.tooltipOpen = null
  },

  tooltipLabel() {
    const labels = {
      'url-info': 'This is content in a tooltip.',
      password: 'Password must be at least 8 characters',
      email: "We'll use this to send you notifications",
      'email-label': "We'll use this to send you notifications",
      api: 'Click for help with API keys',
    }
    return this.tooltipOpen ? labels[this.tooltipOpen] : ''
  },

  positionTooltip(trigger) {
    const tooltip = this.$refs.tooltipContent
    if (!tooltip || !this.tooltipOpen) return

    const rect = trigger.getBoundingClientRect()
    tooltip.style.position = 'fixed'
    tooltip.style.zIndex = '50'

    if (this.tooltipOpen === 'api') {
      tooltip.style.top = \`\${rect.top + rect.height / 2 - tooltip.offsetHeight / 2}px\`
      tooltip.style.left = \`\${rect.left - tooltip.offsetWidth - 8}px\`
      return
    }

    tooltip.style.top = \`\${rect.top - tooltip.offsetHeight - 8}px\`
    tooltip.style.left = \`\${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px\`
  },

  copyUrl() {
    const value = 'https://x.com/shadcn'
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value)
    }
    this.copied = true
    if (this.copyTimer) clearTimeout(this.copyTimer)
    this.copyTimer = setTimeout(() => {
      this.copied = false
    }, 2000)
  },

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
  },

  toggleSecurePopover() {
    this.securePopoverOpen = !this.securePopoverOpen
    if (this.securePopoverOpen) {
      this.$nextTick(() => this.positionSecurePopover())
    }
  },

  closeSecurePopover() {
    this.securePopoverOpen = false
  },

  positionSecurePopover() {
    const trigger = this.$refs.securePopoverTrigger
    const content = this.$refs.securePopoverContent
    if (!trigger || !content) return

    const rect = trigger.getBoundingClientRect()
    content.style.position = 'fixed'
    content.style.top = \`\${rect.bottom + 4}px\`
    content.style.left = \`\${rect.left}px\`
    content.style.zIndex = '50'
  },
}))

Alpine.start()
`

const INPUT_OTP_ALPINE_SETUP = `import Alpine from 'alpinejs'

const createInputOtpField = (options = {}) => ({
  otp: options.initialOtp ?? '',
  focused: false,
  maxLength: options.maxLength ?? 6,
  alphanumeric: options.alphanumeric ?? false,

  charAt(index) {
    return this.otp[index] ?? ''
  },

  isActive(index) {
    if (!this.focused) return false
    const position = Math.min(this.otp.length, this.maxLength - 1)
    return index === position
  },

  sanitize(value) {
    const cleaned = this.alphanumeric
      ? value.replace(/[^a-zA-Z0-9]/g, '')
      : value.replace(/\\D/g, '')
    return cleaned.slice(0, this.maxLength)
  },

  onInput(event) {
    const input = event.target
    this.otp = this.sanitize(input.value)
    input.value = this.otp
  },

  onFocus() {
    this.focused = true
  },

  onBlur() {
    this.focused = false
  },

  focusInput() {
    this.$refs.input?.focus()
  },
})

Alpine.data('inputOtpField', () => createInputOtpField())
Alpine.data('inputOtpPreviewField', () => createInputOtpField({ initialOtp: '1' }))
Alpine.data('inputOtpAlphanumericField', () => createInputOtpField({ alphanumeric: true }))
Alpine.data('inputOtpAlphanumericPreviewField', () => createInputOtpField({ alphanumeric: true, initialOtp: '1' }))
Alpine.data('inputOtpHelperDemo', () => ({
  ...createInputOtpField(),
  helperMessage() {
    return this.otp === ''
      ? 'Enter your one-time password.'
      : \`You entered: \${this.otp}\`
  },
}))
Alpine.data('inputOtpHelperPreviewDemo', () => ({
  ...createInputOtpField({ initialOtp: '1' }),
  helperMessage() {
    return \`You entered: \${this.otp}\`
  },
}))
Alpine.data('inputOtpFormDemo', () => ({
  ...createInputOtpField(),
  onSubmit(event) {
    event.preventDefault()
  },
}))
Alpine.data('inputOtpFormPreviewDemo', () => ({
  ...createInputOtpField({ initialOtp: '1' }),
  onSubmit(event) {
    event.preventDefault()
  },
}))

Alpine.start()
`

const ITEM_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('itemActionsDemo', () => ({
  onAction(_label) {
    // Demo action handler for HTML preview buttons.
  },
}))

Alpine.data('itemSelectDemo', () => ({
  open: false,

  init() {
    this.$watch('open', (isOpen) => {
      if (!isOpen) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.positionMenu()
        })
      })
    })
  },

  toggleMenu() {
    this.open = !this.open
  },

  closeMenu() {
    this.open = false
  },

  positionMenu() {
    const trigger = this.$refs.trigger
    const menu = this.$refs.content
    if (!trigger || !menu) return

    const rect = trigger.getBoundingClientRect()
    menu.style.position = 'fixed'
    menu.style.top = \`\${rect.bottom + 4}px\`
    menu.style.left = \`\${rect.right - menu.offsetWidth}px\`
    menu.style.zIndex = '50'
  },
}))

Alpine.start()
`

const KBD_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('kbdTooltipDemo', () => ({
  tooltipOpen: null,

  openTooltip(key, event) {
    this.tooltipOpen = key
    const target = event.currentTarget
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.positionTooltip(key, target)
      })
    })
  },

  closeTooltip() {
    this.tooltipOpen = null
  },

  positionTooltip(key, trigger) {
    const tooltip = this.$refs[\`\${key}Tooltip\`]
    if (!tooltip) return

    const rect = trigger.getBoundingClientRect()
    tooltip.style.position = 'fixed'
    tooltip.style.top = \`\${rect.top - tooltip.offsetHeight - 8}px\`
    tooltip.style.left = \`\${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px\`
    tooltip.style.zIndex = '50'
  },
}))

Alpine.start()
`

const MENUBAR_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('menubarDemo', () => ({
  activeMenu: null,
  activeSubmenu: null,
  subCloseTimer: null,
  bookmarksBar: false,
  fullUrls: true,
  profile: 'benoit',

  init() {
    this.$watch('activeMenu', (menu) => {
      if (!menu) {
        this.closeSubmenu()
        return
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.positionMenu(menu))
      })
    })

    this.$watch('activeSubmenu', (sub) => {
      if (!sub) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.positionSubmenu(sub))
      })
    })
  },

  isMenuOpen(menu) {
    return this.activeMenu === menu
  },

  toggleMenu(menu) {
    this.activeMenu = this.activeMenu === menu ? null : menu
    if (this.activeMenu !== menu) {
      this.closeSubmenu()
    } else {
      this.activeSubmenu = null
    }
  },

  closeMenus() {
    this.activeMenu = null
    this.closeSubmenu()
  },

  openSubmenu(key) {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.activeSubmenu = key
  },

  closeSubmenuDelayed() {
    this.subCloseTimer = setTimeout(() => {
      this.activeSubmenu = null
      this.subCloseTimer = null
    }, 150)
  },

  closeSubmenu() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.activeSubmenu = null
  },

  positionMenu(menu) {
    const trigger = this.$refs[menu + 'Trigger']
    const content = this.$refs[menu + 'Content']
    if (!trigger || !content) return
    const rect = trigger.getBoundingClientRect()
    content.style.position = 'fixed'
    content.style.top = \`\${rect.bottom + 8}px\`
    content.style.left = \`\${rect.left}px\`
    content.style.zIndex = '50'
    if (this.activeSubmenu) {
      this.positionSubmenu(this.activeSubmenu)
    }
  },

  positionSubmenu(key) {
    const trigger = this.$refs[key + 'SubTrigger']
    const content = this.$refs[key + 'SubContent']
    if (!trigger || !content) return
    const rect = trigger.getBoundingClientRect()
    content.style.position = 'fixed'
    content.style.top = \`\${rect.top}px\`
    content.style.left = \`\${rect.right + 4}px\`
    content.style.zIndex = '51'
  },

  toggleCheckbox(key) {
    this[key] = !this[key]
  },

  setProfile(value) {
    this.profile = value
  },
}))

Alpine.start()
`

const LABEL_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('labelDemo', () => ({
  terms: false,
  termsPreview: true,

  isChecked(key) {
    return Boolean(this[key])
  },

  toggle(key) {
    this[key] = !this.isChecked(key)
  },
}))

Alpine.start()
`

const NATIVE_SELECT_ALPINE_SETUP = `import Alpine from 'alpinejs'

Alpine.data('nativeSelectDemo', () => ({
  status: 'todo',
  department: '',
}))

Alpine.start()
`

const NAVIGATION_MENU_ALPINE_SETUP = `import Alpine from 'alpinejs'

const createNavigationMenuDemo = (initialMenu = null) => ({
  activeMenu: initialMenu,

  isOpen(key) {
    return this.activeMenu === key
  },

  toggleMenu(key) {
    this.activeMenu = this.activeMenu === key ? null : key
  },

  closeMenus() {
    this.activeMenu = null
  },
})

Alpine.data('navigationMenuDemo', () => createNavigationMenuDemo())
Alpine.data('navigationMenuDemoOpen', () => createNavigationMenuDemo('components'))

Alpine.start()
`

const PAGINATION_ALPINE_SETUP = `import Alpine from 'alpinejs'

const paginationPageInactiveClass = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9'

const paginationPageActiveClass = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9'

Alpine.data('paginationDemo', () => {
  const itemsPerPage = 10
  const total = 30
  const pageCount = Math.ceil(total / itemsPerPage)

  return {
    page: 2,
    itemsPerPage,
    total,
    pageCount,

    get pages() {
      return Array.from({ length: this.pageCount }, (_, index) => index + 1)
    },

    isActive(pageNumber) {
      return this.page === pageNumber
    },

    pageButtonClass(pageNumber) {
      return this.isActive(pageNumber)
        ? paginationPageActiveClass
        : paginationPageInactiveClass
    },

    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.pageCount) {
        this.page = pageNumber
      }
    },

    prev() {
      if (this.page > 1) {
        this.page -= 1
      }
    },

    next() {
      if (this.page < this.pageCount) {
        this.page += 1
      }
    },
  }
})

Alpine.start()
`

const DROPDOWN_MENU_ALPINE_SETUP = `import Alpine from 'alpinejs'

const createDropdownMenuDemo = () => ({
  open: false,
  submenuOpen: false,
  subCloseTimer: null,

  init() {
    this.$watch('open', (isOpen) => {
      if (!isOpen) {
        this.closeSub()
        return
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.positionMenu())
      })
    })

    this.$watch('submenuOpen', (isOpen) => {
      if (!isOpen) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.positionSubMenu())
      })
    })
  },

  toggleMenu() {
    this.open = !this.open
    if (!this.open) this.closeSub()
  },

  closeMenu() {
    this.open = false
    this.closeSub()
  },

  openSub() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.submenuOpen = true
  },

  closeSubDelayed() {
    this.subCloseTimer = setTimeout(() => {
      this.submenuOpen = false
      this.subCloseTimer = null
    }, 150)
  },

  closeSub() {
    if (this.subCloseTimer) {
      clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    }
    this.submenuOpen = false
  },

  positionMenu() {
    const trigger = this.$refs.trigger
    const menu = this.$refs.content
    if (!trigger || !menu) return

    const rect = trigger.getBoundingClientRect()
    const offset = 4
    menu.style.position = 'fixed'
    menu.style.top = \`\${rect.bottom + offset}px\`
    menu.style.left = \`\${rect.left}px\`
    menu.style.zIndex = '50'

    if (this.submenuOpen) this.positionSubMenu()
  },

  positionSubMenu() {
    const trigger = this.$refs.subTrigger
    const sub = this.$refs.subContent
    if (!trigger || !sub) return

    const rect = trigger.getBoundingClientRect()
    sub.style.position = 'fixed'
    sub.style.top = \`\${rect.top}px\`
    sub.style.left = \`\${rect.right + 4}px\`
    sub.style.zIndex = '51'
  },
})

Alpine.data('dropdownMenuAccountDemo', createDropdownMenuDemo)

Alpine.data('dropdownMenuAppearanceDemo', () => ({
  ...createDropdownMenuDemo(),
  showStatusBar: true,
  showActivityBar: false,
  showPanel: false,

  toggleCheckbox(key) {
    this[key] = !this[key]
  },
}))

Alpine.data('dropdownMenuPositionDemo', () => ({
  ...createDropdownMenuDemo(),
  position: 'bottom',

  setPosition(value) {
    this.position = value
  },
}))

Alpine.start()
`

const DRAWER_ALPINE_SETUP = `import Alpine from 'alpinejs'

const moveGoalChartData = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]

Alpine.data('moveGoalDrawerDemo', () => ({
  open: false,
  goal: 350,
  minGoal: 200,
  maxGoal: 400,
  step: 10,
  chartData: moveGoalChartData.map((item) => ({ ...item })),

  openDrawer() {
    this.open = true
  },

  close() {
    this.open = false
  },

  decrease() {
    if (this.goal > this.minGoal) {
      this.goal -= this.step
    }
  },

  increase() {
    if (this.goal < this.maxGoal) {
      this.goal += this.step
    }
  },

  barHeight(value) {
    return \`\${(value / this.maxGoal) * 100}%\`
  },
}))

Alpine.data('drawerProfileDemo', () => ({
  open: false,
  name: 'Pedro Duarte',
  username: '@peduarte',

  openDrawer() {
    this.open = true
  },

  close() {
    this.open = false
  },
}))

Alpine.start()
`

const DIALOG_ALPINE_SETUP = `import Alpine from 'alpinejs'

function dialogDemo(initialOpen = false) {
  return {
    open: initialOpen,
    openDialog() {
      this.open = true
    },
    close() {
      this.open = false
    },
  }
}

Alpine.data('dialogProfileDemo', () => ({
  ...dialogDemo(false),
  name: 'Pedro Duarte',
  username: '@peduarte',
}))

Alpine.data('dialogShareDemo', () => ({
  ...dialogDemo(false),
  link: 'https://ui.shadcn.com/docs/installation',
}))

Alpine.start()
`

export function getAlpineSetupSource(extractor: AlpineExtractorId): string | null {
  switch (extractor) {
    case 'accordion':
      return ACCORDION_ALPINE_SETUP
    case 'alert-dialog':
      return ALERT_DIALOG_ALPINE_SETUP
    case 'carousel':
      return CAROUSEL_ALPINE_SETUP
    case 'checkbox':
      return CHECKBOX_ALPINE_SETUP
    case 'context-menu':
      return CONTEXT_MENU_ALPINE_SETUP
    case 'collapsible':
      return COLLAPSIBLE_ALPINE_SETUP
    case 'combobox':
      return COMBOBOX_ALPINE_SETUP
    case 'command':
      return COMMAND_ALPINE_SETUP
    case 'data-table':
      return DATA_TABLE_ALPINE_SETUP
    case 'dialog':
      return DIALOG_ALPINE_SETUP
    case 'drawer':
      return DRAWER_ALPINE_SETUP
    case 'dropdown-menu':
      return DROPDOWN_MENU_ALPINE_SETUP
    case 'field':
      return FIELD_ALPINE_SETUP
    case 'hover-card':
      return HOVER_CARD_ALPINE_SETUP
    case 'input':
      return INPUT_ALPINE_SETUP
    case 'input-group':
      return INPUT_GROUP_ALPINE_SETUP
    case 'input-otp':
      return INPUT_OTP_ALPINE_SETUP
    case 'item':
      return ITEM_ALPINE_SETUP
    case 'kbd':
      return KBD_ALPINE_SETUP
    case 'label':
      return LABEL_ALPINE_SETUP
    case 'menubar':
      return MENUBAR_ALPINE_SETUP
    case 'native-select':
      return NATIVE_SELECT_ALPINE_SETUP
    case 'navigation-menu':
      return NAVIGATION_MENU_ALPINE_SETUP
    case 'pagination':
      return PAGINATION_ALPINE_SETUP
    case 'calendar':
      return CALENDAR_ALPINE_SETUP
    case 'button':
    case 'button-group':
      return BUTTON_GROUP_ALPINE_SETUP
    case 'breadcrumb':
      return BREADCRUMB_ALPINE_SETUP
    case 'alert':
      return null
    default:
      return null
  }
}

export function hasAlpineSetup(extractor: AlpineExtractorId): boolean {
  return getAlpineSetupSource(extractor) != null
}
