<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import HoverCardDemo from '@/demos/hover-card/HoverCardDemo.vue'
import demoDataSource from '@/demos/hover-card/hover-card-demo.data.ts?raw'
import vueSource from '@/demos/hover-card/HoverCardDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="hover-card"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'hover-card-demo.data.ts', code: demoDataSource }]"
  >
    <HoverCardDemo />
  </ComponentPreview>
</template>
