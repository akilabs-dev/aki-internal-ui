import {
  dataTablePageSize,
  dataTablePayments,
  type Payment,
} from '@/demos/data-table/data-table-demo.data'

type ColumnKey = 'status' | 'email' | 'amount'

export function createDataTableDemoData() {
  return {
    payments: dataTablePayments.map((payment) => ({ ...payment })),
    emailFilter: '',
    sortAsc: true as boolean,
    selected: {} as Record<string, boolean>,
    pageIndex: 0,
    pageSize: dataTablePageSize,
    columnsOpen: false,
    colVisibility: { status: true, email: true, amount: true } as Record<ColumnKey, boolean>,
    actionsOpenId: null as string | null,

    getFilteredPayments(): Payment[] {
      const query = this.emailFilter.trim().toLowerCase()
      return this.payments.filter(
        (payment) => !query || payment.email.toLowerCase().includes(query),
      )
    },

    getSortedPayments(): Payment[] {
      const rows = [...this.getFilteredPayments()]
      rows.sort((a, b) => {
        const cmp = a.email.localeCompare(b.email)
        return this.sortAsc ? cmp : -cmp
      })
      return rows
    },

    getPageCount(): number {
      return Math.max(1, Math.ceil(this.getSortedPayments().length / this.pageSize))
    },

    getPageRows(): Payment[] {
      const start = this.pageIndex * this.pageSize
      return this.getSortedPayments().slice(start, start + this.pageSize)
    },

    toggleEmailSort() {
      this.sortAsc = !this.sortAsc
      this.pageIndex = 0
    },

    isRowSelected(id: string) {
      return Boolean(this.selected[id])
    },

    toggleRow(id: string) {
      if (this.selected[id]) {
        delete this.selected[id]
      } else {
        this.selected[id] = true
      }
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
        rows.forEach((row) => {
          delete this.selected[row.id]
        })
      } else {
        rows.forEach((row) => {
          this.selected[row.id] = true
        })
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
      if (this.canPrevious()) {
        this.pageIndex -= 1
      }
    },

    nextPage() {
      if (this.canNext()) {
        this.pageIndex += 1
      }
    },

    toggleColumn(column: ColumnKey) {
      this.colVisibility[column] = !this.colVisibility[column]
    },

    formatAmount(amount: number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
    },

    copyId(id: string) {
      navigator.clipboard?.writeText(id)
    },

    toggleColumnsMenu() {
      this.columnsOpen = !this.columnsOpen
      this.actionsOpenId = null
    },

    toggleActions(id: string) {
      this.actionsOpenId = this.actionsOpenId === id ? null : id
      this.columnsOpen = false
    },

    closeMenus() {
      this.columnsOpen = false
      this.actionsOpenId = null
    },

    onFilterInput(event: Event) {
      this.emailFilter = (event.target as HTMLInputElement).value
      this.pageIndex = 0
    },
  }
}
