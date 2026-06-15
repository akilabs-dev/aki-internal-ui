/** Figma frame — vertical radio list */
export const radioGroupFrameMaxWidthPx = 320

export const radioGroupFrameClass =
  'mx-auto flex w-full flex-col items-start justify-center rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function radioGroupFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${radioGroupFrameMaxWidthPx}px` }
}

export const radioGroupDefaultValue = 'default'

export const radioGroupOptions = [
  { id: 'r1', value: 'default', label: 'Default' },
  { id: 'r2', value: 'comfortable', label: 'Comfortable' },
  { id: 'r3', value: 'compact', label: 'Compact' },
] as const

export const radioGroupRowClass = 'flex items-center space-x-2'

/** Shared Tailwind classes — mirror @/components/ui/radio-group + label */
export const radioGroupRootClass = 'grid gap-3'

export const radioGroupItemClass =
  'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'

export const radioGroupIndicatorClass = 'relative flex items-center justify-center'

export const radioGroupLabelClass =
  'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50'

export const radioGroupIndicatorIconClass =
  'fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2'

export const radioGroupIndicatorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${radioGroupIndicatorIconClass}"><circle cx="12" cy="12" r="10"></circle></svg>`
