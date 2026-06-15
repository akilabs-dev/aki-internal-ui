/** Figma frame — 447 Fill × 120 Hug */
export const progressFrameMaxWidthPx = 447

export const progressFrameClass =
  'mx-auto flex w-full flex-col items-center justify-center rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function progressFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${progressFrameMaxWidthPx}px` }
}

export const progressDefaults = {
  initialValue: 13,
  animatedValue: 66,
  animationDelayMs: 500,
  widthClass: 'w-[60%]',
} as const

/** Shared Tailwind classes — mirror @/components/ui/progress */
export const progressRootClass =
  'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full'

export const progressIndicatorClass =
  'bg-primary h-full w-full flex-1 transition-all'
