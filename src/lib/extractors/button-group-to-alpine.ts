import {
  buttonGroupActionLabels,
  buttonGroupLabelOptions,
  buttonGroupMoreMenuPrimary,
  buttonGroupMoreMenuSecondary,
  buttonGroupSnoozeLabel,
  buttonGroupTrashMenuItem,
} from '@/demos/button-group/button-group-demo.data'

const BUTTON_OUTLINE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'

const BUTTON_OUTLINE_ICON =
  `${BUTTON_OUTLINE} size-9 shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4`

const GROUP_HORIZONTAL =
  'flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative has-[>[data-slot=button-group]]:gap-2 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none'

const GROUP_OUTER = `${GROUP_HORIZONTAL} has-[>[data-slot=button-group]]:gap-2`

const MENU_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-visible rounded-md border p-1 shadow-md w-52'

const SUB_MENU_CONTENT =
  'bg-popover text-popover-foreground fixed z-[51] min-w-[8rem] overflow-visible rounded-md border p-1 shadow-lg'

const MENU_ITEM =
  'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const MENU_ITEM_DESTRUCTIVE =
  `${MENU_ITEM} text-destructive hover:bg-destructive/10 focus:bg-destructive/10 [&_svg]:text-destructive`

const MENU_SUB_TRIGGER =
  `${MENU_ITEM} flex w-full items-center data-[state=open]:bg-accent [&_svg:last-child]:ml-auto`

const MENU_SEPARATOR = 'bg-border -mx-1 my-1 h-px'

const SVG_BASE =
  'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"'

function svgIcon(className: string, inner: string): string {
  return `<svg ${SVG_BASE} class="${className}">${inner}</svg>`
}

const CHEVRON_RIGHT = svgIcon(
  'ml-auto size-4 shrink-0 text-muted-foreground',
  '<path d="m9 18 6-6-6-6"></path>',
)

const ICONS: Record<string, string> = {
  back: svgIcon('size-4 shrink-0', '<path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>'),
  more: svgIcon(
    'size-4 shrink-0',
    '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
  ),
  read: svgIcon('size-4 shrink-0', '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path>'),
  archive: svgIcon('size-4 shrink-0', '<rect width="20" height="5" x="2" y="3" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path>'),
  snooze: svgIcon('size-4 shrink-0', '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>'),
  calendar: svgIcon('size-4 shrink-0', '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>'),
  list: svgIcon('size-4 shrink-0', '<path d="M11 12H3"></path><path d="M16 6H3"></path><path d="M16 18H3"></path><path d="M18 9v6"></path><path d="M21 12h-6"></path>'),
  tag: svgIcon('size-4 shrink-0', '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>'),
  trash: svgIcon('size-4 shrink-0', '<path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>'),
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function menuItem(label: string, iconKey: string, destructive = false): string {
  const icon = ICONS[iconKey] ?? ''
  const className = destructive ? MENU_ITEM_DESTRUCTIVE : MENU_ITEM
  return `<button type="button" data-slot="dropdown-menu-item" class="${className} w-full text-left">${icon}${escapeHtml(label)}</button>`
}

function labelOption(value: string, label: string): string {
  return `<button
    type="button"
    data-slot="dropdown-menu-radio-item"
    class="${MENU_ITEM} w-full text-left pl-8"
    @click="setLabel('${value}')"
  >
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <span x-show="label === '${value}'" class="size-2 rounded-full bg-current"></span>
    </span>
    ${escapeHtml(label)}
  </button>`
}

export function buildButtonGroupAlpineHtml(): string {
  const actionButtons = buttonGroupActionLabels
    .map(
      (label) =>
        `<button type="button" data-slot="button" class="${BUTTON_OUTLINE}">${escapeHtml(label)}</button>`,
    )
    .join('\n      ')

  const primaryItems = buttonGroupMoreMenuPrimary
    .map((item) => menuItem(item.label, item.id))
    .join('\n        ')

  const secondaryItems = buttonGroupMoreMenuSecondary
    .map((item) => menuItem(item.label, item.id))
    .join('\n        ')

  const labelItems = buttonGroupLabelOptions
    .map((option) => labelOption(option.value, option.label))
    .join('\n          ')

  return `<div class="flex w-full justify-center pb-56 pt-6">
<div
  x-data="buttonGroupDemo"
  class="relative w-fit"
  @keydown.escape.window="closeMenu()"
>
  <div
    role="group"
    data-slot="button-group"
    class="${GROUP_OUTER}"
  >
  <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} hidden sm:flex">
    <button type="button" data-slot="button" class="${BUTTON_OUTLINE_ICON}" aria-label="Go Back">
      ${ICONS.back}
    </button>
  </div>
  <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL}">
    ${actionButtons}
  </div>
  <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL}">
    <button type="button" data-slot="button" class="${BUTTON_OUTLINE}">
      ${escapeHtml(buttonGroupSnoozeLabel)}
    </button>
    <button
      type="button"
      x-ref="menuTrigger"
      data-slot="button"
      class="${BUTTON_OUTLINE_ICON}"
      aria-label="More Options"
      @click="toggleMenu()"
      :aria-expanded="menuOpen"
    >
      ${ICONS.more}
    </button>
  </div>
  </div>
  <div
    x-show="menuOpen"
    x-ref="menuContent"
    x-cloak
    data-slot="dropdown-menu-content"
    class="${MENU_CONTENT}"
    @click.outside="closeMenu()"
  >
    <div data-slot="dropdown-menu-group">
      ${primaryItems}
    </div>
    <div class="${MENU_SEPARATOR}"></div>
    <div data-slot="dropdown-menu-group">
      ${secondaryItems}
      <button
        type="button"
        x-ref="subTrigger"
        data-slot="dropdown-menu-sub-trigger"
        class="${MENU_SUB_TRIGGER}"
        :data-state="subOpen ? 'open' : 'closed'"
        :aria-expanded="subOpen"
        @mouseenter="openSub()"
        @mouseleave="closeSubDelayed()"
      >
        ${ICONS.tag}
        Label As...
        ${CHEVRON_RIGHT}
      </button>
    </div>
    <div class="${MENU_SEPARATOR}"></div>
    <div data-slot="dropdown-menu-group">
      ${menuItem(buttonGroupTrashMenuItem.label, buttonGroupTrashMenuItem.id, true)}
    </div>
  </div>
  <div
    x-show="subOpen"
    x-ref="subContent"
    x-cloak
    data-slot="dropdown-menu-sub-content"
    class="${SUB_MENU_CONTENT}"
    @mouseenter="openSub()"
    @mouseleave="closeSubDelayed()"
  >
    ${labelItems}
  </div>
</div>
</div>`
}

export function extractButtonGroupToAlpine(_root: HTMLElement): string {
  return buildButtonGroupAlpineHtml()
}
