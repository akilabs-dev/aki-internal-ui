<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import { buttonGroupMainFrameStyle } from './button-group-demo.data'
import ButtonGroupExamplesSection from './ButtonGroupExamplesSection.vue'
import ButtonGroupPatternsSection from './ButtonGroupPatternsSection.vue'
import ButtonGroupToolbarDemo from './ButtonGroupToolbarDemo.vue'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.buttonGroup"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div
      class="flex w-full flex-col overflow-visible pb-56"
      :style="buttonGroupMainFrameStyle()"
    >
      <ButtonGroupToolbarDemo />

      <ButtonGroupExamplesSection />

      <ButtonGroupPatternsSection />
    </div>
  </div>
</template>
