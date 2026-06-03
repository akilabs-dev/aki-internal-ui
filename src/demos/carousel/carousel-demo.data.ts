/** Figma column width for stacked carousel examples */
export const carouselDemoFrameWidthPx = 503
export const carouselDemoStackGapPx = 40

export const carouselSlideCount = 5

export function carouselDemoFrameStyle() {
  return {
    maxWidth: `${carouselDemoFrameWidthPx}px`,
    gap: `${carouselDemoStackGapPx}px`,
  } as const
}
