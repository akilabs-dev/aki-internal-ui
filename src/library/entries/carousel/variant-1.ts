import type { LibraryVariant } from '../../types'
import Carousel1 from '../../../components/previews/carousel/carousel1.vue'
import { tailwindCopyCss } from '../../snippets/tailwind-copy-css'
import { tailwindHtmlSetup } from '../../snippets/tailwind-html-setup'

const html = `<div class="mx-auto max-w-2xl">
  <div class="relative overflow-hidden rounded-lg shadow-lg" data-carousel-root>
    <div class="relative h-80 md:h-96">
      <div
        data-carousel-slide
        class="absolute inset-0 z-10 opacity-100 transition-opacity duration-700 ease-in-out"
      >
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          class="h-full w-full object-cover"
          alt="Slide 1"
        />
        <span
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl"
        >First Slide</span>
      </div>
      <div
        data-carousel-slide
        class="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-in-out"
      >
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          class="h-full w-full object-cover"
          alt="Slide 2"
        />
      </div>
      <div
        data-carousel-slide
        class="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-in-out"
      >
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          class="h-full w-full object-cover"
          alt="Slide 3"
        />
      </div>
    </div>

    <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
      <button
        type="button"
        data-carousel-dot
        class="h-3 w-3 rounded-full bg-gray-600 transition focus:outline-none"
        aria-label="Go to slide 1"
      ></button>
      <button
        type="button"
        data-carousel-dot
        class="h-3 w-3 rounded-full bg-gray-300 transition hover:bg-gray-400 focus:outline-none"
        aria-label="Go to slide 2"
      ></button>
      <button
        type="button"
        data-carousel-dot
        class="h-3 w-3 rounded-full bg-gray-300 transition hover:bg-gray-400 focus:outline-none"
        aria-label="Go to slide 3"
      ></button>
    </div>

    <button
      type="button"
      data-carousel-prev
      class="absolute top-1/2 left-3 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/50 transition hover:bg-gray-300 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <button
      type="button"
      data-carousel-next
      class="absolute top-1/2 right-3 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/50 transition hover:bg-gray-300 focus:outline-none"
      aria-label="Next slide"
    >
      <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</div>`

const carouselVanillaJs = `/* Paste in <script> before </body> — pairs with HTML tab (matches library preview) */

document.querySelectorAll('[data-carousel-root]').forEach((root) => {
  const slides = [...root.querySelectorAll('[data-carousel-slide]')]
  const dots = [...root.querySelectorAll('[data-carousel-dot]')]
  const prevBtn = root.querySelector('[data-carousel-prev]')
  const nextBtn = root.querySelector('[data-carousel-next]')
  let active = 0
  let timer

  function show(index) {
    active = (index + slides.length) % slides.length
    slides.forEach((slide, i) => {
      const on = i === active
      slide.classList.toggle('opacity-100', on)
      slide.classList.toggle('opacity-0', !on)
      slide.classList.toggle('z-10', on)
      slide.classList.toggle('z-0', !on)
      slide.classList.toggle('pointer-events-none', !on)
    })
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-gray-600', i === active)
      dot.classList.toggle('bg-gray-300', i !== active)
    })
  }

  function startAutoplay() {
    stopAutoplay()
    timer = setInterval(() => show(active + 1), 5000)
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer)
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)))
  prevBtn?.addEventListener('click', () => show(active - 1))
  nextBtn?.addEventListener('click', () => show(active + 1))
  root.addEventListener('mouseenter', stopAutoplay)
  root.addEventListener('mouseleave', startAutoplay)
  startAutoplay()
})`

export const carousel1Variant: LibraryVariant = {
  id: 'carousel1',
  label: 'Carousel 1',
  description: 'Image carousel with indicators, prev/next controls, and autoplay.',
  codeLocation: 'src/components/previews/carousel/carousel1.vue',
  preview: Carousel1,
  code: {
    html,
    css: `${tailwindCopyCss}

${carouselVanillaJs}`,
    usage: {
      html: `${tailwindHtmlSetup}

<!-- 1. Paste HTML tab into your page -->
<!-- 2. Wrap carouselVanillaJs (CSS tab) in <script>...</script> before </body> -->
<!-- Preview matches this markup + script (no Flowbite required) -->`,
      vue: `<script setup lang="ts">
import Carousel1 from '@/components/previews/carousel/carousel1.vue'
</script>

<template>
  <Carousel1 />
</template>`,
    },
  },
}
