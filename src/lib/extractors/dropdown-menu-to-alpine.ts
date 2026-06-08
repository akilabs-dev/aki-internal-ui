import {
  accountMenuItems,
  accountMenuLabel,
  appearanceMenuItems,
  appearanceMenuLabel,
  dropdownMenuContentClass,
  dropdownMenuFrameClass,
  dropdownMenuFrameMaxWidthPx,
  dropdownMenuSectionClass,
  dropdownMenuTriggerLabel,
  inviteSubmenuItems,
  positionMenuLabel,
  positionMenuOptions,
} from '@/demos/dropdown-menu/dropdown-menu-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const BUTTON_OUTLINE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'

const MENU_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-visible rounded-md border p-1 shadow-md'

const SUB_MENU_CONTENT =
  'bg-popover text-popover-foreground fixed z-[51] min-w-[8rem] overflow-visible rounded-md border p-1 shadow-lg'

const MENU_ITEM =
  'relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const MENU_SUB_TRIGGER =
  `${MENU_ITEM} flex w-full items-center data-[state=open]:bg-accent [&_svg:last-child]:ml-auto`

const MENU_SEPARATOR = 'bg-border -mx-1 my-1 h-px'

const MENU_LABEL = 'px-2 py-1.5 text-sm font-medium'

const MENU_SHORTCUT = 'text-muted-foreground ml-auto text-xs tracking-widest'

const CHECK_ITEM =
  'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const RADIO_ITEM = CHECK_ITEM

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"></path></svg>`

const RADIO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-2 fill-current"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"></circle></svg>`

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
    href="${escapeAttr(figmaLinks.dropdownMenu)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function menuItem(label: string, shortcut?: string, disabled = false): string {
  const shortcutHtml = shortcut
    ? `<span data-slot="dropdown-menu-shortcut" class="${MENU_SHORTCUT}">${escapeHtml(shortcut)}</span>`
    : ''
  const disabledAttrs = disabled ? ' disabled data-disabled' : ''

  return `<button type="button" data-slot="dropdown-menu-item" class="${MENU_ITEM}"${disabledAttrs}>
    ${escapeHtml(label)}
    ${shortcutHtml}
  </button>`
}

function buildAccountMenu(): string {
  const submenuItems = inviteSubmenuItems
    .map((label, index) => {
      if (index === 2) {
        return `<div data-slot="dropdown-menu-separator" class="${MENU_SEPARATOR}"></div>
        ${menuItem(label)}`
      }
      return menuItem(label)
    })
    .join('\n            ')

  return `<div
  x-data="dropdownMenuAccountDemo"
  data-slot="dropdown-menu"
  class="relative w-fit overflow-visible"
  @keydown.escape.window="closeMenu()"
>
  <button
    type="button"
    x-ref="trigger"
    data-slot="dropdown-menu-trigger"
    class="${BUTTON_OUTLINE}"
    @click="toggleMenu()"
    :aria-expanded="open"
  >
    ${escapeHtml(dropdownMenuTriggerLabel)}
  </button>

  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="dropdown-menu-content"
    class="${MENU_CONTENT} ${dropdownMenuContentClass}"
    @click.outside="closeMenu()"
  >
    <div data-slot="dropdown-menu-label" class="${MENU_LABEL}">${escapeHtml(accountMenuLabel)}</div>
    <div data-slot="dropdown-menu-group" role="group">
      ${menuItem(accountMenuItems.profile.label, accountMenuItems.profile.shortcut)}
      ${menuItem(accountMenuItems.billing.label, accountMenuItems.billing.shortcut)}
      ${menuItem(accountMenuItems.settings.label, accountMenuItems.settings.shortcut)}
      ${menuItem(accountMenuItems.keyboardShortcuts.label, accountMenuItems.keyboardShortcuts.shortcut)}
    </div>
    <div data-slot="dropdown-menu-separator" class="${MENU_SEPARATOR}"></div>
    <div data-slot="dropdown-menu-group" role="group">
      ${menuItem(accountMenuItems.team.label)}
      <div data-slot="dropdown-menu-sub" class="relative">
        <button
          type="button"
          x-ref="subTrigger"
          data-slot="dropdown-menu-sub-trigger"
          class="${MENU_SUB_TRIGGER}"
          :data-state="submenuOpen ? 'open' : 'closed'"
          :aria-expanded="submenuOpen"
          @mouseenter="openSub()"
          @mouseleave="closeSubDelayed()"
        >
          ${escapeHtml(accountMenuItems.inviteUsers.label)}
          ${CHEVRON_RIGHT_SVG}
        </button>
      </div>
      ${menuItem(accountMenuItems.newTeam.label, accountMenuItems.newTeam.shortcut)}
    </div>
    <div data-slot="dropdown-menu-separator" class="${MENU_SEPARATOR}"></div>
    ${menuItem(accountMenuItems.github.label)}
    ${menuItem(accountMenuItems.support.label)}
    ${menuItem(accountMenuItems.api.label, undefined, true)}
    <div data-slot="dropdown-menu-separator" class="${MENU_SEPARATOR}"></div>
    ${menuItem(accountMenuItems.logOut.label, accountMenuItems.logOut.shortcut)}
  </div>

  <div
    x-show="submenuOpen"
    x-ref="subContent"
    x-cloak
    data-slot="dropdown-menu-sub-content"
    class="${SUB_MENU_CONTENT}"
    @mouseenter="openSub()"
    @mouseleave="closeSubDelayed()"
  >
    ${submenuItems}
  </div>
