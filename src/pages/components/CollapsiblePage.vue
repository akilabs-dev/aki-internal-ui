<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import CollapsibleDemo from '@/demos/collapsible/CollapsibleDemo.vue'
import demoDataSource from '@/demos/collapsible/collapsible-demo.data.ts?raw'
import vueSource from '@/demos/collapsible/CollapsibleDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="collapsible"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'collapsible-demo.data.ts', code: demoDataSource }]"
  >
    <CollapsibleDemo />
  </ComponentPreview>
</template>
