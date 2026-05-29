<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { aspectRatioDemoItem } from './aspect-ratio-demo.data'
</script>

<template>
  <AspectRatio
    :ratio="aspectRatioDemoItem.ratio"
    class="bg-muted w-[450px] rounded-lg"
  >
    <img
      :src="aspectRatioDemoItem.src"
      :alt="aspectRatioDemoItem.alt"
      class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    >
  </AspectRatio>
</template>
