<script setup lang="ts">
import { ref } from 'vue'

const slides = [
  {
    src: 'https://picsum.photos/id/1015/800/600',
    alt: 'Mountain lake landscape',
  },
  {
    src: 'https://picsum.photos/id/1018/800/600',
    alt: 'Coastal cliffs and ocean',
  },
  {
    src: 'https://picsum.photos/id/1025/800/600',
    alt: 'Dog on a trail',
  },
]

const trackRef = ref<HTMLElement | null>(null)

function scrollBySlide(direction: -1 | 1) {
  const track = trackRef.value
  if (!track) return
  track.scrollBy({ left: direction * track.offsetWidth, behavior: 'smooth' })
}
</script>

<template>
  <div class="relative mx-auto max-w-2xl" aria-label="Carousel 2">
    <div
      ref="trackRef"
      class="carousel flex max-w-xl snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-lg shadow-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        v-for="slide in slides"
        :key="slide.src"
        class="carousel-item w-full shrink-0 snap-center"
      >
        <img :src="slide.src" :alt="slide.alt" class="h-96 w-full object-cover" loading="lazy" />
      </div>
    </div>

    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-start pl-4">
      <button
        type="button"
        class="carousel-control-prev pointer-events-auto rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none"
        aria-label="Previous slide"
        @click="scrollBySlide(-1)"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-4">
      <button
        type="button"
        class="carousel-control-next pointer-events-auto rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none"
        aria-label="Next slide"
        @click="scrollBySlide(1)"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>
