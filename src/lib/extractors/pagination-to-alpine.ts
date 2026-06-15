import {
  paginationContentClass,
  paginationEllipsisClass,
  paginationFrameClass,
  paginationFrameStyle,
  paginationNavButtonClass,
  paginationRootClass,
} from '@/demos/pagination/pagination-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const CHEVRON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m15 18-6-6 6-6"></path></svg>`

const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const MORE_HORIZONTAL = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.pagination)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildPageButton(pageNumber: number): string {
  return `<button
  type="button"
  data-slot="pagination-item"
  data-type="page"
  :aria-label="'Page ' + ${pageNumber}"
  :aria-current="isActive(${pageNumber}) ? 'page' : undefined"
  :data-selected="isActive(${pageNumber}) ? 'true' : undefined"
  :class="pageButtonClass(${pageNumber})"
  @click="goToPage(${pageNumber})"
>${pageNumber}</button>`
}

function buildPagination(): string {
  return `<nav data-slot="pagination" class="${paginationRootClass}" x-data="paginationDemo" aria-label="pagination">
  <div data-slot="pagination-content" class="${paginationContentClass}">
    <button
      type="button"
      data-slot="pagination-previous"
      class="${paginationNavButtonClass}"
      aria-label="Previous Page"
      @click="prev()"
      :disabled="page <= 1"
    >
      ${CHEVRON_LEFT}
      <span>Previous</span>
    </button>
    ${buildPageButton(1)}
    ${buildPageButton(2)}
    ${buildPageButton(3)}
    <span data-slot="pagination-ellipsis" data-type="ellipsis" class="${paginationEllipsisClass}" aria-hidden="true">
      ${MORE_HORIZONTAL}
      <span class="sr-only">More pages</span>
    </span>
    <button
      type="button"
      data-slot="pagination-next"
      class="${paginationNavButtonClass}"
      aria-label="Next Page"
      @click="next()"
      :disabled="page >= pageCount"
    >
      <span>Next</span>
      ${CHEVRON_RIGHT}
    </button>
  </div>
</nav>`
}

export function buildPaginationAlpineHtml(): string {
  const frameStyle = paginationFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${paginationFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    ${buildPagination()}
  </div>
</div>`
}

export function extractPaginationToAlpine(_root: HTMLElement): string {
  return formatHtml(buildPaginationAlpineHtml())
}
