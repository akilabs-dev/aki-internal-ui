import {
  collapsibleContentClass,
  collapsibleDemoHiddenItems,
  collapsibleDemoPrimaryItem,
  collapsibleDemoTitle,
  collapsibleFrameClass,
  collapsibleFrameMaxWidthPx,
  collapsibleHeaderClass,
  collapsibleItemClass,
  collapsibleRootClass,
  collapsibleTitleClass,
} from '@/demos/collapsible/collapsible-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const GHOST_ICON_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all size-8 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50'

const CHEVRONS_UP_DOWN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>`

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.collapsible)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildHiddenItems(): string {
  return collapsibleDemoHiddenItems
    .map(
      (item) =>
        `      <div class="${collapsibleItemClass}">${escapeHtml(item)}</div>`,
    )
    .join('\n')
}

function buildCollapsible(alpineDataKey: string): string {
  return `<div
  x-data="${alpineDataKey}"
  data-slot="collapsible"
  class="${collapsibleRootClass}"
  :data-state="open ? 'open' : 'closed'"
>
  <div class="${collapsibleHeaderClass}">
    <h4 class="${collapsibleTitleClass}">${escapeHtml(collapsibleDemoTitle)}</h4>
    <button
      type="button"
      data-slot="collapsible-trigger"
      class="${GHOST_ICON_BUTTON}"
      @click="toggle()"
      :aria-expanded="open"
    >
      ${CHEVRONS_UP_DOWN_SVG}
      <span class="sr-only">Toggle</span>
    </button>
  </div>
  <div class="${collapsibleItemClass}">${escapeHtml(collapsibleDemoPrimaryItem)}</div>
  <div
    x-show="open"
    x-collapse.duration.200ms
    data-slot="collapsible-content"
    class="${collapsibleContentClass}"
    :data-state="open ? 'open' : 'closed'"
  >
${buildHiddenItems()}
  </div>
</div>`
}

export function buildCollapsibleAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${collapsibleFrameClass}" style="max-width:${collapsibleFrameMaxWidthPx}px">
    ${buildCollapsible('collapsibleDemoClosed')}
    ${buildCollapsible('collapsibleDemoOpen')}
  </div>
</div>`
}

export function extractCollapsibleToAlpine(_root: HTMLElement): string {
  return formatHtml(buildCollapsibleAlpineHtml())
}
