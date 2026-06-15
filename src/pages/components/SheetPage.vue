<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import SheetDemo from '@/demos/sheet/SheetDemo.vue'
import demoDataSource from '@/demos/sheet/sheet-demo.data.ts?raw'
import vueSource from '@/demos/sheet/SheetDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="sheet"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'sheet-demo.data.ts', code: demoDataSource }]"
  >
    <SheetDemo />
  </ComponentPreview>
</template>
