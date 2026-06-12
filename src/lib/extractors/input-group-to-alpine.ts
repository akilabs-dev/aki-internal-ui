import {
  inputGroupBlockClass,
  inputGroupFrameClass,
  inputGroupSectionClass,
  inputGroupSectionClassMd,
  inputGroupSectionClassSm,
} from '@/demos/input-group/input-group-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const INPUT_GROUP =
  'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none h-9 min-w-0 has-[>textarea]:h-auto has-[>[data-align=inline-start]]:[&>input]:pl-2 has-[>[data-align=inline-end]]:[&>input]:pr-2 has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]'

const INPUT_GROUP_CONTROL =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent'

const TEXTAREA_CONTROL =
  'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent py-3'

const ADDON_START =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-first pl-3 has-[>button]:ml-[-0.45rem]'

const ADDON_END =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-last pr-3 has-[>button]:mr-[-0.45rem]'

const ADDON_BLOCK_START =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5 border-b'

const ADDON_BLOCK_END =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5 border-t'

const INPUT_GROUP_TEXT =
  'text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4'

const BTN_GHOST_ICON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0'

const BTN_GHOST =
  `${BTN_GHOST_ICON.replace('size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0', 'h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=\'size-\'])]:size-3.5 has-[>svg]:px-2')}`

const BTN_OUTLINE_ICON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0 rounded-full'

const BTN_SECONDARY =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm shadow-none h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)]'

const BTN_SECONDARY_SM =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm shadow-none h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5'

const BTN_DEFAULT_ICON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0 rounded-full'

const BTN_DEFAULT_SM =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 text-sm shadow-none h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5 ml-auto'

const DROPDOWN_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md'

const DROPDOWN_ITEM =
  'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left'

const TOOLTIP =
  'bg-primary text-primary-foreground z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs shadow-md'

const POPOVER_CONTENT =
  'bg-popover text-popover-foreground w-72 overflow-hidden rounded-xl border p-4 shadow-md outline-none flex flex-col gap-1 text-sm'

const SEPARATOR_V =
  'bg-border shrink-0 h-px w-full !h-4 w-px'

const LABEL =
  'flex items-center gap-2 text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50'

const BUTTON_GROUP =
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none !gap-0"

const BUTTON_GROUP_TEXT =
  'bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4'

const SVG = {
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>',
  arrowUp:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3"><path d="M20 6 9 17l-5-5"></path></svg>',
  checkMd:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"></path></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
  creditCard:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>',
  copy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>',
  help: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>',
  braces: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>',
  refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>',
  cornerDownLeft:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m9 10-5 5 5 5"></path><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>',
  loader:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 animate-spin"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>',
  spinner:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="status" aria-label="Loading" class="size-4 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>',
  more: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>',
  chevronDown:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3"><path d="m6 9 6 6 6-6"></path></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>',
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.inputGroup)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildDropdownMenu(
  key: 'auto' | 'file' | 'search',
  triggerHtml: string,
  items: string[],
  contentClass = '',
): string {
  const list = items
    .map((label) => `<button type="button" class="${DROPDOWN_ITEM}" @click="closeMenus()">${label}</button>`)
    .join('')

  return `<div class="relative">
  <button
    type="button"
    x-ref="${key}MenuTrigger"
    @click="toggleMenu('${key}')"
    :aria-expanded="activeMenu === '${key}'"
  >${triggerHtml}</button>
  <div
    x-ref="${key}MenuContent"
    x-show="activeMenu === '${key}'"
    x-cloak
    class="${DROPDOWN_CONTENT} ${contentClass}"
    @click.outside="closeMenus()"
  >
    ${list}
  </div>
</div>`
}

