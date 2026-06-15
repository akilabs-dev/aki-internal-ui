<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import ScrollBar from '@/components/ui/scroll-area/ScrollBar.vue'
import { cn } from '@/lib/utils'
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
} from 'reka-ui'
import { scrollAreaHorizontalClass, scrollAreaRootClass } from './scroll-area-demo.data'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <ScrollAreaRoot
    data-slot="scroll-area"
    :class="cn(scrollAreaRootClass, scrollAreaHorizontalClass, 'overflow-hidden', props.class)"
  >
    <ScrollAreaViewport
      data-slot="scroll-area-viewport"
      class="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollBar orientation="horizontal" />
  </ScrollAreaRoot>
</template>
