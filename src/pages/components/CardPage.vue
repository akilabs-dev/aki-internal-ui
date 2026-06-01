<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import CardDemo from '@/demos/card/CardDemo.vue'
import demoDataSource from '@/demos/card/card-demo.data.ts?raw'
import vueSource from '@/demos/card/CardDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="card"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'card-demo.data.ts', code: demoDataSource }]"
  >
    <CardDemo />
  </ComponentPreview>
</template>
