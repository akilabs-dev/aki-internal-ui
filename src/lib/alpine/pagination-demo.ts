import {
  paginationDefaults,
  paginationPageActiveClass,
  paginationPageInactiveClass,
} from '@/demos/pagination/pagination-demo.data'

export function createPaginationDemoData() {
  const itemsPerPage = paginationDefaults.itemsPerPage
  const total = paginationDefaults.total
  const pageCount = Math.ceil(total / itemsPerPage)

  return {
    page: paginationDefaults.defaultPage as number,
    itemsPerPage,
    total,
    pageCount,

    get pages() {
      return Array.from({ length: this.pageCount }, (_, index) => index + 1)
    },

    isActive(pageNumber: number) {
      return this.page === pageNumber
    },

    pageButtonClass(pageNumber: number) {
      return this.isActive(pageNumber)
        ? paginationPageActiveClass
        : paginationPageInactiveClass
    },

    goToPage(pageNumber: number) {
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
}
