<script setup lang="ts">
import { computed } from 'vue'
import type { ScreenshotRect } from '../../composables/useScreenshotRegion'
import { useScreenshotRegion } from '../../composables/useScreenshotRegion'

const rect = defineModel<ScreenshotRect>('rect', { required: true })

const props = defineProps<{
  boundsWidth: number
  boundsHeight: number
  saving?: boolean
  error?: string | null
}>()

const emit = defineEmits<{
  'adjust-start': []
  'adjust-end': []
}>()

const bounds = computed(() => ({
  width: props.boundsWidth,
  height: props.boundsHeight,
}))

const { onPointerDown } = useScreenshotRegion(rect, bounds, {
  onDragStart: () => emit('adjust-start'),
  onDragEnd: () => emit('adjust-end'),
})

const handles = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'] as const

const handleClass: Record<(typeof handles)[number], string> = {
  nw: 'left-0 top-0 -translate-x-1/2 -translate-y-1/2 cursor-nw-resize',
  n: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 cursor-n-resize',
  ne: 'right-0 top-0 translate-x-1/2 -translate-y-1/2 cursor-ne-resize',
  e: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2 cursor-e-resize',
  se: 'right-0 bottom-0 translate-x-1/2 translate-y-1/2 cursor-se-resize',
  s: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-s-resize',
  sw: 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2 cursor-sw-resize',
  w: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-w-resize',
}

const hintStyle = computed(() => ({
  top: `${Math.min(rect.value.y + rect.value.height + 8, props.boundsHeight - 28)}px`,
  left: `${Math.max(8, Math.min(rect.value.x, props.boundsWidth - 220))}px`,
}))

const maskTop = computed(() => ({ height: `${rect.value.y}px` }))
const maskBottom = computed(() => ({
  top: `${rect.value.y + rect.value.height}px`,
  height: `${props.boundsHeight - rect.value.y - rect.value.height}px`,
}))
const maskLeft = computed(() => ({
  top: `${rect.value.y}px`,
  width: `${rect.value.x}px`,
  height: `${rect.value.height}px`,
}))
const maskRight = computed(() => ({
  top: `${rect.value.y}px`,
  left: `${rect.value.x + rect.value.width}px`,
  width: `${props.boundsWidth - rect.value.x - rect.value.width}px`,
  height: `${rect.value.height}px`,
}))
</script>

<template>
  <div
    class="absolute inset-0 z-30 touch-none select-none"
    role="dialog"
    aria-label="Select screenshot area"
  >
    <div class="absolute inset-x-0 top-0 bg-black/45" :style="maskTop" />
    <div class="absolute inset-x-0 bottom-0 bg-black/45" :style="maskBottom" />
    <div class="absolute left-0 bg-black/45" :style="maskLeft" />
    <div class="absolute bg-black/45" :style="maskRight" />

    <div
      class="absolute box-border border-2 border-dashed border-white ring-1 ring-black/20"
      :style="{
        left: `${rect.x}px`,
        top: `${rect.y}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      }"
      @pointerdown="onPointerDown('move', $event)"
    >
      <span
        v-for="h in handles"
        :key="h"
        class="absolute z-10 h-3 w-3 rounded-sm border border-white bg-violet-600 shadow"
        :class="handleClass[h]"
        @pointerdown.stop="onPointerDown(h, $event)"
      />
    </div>

    <p
      class="pointer-events-none absolute rounded-md bg-slate-900/90 px-2.5 py-1 text-[11px] font-medium text-white shadow-lg"
      :style="hintStyle"
    >
      <template v-if="saving">Saving…</template>
      <template v-else-if="error">{{ error }}</template>
      <template v-else>
        Drag to resize · pause ~0.5s after release to save · Enter saves now · Esc cancels
      </template>
    </p>
  </div>
</template>
