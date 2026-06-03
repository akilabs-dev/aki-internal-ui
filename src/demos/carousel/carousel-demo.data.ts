/** Figma frame — vertical stack of carousel examples */
export const carouselDemoFrameWidthPx = 615
/** Tailwind p-14 */
export const carouselDemoFramePaddingPx = 56
/** Tailwind gap-y-10 */
export const carouselDemoStackGapPx = 40
export const carouselDemoFrameBorderColor = '#E5E5E5'
export const carouselDemoFrameBackground = '#FFFFFF'

export const carouselSlideCount = 5

/** Vertical carousel viewport (Figma / shadcn docs) */
export const carouselVerticalViewportHeightPx = 200
/** Each slide = half the viewport so exactly 2 cards are visible */
export const carouselVerticalSlideHeightPx =
  carouselVerticalViewportHeightPx / 2

/** Figma status row below single-slide carousel (frame width − horizontal padding) */
export const carouselStatusRowWidthPx =
  carouselDemoFrameWidthPx - carouselDemoFramePaddingPx * 2

export const carouselStatusRowClass =
  'flex w-full min-h-[18px] items-center justify-center py-2 text-center text-sm text-muted-foreground'

export const carouselStatusSectionClass = 'flex w-full flex-col items-center'

export function carouselStatusSectionStyle() {
  return {
    maxWidth: `${carouselStatusRowWidthPx}px`,
  } as const
}

/** Simple horizontal rule between carousel examples (wireframe / Figma 503px) */
export const carouselDemoDividerClass =
  'h-px w-full shrink-0 border-t border-[#E5E5E5]'

export const carouselDemoDividerMarginTopPx = 35

export function carouselDemoDividerStyle() {
  return {
    maxWidth: `${carouselStatusRowWidthPx}px`,
    marginTop: `${carouselDemoDividerMarginTopPx}px`,
  } as const
}

/** Vertical space around each carousel block (Figma) */
export const carouselDemoBlockMarginTopPx = 65
export const carouselDemoBlockMarginBottomPx = 45

export const carouselDemoBlockClass = 'flex w-full justify-center'

export function carouselDemoBlockStyle() {
  return {
    marginTop: `${carouselDemoBlockMarginTopPx}px`,
    marginBottom: `${carouselDemoBlockMarginBottomPx}px`,
  } as const
}

export function carouselDemoBlockInlineStyle(): string {
  const block = carouselDemoBlockStyle()
  return `margin-top:${block.marginTop};margin-bottom:${block.marginBottom}`
}

export function carouselStatusSectionInlineStyle(): string {
  return `max-width:${carouselStatusRowWidthPx}px;${carouselDemoBlockInlineStyle()}`
}

export function carouselDemoDividerInlineStyle(): string {
  const divider = carouselDemoDividerStyle()
  return `max-width:${divider.maxWidth};margin-top:${divider.marginTop}`
}

export const carouselDemoFrameClass =
  'mx-auto flex w-full flex-col items-center gap-y-0 rounded-3xl border bg-white p-14'

export function carouselDemoFrameStyle() {
  return {
    maxWidth: `${carouselDemoFrameWidthPx}px`,
    borderColor: carouselDemoFrameBorderColor,
    backgroundColor: carouselDemoFrameBackground,
  } as const
}
