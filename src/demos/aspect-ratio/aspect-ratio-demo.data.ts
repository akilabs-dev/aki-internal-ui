export type AspectRatioDemoItem = {
  id: string
  width: number
  height: number
  ratio: number
  src: string
  alt: string
}

export const aspectRatioDemoItem: AspectRatioDemoItem = {
  id: 'landscape-photo',
  width: 598,
  height: 336.38,
  ratio: 598 / 336.38,
  src: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=598&dpr=2&q=80',
  alt: 'Photo by Drew Beamer',
}
