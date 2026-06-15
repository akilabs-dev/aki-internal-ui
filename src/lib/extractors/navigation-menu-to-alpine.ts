import {
  navigationMenuClosedPreviewClass,
  navigationMenuComponents,
  navigationMenuFrameClass,
  navigationMenuFrameStyle,
  navigationMenuHomeLinks,
  navigationMenuIconLinks,
  navigationMenuListLinks,
  navigationMenuSectionClass,
  navigationMenuSeparatorHtml,
  navigationMenuSimpleLinks,
  type NavigationMenuKey,
} from '@/demos/navigation-menu/navigation-menu-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const NAV_ROOT =
  'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center'

const NAV_LIST = 'group flex flex-1 list-none items-center justify-center gap-1'

const NAV_ITEM = 'relative'

const TRIGGER =
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1'

const CONTENT =
  'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 absolute top-full left-0 z-50'

const NAV_LINK =
  "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4"

const LIST_ITEM_LINK =
  'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors'

const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>`

const CIRCLE_HELP = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>`

const CIRCLE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="10"></circle></svg>`

const CIRCLE_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`

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
  <a href="${escapeAttr(figmaLinks.navigationMenu)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildListItem(title: string, description: string, href = '#'): string {
  return `<li>
  <a data-slot="navigation-menu-link" href="${escapeAttr(href)}" class="${LIST_ITEM_LINK}">
    <div class="text-sm font-medium leading-none">${escapeHtml(title)}</div>
    <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">${escapeHtml(description)}</p>
  </a>
</li>`
}

function buildHomeContent(): string {
  const links = navigationMenuHomeLinks
    .map((link) => buildListItem(link.title, link.description, link.href))
    .join('')

  return `<ul class="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
  <li class="row-span-3">
    <a
      data-slot="navigation-menu-link"
      href="/"
      class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
    >
      <div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
      <p class="text-muted-foreground text-sm leading-tight">Beautifully designed components built with Tailwind CSS.</p>
    </a>
  </li>
  ${links}
</ul>`
}

function buildComponentsContent(): string {
  const items = navigationMenuComponents
    .map((component) => buildListItem(component.title, component.description, component.href))
    .join('')

  return `<ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">${items}</ul>`
}

function buildListContent(): string {
  const links = navigationMenuListLinks
    .map(
      (link) => `<a data-slot="navigation-menu-link" href="#" class="${NAV_LINK}">
  <div class="font-medium">${escapeHtml(link.title)}</div>
  <div class="text-muted-foreground">${escapeHtml(link.description)}</div>
</a>`,
    )
    .join('')

  return `<ul class="grid w-[300px] gap-4"><li>${links}</li></ul>`
}

function buildSimpleContent(): string {
  const links = navigationMenuSimpleLinks
    .map(
      (label) =>
        `<a data-slot="navigation-menu-link" href="#" class="${NAV_LINK}">${escapeHtml(label)}</a>`,
    )
    .join('')

  return `<ul class="grid w-[200px] gap-4"><li>${links}</li></ul>`
}

function buildIconContent(): string {
  const icons = {
    help: CIRCLE_HELP,
    circle: CIRCLE,
    check: CIRCLE_CHECK,
  } as const

  const links = navigationMenuIconLinks
    .map(
      (link) => `<a data-slot="navigation-menu-link" href="#" class="${NAV_LINK} flex-row items-center gap-2">${icons[link.icon]} ${escapeHtml(link.label)}</a>`,
    )
    .join('')

  return `<ul class="grid w-[200px] gap-4"><li>${links}</li></ul>`
}

function buildTrigger(key: NavigationMenuKey, label: string): string {
  return `<button
  type="button"
  data-slot="navigation-menu-trigger"
  class="${TRIGGER} group"
  :data-state="isOpen('${key}') ? 'open' : 'closed'"
  @click.stop="toggleMenu('${key}')"
  aria-expanded="false"
>${escapeHtml(label)}${CHEVRON_DOWN}</button>`
}

