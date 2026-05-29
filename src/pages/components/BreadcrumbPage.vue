<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import BreadcrumbDemo from '@/demos/breadcrumb/BreadcrumbDemo.vue'
import demoDataSource from '@/demos/breadcrumb/breadcrumb-demo.data.ts?raw'
import vueSource from '@/demos/breadcrumb/BreadcrumbDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="breadcrumb"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'breadcrumb-demo.data.ts', code: demoDataSource }]"
  >
    <BreadcrumbDemo />
  </ComponentPreview>
</template>
