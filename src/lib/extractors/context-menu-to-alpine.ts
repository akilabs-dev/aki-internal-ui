import {
  contextMenuBookmarksLabel,
  contextMenuContentClass,
  contextMenuFrameClass,
  contextMenuFrameMaxWidthPx,
  contextMenuSubContentClass,
  contextMenuTriggerClass,
} from '@/demos/context-menu/context-menu-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"></path></svg>`

const RADIO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-2 fill-current"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"></circle></svg>`

const PLUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`

const CODE2_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>`

const TRASH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>`

const CONTENT_BASE =
  'bg-popover text-popover-foreground z-50 max-h-[var(--reka-context-menu-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md'

const ITEM_BASE =
  "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const ITEM_INSET = 'pl-8'

const ITEM_DESTRUCTIVE =
  'data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground'

const SEPARATOR = 'bg-border -mx-1 my-1 h-px'
const SHORTCUT = 'text-muted-foreground ml-auto text-xs tracking-widest'

const CHECK_ITEM =
  'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const RADIO_ITEM = CHECK_ITEM

const LABEL =
  'text-foreground px-2 py-1.5 text-sm font-medium'

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
    href="${escapeAttr(figmaLinks.contextMenu)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildMenuContent(
  insetItem: string,
  destructiveItem: string,
  interactive: boolean,
): string {
  const subTriggerAttrs = interactive
    ? `:data-state="submenuOpen ? 'open' : 'closed'"
          @mouseenter="toggleSubmenu(true)"
          @mouseleave="toggleSubmenu(false)"
          @focus="toggleSubmenu(true)"
          @blur="toggleSubmenu(false)"`
    : `data-state="closed"`

  const subContentAttrs = interactive
    ? `x-show="submenuOpen"
          x-cloak
          @mouseenter="toggleSubmenu(true)"
          @mouseleave="toggleSubmenu(false)"`
    : ''

  const checkboxClick = interactive
    ? `@click.stop="toggleCheckbox('showBookmarks')"`
    : ''
  const checkboxClick2 = interactive
    ? `@click.stop="toggleCheckbox('showFullUrls')"`
    : ''
  const radioClickPedro = interactive ? `@click.stop="setPerson('pedro')"` : ''
  const radioClickColm = interactive ? `@click.stop="setPerson('colm')"` : ''

  const bookmarksCheck = interactive
    ? `<span x-show="showBookmarks" x-cloak>${CHECK_SVG}</span>`
    : CHECK_SVG
  const fullUrlsCheck = interactive
    ? `<span x-show="showFullUrls" x-cloak>${CHECK_SVG}</span>`
    : ''
  const pedroRadio = interactive
    ? `<span x-show="person === 'pedro'" x-cloak>${RADIO_SVG}</span>`
    : RADIO_SVG
  const colmRadio = interactive
    ? `<span x-show="person === 'colm'" x-cloak>${RADIO_SVG}</span>`
    : ''

  return `
      <button type="button" data-slot="context-menu-item" data-inset class="${insetItem}">
        Back
        <span data-slot="context-menu-shortcut" class="${SHORTCUT}">⌘[</span>
      </button>
      <button type="button" data-slot="context-menu-item" data-inset class="${insetItem}" disabled data-disabled>
        Forward
        <span data-slot="context-menu-shortcut" class="${SHORTCUT}">⌘]</span>
      </button>
      <button type="button" data-slot="context-menu-item" data-inset class="${insetItem}">
        Reload
        <span data-slot="context-menu-shortcut" class="${SHORTCUT}">⌘R</span>
      </button>

      <div data-slot="context-menu-sub" class="relative">
        <button
          type="button"
          data-slot="context-menu-sub-trigger"
          data-inset
          class="focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none pl-8"
          ${subTriggerAttrs}
        >
          More Tools
          ${CHEVRON_RIGHT_SVG}
        </button>

        <div
          ${subContentAttrs}
          data-slot="context-menu-sub-content"
          class="${CONTENT_BASE} ${contextMenuSubContentClass} shadow-lg"
          style="position:absolute;left:100%;top:0;margin-left:6px"
        >
          <button type="button" data-slot="context-menu-item" data-inset class="${insetItem}">
            Save Page...
            <span data-slot="context-menu-shortcut" class="${SHORTCUT}">⇧⌘S</span>
          </button>
          <button type="button" data-slot="context-menu-item" class="${ITEM_BASE}">
            ${PLUS_SVG}
            Create Shortcut...
          </button>
          <button type="button" data-slot="context-menu-item" data-inset class="${insetItem}">
            Name Window...
          </button>
          <div data-slot="context-menu-separator" class="${SEPARATOR}"></div>
          <button type="button" data-slot="context-menu-item" class="${ITEM_BASE}">
            ${CODE2_SVG}
            Developer Tools
          </button>
          <div data-slot="context-menu-separator" class="${SEPARATOR}"></div>
          <button type="button" data-slot="context-menu-item" data-variant="destructive" class="${destructiveItem}">
            ${TRASH_SVG}
            Delete
          </button>
        </div>
      </div>

      <div data-slot="context-menu-separator" class="${SEPARATOR}"></div>

      <button
        type="button"
        data-slot="context-menu-checkbox-item"
        class="${CHECK_ITEM}"
        ${checkboxClick}
      >
        <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          ${bookmarksCheck}
        </span>
        ${escapeHtml(contextMenuBookmarksLabel)}
      </button>

      <button
        type="button"
        data-slot="context-menu-checkbox-item"
        class="${CHECK_ITEM}"
        ${checkboxClick2}
      >
        <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          ${fullUrlsCheck}
        </span>
        Show Full URLs
      </button>

      <div data-slot="context-menu-separator" class="${SEPARATOR}"></div>

      <div data-slot="context-menu-radio-group">
        <div data-slot="context-menu-label" data-inset class="${LABEL} pl-8">People</div>
        <button
          type="button"
          data-slot="context-menu-radio-item"
          class="${RADIO_ITEM}"
          ${radioClickPedro}
        >
          <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            ${pedroRadio}
          </span>
          Pedro Duarte
        </button>
        <button
          type="button"
          data-slot="context-menu-radio-item"
          class="${RADIO_ITEM}"
          ${radioClickColm}
        >
          <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            ${colmRadio}
          </span>
          Colm Tuite
        </button>
      </div>`
}

