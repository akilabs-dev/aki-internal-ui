<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import CheckboxDemo from '@/demos/checkbox/CheckboxDemo.vue'
import demoDataSource from '@/demos/checkbox/checkbox-demo.data.ts?raw'
import vueSource from '@/demos/checkbox/CheckboxDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="checkbox"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'checkbox-demo.data.ts', code: demoDataSource }]"
  >
    <CheckboxDemo />
  </ComponentPreview>
</template>
