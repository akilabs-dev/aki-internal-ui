/** Figma frame */
export const paginationFrameMaxWidthPx = 405

export const paginationFrameClass =
  'mx-auto flex w-full flex-col items-center justify-center rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function paginationFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${paginationFrameMaxWidthPx}px` }
}

export const paginationDefaults = {
  itemsPerPage: 10,
  total: 30,
  defaultPage: 2,
} as const

/** Shared Tailwind classes — mirror @/components/ui/button buttonVariants + pagination slots */
const paginationButtonBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

export const paginationRootClass = 'mx-auto flex w-full justify-center'

export const paginationContentClass = 'flex flex-row items-center gap-1'

export const paginationNavButtonClass =
  `${paginationButtonBase} hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 gap-1 px-2.5`

/** Inactive page — plain ghost text (no border box) */
export const paginationPageInactiveClass =
  `${paginationButtonBase} hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9`

/** Active page — outlined square like Figma */
export const paginationPageActiveClass =
  `${paginationButtonBase} border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9`

export const paginationEllipsisClass = 'flex size-9 items-center justify-center text-muted-foreground'
