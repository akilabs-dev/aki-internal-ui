<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import PaginationDemo from '@/demos/pagination/PaginationDemo.vue'
import demoDataSource from '@/demos/pagination/pagination-demo.data.ts?raw'
import vueSource from '@/demos/pagination/PaginationDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="pagination"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'pagination-demo.data.ts', code: demoDataSource }]"
  >
    <PaginationDemo />
  </ComponentPreview>
</template>
