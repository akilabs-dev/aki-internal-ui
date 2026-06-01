<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import { badgeDemoItems, badgeGridGapPx, badgeGridWidthPx } from './badge-demo.data'

function badgeGridStyle() {
  return {
    maxWidth: `${badgeGridWidthPx}px`,
    gap: `${badgeGridGapPx}px`,
  }
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.badge"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div class="grid w-full grid-cols-4" :style="badgeGridStyle()">
      <Badge
        v-for="item in badgeDemoItems"
        :key="item.id"
        :variant="item.variant"
        :class="item.class"
      >
        <component :is="item.icon" v-if="item.icon" />
        {{ item.label }}
      </Badge>
    </div>
  </div>
</template>