function buildSection1(): string {
  return `<div class="${inputGroupSectionClass}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Search..." />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">${SVG.search}</div>
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">12 results</div>
  </div>

  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL} !pl-1" placeholder="example.com" />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}"><span class="${INPUT_GROUP_TEXT}">https://</span></div>
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      <button
        type="button"
        data-size="icon-xs"
        class="${BTN_GHOST_ICON} rounded-full"
        aria-label="Info"
        @mouseenter="openTooltip('url-info', $event)"
        @mouseleave="closeTooltip()"
        @focus="openTooltip('url-info', $event)"
        @blur="closeTooltip()"
      >${SVG.info}</button>
    </div>
  </div>

  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <textarea data-slot="input-group-control" class="${TEXTAREA_CONTROL}" placeholder="Ask, Search or Chat..."></textarea>
    <div data-slot="input-group-addon" data-align="block-end" class="${ADDON_BLOCK_END.replace('border-t', '')}">
      <button type="button" data-size="icon-xs" class="${BTN_OUTLINE_ICON}">${SVG.plus}</button>
      ${buildDropdownMenu('auto', `<span class="${BTN_GHOST}">Auto</span>`, ['Auto', 'Agent', 'Manual'], '[--radius:0.95rem]')}
      <span class="${INPUT_GROUP_TEXT} ml-auto">52% used</span>
      <div role="separator" data-orientation="vertical" class="${SEPARATOR_V}"></div>
      <button type="button" data-size="icon-xs" class="${BTN_DEFAULT_ICON}" disabled>${SVG.arrowUp}<span class="sr-only">Send</span></button>
    </div>
  </div>

  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="@shadcn" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      <div class="flex items-center justify-center rounded-full bg-primary text-primary-foreground size-4">${SVG.check}</div>
    </div>
  </div>
</div>`
}

function buildSection2(): string {
  return `<div class="${inputGroupSectionClass}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Search..." />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">${SVG.search}</div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" type="email" class="${INPUT_GROUP_CONTROL}" placeholder="Enter your email" />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">${SVG.mail}</div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Card number" />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">${SVG.creditCard}</div>
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">${SVG.checkMd}</div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Card number" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">${SVG.star}${SVG.info}</div>
  </div>
</div>`
}

function buildSection3(): string {
  return `<div class="${inputGroupSectionClass}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}"><span class="${INPUT_GROUP_TEXT}">$</span></div>
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="0.00" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}"><span class="${INPUT_GROUP_TEXT}">USD</span></div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}"><span class="${INPUT_GROUP_TEXT}">https://</span></div>
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL} !pl-0.5" placeholder="example.com" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}"><span class="${INPUT_GROUP_TEXT}">.com</span></div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Enter your username" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}"><span class="${INPUT_GROUP_TEXT}">@company.com</span></div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <textarea data-slot="input-group-control" class="${TEXTAREA_CONTROL}" placeholder="Enter your message"></textarea>
    <div data-slot="input-group-addon" data-align="block-end" class="${ADDON_BLOCK_END.replace('border-t', '')}">
      <span class="${INPUT_GROUP_TEXT} text-xs text-muted-foreground">120 characters left</span>
    </div>
  </div>
</div>`
}

function buildSection4(): string {
  return `<div class="${inputGroupSectionClass}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="https://x.com/shadcn" readonly />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON}" aria-label="Copy" title="Copy" @click="copyUrl()">
        <span x-show="copied" x-cloak>${SVG.checkMd}</span>
        <span x-show="!copied">${SVG.copy}</span>
      </button>
    </div>
  </div>

  <div data-slot="input-group" role="group" class="${INPUT_GROUP} [--radius:9999px]">
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">
      <div class="relative">
        <button
          type="button"
          x-ref="securePopoverTrigger"
          data-size="icon-xs"
          class="${BTN_SECONDARY} size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0"
          @click="toggleSecurePopover()"
          :aria-expanded="securePopoverOpen"
        >${SVG.info}</button>
        <div
          x-ref="securePopoverContent"
          x-show="securePopoverOpen"
          x-cloak
          class="${POPOVER_CONTENT}"
          @click.outside="closeSecurePopover()"
        >
          <p class="font-medium">Your connection is not secure.</p>
          <p>You should not enter any sensitive information on this site.</p>
        </div>
      </div>
    </div>
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START} text-muted-foreground pl-1.5">https://</div>
    <input data-slot="input-group-control" id="input-secure-19" class="${INPUT_GROUP_CONTROL}" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON}" @click="toggleFavorite()">
        <span :class="isFavorite ? 'fill-blue-600 stroke-blue-600' : ''">${SVG.star}</span>
      </button>
    </div>
  </div>

  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Type to search..." />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      <button type="button" class="${BTN_SECONDARY_SM}">Search</button>
    </div>
  </div>
</div>`
}

