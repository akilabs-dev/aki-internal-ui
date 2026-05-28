import type { LibraryVariant } from '../../types'
import Carousel2 from '../../../components/previews/carousel/carousel2.vue'
import { tailwindCopyCss } from '../../snippets/tailwind-copy-css'
import { tailwindHtmlSetup } from '../../snippets/tailwind-html-setup'

const html = `<div class="relative mx-auto max-w-xl">
  <div
    class="carousel flex max-w-xl snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-lg shadow-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    data-carousel-scroll
  >
    <div class="carousel-item w-full shrink-0 snap-center">
      <img
        src="https://picsum.photos/id/1015/800/600"
        alt="Mountain lake landscape"
        class="h-96 w-full object-cover"
        loading="lazy"
      />
    </div>
    <div class="carousel-item w-full shrink-0 snap-center">
      <img
        src="https://picsum.photos/id/1018/800/600"
        alt="Coastal cliffs and ocean"
        class="h-96 w-full object-cover"
        loading="lazy"
      />
    </div>
    <div class="carousel-item w-full shrink-0 snap-center">
      <img
        src="https://picsum.photos/id/1025/800/600"
        alt="Dog on a trail"
        class="h-96 w-full object-cover"
        loading="lazy"
      />
    </div>
  </div>

  <div class="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
    <button
      type="button"
      class="carousel-control-prev rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
  </div>
  <div class="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
    <button
      type="button"
      class="carousel-control-next rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none"
      aria-label="Next slide"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</div>`

const carouselScrollJs = `/* Paste in <script> before </body> — pairs with HTML tab */

document.querySelectorAll('[data-carousel-scroll]').forEach((carousel) => {
  const root = carousel.closest('.relative') ?? carousel.parentElement
  const prevButton = root?.querySelector('.carousel-control-prev')
  const nextButton = root?.querySelector('.carousel-control-next')
  if (!prevButton || !nextButton) return

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' })
  })
  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' })
  })
})`

export const carousel2Variant: LibraryVariant = {
  id: 'carousel-2',
  label: 'Carousel 2',
  description: 'Horizontal scroll carousel with photo slides and dark prev/next controls.',
  codeLocation: 'src/components/previews/carousel/carousel2.vue',
  preview: Carousel2,
  code: {
    html,
    css: `${tailwindCopyCss}

${carouselScrollJs}`,
    usage: {
      html: `${tailwindHtmlSetup}

<!-- 1. Paste HTML tab -->
<!-- 2. Add carouselScrollJs (CSS tab) inside <script> before </body> -->
<!-- Images use picsum.photos (stable IDs) — replace src with your own URLs -->`,
      vue: `<script setup lang="ts">
import Carousel2 from '@/components/previews/carousel/carousel2.vue'
</script>

<template>
  <Carousel2 />
</template>`,
    },
  },
}
