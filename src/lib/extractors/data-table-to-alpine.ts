import {
  dataTableFilterPlaceholder,
  dataTableFrameClass,
  dataTableFrameMaxWidthPx,
  dataTableRootClass,
} from '@/demos/data-table/data-table-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const INPUT_CLASS =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] max-w-sm'

const OUTLINE_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 ml-auto'

const GHOST_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2'

const SM_OUTLINE_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3'

const CHECKBOX_BASE =
  'peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="M20 6 9 17l-5-5"></path></svg>`

const ARROW_UP_DOWN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 size-4"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>`

const CHEVRON_DOWN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 size-4"><path d="m6 9 6 6 6-6"></path></svg>`

const MORE_HORIZONTAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`

const DROPDOWN_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md'

const DROPDOWN_ITEM =
  'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'

const DROPDOWN_CHECK_ITEM =
  'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none capitalize'

const DROPDOWN_LABEL =
  'px-2 py-1.5 text-sm font-medium text-foreground'

const DROPDOWN_SEPARATOR = 'bg-border -mx-1 my-1 h-px'

const TABLE_HEAD =
  'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5'

const TABLE_CELL =
  'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5'

const TABLE_ROW =
  'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.dataTable)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildCheckboxAlpine(toggleExpr: string, checkedExpr: string, indeterminateExpr?: string): string {
  const ariaChecked = indeterminateExpr
    ? `:aria-checked="${indeterminateExpr} ? 'mixed' : (${checkedExpr} ? 'true' : 'false')"`
    : `:aria-checked="${checkedExpr} ? 'true' : 'false'"`

  const dataState = indeterminateExpr
    ? `:data-state="${indeterminateExpr} ? 'indeterminate' : (${checkedExpr} ? 'checked' : 'unchecked')"`
    : `:data-state="${checkedExpr} ? 'checked' : 'unchecked'"`

  return `<button
    type="button"
    role="checkbox"
    ${ariaChecked}
    ${dataState}
    data-slot="checkbox"
    class="${CHECKBOX_BASE}"
    @click="${toggleExpr}"
  >
    <span
      data-slot="checkbox-indicator"
      class="grid place-content-center text-current transition-none"
      x-show="${checkedExpr} || ${indeterminateExpr ?? 'false'}"
      x-cloak
    >${CHECK_SVG}</span>
  </button>`
}

function buildColumnsMenu(): string {
  const columns = ['status', 'email', 'amount'] as const
  return columns
    .map(
      (column) => `
      <button
        type="button"
        data-slot="dropdown-menu-checkbox-item"
        class="${DROPDOWN_CHECK_ITEM}"
        @click="toggleColumn('${column}')"
      >
        <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <span x-show="colVisibility.${column}" x-cloak>${CHECK_SVG}</span>
        </span>
        ${column}
      </button>`,
    )
    .join('')
}

function buildDataTableBlock(): string {
  return `<div
  x-data="dataTableDemo"
  :class="'${dataTableRootClass}'"
  @keydown.escape.window="closeMenus()"
