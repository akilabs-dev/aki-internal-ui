import {
  buttonCellPaddingPx,
  buttonDemoRows,
  buttonFrameBorderColor,
  buttonFramePaddingPx,
  buttonFrameWidthPx,
  buttonGridGapPx,
  buttonRowPairGapPx,
  type ButtonDemoRow,
} from '@/demos/button/button-demo.data'
import { buildButtonGroupToolbarAlpineHtml } from '@/lib/extractors/button-group-to-alpine'
import { figmaLinks } from '@/figma-links'
import type { ButtonVariants } from '@/components/ui/button'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"

const VARIANT_CLASSES: Record<
  NonNullable<ButtonVariants['variant']>,
  string
> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive:
    'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
  outline:
    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost:
    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
  link: 'text-primary underline-offset-4 hover:underline',
}

const SIZE_CLASSES: Record<NonNullable<ButtonVariants['size']>, string> = {
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
  lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
  icon: 'size-9',
  'icon-sm': 'size-8',
  'icon-lg': 'size-10',
}

const ARROW_UP_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>`

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const GIT_BRANCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`

const ARROW_UP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>`

const LOADER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="status" aria-label="Loading" class="size-4 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>`

const CELL_CLASS = 'w-full'

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buttonClass(
  variant: NonNullable<ButtonVariants['variant']>,
  size: NonNullable<ButtonVariants['size']>,
  extra = '',
): string {
  const classes = `${BUTTON_BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]}`
  return extra ? `${classes} ${extra}` : classes
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.button)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildButton(
  variant: NonNullable<ButtonVariants['variant']>,
  size: NonNullable<ButtonVariants['size']>,
  label: string,
  options: { icon?: boolean; extraClass?: string; disabled?: boolean } = {},
): string {
  const aria = options.icon ? ` aria-label="Submit"` : ''
  const disabled = options.disabled ? ' disabled' : ''
  const content = options.icon ? ARROW_UP_RIGHT_SVG : escapeHtml(label)
  const extra = options.extraClass ?? ''
  return `<button
    type="button"
    data-slot="button"
    data-variant="${variant}"
    data-size="${size}"
    class="${buttonClass(variant, size, extra)}"${aria}${disabled}
  >${content}</button>`
}

function wrapCell(content: string, extraClass = ''): string {
  return `<div class="${CELL_CLASS} ${extraClass}" style="padding:${buttonCellPaddingPx}px">
            ${content}
          </div>`
}

function buildRowContent(row: ButtonDemoRow, column: 1 | 2): string {
  switch (row.kind) {
    case 'size-pair': {
      if (!row.label || !row.variant || !row.textSize || !row.iconSize) return ''
      const icon = buildButton(row.variant, row.iconSize, row.label, { icon: true })
      return `<div class="flex flex-nowrap items-center" style="gap:${buttonRowPairGapPx}px">
            ${buildButton(row.variant, row.textSize, row.label)}
            ${icon}
          </div>`
    }
    case 'label':
      if (!row.label || !row.variant || !row.textSize) return ''
      return buildButton(row.variant, row.textSize, row.label)
    case 'destructive':
      return buildButton('destructive', 'default', 'Destructive')
    case 'link':
      return buildButton(
        'link',
        'default',
        'Link',
        column === 2 ? { extraClass: 'underline' } : {},
      )
    case 'chevron-icon':
      return `<button
    type="button"
    data-slot="button"
    data-variant="outline"
    data-size="icon-sm"
    class="${buttonClass('outline', 'icon-sm')}"
    aria-label="Next"
  >${CHEVRON_RIGHT_SVG}</button>`
    case 'new-branch':
      return `<button
    type="button"
    data-slot="button"
    data-variant="outline"
    data-size="sm"
    class="${buttonClass('outline', 'sm')}"
  >${GIT_BRANCH_SVG}
    New Branch</button>`
    case 'rounded':
      return `<button
    type="button"
    data-slot="button"
    data-variant="outline"
    data-size="icon"
    class="${buttonClass('outline', 'icon', 'rounded-full')}"
    aria-label="Up"
  >${ARROW_UP_SVG}</button>`
    case 'spinner':
      if (column === 2) return ''
      return `<button
    type="button"
    data-slot="button"
    data-variant="outline"
    data-size="sm"
    class="${buttonClass('outline', 'sm')}"
    disabled
  >${LOADER_SVG}
    Submit</button>`
    default:
      return ''
  }
}

function buildGridCells(): string {
  const cells: string[] = []

  for (const row of buttonDemoRows) {
    if (row.kind === 'button-group') {
      cells.push(
        wrapCell(
          buildButtonGroupToolbarAlpineHtml({ menuPlacement: 'top' }),
          'col-span-2',
        ),
      )
      continue
    }
    for (const column of [1, 2] as const) {
      cells.push(wrapCell(buildRowContent(row, column)))
    }
  }

  return cells.join('\n        ')
}

export function buildButtonAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div
    class="grid w-full grid-flow-row grid-cols-2 rounded-xl border border-dashed"
    style="max-width:${buttonFrameWidthPx}px;padding:${buttonFramePaddingPx}px;gap:${buttonGridGapPx}px;border-color:${buttonFrameBorderColor}"
  >
        ${buildGridCells()}
  </div>
</div>`
}

export function extractButtonToAlpine(_root: HTMLElement): string {
  return buildButtonAlpineHtml()
}
