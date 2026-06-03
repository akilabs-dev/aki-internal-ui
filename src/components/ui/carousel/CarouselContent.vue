<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { useCarousel } from "./useCarousel"

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    WithClassAsProps & {
      /** Vertical track without -mt-4 offset (use with !pt-0 slides for 2-up layout) */
      verticalCompact?: boolean
    }
  >(),
  {
    verticalCompact: false,
  },
)

const carousel = useCarousel()

const trackClass = computed(() => {
  if (carousel.orientation === "horizontal") {
    return "flex h-full -ml-4"
  }
  return cn(
    "flex h-full flex-col",
    props.verticalCompact ? "gap-0" : "-mt-4",
  )
})
</script>

<template>
  <div
    :ref="carousel.carouselRef"
    data-slot="carousel-content"
    :class="cn('overflow-hidden', props.class)"
  >
    <div :class="trackClass" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