</div>`
}

function buildAppearanceMenu(): string {
  return `<div
  x-data="dropdownMenuAppearanceDemo"
  data-slot="dropdown-menu"
  class="relative w-fit overflow-visible"
  @keydown.escape.window="closeMenu()"
>
  <button
    type="button"
    x-ref="trigger"
    data-slot="dropdown-menu-trigger"
    class="${BUTTON_OUTLINE}"
    @click="toggleMenu()"
    :aria-expanded="open"
  >
    ${escapeHtml(dropdownMenuTriggerLabel)}
  </button>

  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="dropdown-menu-content"
    class="${MENU_CONTENT} ${dropdownMenuContentClass}"
    @click.outside="closeMenu()"
  >
    <div data-slot="dropdown-menu-label" class="${MENU_LABEL}">${escapeHtml(appearanceMenuLabel)}</div>
    <div data-slot="dropdown-menu-separator" class="${MENU_SEPARATOR}"></div>
    <button
      type="button"
      data-slot="dropdown-menu-checkbox-item"
      class="${CHECK_ITEM}"
      @click.stop="toggleCheckbox('showStatusBar')"
    >
      <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <span x-show="showStatusBar" x-cloak>${CHECK_SVG}</span>
      </span>
      ${escapeHtml(appearanceMenuItems.statusBar.label)}
    </button>
    <button
      type="button"
      data-slot="dropdown-menu-checkbox-item"
      class="${CHECK_ITEM}"
      @click.stop="toggleCheckbox('showActivityBar')"
    >
      <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <span x-show="showActivityBar" x-cloak>${CHECK_SVG}</span>
      </span>
      ${escapeHtml(appearanceMenuItems.activityBar.label)}
    </button>
    <button
      type="button"
      data-slot="dropdown-menu-checkbox-item"
      class="${CHECK_ITEM}"
      @click.stop="toggleCheckbox('showPanel')"
    >
      <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <span x-show="showPanel" x-cloak>${CHECK_SVG}</span>
      </span>
      ${escapeHtml(appearanceMenuItems.panel.label)}
    </button>
  </div>
</div>`
}

function buildPositionMenu(): string {
  const radioItems = positionMenuOptions
    .map(
      (option) => `<button
      type="button"
      data-slot="dropdown-menu-radio-item"
      class="${RADIO_ITEM}"
      @click.stop="setPosition('${option.value}')"
    >
      <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <span x-show="position === '${option.value}'" x-cloak>${RADIO_SVG}</span>
      </span>
      ${escapeHtml(option.label)}
    </button>`,
    )
    .join('\n    ')

  return `<div
  x-data="dropdownMenuPositionDemo"
  data-slot="dropdown-menu"
  class="relative w-fit overflow-visible"
  @keydown.escape.window="closeMenu()"
>
  <button
    type="button"
    x-ref="trigger"
    data-slot="dropdown-menu-trigger"
    class="${BUTTON_OUTLINE}"
    @click="toggleMenu()"
    :aria-expanded="open"
  >
    ${escapeHtml(dropdownMenuTriggerLabel)}
  </button>

  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="dropdown-menu-content"
    class="${MENU_CONTENT} ${dropdownMenuContentClass}"
    @click.outside="closeMenu()"
  >
    <div data-slot="dropdown-menu-label" class="${MENU_LABEL}">${escapeHtml(positionMenuLabel)}</div>
    <div data-slot="dropdown-menu-separator" class="${MENU_SEPARATOR}"></div>
    <div data-slot="dropdown-menu-radio-group" role="group">
      ${radioItems}
    </div>
  </div>
</div>`
}

export function buildDropdownMenuAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${dropdownMenuFrameClass}" style="max-width:${dropdownMenuFrameMaxWidthPx}px">
    <div class="${dropdownMenuSectionClass}">
      ${buildAccountMenu()}
    </div>
    <div class="${dropdownMenuSectionClass}">
      ${buildAppearanceMenu()}
    </div>
    <div class="${dropdownMenuSectionClass}">
      ${buildPositionMenu()}
    </div>
  </div>
</div>`
}

export function extractDropdownMenuToAlpine(_root: HTMLElement): string {
  return formatHtml(buildDropdownMenuAlpineHtml())
}
