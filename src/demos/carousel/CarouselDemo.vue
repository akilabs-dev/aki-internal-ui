<script setup lang="ts">
import type { CarouselApi } from '@/components/ui/carousel'
import { ref } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import CarouselDemoDivider from './CarouselDemoDivider.vue'
import {
  carouselDemoBlockClass,
  carouselDemoBlockStyle,
  carouselDemoFrameClass,
  carouselDemoFrameStyle,
  carouselSlideCount,
  carouselStatusRowClass,
  carouselStatusSectionClass,
  carouselStatusSectionStyle,
  carouselVerticalSlideHeightPx,
  carouselVerticalViewportHeightPx,
} from './carousel-demo.data'

const totalCount = ref(carouselSlideCount)
const current = ref(1)

function setApi(carouselApi: CarouselApi | undefined) {
  if (!carouselApi)
    return

  totalCount.value = carouselApi.scrollSnapList().length
  current.value = carouselApi.selectedScrollSnap() + 1

  carouselApi.on('select', () => {
    current.value = carouselApi.selectedScrollSnap() + 1
  })
}
</script>

<template>
  <div
    :class="carouselDemoFrameClass"
    :style="carouselDemoFrameStyle()"
  >
    <!-- 1. Basic -->
    <div
      :class="carouselDemoBlockClass"
      :style="carouselDemoBlockStyle()"
    >
      <Carousel class="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem v-for="i in carouselSlideCount" :key="`basic-${i}`">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-4xl font-semibold">{{ i }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
    </div>
    <CarouselDemoDivider />

    <!-- 2. Multiple slides visible -->
    <div
      :class="carouselDemoBlockClass"
      :style="carouselDemoBlockStyle()"
    >
      <Carousel
      class="relative w-full max-w-xs"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(_, index) in carouselSlideCount"
          :key="`multi-${index}`"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-3xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
    </div>
    <CarouselDemoDivider />

    <!-- 3. Vertical -->
    <div
      :class="carouselDemoBlockClass"
      :style="carouselDemoBlockStyle()"
    >
      <Carousel
      orientation="vertical"
      class="relative w-full max-w-xs"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent
        vertical-compact
        class="h-[200px]"
        :style="{ height: `${carouselVerticalViewportHeightPx}px` }"
      >
        <CarouselItem
          v-for="(_, index) in carouselSlideCount"
          :key="`vertical-${index}`"
          class="!pt-0 min-h-0 shrink-0 grow-0 basis-auto overflow-hidden p-1"
          :style="{ height: `${carouselVerticalSlideHeightPx}px` }"
        >
          <div class="box-border h-full p-1">
            <Card class="h-full gap-0 py-0 shadow-sm">
              <CardContent class="flex h-full min-h-0 items-center justify-center p-4">
                <span class="text-3xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
    </div>
    <CarouselDemoDivider />

    <!-- 4. With slide counter (ends with Slide X of Y — no line after) -->
    <div
      :class="[carouselStatusSectionClass, carouselDemoBlockClass]"
      :style="{ ...carouselStatusSectionStyle(), ...carouselDemoBlockStyle() }"
    >
      <Carousel class="relative mx-auto w-full max-w-xs" @init-api="setApi">
        <CarouselContent>
          <CarouselItem
            v-for="(_, index) in carouselSlideCount"
            :key="`status-${index}`"
          >
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p :class="carouselStatusRowClass">
        Slide {{ current }} of {{ totalCount }}
      </p>
    </div>
  </div>
</template>
