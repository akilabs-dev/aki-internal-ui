<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import EmptyDemo from '@/demos/empty/EmptyDemo.vue'
import demoDataSource from '@/demos/empty/empty-demo.data.ts?raw'
import vueSource from '@/demos/empty/EmptyDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="empty"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'empty-demo.data.ts', code: demoDataSource }]"
  >
    <EmptyDemo />
  </ComponentPreview>
</template>
