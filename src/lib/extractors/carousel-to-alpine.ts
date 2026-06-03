import {
  carouselDemoFrameStyle,
  carouselDemoFrameWidthPx,
  carouselSlideCount,
} from '@/demos/carousel/carousel-demo.data'
import type { CarouselDemoVariant } from '@/lib/alpine/carousel-demo'

const BUTTON_ICON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-8'

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>`

const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`

const CARD =
  'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm'

function buildSlide(index: number, opts: { textClass: string, square?: boolean }): string {
  const contentClass = opts.square === false
    ? 'flex items-center justify-center p-6 px-6'
    : 'flex aspect-square items-center justify-center p-6 px-6'

  return `<div class="p-1">
  <div data-slot="card" class="${CARD}">
    <div data-slot="card-content" class="${contentClass}">
      <span class="${opts.textClass} font-semibold">${index + 1}</span>
    </div>
  </div>
</div>`
}

function itemClass(variant: CarouselDemoVariant): string {
  const base = 'min-w-0 shrink-0 grow-0 basis-full'
  if (variant === 'multi')
    return `${base} pl-4 md:basis-1/2 lg:basis-1/3`
  if (variant === 'vertical')
    return `${base} p-1 pt-4 md:basis-1/2`
  return `${base} pl-4`
}

function contentTrackClass(variant: CarouselDemoVariant): string {
  if (variant === 'vertical')
    return 'flex -mt-4 flex-col -mt-1 h-[200px]'
  return 'flex -ml-4'
}

function rootClass(variant: CarouselDemoVariant): string {
  if (variant === 'basic')
    return 'relative w-full max-w-xs'
  return 'relative w-full max-w-xs'
}

function prevButtonClass(variant: CarouselDemoVariant): string {
  const pos = variant === 'vertical'
    ? 'absolute size-8 rounded-full -top-12 left-1/2 -translate-x-1/2 rotate-90'
    : 'absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2'
  return `${BUTTON_ICON} ${pos}`
}

function nextButtonClass(variant: CarouselDemoVariant): string {
  const pos = variant === 'vertical'
    ? 'absolute size-8 rounded-full -bottom-12 left-1/2 -translate-x-1/2 rotate-90'
    : 'absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2'
  return `${BUTTON_ICON} ${pos}`
}

function slideTextClass(variant: CarouselDemoVariant): string {
  return variant === 'multi' ? 'text-3xl' : 'text-4xl'
}

function buildCarousel(variant: CarouselDemoVariant): string {
  const slides = Array.from({ length: carouselSlideCount }, (_, i) => {
    const square = variant !== 'vertical'
    return `<div data-slot="carousel-item" role="group" aria-roledescription="slide" class="${itemClass(variant)}">
${buildSlide(i, { textClass: slideTextClass(variant), square })}
</div>`
  }).join('\n      ')

  const statusBlock = variant === 'status'
    ? `
  <div class="py-2 text-center text-sm text-muted-foreground">
    Slide <span x-text="current"></span> of <span x-text="totalCount"></span>
  </div>`
    : ''

  const alpineScopeAttrs =
    variant === 'status'
      ? ''
      : `x-data="carouselDemo" data-carousel-variant="${variant}"`

  const wrapperOpen = variant === 'status'
    ? `<div
  class="w-full sm:w-auto"
  x-data="carouselDemo"
  data-carousel-variant="status"
>
  `
    : ''
  const wrapperClose = variant === 'status' ? '\n</div>' : ''

  return `${wrapperOpen}<div
  ${alpineScopeAttrs}
  data-slot="carousel"
  class="${rootClass(variant)}"
  role="region"
  aria-roledescription="carousel"
  tabindex="0"
  @keydown="onKeydown($event)"
>
  <div x-ref="viewport" data-slot="carousel-content" class="overflow-hidden">
    <div class="${contentTrackClass(variant)}">
      ${slides}
    </div>
  </div>
  <button
    type="button"
    data-slot="carousel-previous"
    class="${prevButtonClass(variant)}"
    :disabled="!canScrollPrev"
    @click="scrollPrev()"
  >
    ${ARROW_LEFT}
    <span class="sr-only">Previous Slide</span>
  </button>
  <button
    type="button"
    data-slot="carousel-next"
    class="${nextButtonClass(variant)}"
    :disabled="!canScrollNext"
    @click="scrollNext()"
  >
    ${ARROW_RIGHT}
    <span class="sr-only">Next Slide</span>
  </button>
</div>${statusBlock}${wrapperClose}`
}

export function buildCarouselAlpineHtml(): string {
  const frame = carouselDemoFrameStyle()
  const variants: CarouselDemoVariant[] = ['basic', 'multi', 'vertical', 'status']

  return `<div class="mx-auto flex w-full flex-col items-center" style="max-width:${carouselDemoFrameWidthPx}px;gap:${frame.gap}">
  ${variants.map((v) => buildCarousel(v)).join('\n\n  ')}
</div>`
}

export function extractCarouselToAlpine(_root: HTMLElement): string {
  return buildCarouselAlpineHtml()
}
