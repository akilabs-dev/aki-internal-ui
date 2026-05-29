<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AspectRatioDemo from '@/demos/aspect-ratio/AspectRatioDemo.vue'
import demoDataSource from '@/demos/aspect-ratio/aspect-ratio-demo.data.ts?raw'
import vueSource from '@/demos/aspect-ratio/AspectRatioDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="aspect-ratio"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'aspect-ratio-demo.data.ts', code: demoDataSource }]"
  >
    <AspectRatioDemo />
  </ComponentPreview>
</template>