function buildContextMenuClosedBlock(alpineDataKey: string): string {
  const contentClass = `${CONTENT_BASE} ${contextMenuContentClass}`
  const insetItem = `${ITEM_BASE} ${ITEM_INSET}`
  const destructiveItem = `${ITEM_BASE} ${ITEM_DESTRUCTIVE}`
  const menuContent = buildMenuContent(insetItem, destructiveItem, true)

  return `<div
  x-data="${alpineDataKey}"
  class="relative w-fit overflow-visible"
  @keydown.escape.window="close()"
>
  <div
    data-slot="context-menu-trigger"
    class="${contextMenuTriggerClass}"
    @contextmenu.prevent="openAt($event)"
    @click.prevent="openAt($event)"
  >Right click here</div>

  <div
    x-show="open"
    x-cloak
    data-slot="context-menu-content"
    class="${contentClass}"
    :style="'position:fixed;left:' + x + 'px;top:' + y + 'px;z-index:50;'"
    @click.outside="ignoreOutsideOnce ? null : close()"
  >${menuContent}
  </div>
</div>`
}

export function buildContextMenuAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${contextMenuFrameClass}" style="max-width:${contextMenuFrameMaxWidthPx}px">
    ${buildContextMenuClosedBlock('contextMenuDemoClosed')}
    ${buildContextMenuClosedBlock('contextMenuDemoClosed2')}
  </div>
</div>`
}

export function extractContextMenuToAlpine(_root: HTMLElement): string {
  return formatHtml(buildContextMenuAlpineHtml())
}
