/** Shared Alpine.data factory for the calendar demo (HTML preview + init). */
export function createCalendarDemoData() {
  return {
    viewYear: 0,
    viewMonth: 0,
    selectedYear: 0,
    selectedMonth: 0,
    selectedDay: 0,
    minYear: 1925,
    maxYear: 2035,
    weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],

    init(this: {
      $root: HTMLElement
      minYear: number
      maxYear: number
      viewYear: number
      viewMonth: number
      selectedYear: number
      selectedMonth: number
      selectedDay: number
    }) {
      const root = this.$root
      this.minYear = Number(root.dataset.minYear) || 1925
      this.maxYear = Number(root.dataset.maxYear) || 2035
      const today = new Date()
      this.viewYear = today.getFullYear()
      this.viewMonth = today.getMonth() + 1
      this.selectedYear = today.getFullYear()
      this.selectedMonth = today.getMonth() + 1
      this.selectedDay = today.getDate()
    },

    get years() {
      const self = this as { minYear: number, maxYear: number }
      const result: number[] = []
      for (let year = self.minYear; year <= self.maxYear; year++) {
        result.push(year)
      }
      return result
    },

    get months() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },

    monthLabel(month: number) {
      return new Date(2000, month - 1, 1).toLocaleString(undefined, { month: 'short' })
    },

    prevMonth(this: { viewMonth: number, viewYear: number, clampViewYear: () => void }) {
      if (this.viewMonth === 1) {
        this.viewMonth = 12
        this.viewYear -= 1
      } else {
        this.viewMonth -= 1
      }
      this.clampViewYear()
    },

    nextMonth(this: { viewMonth: number, viewYear: number, clampViewYear: () => void }) {
      if (this.viewMonth === 12) {
        this.viewMonth = 1
        this.viewYear += 1
      } else {
        this.viewMonth += 1
      }
      this.clampViewYear()
    },

    clampViewYear(this: { viewYear: number, minYear: number, maxYear: number }) {
      if (this.viewYear < this.minYear) this.viewYear = this.minYear
      if (this.viewYear > this.maxYear) this.viewYear = this.maxYear
    },

    onViewChange(this: { clampViewYear: () => void }) {
      this.clampViewYear()
    },

    isOutOfRange(this: { minYear: number, maxYear: number }, year: number) {
      return year < this.minYear || year > this.maxYear
    },

    get weeks() {
      const self = this as {
        viewYear: number
        viewMonth: number
        isOutOfRange: (year: number) => boolean
      }
      const year = self.viewYear
      const month = self.viewMonth
      const first = new Date(year, month - 1, 1)
      const daysInMonth = new Date(year, month, 0).getDate()
      const startDow = first.getDay()

      type Cell = {
        day: number
        month: number
        year: number
        outside: boolean
        disabled: boolean
        key: string
      }

      const cells: Cell[] = []

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
          disabled: self.isOutOfRange(prevYear),
          key: `${prevYear}-${prevMonth}-${day}`,
        })
      }

      for (let day = 1; day <= daysInMonth; day++) {
        cells.push({
          day,
          month,
          year,
          outside: false,
          disabled: self.isOutOfRange(year),
          key: `${year}-${month}-${day}`,
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
          disabled: self.isOutOfRange(nextYear),
          key: `${nextYear}-${nextMonth}-${trailingDay}`,
        })
        trailingDay += 1
      }

      const weeks: Cell[][] = []
      for (let index = 0; index < cells.length; index += 7) {
        weeks.push(cells.slice(index, index + 7))
      }
      return weeks
    },

    selectDay(this: {
      selectedYear: number
      selectedMonth: number
      selectedDay: number
      viewYear: number
      viewMonth: number
    }, cell: { day: number, month: number, year: number, outside: boolean, disabled: boolean }) {
      if (cell.disabled) return
      this.selectedYear = cell.year
      this.selectedMonth = cell.month
      this.selectedDay = cell.day
      if (cell.outside) {
        this.viewYear = cell.year
        this.viewMonth = cell.month
      }
    },

    isSelected(this: {
      selectedYear: number
      selectedMonth: number
      selectedDay: number
    }, cell: { day: number, month: number, year: number }) {
      return (
        cell.year === this.selectedYear
        && cell.month === this.selectedMonth
        && cell.day === this.selectedDay
      )
    },

    isToday(cell: { day: number, month: number, year: number }) {
      const today = new Date()
      return (
        cell.year === today.getFullYear()
        && cell.month === today.getMonth() + 1
        && cell.day === today.getDate()
      )
    },

    cellClass(this: {
      isSelected: (cell: { day: number, month: number, year: number }) => boolean
      isToday: (cell: { day: number, month: number, year: number }) => boolean
    }, cell: { day: number, month: number, year: number, outside: boolean, disabled: boolean }) {
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
  }
}
