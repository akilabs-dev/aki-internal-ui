import {
  breadcrumbDemoLinks,
  breadcrumbDemoPage,
  breadcrumbDropdownHome,
  breadcrumbDropdownMenuItems,
  breadcrumbDropdownTriggerLabel,
  breadcrumbEllipsisComponentsLink,
  breadcrumbEllipsisHome,
  breadcrumbEllipsisMenuItems,
  breadcrumbResponsiveItems,
  breadcrumbResponsiveItemsToDisplay,
} from '@/demos/breadcrumb/breadcrumb-demo.data'
import { figmaLinks } from '@/figma-links'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.breadcrumb)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

const SLASH_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 2 22"></path></svg>`

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>`

const MORE_HORIZONTAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`

const LINK_CLASS = 'hover:text-foreground transition-colors'
const breadcrumbListClass =
  'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5'
const ITEM_CLASS = 'inline-flex items-center gap-1.5'
const SEPARATOR_CLASS = '[&>svg]:size-3.5'
const PAGE_CLASS = 'text-foreground font-normal'

const TRIGGER_CLASS =
  'flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-3.5'

const CHEVRON_DOWN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>`

const MENU_CONTENT_CLASS =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md'

const MENU_ITEM_CLASS =
  'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left'

const MENU_ITEMS = breadcrumbDropdownMenuItems.map((item) => item.label)

function breadcrumbLinkHtml(href: string, label: string): string {
  return `<li data-slot="breadcrumb-item" class="${ITEM_CLASS}">
      <a data-slot="breadcrumb-link" class="${LINK_CLASS}" href="${href}">${label}</a>
    </li>`
}

function breadcrumbSeparatorHtml(): string {
  return `<li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" class="${SEPARATOR_CLASS}">
      ${SLASH_ICON_SVG}
    </li>`
}

function breadcrumbChevronSeparatorHtml(): string {
  return `<li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" class="${SEPARATOR_CLASS}">
      ${CHEVRON_RIGHT_SVG}
    </li>`
}

function breadcrumbPageHtml(label: string): string {
  return `<li data-slot="breadcrumb-item" class="${ITEM_CLASS}">
      <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" class="${PAGE_CLASS}">${label}</span>
    </li>`
}

function dropdownItem(label: string): string {
  return `<button type="button" data-slot="dropdown-menu-item" class="${MENU_ITEM_CLASS}" @click="closeMenu()">${label}</button>`
}

const ELLIPSIS_TRIGGER_CLASS = 'flex items-center gap-1'

function componentsDropdownHtml(): string {
  const items = MENU_ITEMS.map((label) => dropdownItem(label)).join('\n        ')
  return `<li data-slot="breadcrumb-item" class="relative inline-flex items-center gap-1.5">
      <button
        type="button"
        data-slot="dropdown-menu-trigger"
        class="${TRIGGER_CLASS}"
        @click="toggleMenu()"
        :aria-expanded="menuOpen"
      >
        ${breadcrumbDropdownTriggerLabel}
        ${CHEVRON_DOWN_SVG}
      </button>
      <div
        x-show="menuOpen"
        x-cloak
        data-slot="dropdown-menu-content"
        class="${MENU_CONTENT_CLASS} absolute top-full left-0 mt-1"
        @click.outside="closeMenu()"
      >
        ${items}
      </div>
    </li>`
}

function simpleBreadcrumbNav(): string {
  const links = breadcrumbDemoLinks
    .map(
      (link) =>
        `${breadcrumbLinkHtml(link.href, link.label)}${breadcrumbSeparatorHtml()}`,
    )
    .join('\n      ')
  return `<nav aria-label="breadcrumb" data-slot="breadcrumb">
    <ol data-slot="breadcrumb-list" class="${breadcrumbListClass}">
      ${links}
      ${breadcrumbPageHtml(breadcrumbDemoPage.label)}
    </ol>
  </nav>`
}

function dropdownBreadcrumbNav(): string {
  return `<div x-data="breadcrumbDropdownDemo" @keydown.escape.window="closeMenu()">
  <nav aria-label="breadcrumb" data-slot="breadcrumb">
    <ol data-slot="breadcrumb-list" class="${breadcrumbListClass}">
      ${breadcrumbLinkHtml(breadcrumbDropdownHome.href, breadcrumbDropdownHome.label)}
      ${breadcrumbSeparatorHtml()}
      ${componentsDropdownHtml()}
      ${breadcrumbSeparatorHtml()}
      ${breadcrumbPageHtml(breadcrumbDemoPage.label)}
    </ol>
  </nav>
