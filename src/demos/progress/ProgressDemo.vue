<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Progress } from '@/components/ui/progress'
import { figmaLinks } from '@/figma-links'
import {
  progressDefaults,
  progressFrameClass,
  progressFrameStyle,
} from './progress-demo.data'

const progress = ref<number>(progressDefaults.initialValue)
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  timer = setTimeout(() => {
    progress.value = progressDefaults.animatedValue
  }, progressDefaults.animationDelayMs)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.progress"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="progressFrameClass" :style="progressFrameStyle()">
      <Progress
        :model-value="progress"
        :class="progressDefaults.widthClass"
      />
    </div>
  </div>
</template>
