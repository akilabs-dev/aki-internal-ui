import {
  hoverCardFrameClass,
  hoverCardProfile,
  hoverCardSectionClass,
} from '@/demos/hover-card/hover-card-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const BUTTON_LINK =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-primary underline-offset-4 hover:underline h-9 px-4 py-2'

const HOVER_CARD_CONTENT =
  'bg-popover text-popover-foreground z-50 w-80 rounded-md border p-4 shadow-md outline-hidden'

const AVATAR_ROOT = 'relative flex size-8 shrink-0 overflow-hidden rounded-full'
const AVATAR_IMAGE = 'aspect-square size-full rounded-[inherit] object-cover'

const CALENDAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 size-4 opacity-70"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>`

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
  <a href="${escapeAttr(figmaLinks.hoverCard)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildHoverCard(): string {
  return `<div data-slot="hover-card" class="inline-block" x-data="hoverCardDemo">
  <button
    type="button"
    x-ref="trigger"
    data-slot="hover-card-trigger"
    class="${BUTTON_LINK}"
    :class="{ 'underline': open }"
    @mouseenter="onTriggerEnter()"
    @mouseleave="onTriggerLeave()"
    @focus="onTriggerEnter()"
    @blur="onTriggerLeave()"
  >${escapeHtml(hoverCardProfile.handle)}</button>
  <div
    x-ref="content"
    x-show="open"
    x-cloak
    data-slot="hover-card-content"
    class="${HOVER_CARD_CONTENT}"
    @mouseenter="onContentEnter()"
    @mouseleave="onContentLeave()"
    role="dialog"
    :aria-hidden="!open"
  >
    <div class="flex justify-between space-x-4">
      <span data-slot="avatar" class="${AVATAR_ROOT}">
        <img
          data-slot="avatar-image"
          class="${AVATAR_IMAGE}"
          src="${escapeAttr(hoverCardProfile.avatarSrc)}"
          alt="${escapeAttr(hoverCardProfile.title)}"
          referrerpolicy="no-referrer"
        />
      </span>
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">${escapeHtml(hoverCardProfile.title)}</h4>
        <p class="text-sm">${escapeHtml(hoverCardProfile.description)}</p>
        <div class="flex items-center pt-2">
          ${CALENDAR_SVG}
          <span class="text-xs text-muted-foreground">${escapeHtml(hoverCardProfile.joined)}</span>
        </div>
      </div>
    </div>
  </div>
</div>`
}

export function buildHoverCardAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${hoverCardFrameClass}">
    <div class="${hoverCardSectionClass}">
      ${buildHoverCard()}
    </div>
  </div>
</div>`
}

export function extractHoverCardToAlpine(_root: HTMLElement): string {
  return formatHtml(buildHoverCardAlpineHtml())
}
