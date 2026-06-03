import {
  carouselDemoBlockClass,
  carouselDemoBlockInlineStyle,
  carouselDemoDividerClass,
  carouselDemoDividerInlineStyle,
  carouselDemoFrameClass,
  carouselDemoFrameBackground,
  carouselDemoFrameBorderColor,
  carouselDemoFrameWidthPx,
  carouselSlideCount,
  carouselStatusRowClass,
  carouselStatusSectionClass,
  carouselStatusSectionInlineStyle,
  carouselVerticalSlideHeightPx,
  carouselVerticalViewportHeightPx,
} from '@/demos/carousel/carousel-demo.data'
import type { CarouselDemoVariant } from '@/lib/alpine/carousel-demo'

const BUTTON_ICON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-8'

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>`

const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`

const CARD =
  'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm'

function buildSlide(index: number, opts: { textClass: string, square?: boolean, fill?: boolean }): string {
  const contentClass = opts.fill
    ? 'flex h-full min-h-0 items-center justify-center p-4 px-6'
    : opts.square === false
      ? 'flex items-center justify-center p-6 px-6'
      : 'flex aspect-square items-center justify-center p-6 px-6'

  const wrapperClass = opts.fill ? 'box-border h-full p-1' : 'p-1'
  const cardClass = opts.fill ? `${CARD} h-full gap-0 py-0 shadow-sm` : CARD

  return `<div class="${wrapperClass}">
  <div data-slot="card" class="${cardClass}">
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
    return 'min-w-0 min-h-0 shrink-0 grow-0 basis-auto overflow-hidden p-1 pt-0'
  return `${base} pl-4`
}

function contentViewportClass(variant: CarouselDemoVariant): string {
  const base =
    'overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
  if (variant === 'vertical')
    return `${base} h-[200px]`
  return base
}

function contentViewportStyle(variant: CarouselDemoVariant): string {
  if (variant === 'vertical')
    return `height:${carouselVerticalViewportHeightPx}px`
  return ''
}

function contentTrackClass(variant: CarouselDemoVariant): string {
  if (variant === 'vertical')
    return 'flex h-full flex-col gap-0'
  return 'flex h-full -ml-4'
}

function rootClass(variant: CarouselDemoVariant): string {
  if (variant === 'status')
    return 'relative mx-auto w-full max-w-xs'
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
    const fill = variant === 'vertical'
    const slideStyle =
      variant === 'vertical' ? ` style="height:${carouselVerticalSlideHeightPx}px"` : ''
    return `<div data-slot="carousel-item" role="group" aria-roledescription="slide" class="${itemClass(variant)}"${slideStyle}>
${buildSlide(i, { textClass: slideTextClass(variant), square, fill })}
</div>`
  }).join('\n      ')

  const alpineScopeAttrs =
    variant === 'status'
      ? ''
      : `x-data="carouselDemo" data-carousel-variant="${variant}"`

  const carouselHtml = `<div
  ${alpineScopeAttrs}
  data-slot="carousel"
  class="${rootClass(variant)}"
  role="region"
  aria-roledescription="carousel"
  tabindex="0"
  @keydown="onKeydown($event)"
>
  <div x-ref="viewport" data-slot="carousel-content" class="${contentViewportClass(variant)}"${contentViewportStyle(variant) ? ` style="${contentViewportStyle(variant)}"` : ''}>
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
</div>`

  if (variant === 'status') {
    return `<div
  class="${carouselStatusSectionClass} ${carouselDemoBlockClass}"
  style="${carouselStatusSectionInlineStyle()}"
  x-data="carouselDemo"
  data-carousel-variant="status"
>
  ${carouselHtml}
  <p class="${carouselStatusRowClass}">
    Slide <span x-text="current">1</span> of <span x-text="totalCount">5</span>
  </p>
</div>`
  }

  return `<div class="${carouselDemoBlockClass}" style="${carouselDemoBlockInlineStyle()}">
  ${carouselHtml}
</div>`
}

function buildCarouselDividerHtml(): string {
  return `<hr class="${carouselDemoDividerClass}" style="${carouselDemoDividerInlineStyle()}" />`
}

export function buildCarouselAlpineHtml(): string {
  const variants: CarouselDemoVariant[] = ['basic', 'multi', 'vertical', 'status']
  const frameStyle = `max-width:${carouselDemoFrameWidthPx}px;border-color:${carouselDemoFrameBorderColor};background-color:${carouselDemoFrameBackground}`

  const blocks: string[] = []
  for (const variant of variants) {
    blocks.push(buildCarousel(variant))
    if (variant !== 'status')
      blocks.push(buildCarouselDividerHtml())
  }

  return `<div class="${carouselDemoFrameClass}" style="${frameStyle}">
  ${blocks.join('\n\n  ')}
</div>`
}

export function extractCarouselToAlpine(_root: HTMLElement): string {
  return buildCarouselAlpineHtml()
}
