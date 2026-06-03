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