function buildTooltipInput(
  key: TooltipKey,
  placeholder: string,
  type = 'text',
  addonAlign: 'inline-end' | 'inline-start' = 'inline-end',
): string {
  const addonOrder = addonAlign === 'inline-end'
    ? `<div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON}" aria-label="Help"
        @mouseenter="openTooltip('${key}', $event)" @mouseleave="closeTooltip()"
        @focus="openTooltip('${key}', $event)" @blur="closeTooltip()">${key === 'email' || key === 'api' || key === 'email-label' ? SVG.help : SVG.info}</button>
    </div>`
    : `<div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON}" aria-label="Help"
        @mouseenter="openTooltip('${key}', $event)" @mouseleave="closeTooltip()"
        @focus="openTooltip('${key}', $event)" @blur="closeTooltip()">${SVG.help}</button>
    </div>`

  const typeAttr = type === 'password' ? ' type="password"' : ''
  return `<div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    ${addonAlign === 'inline-start' ? addonOrder : ''}
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}"${typeAttr} placeholder="${escapeAttr(placeholder)}" />
    ${addonAlign === 'inline-end' ? addonOrder : ''}
  </div>`
}

type TooltipKey = 'url-info' | 'password' | 'email' | 'api' | 'email-label'

function buildSection5(): string {
  return `<div class="${inputGroupSectionClassSm}">
  ${buildTooltipInput('password', 'Enter password', 'password')}
  ${buildTooltipInput('email', 'Your email address')}
  ${buildTooltipInput('api', 'Enter API key', 'text', 'inline-start')}
</div>`
}

function buildSection6(): string {
  return `<div class="${inputGroupSectionClassMd}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <textarea data-slot="input-group-control" id="textarea-code-32" class="${TEXTAREA_CONTROL} min-h-[200px]" placeholder="console.log('Hello, world!');"></textarea>
    <div data-slot="input-group-addon" data-align="block-end" class="${ADDON_BLOCK_END}">
      <span class="${INPUT_GROUP_TEXT}">Line 1, Column 1</span>
      <button type="button" class="${BTN_DEFAULT_SM}">Run ${SVG.cornerDownLeft}</button>
    </div>
    <div data-slot="input-group-addon" data-align="block-start" class="${ADDON_BLOCK_START}">
      <span class="${INPUT_GROUP_TEXT} font-mono font-medium">${SVG.braces} script.js</span>
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON} ml-auto">${SVG.refresh}</button>
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON}">${SVG.copy}</button>
    </div>
  </div>
</div>`
}

function buildSection7(): string {
  return `<div class="${inputGroupSectionClassSm}">
  <div data-slot="input-group" role="group" data-disabled class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Searching..." disabled />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">${SVG.spinner}</div>
  </div>
  <div data-slot="input-group" role="group" data-disabled class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Processing..." disabled />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">${SVG.spinner}</div>
  </div>
  <div data-slot="input-group" role="group" data-disabled class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Saving changes..." disabled />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}"><span class="${INPUT_GROUP_TEXT}">Saving...</span>${SVG.spinner}</div>
  </div>
  <div data-slot="input-group" role="group" data-disabled class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Refreshing data..." disabled />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}">${SVG.loader}</div>
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}"><span class="${INPUT_GROUP_TEXT} text-muted-foreground">Please wait...</span></div>
  </div>
</div>`
}

