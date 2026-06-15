<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import NavigationMenuShowcase from './NavigationMenuShowcase.vue'
import {
  navigationMenuClosedPreviewClass,
  navigationMenuFrameClass,
  navigationMenuFrameStyle,
  navigationMenuSectionClass,
} from './navigation-menu-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.navigationMenu"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="navigationMenuFrameClass" :style="navigationMenuFrameStyle()">
      <div :class="[navigationMenuSectionClass, navigationMenuClosedPreviewClass]">
        <NavigationMenuShowcase />
      </div>

      <Separator class="bg-[#E5E5E5]" />

      <div :class="navigationMenuSectionClass">
        <NavigationMenuShowcase default-open="components" />
      </div>
    </div>
  </div>
</template>
