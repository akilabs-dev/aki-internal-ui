/** Figma frame — vertical tags + separator + horizontal gallery */
export const scrollAreaFrameMaxWidthPx = 503

export const scrollAreaFrameClass =
  'mx-auto flex w-full flex-col items-center gap-6 rounded-3xl border border-[#E5E5E5] bg-white px-10 py-10'

export function scrollAreaFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${scrollAreaFrameMaxWidthPx}px` }
}

export const scrollAreaTags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export type ScrollAreaArtwork = {
  artist: string
  src: string
}

export const scrollAreaArtworks: ScrollAreaArtwork[] = [
  {
    artist: 'Ornella Binni',
    src: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    src: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    src: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Jessica Ruscello',
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Cosmic Timetraveler',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80',
  },
]

/** Shared Tailwind classes — mirror @/components/ui/scroll-area + separator */
export const scrollAreaRootClass = 'relative'

export const scrollAreaVerticalClass = 'h-72 w-48 rounded-md border'

/** Figma horizontal gallery — Fill 382px, gap-4 */
export const scrollAreaHorizontalMaxWidthPx = 382

export const scrollAreaHorizontalClass = 'w-full min-w-0 whitespace-nowrap rounded-md border'

export function scrollAreaHorizontalStyle(): { maxWidth: string } {
  return { maxWidth: `${scrollAreaHorizontalMaxWidthPx}px` }
}

export const scrollAreaVerticalViewportClass =
  'focus-visible:ring-ring/50 size-full min-w-0 rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'

/** HTML preview — scroll via overflow; native bar hidden to match reka-ui custom scrollbar */
export const scrollAreaHorizontalViewportClass =
  'focus-visible:ring-ring/50 size-full min-w-0 rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'

export const scrollAreaScrollbarVerticalClass =
  'flex touch-none p-px transition-colors select-none h-full w-2.5 border-l border-l-transparent'

export const scrollAreaScrollbarHorizontalClass =
  'flex touch-none p-px transition-colors select-none h-2.5 flex-col border-t border-t-transparent'

export const scrollAreaThumbClass = 'bg-border relative flex-1 rounded-full'

export const scrollAreaTagsTitleClass = 'mb-4 text-sm leading-none font-medium'

export const scrollAreaTagClass = 'text-sm'

export const scrollAreaTagSeparatorClass = 'bg-border shrink-0 my-2 h-px w-full'

export const scrollAreaSectionSeparatorClass = 'bg-border w-full min-w-0 shrink-0 h-px'

export const scrollAreaHorizontalContentClass = 'flex w-max gap-4 p-4'

export const scrollAreaFigureClass = 'shrink-0'

export const scrollAreaImageWrapClass = 'overflow-hidden rounded-md'

export const scrollAreaImageClass = 'aspect-[3/4] w-[110px] object-cover'

export const scrollAreaCaptionClass = 'text-muted-foreground pt-2 text-xs'

export const scrollAreaCaptionNameClass = 'text-foreground font-semibold'
