/** Figma frame — horizontal pair */
export const popoverFrameMaxWidthPx = 504

export const popoverFrameClass =
  'mx-auto flex w-full flex-row flex-wrap items-start justify-center gap-4 overflow-visible rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function popoverFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${popoverFrameMaxWidthPx}px` }
}

export const popoverTriggerLabel = 'Open popover'

export const popoverDimensionsTitle = 'Dimensions'

export const popoverDimensionsDescription = 'Set the dimensions for the layer.'

export const popoverDimensionFields = [
  { id: 'popover-width', label: 'Width', value: '100%' },
  { id: 'popover-max-width', label: 'Max. width', value: '320px' },
  { id: 'popover-height', label: 'Height', value: '25px' },
  { id: 'popover-max-height', label: 'Max. height', value: 'none' },
] as const

/** Shared Tailwind classes — mirror popover + button + form primitives */
const buttonBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

export const popoverTriggerButtonClass =
  `${buttonBase} border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2`

export const popoverContentClass =
  'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden'

export const popoverLabelClass =
  'flex items-center gap-2 text-sm leading-none font-medium select-none'

export const popoverInputClass =
  'border-input placeholder:text-muted-foreground dark:bg-input/30 h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'
