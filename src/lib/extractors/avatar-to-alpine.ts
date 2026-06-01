import {
  avatarCircularItem,
  avatarGroupItems,
  avatarRoundedLgRadiusPx,
  avatarSizePx,
  avatarSquareItem,
  type AvatarDemoItem,
} from '@/demos/avatar/avatar-demo.data'
import { figmaLinks } from '@/figma-links'

const AVATAR_ROOT =
  'relative flex shrink-0 overflow-hidden'
const AVATAR_IMAGE =
  'aspect-square size-full rounded-[inherit] object-cover'
const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function avatarStyle(item: Pick<AvatarDemoItem, 'shape'>): string {
  const size = `width:${avatarSizePx}px;height:${avatarSizePx}px`
  if (item.shape === 'rounded-lg') {
    return `${size};border-radius:${avatarRoundedLgRadiusPx}px`
  }
  return size
}

function avatarRadiusClass(item: Pick<AvatarDemoItem, 'shape'>): string {
  return item.shape === 'rounded-lg' ? 'rounded-lg' : 'rounded-full'
}

function buildAvatar(
  item: AvatarDemoItem,
  options: { group?: boolean } = {},
): string {
  const groupClass = options.group
    ? ' ring-2 ring-background grayscale'
    : ''

  return `<span
    data-slot="avatar"
    class="${AVATAR_ROOT} ${avatarRadiusClass(item)}${groupClass}"
    style="${avatarStyle(item)}"
  ><img
    data-slot="avatar-image"
    class="${AVATAR_IMAGE}"
    src="${escapeAttr(item.src)}"
    alt="${escapeAttr(item.alt)}"
  /></span>`
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.avatar)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

/** Static HTML matching Vue AvatarDemo (images, 32px, rounded-lg variant). */
export function buildAvatarAlpineHtml(): string {
  const rows = [
    `<div class="flex items-center py-6 first:pt-0">${buildAvatar(avatarCircularItem)}</div>`,
    `<div class="flex items-center py-6">${buildAvatar(avatarSquareItem)}</div>`,
    `<div class="flex items-center py-6"><div class="flex shrink-0 -space-x-2">${avatarGroupItems.map((item) => buildAvatar(item, { group: true })).join('')}</div></div>`,
  ].join('\n')

  return `<div class="space-y-4">
${buildFigmaLink()}
<div class="divide-border divide-y">
${rows}
</div>
</div>`
}

export function extractAvatarToAlpine(_root: HTMLElement): string {
  return buildAvatarAlpineHtml()
}
