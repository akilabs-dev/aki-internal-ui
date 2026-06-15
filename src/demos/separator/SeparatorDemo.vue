<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Separator } from '@/components/ui/separator'
import { figmaLinks } from '@/figma-links'
import {
  separatorContentClass,
  separatorFrameClass,
  separatorFrameStyle,
  separatorHeaderBlockClass,
  separatorHeaderDescription,
  separatorHeaderDescriptionClass,
  separatorHeaderTitle,
  separatorHeaderTitleClass,
  separatorHorizontalClass,
  separatorNavItems,
  separatorNavRowClass,
  separatorVerticalClass,
} from './separator-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.separator"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="separatorFrameClass" :style="separatorFrameStyle()">
      <div :class="separatorContentClass">
        <div :class="separatorHeaderBlockClass">
          <h4 :class="separatorHeaderTitleClass">
            {{ separatorHeaderTitle }}
          </h4>
          <p :class="separatorHeaderDescriptionClass">
            {{ separatorHeaderDescription }}
          </p>
        </div>
        <Separator :class="separatorHorizontalClass" />
        <div :class="separatorNavRowClass">
          <div
            v-for="(item, index) in separatorNavItems"
            :key="item"
            class="contents"
          >
            <div>{{ item }}</div>
            <Separator
              v-if="index < separatorNavItems.length - 1"
              orientation="vertical"
              :class="separatorVerticalClass"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