function buildDropdownItem(key: NavigationMenuKey, label: string, contentHtml: string): string {
  return `<li data-slot="navigation-menu-item" class="${NAV_ITEM}">
  ${buildTrigger(key, label)}
  <div
    data-slot="navigation-menu-content"
    class="${CONTENT}"
  :data-state="isOpen('${key}') ? 'open' : 'closed'"
    x-show="isOpen('${key}')"
    x-cloak
    @click.outside="closeMenus()"
  >${contentHtml}</div>
</li>`
}

function buildDocsLink(): string {
  return `<li data-slot="navigation-menu-item" class="${NAV_ITEM}">
  <a data-slot="navigation-menu-link" href="/docs" class="${TRIGGER}">Docs</a>
</li>`
}

function buildNavigationMenu(alpineKey: string, initialMenu: NavigationMenuKey | null): string {
  const initAttr = initialMenu ? ` x-init="activeMenu = '${initialMenu}'"` : ''

  return `<nav
  data-slot="navigation-menu"
  data-viewport="false"
  class="${NAV_ROOT}"
  x-data="${alpineKey}"${initAttr}
  @keydown.escape.window="closeMenus()"
>
  <ul data-slot="navigation-menu-list" class="${NAV_LIST}">
    ${buildDropdownItem('home', 'Home', buildHomeContent())}
    ${buildDropdownItem('components', 'Components', buildComponentsContent())}
    ${buildDocsLink()}
    ${buildDropdownItem('list', 'List', buildListContent())}
    ${buildDropdownItem('simple', 'Simple', buildSimpleContent())}
    ${buildDropdownItem('withIcon', 'With Icon', buildIconContent())}
  </ul>
</nav>`
}

function buildDemoSection(
  alpineKey: string | null,
  initialMenu: NavigationMenuKey | null = null,
  options: { preview?: boolean } = {},
): string {
  const menuHtml = alpineKey
    ? buildNavigationMenu(alpineKey, initialMenu)
    : buildStaticNavigationMenu(initialMenu)

  const inner = options.preview
    ? `<div class="${navigationMenuClosedPreviewClass}">${menuHtml}</div>`
    : menuHtml

  return `<div class="${navigationMenuSectionClass}">${inner}</div>`
}

function buildStaticNavigationMenu(initialMenu: NavigationMenuKey | null): string {
  const isOpen = (key: NavigationMenuKey) => initialMenu === key

  function buildStaticDropdownItem(key: NavigationMenuKey, label: string, contentHtml: string): string {
    const open = isOpen(key)
    return `<li data-slot="navigation-menu-item" class="${NAV_ITEM}">
  <button
    type="button"
    data-slot="navigation-menu-trigger"
    class="${TRIGGER} group"
    data-state="${open ? 'open' : 'closed'}"
    tabindex="-1"
  >${escapeHtml(label)}${CHEVRON_DOWN}</button>
  <div
    data-slot="navigation-menu-content"
    class="${CONTENT}"
    data-state="${open ? 'open' : 'closed'}"
    ${open ? '' : 'hidden'}
  >${contentHtml}</div>
</li>`
  }

  return `<nav data-slot="navigation-menu" data-viewport="false" class="${NAV_ROOT}">
  <ul data-slot="navigation-menu-list" class="${NAV_LIST}">
    ${buildStaticDropdownItem('home', 'Home', buildHomeContent())}
    ${buildStaticDropdownItem('components', 'Components', buildComponentsContent())}
    ${buildDocsLink()}
    ${buildStaticDropdownItem('list', 'List', buildListContent())}
    ${buildStaticDropdownItem('simple', 'Simple', buildSimpleContent())}
    ${buildStaticDropdownItem('withIcon', 'With Icon', buildIconContent())}
  </ul>
</nav>`
}

export function buildNavigationMenuAlpineHtml(): string {
  const frameStyle = navigationMenuFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${navigationMenuFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    ${buildDemoSection(null, null, { preview: true })}
    ${navigationMenuSeparatorHtml}
    ${buildDemoSection('navigationMenuDemoOpen', 'components')}
  </div>
</div>`
}

export function extractNavigationMenuToAlpine(_root: HTMLElement): string {
  return formatHtml(buildNavigationMenuAlpineHtml())
}