>
  <div class="flex items-center py-4">
    <input
      data-slot="input"
      type="text"
      class="${INPUT_CLASS}"
      placeholder="${escapeAttr(dataTableFilterPlaceholder)}"
      :value="emailFilter"
      @input="onFilterInput($event)"
    />
    <div class="relative ml-auto">
      <button
        type="button"
        data-slot="dropdown-menu-trigger"
        class="${OUTLINE_BUTTON}"
        :aria-expanded="columnsOpen"
        @click="toggleColumnsMenu()"
      >
        Columns ${CHEVRON_DOWN_SVG}
      </button>
      <div
        x-show="columnsOpen"
        x-cloak
        data-slot="dropdown-menu-content"
        class="${DROPDOWN_CONTENT} absolute right-0 top-full z-50 mt-1"
        @click.outside="columnsOpen = false"
      >
        ${buildColumnsMenu()}
      </div>
    </div>
  </div>

  <div class="rounded-md border">
    <div data-slot="table-container" class="relative w-full overflow-x-auto">
      <table data-slot="table" class="w-full caption-bottom text-sm">
        <thead data-slot="table-header" class="[&_tr]:border-b">
          <tr data-slot="table-row" class="${TABLE_ROW}">
            <th data-slot="table-head" class="${TABLE_HEAD}">
              ${buildCheckboxAlpine('toggleAllPage()', 'isAllPageSelected()', 'isSomePageSelected()')}
            </th>
            <th data-slot="table-head" class="${TABLE_HEAD}" x-show="colVisibility.status">Status</th>
            <th data-slot="table-head" class="${TABLE_HEAD}" x-show="colVisibility.email">
              <button type="button" data-slot="button" class="${GHOST_BUTTON}" @click="toggleEmailSort()">
                Email ${ARROW_UP_DOWN_SVG}
              </button>
            </th>
            <th data-slot="table-head" class="${TABLE_HEAD} text-right" x-show="colVisibility.amount">Amount</th>
            <th data-slot="table-head" class="${TABLE_HEAD}"></th>
          </tr>
        </thead>
        <tbody data-slot="table-body" class="[&_tr:last-child]:border-0">
          <template x-for="row in getPageRows()" :key="row.id">
            <tr data-slot="table-row" class="${TABLE_ROW}" :data-state="isRowSelected(row.id) ? 'selected' : null">
              <td data-slot="table-cell" class="${TABLE_CELL}">
                ${buildCheckboxAlpine('toggleRow(row.id)', 'isRowSelected(row.id)')}
              </td>
              <td data-slot="table-cell" class="${TABLE_CELL} capitalize" x-show="colVisibility.status" x-text="row.status"></td>
              <td data-slot="table-cell" class="${TABLE_CELL} lowercase" x-show="colVisibility.email" x-text="row.email"></td>
              <td data-slot="table-cell" class="${TABLE_CELL} text-right font-medium" x-show="colVisibility.amount" x-text="formatAmount(row.amount)"></td>
              <td data-slot="table-cell" class="${TABLE_CELL}">
                <div class="relative inline-flex">
                  <button
                    type="button"
                    data-slot="dropdown-menu-trigger"
                    class="inline-flex size-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    :aria-expanded="actionsOpenId === row.id"
                    @click="toggleActions(row.id)"
                  >
                    <span class="sr-only">Open menu</span>
                    ${MORE_HORIZONTAL_SVG}
                  </button>
                  <div
                    x-show="actionsOpenId === row.id"
                    x-cloak
                    data-slot="dropdown-menu-content"
                    class="${DROPDOWN_CONTENT} absolute right-0 top-full z-50 mt-1"
                    @click.outside="actionsOpenId = null"
                  >
                    <div data-slot="dropdown-menu-label" class="${DROPDOWN_LABEL}">Actions</div>
                    <button type="button" data-slot="dropdown-menu-item" class="${DROPDOWN_ITEM} w-full" @click="copyId(row.id); actionsOpenId = null">Copy payment ID</button>
                    <div data-slot="dropdown-menu-separator" class="${DROPDOWN_SEPARATOR}"></div>
                    <button type="button" data-slot="dropdown-menu-item" class="${DROPDOWN_ITEM} w-full">View customer</button>
                    <button type="button" data-slot="dropdown-menu-item" class="${DROPDOWN_ITEM} w-full">View payment details</button>
                  </div>
                </div>
              </td>
            </tr>
          </template>
          <tr data-slot="table-row" class="${TABLE_ROW}" x-show="getPageRows().length === 0">
            <td data-slot="table-cell" class="${TABLE_CELL} h-24 text-center" colspan="5">No results.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="flex items-center justify-end space-x-2 py-4">
    <div class="flex-1 text-sm text-muted-foreground">
      <span x-text="selectedCount()"></span> of
      <span x-text="totalFiltered()"></span> row(s) selected.
    </div>
    <div class="space-x-2">
      <button
        type="button"
        data-slot="button"
        class="${SM_OUTLINE_BUTTON}"
        :disabled="!canPrevious()"
        @click="previousPage()"
      >Previous</button>
      <button
        type="button"
        data-slot="button"
        class="${SM_OUTLINE_BUTTON}"
        :disabled="!canNext()"
        @click="nextPage()"
      >Next</button>
    </div>
  </div>
</div>`
}

export function buildDataTableAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${dataTableFrameClass}" style="max-width:${dataTableFrameMaxWidthPx}px">
    ${buildDataTableBlock()}
  </div>
</div>`
}

export function extractDataTableToAlpine(_root: HTMLElement): string {
  return formatHtml(buildDataTableAlpineHtml())
}
