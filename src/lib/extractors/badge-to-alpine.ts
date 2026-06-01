import {
  badgeDemoItems,
  badgeGridGapPx,
  badgeGridWidthPx,
  type BadgeDemoItem,
} from '@/demos/badge/badge-demo.data'

const BADGE_BASE =
  'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden'

const VARIANT_CLASSES: Record<string, string> = {
  default:
    'border-transparent bg-primary text-primary-foreground',
  secondary:
    'border-transparent bg-secondary text-secondary-foreground',
  destructive:
    'border-transparent bg-destructive text-destructive-foreground',
  outline: 'text-foreground',
}

const CHECK_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>`

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function badgeClass(item: BadgeDemoItem): string {
  const variant = item.variant ?? 'default'
  const parts = [BADGE_BASE, VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.default]
  if (item.class) parts.push(item.class)
  return parts.join(' ')
}

function buildBadge(item: BadgeDemoItem): string {
  const icon = item.icon ? CHECK_ICON_SVG : ''
  return `<span data-slot="badge" class="${badgeClass(item)}">${icon}${escapeHtml(item.label)}</span>`
}

export function buildBadgeAlpineHtml(): string {
  const badges = badgeDemoItems.map((item) => buildBadge(item)).join('\n  ')

  return `<div class="grid w-full grid-cols-4" style="max-width:${badgeGridWidthPx}px;gap:${badgeGridGapPx}px">
  ${badges}
</div>`
}

export function extractBadgeToAlpine(_root: HTMLElement): string {
  return buildBadgeAlpineHtml()
}
