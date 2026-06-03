/** Figma frame */
export const collapsibleFrameMaxWidthPx = 390
export const collapsibleFrameClass =
  'flex w-full flex-col gap-4 rounded-xl border border-border p-5'

export function collapsibleFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${collapsibleFrameMaxWidthPx}px` }
}

export const collapsibleRootClass = 'flex w-full flex-col gap-2'

export const collapsibleHeaderClass =
  'flex items-center justify-between gap-4 px-4'

export const collapsibleTitleClass = 'text-sm font-semibold'

export const collapsibleItemClass =
  'rounded-md border px-4 py-2 font-mono text-sm'

export const collapsibleContentClass = 'flex flex-col gap-2'

export const collapsibleDemoTitle = '@peduarte starred 3 repositories'

/** First row always visible; rest inside CollapsibleContent */
export const collapsibleDemoPrimaryItem = '@radix-ui/primitives'

export const collapsibleDemoHiddenItems = [
  '@radix-ui/colors',
  '@stitches/react',
] as const
