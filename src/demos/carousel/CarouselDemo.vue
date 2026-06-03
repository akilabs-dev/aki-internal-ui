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
import {
  carouselDemoFrameStyle,
  carouselSlideCount,
} from './carousel-demo.data'

const totalCount = ref(carouselSlideCount)
const current = ref(1)

function setApi(carouselApi: CarouselApi) {
  totalCount.value = carouselApi.scrollSnapList().length
  current.value = carouselApi.selectedScrollSnap() + 1

  carouselApi.on('select', () => {
    current.value = carouselApi.selectedScrollSnap() + 1
  })
}
</script>

<template>
  <div
    class="mx-auto flex w-full flex-col items-center"
    :style="carouselDemoFrameStyle()"
  >
    <!-- Basic -->
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

    <!-- Multiple slides visible -->
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

    <!-- Vertical -->
    <Carousel
      orientation="vertical"
      class="relative w-full max-w-xs"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="-mt-1 h-[200px]">
        <CarouselItem
          v-for="(_, index) in carouselSlideCount"
          :key="`vertical-${index}`"
          class="p-1 md:basis-1/2"
        >
          <div class="p-1">
            <Card>
              <CardContent class="flex items-center justify-center p-6">
                <span class="text-3xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <!-- With slide status -->
    <div class="w-full sm:w-auto">
      <Carousel class="relative w-full max-w-xs" @init-api="setApi">
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

      <div class="py-2 text-center text-sm text-muted-foreground">
        Slide {{ current }} of {{ totalCount }}
      </div>
    </div>
  </div>
</template>
