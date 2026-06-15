<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ProgressDemo from '@/demos/progress/ProgressDemo.vue'
import demoDataSource from '@/demos/progress/progress-demo.data.ts?raw'
import vueSource from '@/demos/progress/ProgressDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="progress"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'progress-demo.data.ts', code: demoDataSource }]"
  >
    <ProgressDemo />
  </ComponentPreview>
</template>
