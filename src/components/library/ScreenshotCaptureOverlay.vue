<script setup lang="ts">
import type { ScreenshotRect } from '../../composables/useScreenshotRegion'
import ScreenshotRegionSelector from './ScreenshotRegionSelector.vue'

const rect = defineModel<ScreenshotRect>('rect', { required: true })

const props = defineProps<{
  phase: 'armed' | 'region'
  boundsWidth: number
  boundsHeight: number
  saving?: boolean
  captureError?: string | null
}>()

const emit = defineEmits<{
  'add-region': []
  'adjust-start': []
  'adjust-end': []
  cancel: []
}>()
</script>

<template>
  <div
    class="absolute inset-0 z-30"
    role="dialog"
    :aria-label="phase === 'armed' ? 'Screenshot tool' : 'Select screenshot area'"
  >
    <template v-if="phase === 'armed'">
      <div class="absolute inset-0 bg-black/40" />
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <button
          type="button"
          class="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-4xl font-light leading-none text-white shadow-lg ring-4 ring-white/30 transition-transform hover:scale-105 hover:bg-violet-500 active:scale-95"
          title="Add capture area"
          aria-label="Add capture area"
          @click="emit('add-region')"
        >
          +
        </button>
        <p class="rounded-md bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          Click <strong class="font-bold">+</strong> to show the resize frame
        </p>
        <button
          type="button"
          class="text-xs font-medium text-white/90 underline-offset-2 hover:text-white hover:underline"
          @click="emit('cancel')"
        >
          Cancel (Esc)
        </button>
      </div>
    </template>

    <ScreenshotRegionSelector
      v-else
      v-model:rect="rect"
      :bounds-width="boundsWidth"
      :bounds-height="boundsHeight"
      :saving="saving"
      :error="captureError"
      @adjust-start="emit('adjust-start')"
      @adjust-end="emit('adjust-end')"
    />
  </div>
</template>
