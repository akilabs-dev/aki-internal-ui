<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import DataTableDemo from '@/demos/data-table/DataTableDemo.vue'
import demoDataSource from '@/demos/data-table/data-table-demo.data.ts?raw'
import vueSource from '@/demos/data-table/DataTableDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="data-table"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'data-table-demo.data.ts', code: demoDataSource }]"
  >
    <DataTableDemo />
  </ComponentPreview>
</template>
