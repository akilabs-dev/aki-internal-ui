import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel'
import { carouselSlideCount } from '@/demos/carousel/carousel-demo.data'

export type CarouselDemoVariant = 'basic' | 'multi' | 'vertical' | 'status'

function emblaOptions(variant: CarouselDemoVariant) {
  const axis = variant === 'vertical' ? 'y' : 'x'
  const align = variant === 'basic' ? 'center' : 'start'
  return { axis, align } as const
}

/** Alpine.data factory — one instance per carousel root via data-carousel-variant. */
export function createCarouselDemoData() {
  return {
    embla: null as EmblaCarouselType | null,
    variant: 'basic' as CarouselDemoVariant,
    canScrollPrev: false,
    canScrollNext: false,
    current: 1,
    totalCount: carouselSlideCount,

    init(this: {
      $root: HTMLElement
      $refs: { viewport?: HTMLElement }
      embla: EmblaCarouselType | null
      variant: CarouselDemoVariant
      canScrollPrev: boolean
      canScrollNext: boolean
      current: number
      totalCount: number
      updateScrollState: () => void
    }) {
      const root = this.$root
      const variant = (root.dataset.carouselVariant || 'basic') as CarouselDemoVariant
      this.variant = variant

      const viewport = this.$refs.viewport
      if (!viewport)
        return

      this.embla = EmblaCarousel(viewport, emblaOptions(variant))

      const update = () => {
        if (!this.embla)
          return
        this.canScrollPrev = this.embla.canScrollPrev()
        this.canScrollNext = this.embla.canScrollNext()
        if (variant === 'status') {
          this.totalCount = this.embla.scrollSnapList().length
          this.current = this.embla.selectedScrollSnap() + 1
        }
      }

      this.embla.on('init', update)
      this.embla.on('reInit', update)
      this.embla.on('select', update)
      update()
    },

    destroy(this: { embla: EmblaCarouselType | null }) {
      this.embla?.destroy()
      this.embla = null
    },

    scrollPrev(this: { embla: EmblaCarouselType | null }) {
      this.embla?.scrollPrev()
    },

    scrollNext(this: { embla: EmblaCarouselType | null }) {
      this.embla?.scrollNext()
    },

    onKeydown(
      this: { variant: CarouselDemoVariant, scrollPrev: () => void, scrollNext: () => void },
      event: KeyboardEvent,
    ) {
      const prevKey = this.variant === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
      const nextKey = this.variant === 'vertical' ? 'ArrowDown' : 'ArrowRight'

      if (event.key === prevKey) {
        event.preventDefault()
        this.scrollPrev()
        return
      }

      if (event.key === nextKey) {
        event.preventDefault()
        this.scrollNext()
      }
    },
  }
}
