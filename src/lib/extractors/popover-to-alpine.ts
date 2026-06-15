import {
  popoverContentClass,
  popoverDimensionFields,
  popoverDimensionsDescription,
  popoverDimensionsTitle,
  popoverFrameClass,
  popoverFrameStyle,
  popoverInputClass,
  popoverLabelClass,
  popoverTriggerButtonClass,
  popoverTriggerLabel,
} from '@/demos/popover/popover-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.popover)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildDimensionsForm(): string {
  const fields = popoverDimensionFields
    .map(
      (field) => `<div class="grid grid-cols-3 items-center gap-4">
  <label data-slot="label" class="${popoverLabelClass}" for="${escapeAttr(field.id)}">${escapeHtml(field.label)}</label>
  <input data-slot="input" id="${escapeAttr(field.id)}" class="${popoverInputClass} col-span-2 h-8" value="${escapeAttr(field.value)}" />
</div>`,
    )
    .join('')

  return `<div class="grid gap-4">
  <div class="space-y-2">
    <h4 class="font-medium leading-none">${escapeHtml(popoverDimensionsTitle)}</h4>
    <p class="text-muted-foreground text-sm">${escapeHtml(popoverDimensionsDescription)}</p>
  </div>
  <div class="grid gap-2">${fields}</div>
</div>`
}

function buildPopoverInstance(alpineKey: string): string {
  const dataAttr = ` x-data="${alpineKey}"`
  const toggleAttrs = ` @click="toggle()" :aria-expanded="open"`
  const contentAttrs = ` x-show="open" x-cloak :data-state="open ? 'open' : 'closed'" @click.outside="close()" @keydown.escape.window="close()"`

  return `<div data-slot="popover" class="relative w-fit"${dataAttr}>
  <button
    type="button"
    x-ref="trigger"
    data-slot="popover-trigger"
    class="${popoverTriggerButtonClass}"
    ${toggleAttrs}
  >${escapeHtml(popoverTriggerLabel)}</button>
  <div
    x-ref="content"
    data-slot="popover-content"
    class="${popoverContentClass} w-80"
    ${contentAttrs}
  >
    ${buildDimensionsForm()}
  </div>
</div>`
}

export function buildPopoverAlpineHtml(): string {
  const frameStyle = popoverFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${popoverFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    ${buildPopoverInstance('popoverDemo')}
    ${buildPopoverInstance('popoverDemo')}
  </div>
</div>`
}

export function extractPopoverToAlpine(_root: HTMLElement): string {
  return formatHtml(buildPopoverAlpineHtml())
}
