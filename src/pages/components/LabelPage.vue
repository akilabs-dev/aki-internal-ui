<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import LabelDemo from '@/demos/label/LabelDemo.vue'
import demoDataSource from '@/demos/label/label-demo.data.ts?raw'
import vueSource from '@/demos/label/LabelDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="label"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'label-demo.data.ts', code: demoDataSource }]"
  >
    <LabelDemo />
  </ComponentPreview>
</template>
