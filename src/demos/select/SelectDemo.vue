<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Separator } from '@/components/ui/separator'
import { figmaLinks } from '@/figma-links'
import SelectShowcase from './SelectShowcase.vue'
import {
  fruitGroup,
  selectFrameClass,
  selectFrameStyle,
  selectFruitPlaceholder,
  selectFruitTriggerClass,
  selectRowClass,
  selectSectionSeparatorClass,
  selectTimezonePlaceholder,
  selectTimezoneTriggerClass,
  timezoneGroups,
} from './select-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.select"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="selectFrameClass" :style="selectFrameStyle()">
      <div :class="selectRowClass">
        <SelectShowcase
          :groups="[fruitGroup]"
          :placeholder="selectFruitPlaceholder"
          :trigger-class="selectFruitTriggerClass"
        />

        <SelectShowcase
          :groups="[fruitGroup]"
          :placeholder="selectFruitPlaceholder"
          :trigger-class="selectFruitTriggerClass"
        />
      </div>

      <Separator :class="selectSectionSeparatorClass" />

      <div :class="selectRowClass">
        <SelectShowcase
          :groups="timezoneGroups"
          :placeholder="selectTimezonePlaceholder"
          :trigger-class="selectTimezoneTriggerClass"
        />

        <SelectShowcase
          :groups="timezoneGroups"
          :placeholder="selectTimezonePlaceholder"
          :trigger-class="selectTimezoneTriggerClass"
        />
      </div>
    </div>
  </div>
</template>
