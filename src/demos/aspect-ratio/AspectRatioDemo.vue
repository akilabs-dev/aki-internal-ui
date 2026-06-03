<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import { aspectRatioDemoItem } from './aspect-ratio-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.aspectRatio"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <AspectRatio
      :ratio="16 / 9"
      class="bg-muted overflow-hidden rounded-lg"
    >
      <img
        :src="aspectRatioDemoItem.src"
        :alt="aspectRatioDemoItem.alt"
        class="size-full object-cover"
      >
    </AspectRatio>
  </div>
</template>
