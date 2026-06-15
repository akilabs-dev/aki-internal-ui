<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import PopoverShowcase from './PopoverShowcase.vue'
import {
  popoverFrameClass,
  popoverFrameStyle,
} from './popover-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.popover"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="popoverFrameClass" :style="popoverFrameStyle()">
      <PopoverShowcase />
      <PopoverShowcase />
    </div>
  </div>
</template>
