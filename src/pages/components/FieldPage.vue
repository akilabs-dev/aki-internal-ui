<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import FieldDemo from '@/demos/field/FieldDemo.vue'
import demoDataSource from '@/demos/field/field-demo.data.ts?raw'
import vueSource from '@/demos/field/FieldDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="field"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'field-demo.data.ts', code: demoDataSource }]"
  >
    <FieldDemo />
  </ComponentPreview>
</template>
