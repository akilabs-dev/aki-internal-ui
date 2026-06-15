<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ScrollAreaDemo from '@/demos/scroll-area/ScrollAreaDemo.vue'
import demoDataSource from '@/demos/scroll-area/scroll-area-demo.data.ts?raw'
import vueSource from '@/demos/scroll-area/ScrollAreaDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="scroll-area"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'scroll-area-demo.data.ts', code: demoDataSource }]"
  >
    <ScrollAreaDemo />
  </ComponentPreview>
</template>
