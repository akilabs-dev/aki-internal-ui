<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import SelectDemo from '@/demos/select/SelectDemo.vue'
import demoDataSource from '@/demos/select/select-demo.data.ts?raw'
import vueSource from '@/demos/select/SelectDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="select"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'select-demo.data.ts', code: demoDataSource }]"
  >
    <SelectDemo />
  </ComponentPreview>
</template>
