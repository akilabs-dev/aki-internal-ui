import {
  menubarBlockClass,
  menubarFrameClass,
} from '@/demos/menubar/menubar-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"></path></svg>`

const RADIO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-2 fill-current"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"></circle></svg>`

const MENUBAR_ROOT =
  'bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs'

const TRIGGER =
  'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none'

const CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[12rem] origin-(--reka-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md'

const SUB_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] origin-(--reka-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg'

const ITEM =
  "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const CHECK_ITEM =
  "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const SUB_TRIGGER =
  'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8'

const SEPARATOR = 'bg-border -mx-1 my-1 h-px'
const SHORTCUT = 'text-muted-foreground ml-auto text-xs tracking-widest'

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
  <a href="${escapeAttr(figmaLinks.menubar)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function item(label: string, shortcut?: string, options?: { disabled?: boolean; inset?: boolean }): string {
  const disabled = options?.disabled ? ' disabled' : ''
  const inset = options?.inset ? ' data-inset' : ''
  const shortcutHtml = shortcut
    ? `<span data-slot="menubar-shortcut" class="${SHORTCUT}">${escapeHtml(shortcut)}</span>`
    : ''
  return `<button type="button" data-slot="menubar-item"${inset} class="${ITEM}"${disabled}>${escapeHtml(label)}${shortcutHtml}</button>`
}

function separator(): string {
  return `<div data-slot="menubar-separator" class="${SEPARATOR}"></div>`
}

function buildSubmenu(
  key: 'share' | 'find',
  label: string,
  itemsHtml: string,
): string {
  return `<div data-slot="menubar-sub" class="relative">
  <button
    type="button"
    data-slot="menubar-sub-trigger"
    class="${SUB_TRIGGER}"
    x-ref="${key}SubTrigger"
    :data-state="activeSubmenu === '${key}' ? 'open' : 'closed'"
    @mouseenter="openSubmenu('${key}')"
    @mouseleave="closeSubmenuDelayed()"
    @focus="openSubmenu('${key}')"
  >${escapeHtml(label)}${CHEVRON_RIGHT_SVG}</button>
  <div
    x-show="activeSubmenu === '${key}'"
    x-cloak
    x-ref="${key}SubContent"
    data-slot="menubar-sub-content"
    class="${SUB_CONTENT}"
    @mouseenter="openSubmenu('${key}')"
    @mouseleave="closeSubmenuDelayed()"
  >${itemsHtml}</div>
</div>`
}

function buildMenu(
  key: 'file' | 'edit' | 'view' | 'profiles',
  label: string,
  contentHtml: string,
): string {
  return `<div data-slot="menubar-menu" class="relative">
  <button
    type="button"
    data-slot="menubar-trigger"
    class="${TRIGGER}"
    x-ref="${key}Trigger"
    :data-state="isMenuOpen('${key}') ? 'open' : 'closed'"
    @click.stop="toggleMenu('${key}')"
  >${escapeHtml(label)}</button>
  <div
    x-show="isMenuOpen('${key}')"
    x-cloak
    x-ref="${key}Content"
    data-slot="menubar-content"
    class="${CONTENT}"
    @click.outside="closeMenus()"
  >${contentHtml}</div>
</div>`
}

function buildFileMenu(): string {
  return buildMenu(
    'file',
    'File',
    `${item('New Tab', '⌘T')}
${item('New Window', '⌘N')}
${item('New Incognito Window', undefined, { disabled: true })}
${separator()}
${buildSubmenu('share', 'Share', `${item('Email link')}${item('Messages')}${item('Notes')}`)}
${separator()}
${item('Print...', '⌘P')}`,
  )
}

function buildEditMenu(): string {
  return buildMenu(
    'edit',
    'Edit',
    `${item('Undo', '⌘Z')}
${item('Redo', '⇧⌘Z')}
${separator()}
${buildSubmenu(
  'find',
  'Find',
  `${item('Search the web')}${separator()}${item('Find...')}${item('Find Next')}${item('Find Previous')}`,
)}
${separator()}
${item('Cut')}${item('Copy')}${item('Paste')}`,
  )
}

function buildViewMenu(): string {
  return buildMenu(
    'view',
    'View',
    `<button
  type="button"
  data-slot="menubar-checkbox-item"
  class="${CHECK_ITEM}"
  @click.stop="toggleCheckbox('bookmarksBar')"
>
  <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
    <span x-show="bookmarksBar" x-cloak>${CHECK_SVG}</span>
  </span>
  Always Show Bookmarks Bar
</button>
<button
  type="button"
  data-slot="menubar-checkbox-item"
  class="${CHECK_ITEM}"
  @click.stop="toggleCheckbox('fullUrls')"
>
  <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
    <span x-show="fullUrls" x-cloak>${CHECK_SVG}</span>
  </span>
  Always Show Full URLs
</button>
${separator()}
${item('Reload', '⌘R', { inset: true })}
${item('Force Reload', '⇧⌘R', { disabled: true, inset: true })}
${separator()}
${item('Toggle Fullscreen', undefined, { inset: true })}
${separator()}
${item('Hide Sidebar', undefined, { inset: true })}`,
  )
}

function buildProfilesMenu(): string {
  return buildMenu(
    'profiles',
    'Profiles',
    `<div data-slot="menubar-radio-group">
  <button type="button" data-slot="menubar-radio-item" class="${CHECK_ITEM}" @click.stop="setProfile('andy')">
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <span x-show="profile === 'andy'" x-cloak>${RADIO_SVG}</span>
    </span>
    Andy
  </button>
  <button type="button" data-slot="menubar-radio-item" class="${CHECK_ITEM}" @click.stop="setProfile('benoit')">
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <span x-show="profile === 'benoit'" x-cloak>${RADIO_SVG}</span>
    </span>
    Benoit
  </button>
  <button type="button" data-slot="menubar-radio-item" class="${CHECK_ITEM}" @click.stop="setProfile('Luis')">
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <span x-show="profile === 'Luis'" x-cloak>${RADIO_SVG}</span>
    </span>
    Luis
  </button>
</div>
${separator()}
${item('Edit...', undefined, { inset: true })}
${separator()}
${item('Add Profile...', undefined, { inset: true })}`,
  )
}

function buildMenubar(): string {
  return `<div
  class="${menubarBlockClass}"
  x-data="menubarDemo"
  @keydown.escape.window="closeMenus()"
>
  <div data-slot="menubar" class="${MENUBAR_ROOT}">
    ${buildFileMenu()}
    ${buildEditMenu()}
    ${buildViewMenu()}
    ${buildProfilesMenu()}
  </div>
</div>`
}

export function buildMenubarAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${menubarFrameClass}">
    ${buildMenubar()}
  </div>
</div>`
}

export function extractMenubarToAlpine(_root: HTMLElement): string {
  return formatHtml(buildMenubarAlpineHtml())
}