function buildSection8(): string {
  return `<div class="${inputGroupSectionClassSm}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" id="email" class="${INPUT_GROUP_CONTROL}" placeholder="shadcn" />
    <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON_START}"><label data-slot="label" class="${LABEL}" for="email">@</label></div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" id="email-2" class="${INPUT_GROUP_CONTROL}" placeholder="shadcn@vercel.com" />
    <div data-slot="input-group-addon" data-align="block-start" class="${ADDON_BLOCK_START.replace('border-b', '')}">
      <label data-slot="label" class="${LABEL} text-foreground" for="email-2">Email</label>
      <button type="button" data-size="icon-xs" class="${BTN_GHOST_ICON} ml-auto rounded-full" aria-label="Help"
        @mouseenter="openTooltip('email-label', $event)" @mouseleave="closeTooltip()"
        @focus="openTooltip('email-label', $event)" @blur="closeTooltip()">${SVG.info}</button>
    </div>
  </div>
</div>`
}

function buildSection9(): string {
  return `<div class="${inputGroupSectionClassSm}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Enter file name" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      ${buildDropdownMenu('file', `<span class="${BTN_GHOST_ICON}" aria-label="More">${SVG.more}</span>`, ['Settings', 'Copy path', 'Open location'])}
    </div>
  </div>
  <div data-slot="input-group" role="group" class="${INPUT_GROUP} [--radius:1rem]">
    <input data-slot="input-group-control" class="${INPUT_GROUP_CONTROL}" placeholder="Enter search query" />
    <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">
      ${buildDropdownMenu('search', `<span class="${BTN_GHOST} !pr-1.5 text-xs">Search In... ${SVG.chevronDown}</span>`, ['Documentation', 'Blog Posts', 'Changelog'], '[--radius:0.95rem]')}
    </div>
  </div>
</div>`
}

function buildSection10(): string {
  return `<div class="${inputGroupSectionClass}">
  <div role="group" data-slot="button-group" class="${BUTTON_GROUP}">
    <span data-slot="button-group-text" class="${BUTTON_GROUP_TEXT}"><label data-slot="label" class="${LABEL}" for="url">https://</label></span>
    <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
      <input data-slot="input-group-control" id="url" class="${INPUT_GROUP_CONTROL}" />
      <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}">${SVG.link}</div>
    </div>
    <span data-slot="button-group-text" class="${BUTTON_GROUP_TEXT}">.com</span>
  </div>
</div>`
}

function buildSection11(): string {
  return `<div class="${inputGroupSectionClass}">
  <div data-slot="input-group" role="group" class="${INPUT_GROUP}">
    <textarea data-slot="input-group-control" class="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm" placeholder="Autoresize textarea..."></textarea>
    <div data-slot="input-group-addon" data-align="block-end" class="${ADDON_BLOCK_END.replace('border-t', '')}">
      <button type="button" class="${BTN_DEFAULT_SM}">Submit</button>
    </div>
  </div>
</div>`
}

function buildBlock(...parts: string[]): string {
  return `<div class="${inputGroupBlockClass}">
    ${parts.join('\n    ')}
  </div>`
}

export function buildInputGroupAlpineHtml(): string {
  const tooltipContent = `<div
  x-ref="tooltipContent"
  x-show="tooltipOpen"
  x-cloak
  x-text="tooltipLabel()"
  class="${TOOLTIP}"
  :aria-hidden="!tooltipOpen"
></div>`

  return `<div class="space-y-4" x-data="inputGroupDemo">
  ${buildFigmaLink()}
  <div class="${inputGroupFrameClass}">
    ${buildBlock(buildSection1())}
    ${buildBlock(buildSection2())}
    ${buildBlock(buildSection3())}
    ${buildBlock(buildSection4())}
    ${buildBlock(buildSection5())}
    ${buildBlock(buildSection6())}
    ${buildBlock(buildSection7())}
    ${buildBlock(buildSection8())}
    ${buildBlock(buildSection9())}
    ${buildBlock(buildSection10(), buildSection11())}
  </div>
  ${tooltipContent}
</div>`
}

export function extractInputGroupToAlpine(_root: HTMLElement): string {
  return formatHtml(buildInputGroupAlpineHtml())
}
