import {
  kbdBlockClass,
  kbdFrameClass,
  kbdSectionClass,
} from '@/demos/kbd/kbd-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const KBD =
  'bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none'

const KBD_TOOLTIP =
  'bg-background/20 text-background dark:bg-background/10 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none'

const KBD_GROUP = 'inline-flex items-center gap-1'

const BUTTON_OUTLINE_SM =
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-8 px-3 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'

const BUTTON_OUTLINE_SM_KBD = `${BUTTON_OUTLINE_SM} pr-2`

const BUTTON_GROUP =
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"

const TOOLTIP_CONTENT =
  'bg-foreground text-background z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance'

const INPUT_GROUP =
  'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none h-9 min-w-0 has-[>textarea]:h-auto has-[>[data-align=inline-start]]:[&>input]:pl-2 has-[>[data-align=inline-end]]:[&>input]:pr-2 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]'

const INPUT_GROUP_CONTROL =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent'

const ADDON_START =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-first pl-3 has-[>button]:ml-[-0.45rem]'

const ADDON_END =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-last pr-3 has-[>button]:mr-[-0.45rem]'

const SEARCH_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>'

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.kbd)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildBlock(content: string): string {
  return `<div class="${kbdBlockClass}">
    ${content}
  </div>`
}

function buildKbd(text: string, tooltip = false): string {
  const className = tooltip ? KBD_TOOLTIP : KBD
  return `<kbd class="${className}">${text}</kbd>`
}

function buildGroupsBlock(): string {
  return buildBlock(`<div class="${kbdSectionClass}">
  <kbd data-slot="kbd-group" class="${KBD_GROUP}">
    ${buildKbd('⌘')}
    ${buildKbd('⇧')}
    ${buildKbd('⌥')}
    ${buildKbd('⌃')}
  </kbd>
  <kbd data-slot="kbd-group" class="${KBD_GROUP}">
    ${buildKbd('Ctrl')}
    <span>+</span>
    ${buildKbd('B')}
  </kbd>
</div>`)
}

function buildInlineTextBlock(): string {
  return buildBlock(`<p class="text-muted-foreground text-center text-sm">
  Use
  <kbd data-slot="kbd-group" class="${KBD_GROUP}">
    ${buildKbd('Ctrl + B')}
    ${buildKbd('Ctrl + K')}
  </kbd>
  to open the command palette
</p>`)
}

function buildButtonsBlock(): string {
  return buildBlock(`<div class="flex flex-wrap items-center justify-center gap-4">
  <button type="button" data-slot="button" class="${BUTTON_OUTLINE_SM_KBD}">
    <span>Accept</span>
    ${buildKbd('⏎')}
  </button>
  <button type="button" data-slot="button" class="${BUTTON_OUTLINE_SM_KBD}">
    <span>Cancel</span>
    ${buildKbd('Esc')}
  </button>
</div>`)
}

function buildTooltipsBlock(): string {
  return buildBlock(`<div class="flex flex-wrap justify-center gap-4" x-data="kbdTooltipDemo">
  <div role="group" data-slot="button-group" data-orientation="horizontal" class="${BUTTON_GROUP}">
    <button
      type="button"
      data-slot="button"
      class="${BUTTON_OUTLINE_SM}"
      @mouseenter="openTooltip('save', $event)"
      @mouseleave="closeTooltip()"
      @focus="openTooltip('save', $event)"
      @blur="closeTooltip()"
    >
      Save
    </button>
    <button
      type="button"
      data-slot="button"
      class="${BUTTON_OUTLINE_SM}"
      @mouseenter="openTooltip('print', $event)"
      @mouseleave="closeTooltip()"
      @focus="openTooltip('print', $event)"
      @blur="closeTooltip()"
    >
      Print
    </button>
  </div>
  <div
    x-ref="saveTooltip"
    x-show="tooltipOpen === 'save'"
    x-cloak
    data-slot="tooltip-content"
    class="${TOOLTIP_CONTENT}"
    role="tooltip"
    :aria-hidden="tooltipOpen !== 'save'"
  >
    <div class="flex items-center gap-2">
      Save Changes ${buildKbd('S', true)}
    </div>
  </div>
  <div
    x-ref="printTooltip"
    x-show="tooltipOpen === 'print'"
    x-cloak
    data-slot="tooltip-content"
    class="${TOOLTIP_CONTENT}"
    role="tooltip"
    :aria-hidden="tooltipOpen !== 'print'"
  >
    <div class="flex items-center gap-2">
      Print Document
      <kbd data-slot="kbd-group" class="${KBD_GROUP}">
        ${buildKbd('Ctrl', true)}
        ${buildKbd('P', true)}
      </kbd>
    </div>
  </div>
</div>`)
}

function buildSearchBlock(): string {
  return buildBlock(`<div class="flex w-full max-w-xs flex-col gap-6">
  <div data-slot="input-group" class="${INPUT_GROUP}">
    <input
      data-slot="input-group-control"
      class="${INPUT_GROUP_CONTROL}"
      placeholder="Search..."
    />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">
      ${SEARCH_SVG}
    </div>
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      ${buildKbd('⌘')}
      ${buildKbd('K')}
    </div>
  </div>
</div>`)
}

export function buildKbdAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${kbdFrameClass}">
    ${buildGroupsBlock()}
    ${buildInlineTextBlock()}
    ${buildButtonsBlock()}
    ${buildTooltipsBlock()}
    ${buildSearchBlock()}
  </div>
</div>`
}

export function extractKbdToAlpine(_root: HTMLElement): string {
  return formatHtml(buildKbdAlpineHtml())
}
