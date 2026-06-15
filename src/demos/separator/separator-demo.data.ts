/** Figma frame — Fill 377px */
export const separatorFrameMaxWidthPx = 377

export const separatorFrameClass =
  'mx-auto flex w-full flex-col rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function separatorFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${separatorFrameMaxWidthPx}px` }
}

export const separatorContentClass = 'w-full'

export const separatorHeaderTitle = 'Radix Primitives'

export const separatorHeaderDescription = 'An open-source UI component library.'

export const separatorNavItems = ['Blog', 'Docs', 'Source'] as const

export const separatorHeaderBlockClass = 'space-y-1'

export const separatorHeaderTitleClass = 'text-sm font-medium leading-none'

export const separatorHeaderDescriptionClass = 'text-sm text-muted-foreground'

export const separatorHorizontalClass = 'my-4'

/** Figma footer row — horizontal, gap 40px */
export const separatorNavRowClass = 'flex h-5 items-center gap-10 text-sm'

export const separatorVerticalClass = 'h-5'

/** Shared Tailwind — mirror @/components/ui/separator */
export const separatorBaseClass =
  'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px'
