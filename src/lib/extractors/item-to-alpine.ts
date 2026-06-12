import {
  itemBlockClass,
  itemFrameClass,
  itemModels,
  itemMusic,
  itemPeople,
  itemSectionLgClass,
  itemSectionMdClass,
  itemSectionXlClass,
} from '@/demos/item/item-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const ITEM_BASE =
  'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] p-4 gap-4'

const ITEM_OUTLINE = `${ITEM_BASE} border-border`
const ITEM_MUTED = `${ITEM_BASE} bg-muted/50`
const ITEM_SM =
  'group/item flex items-center border border-border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] py-3 px-4 gap-2.5'
const ITEM_DROPDOWN_SM = `${ITEM_SM} w-full p-2`

const ITEM_CONTENT = 'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none'
const ITEM_ACTIONS = 'flex items-center gap-2'
const ITEM_TITLE = 'flex w-fit items-center gap-2 text-sm leading-snug font-medium'
const ITEM_DESC =
  'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance'
const ITEM_GROUP = 'group/item-group flex flex-col'
const ITEM_HEADER = 'flex basis-full items-center justify-between gap-2'
const ITEM_MEDIA =
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5'
const ITEM_MEDIA_ICON =
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 size-8 border rounded-sm bg-muted [&_svg:not([class*=\'size-\'])]:size-4'
const ITEM_MEDIA_IMAGE =
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover'

const BUTTON_OUTLINE_SM =
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-8 gap-1.5 px-3 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'

const BUTTON_ICON_SM =
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] size-8 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-full [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const BUTTON_GHOST_ICON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] size-9 rounded-full hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const AVATAR = 'relative flex shrink-0 overflow-hidden rounded-full'
const AVATAR_IMAGE = 'aspect-square size-full rounded-[inherit] object-cover'
const ITEM_SEPARATOR = 'bg-border shrink-0 h-px w-full'

const MENU_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-visible rounded-md border p-1 shadow-md w-72 [--radius:0.65rem]'

const MENU_ITEM =
  'relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'

const BADGE_CHECK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>'

const CHEVRON_RIGHT_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m9 18 6-6-6-6"></path></svg>'

const EXTERNAL_LINK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>'

const SHIELD_ALERT_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>'

const PLUS_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>'

const CHEVRON_DOWN_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m6 9 6 6 6-6"></path></svg>'

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
  <a href="${escapeAttr(figmaLinks.item)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildBlock(content: string): string {
  return `<div class="${itemBlockClass}">
    ${content}
  </div>`
}

function buildActionButton(label: string): string {
  return `<button type="button" data-slot="button" class="${BUTTON_OUTLINE_SM}" @click="onAction('${escapeAttr(label)}')">${escapeHtml(label)}</button>`
}

function buildItemContent(title: string, description?: string): string {
  const desc = description
    ? `<p data-slot="item-description" class="${ITEM_DESC}">${escapeHtml(description)}</p>`
    : ''
  return `<div data-slot="item-content" class="${ITEM_CONTENT}">
    <div data-slot="item-title" class="${ITEM_TITLE}">${escapeHtml(title)}</div>
    ${desc}
  </div>`
}

function buildSimpleItem(
  itemClass: string,
  title: string,
  description: string,
  buttonLabel: string,
): string {
  return `<div data-slot="item" data-variant="${itemClass === ITEM_MUTED ? 'muted' : itemClass === ITEM_OUTLINE ? 'outline' : 'default'}" class="${itemClass}">
  ${buildItemContent(title, description)}
  <div data-slot="item-actions" class="${ITEM_ACTIONS}">
    ${buildActionButton(buttonLabel)}
  </div>
</div>`
}

function buildAvatar(src: string, alt: string, extraClass = 'size-8'): string {
  return `<span data-slot="avatar" class="${AVATAR} ${extraClass}">
  <img data-slot="avatar-image" class="${AVATAR_IMAGE} grayscale" src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" referrerpolicy="no-referrer" />
</span>`
}

function buildVariantsBlock(): string {
  return buildBlock(`<div class="flex w-full max-w-md flex-col gap-6" x-data="itemActionsDemo">
  ${buildSimpleItem(ITEM_BASE, 'Default Variant', 'Standard styling with subtle background and borders.', 'Open')}
  ${buildSimpleItem(ITEM_OUTLINE, 'Outline Variant', 'Outlined style with clear borders and transparent background.', 'Open')}
  ${buildSimpleItem(ITEM_MUTED, 'Muted Variant', 'Subdued appearance with muted colors for secondary content.', 'Open')}
</div>`)
}

function buildBasicBlock(): string {
  return buildBlock(`<div class="${itemSectionMdClass}" x-data="itemActionsDemo">
  <div data-slot="item" data-variant="outline" class="${ITEM_OUTLINE}">
    ${buildItemContent('Basic Item', 'A simple item with title and description.')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">
      ${buildActionButton('Action')}
    </div>
  </div>
  <a href="#" data-slot="item" data-variant="outline" data-size="sm" class="${ITEM_SM}">
    <div data-slot="item-media" class="${ITEM_MEDIA}">${BADGE_CHECK_SVG}</div>
    ${buildItemContent('Your profile has been verified.')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">${CHEVRON_RIGHT_SVG}</div>
  </a>
</div>`)
}

function buildSecurityBlock(): string {
  return buildBlock(`<div class="${itemSectionLgClass}" x-data="itemActionsDemo">
  <div data-slot="item" data-variant="outline" class="${ITEM_OUTLINE}">
    <div data-slot="item-media" data-variant="icon" class="${ITEM_MEDIA_ICON}">${SHIELD_ALERT_SVG}</div>
    ${buildItemContent('Security Alert', 'New login detected from unknown device.')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">
      ${buildActionButton('Review')}
    </div>
  </div>
</div>`)
}

function buildAvatarBlock(): string {
  return buildBlock(`<div class="${itemSectionLgClass}" x-data="itemActionsDemo">
  <div data-slot="item" data-variant="outline" class="${ITEM_OUTLINE}">
    <div data-slot="item-media" class="${ITEM_MEDIA}">${buildAvatar('https://github.com/evilrabbit.png', 'Evil Rabbit', 'size-10')}</div>
    ${buildItemContent('Evil Rabbit', 'Last seen 5 months ago')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">
      <button type="button" data-slot="button" class="${BUTTON_ICON_SM}" aria-label="Invite" @click="onAction('Invite')">${PLUS_SVG}</button>
    </div>
  </div>
  <div data-slot="item" data-variant="outline" class="${ITEM_OUTLINE}">
    <div data-slot="item-media" class="${ITEM_MEDIA}">
      <div class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        ${buildAvatar('https://github.com/shadcn.png', '@shadcn', 'hidden sm:flex size-8')}
        ${buildAvatar('https://github.com/maxleiter.png', '@maxleiter', 'hidden sm:flex size-8')}
        ${buildAvatar('https://github.com/evilrabbit.png', '@evilrabbit', 'size-8')}
      </div>
    </div>
    ${buildItemContent('No Team Members', 'Invite your team to collaborate on this project.')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">
      ${buildActionButton('Invite')}
    </div>
  </div>
</div>`)
}

function buildMusicBlock(): string {
  const items = itemMusic
    .map(
      (song) => `<a href="#" data-slot="item" data-variant="outline" role="listitem" class="${ITEM_OUTLINE}">
    <div data-slot="item-media" data-variant="image" class="${ITEM_MEDIA_IMAGE}">
      <img src="https://avatar.vercel.sh/${escapeAttr(song.title)}" alt="${escapeAttr(song.title)}" width="32" height="32" class="object-cover grayscale" />
    </div>
    <div data-slot="item-content" class="${ITEM_CONTENT}">
      <div data-slot="item-title" class="${ITEM_TITLE} line-clamp-1">${escapeHtml(song.title)} - <span class="text-muted-foreground">${escapeHtml(song.album)}</span></div>
      <p data-slot="item-description" class="${ITEM_DESC}">${escapeHtml(song.artist)}</p>
    </div>
    <div data-slot="item-content" class="${ITEM_CONTENT} flex-none text-center">
      <p data-slot="item-description" class="${ITEM_DESC}">${escapeHtml(song.duration)}</p>
    </div>
  </a>`,
    )
    .join('\n    ')

  return buildBlock(`<div class="${itemSectionMdClass}">
  <div role="list" data-slot="item-group" class="${ITEM_GROUP} gap-4">
    ${items}
  </div>
</div>`)
}

function buildPeopleBlock(): string {
  const rows = itemPeople
    .map((person, index) => {
      const separator =
        index !== itemPeople.length - 1
          ? `<div data-slot="item-separator" role="none" class="${ITEM_SEPARATOR}"></div>`
          : ''
      return `<div data-slot="item" class="${ITEM_BASE}">
    <div data-slot="item-media" class="${ITEM_MEDIA}">${buildAvatar(person.avatar, person.username)}</div>
    <div data-slot="item-content" class="${ITEM_CONTENT} gap-1">
      <div data-slot="item-title" class="${ITEM_TITLE}">${escapeHtml(person.username)}</div>
      <p data-slot="item-description" class="${ITEM_DESC}">${escapeHtml(person.email)}</p>
    </div>
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">
      <button type="button" data-slot="button" class="${BUTTON_GHOST_ICON}" @click="onAction('Add ${escapeAttr(person.username)}')">${PLUS_SVG}</button>
    </div>
  </div>
  ${separator}`
    })
    .join('\n    ')

  return buildBlock(`<div class="${itemSectionMdClass}" x-data="itemActionsDemo">
  <div role="list" data-slot="item-group" class="${ITEM_GROUP}">
    ${rows}
  </div>
</div>`)
}

function buildModelsBlock(): string {
  const items = itemModels
    .map(
      (model) => `<a href="#" data-slot="item" data-variant="outline" role="listitem" class="${ITEM_OUTLINE}">
    <div data-slot="item-header" class="${ITEM_HEADER}">
      <img src="${escapeAttr(model.image)}" alt="${escapeAttr(model.name)}" width="128" height="128" class="aspect-square w-full rounded-sm object-cover grayscale" />
    </div>
    ${buildItemContent(model.name, model.description)}
  </a>`,
    )
    .join('\n    ')

  return buildBlock(`<div class="${itemSectionXlClass}">
  <div role="list" data-slot="item-group" class="${ITEM_GROUP} grid grid-cols-3 gap-4">
    ${items}
  </div>
</div>`)
}

function buildLinksBlock(): string {
  return buildBlock(`<div class="${itemSectionMdClass}">
  <a href="#" data-slot="item" class="${ITEM_BASE}">
    ${buildItemContent('Visit our documentation', 'Learn how to get started with our components.')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">${CHEVRON_RIGHT_SVG}</div>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" data-slot="item" data-variant="outline" class="${ITEM_OUTLINE}">
    ${buildItemContent('External resource', 'Opens in a new tab with security attributes.')}
    <div data-slot="item-actions" class="${ITEM_ACTIONS}">${EXTERNAL_LINK_SVG}</div>
  </a>
</div>`)
}

function buildSelectBlock(): string {
  const menuItems = itemPeople
    .map(
      (person) => `<button type="button" data-slot="dropdown-menu-item" class="${MENU_ITEM} p-0" @click="closeMenu()">
      <div data-slot="item" data-size="sm" class="${ITEM_DROPDOWN_SM}">
        <div data-slot="item-media" class="${ITEM_MEDIA}">${buildAvatar(person.avatar, person.username)}</div>
        <div data-slot="item-content" class="${ITEM_CONTENT} gap-0.5">
          <div data-slot="item-title" class="${ITEM_TITLE}">${escapeHtml(person.username)}</div>
          <p data-slot="item-description" class="${ITEM_DESC}">${escapeHtml(person.email)}</p>
        </div>
      </div>
    </button>`,
    )
    .join('\n        ')

  return buildBlock(`<div class="flex min-h-64 w-full max-w-md flex-col items-center gap-6" x-data="itemSelectDemo" @keydown.escape.window="closeMenu()">
  <div data-slot="dropdown-menu" class="relative w-fit overflow-visible">
    <button
      type="button"
      x-ref="trigger"
      data-slot="dropdown-menu-trigger"
      class="${BUTTON_OUTLINE_SM} w-fit"
      @click="toggleMenu()"
      :aria-expanded="open"
    >
      Select ${CHEVRON_DOWN_SVG}
    </button>
    <div
      x-ref="content"
      x-show="open"
      x-cloak
      data-slot="dropdown-menu-content"
      class="${MENU_CONTENT}"
      align="end"
    >
      ${menuItems}
    </div>
  </div>
</div>`)
}

export function buildItemAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${itemFrameClass}">
    ${buildVariantsBlock()}
    ${buildBasicBlock()}
    ${buildSecurityBlock()}
    ${buildAvatarBlock()}
    ${buildMusicBlock()}
    ${buildPeopleBlock()}
    ${buildModelsBlock()}
    ${buildLinksBlock()}
    ${buildSelectBlock()}
  </div>
</div>`
}

export function extractItemToAlpine(_root: HTMLElement): string {
  return formatHtml(buildItemAlpineHtml())
}