</div>`
}

function ellipsisDropdownHtml(): string {
  const items = breadcrumbEllipsisMenuItems
    .map((item) => dropdownItem(item.label))
    .join('\n        ')
  return `<li data-slot="breadcrumb-item" class="relative inline-flex items-center gap-1.5">
      <button
        type="button"
        data-slot="dropdown-menu-trigger"
        class="${ELLIPSIS_TRIGGER_CLASS}"
        @click="toggleMenu()"
        :aria-expanded="menuOpen"
      >
        <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center h-4 w-4">
          ${MORE_HORIZONTAL_SVG}
          <span class="sr-only">More</span>
        </span>
        <span class="sr-only">Toggle menu</span>
      </button>
      <div
        x-show="menuOpen"
        x-cloak
        data-slot="dropdown-menu-content"
        class="${MENU_CONTENT_CLASS} absolute top-full left-0 mt-1"
        @click.outside="closeMenu()"
      >
        ${items}
      </div>
    </li>`
}

function responsiveCollapsedMenuHtml(): string {
  const collapsed = breadcrumbResponsiveItems.slice(1, -2)
  const items = collapsed
    .map(
      (item) =>
        `<a data-slot="dropdown-menu-item" class="${MENU_ITEM_CLASS}" href="${item.href || '#'}">${item.label}</a>`,
    )
    .join('\n        ')
  return `<li data-slot="breadcrumb-item" class="relative inline-flex items-center gap-1.5">
      <button
        type="button"
        data-slot="dropdown-menu-trigger"
        class="${ELLIPSIS_TRIGGER_CLASS}"
        aria-label="Toggle menu"
        @click="toggleMenu()"
        :aria-expanded="menuOpen"
      >
        <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" class="flex size-4 items-center justify-center">
          ${MORE_HORIZONTAL_SVG}
          <span class="sr-only">More</span>
        </span>
      </button>
      <div
        x-show="menuOpen"
        x-cloak
        data-slot="dropdown-menu-content"
        class="${MENU_CONTENT_CLASS} absolute top-full left-0 mt-1"
        @click.outside="closeMenu()"
      >
        ${items}
      </div>
    </li>`
}

function responsiveBreadcrumbNav(): string {
  const first = breadcrumbResponsiveItems[0]!
  const tail = breadcrumbResponsiveItems.slice(
    -breadcrumbResponsiveItemsToDisplay + 1,
  )
  const tailHtml = tail
    .map((item) => {
      if (item.href) {
        return `<li data-slot="breadcrumb-item" class="${ITEM_CLASS}">
      <a data-slot="breadcrumb-link" class="${LINK_CLASS} max-w-20 truncate md:max-w-none" href="${item.href}">${item.label}</a>
    </li>${breadcrumbChevronSeparatorHtml()}`
      }
      return `<li data-slot="breadcrumb-item" class="${ITEM_CLASS}">
      <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" class="${PAGE_CLASS} max-w-20 truncate md:max-w-none">${item.label}</span>
    </li>`
    })
    .join('\n      ')

  return `<div x-data="breadcrumbResponsiveDemo" @keydown.escape.window="closeMenu()">
  <nav aria-label="breadcrumb" data-slot="breadcrumb">
    <ol data-slot="breadcrumb-list" class="${breadcrumbListClass}">
      ${breadcrumbLinkHtml(first.href || '#', first.label)}
      ${breadcrumbChevronSeparatorHtml()}
      ${responsiveCollapsedMenuHtml()}
      ${breadcrumbChevronSeparatorHtml()}
      ${tailHtml}
    </ol>
  </nav>
</div>`
}

function routerBreadcrumbNav(): string {
  const links = breadcrumbDemoLinks
    .map(
      (link) =>
        `${breadcrumbLinkHtml(link.href, link.label)}${breadcrumbChevronSeparatorHtml()}`,
    )
    .join('\n      ')
  return `<nav aria-label="breadcrumb" data-slot="breadcrumb">
    <ol data-slot="breadcrumb-list" class="${breadcrumbListClass}">
      ${links}
      ${breadcrumbPageHtml(breadcrumbDemoPage.label)}
    </ol>
  </nav>`
}

function ellipsisBreadcrumbNav(): string {
  return `<div x-data="breadcrumbEllipsisDemo" @keydown.escape.window="closeMenu()">
  <nav aria-label="breadcrumb" data-slot="breadcrumb">
    <ol data-slot="breadcrumb-list" class="${breadcrumbListClass}">
      ${breadcrumbLinkHtml(breadcrumbEllipsisHome.href, breadcrumbEllipsisHome.label)}
      ${breadcrumbChevronSeparatorHtml()}
      ${ellipsisDropdownHtml()}
      ${breadcrumbChevronSeparatorHtml()}
      ${breadcrumbLinkHtml(breadcrumbEllipsisComponentsLink.href, breadcrumbEllipsisComponentsLink.label)}
      ${breadcrumbChevronSeparatorHtml()}
      ${breadcrumbPageHtml(breadcrumbDemoPage.label)}
    </ol>
  </nav>
</div>`
}

export function buildBreadcrumbAlpineHtml(): string {
  return `<div class="flex flex-col gap-4">
  ${buildFigmaLink()}
  ${simpleBreadcrumbNav()}
  ${dropdownBreadcrumbNav()}
  ${ellipsisBreadcrumbNav()}
  ${routerBreadcrumbNav()}
  ${responsiveBreadcrumbNav()}
</div>`
}

export function extractBreadcrumbToAlpine(_root: HTMLElement): string {
  return buildBreadcrumbAlpineHtml()
}
