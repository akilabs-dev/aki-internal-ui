<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import SeparatorDemo from '@/demos/separator/SeparatorDemo.vue'
import demoDataSource from '@/demos/separator/separator-demo.data.ts?raw'
import vueSource from '@/demos/separator/SeparatorDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="separator"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'separator-demo.data.ts', code: demoDataSource }]"
  >
    <SeparatorDemo />
  </ComponentPreview>
</template>
