<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const slides = [
  {
    src: 'https://flowbite.com/docs/images/carousel/carousel-1.svg',
    alt: 'Slide 1',
    label: 'First Slide',
  },
  {
    src: 'https://flowbite.com/docs/images/carousel/carousel-2.svg',
    alt: 'Slide 2',
  },
  {
    src: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
    alt: 'Slide 3',
  },
]

const activeIndex = ref(0)
const autoplayMs = 5000
let timer: ReturnType<typeof setInterval> | undefined

function goTo(index: number) {
  activeIndex.value = (index + slides.length) % slides.length
}

function next() {
  goTo(activeIndex.value + 1)
}

function prev() {
  goTo(activeIndex.value - 1)
}

function startAutoplay() {
  stopAutoplay()
  timer = setInterval(next, autoplayMs)
}

function stopAutoplay() {
  if (timer) clearInterval(timer)
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>

<template>
  <div class="mx-auto max-w-2xl" aria-label="Carousel">
    <div
      class="relative overflow-hidden rounded-lg shadow-lg"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
    >
      <div class="relative h-80 md:h-96">
        <div
          v-for="(slide, index) in slides"
          :key="slide.src"
          class="absolute inset-0 transition-opacity duration-700 ease-in-out"
          :class="index === activeIndex ? 'opacity-100 z-10' : 'pointer-events-none opacity-0 z-0'"
          role="group"
          :aria-roledescription="'slide'"
          :aria-label="`${index + 1} of ${slides.length}`"
          :aria-hidden="index !== activeIndex"
        >
          <img :src="slide.src" :alt="slide.alt" class="h-full w-full object-cover" />
          <span
            v-if="slide.label"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl"
          >
            {{ slide.label }}
          </span>
        </div>
      </div>

      <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          class="h-3 w-3 rounded-full transition focus:outline-none"
          :class="index === activeIndex ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'"
          :aria-label="`Go to slide ${index + 1}`"
          :aria-current="index === activeIndex"
          @click="goTo(index)"
        />
      </div>

      <button
        type="button"
        class="absolute top-1/2 left-3 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/50 transition hover:bg-gray-300 focus:outline-none"
        aria-label="Previous slide"
        @click="prev"
      >
        <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        class="absolute top-1/2 right-3 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/50 transition hover:bg-gray-300 focus:outline-none"
        aria-label="Next slide"
        @click="next"
      >
        <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <p class="mt-5 text-center text-gray-700">
      This carousel matches the <strong class="font-semibold">HTML</strong> and
      <strong class="font-semibold">Vue</strong> tabs — copy HTML + script from the Code panel.
    </p>
  </div>
</template>
