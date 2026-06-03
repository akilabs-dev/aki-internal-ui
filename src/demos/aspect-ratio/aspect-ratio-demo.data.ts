export type AspectRatioDemoItem = {
  id: string
  src: string
  alt: string
}

export const aspectRatioDemoItem: AspectRatioDemoItem = {
  id: 'landscape-photo',
  src: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=598&dpr=2&q=80',
  alt: 'Photo by Drew Beamer',
}

/** Plain HTML only — 16:9 via aspect-video (Vue uses :ratio="16 / 9" inline) */
export const aspectRatioHtmlRootClass =
  'bg-muted aspect-video overflow-hidden rounded-lg'
