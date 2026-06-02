<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ButtonDemo from '@/demos/button/ButtonDemo.vue'
import demoDataSource from '@/demos/button/button-demo.data.ts?raw'
import vueSource from '@/demos/button/ButtonDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="button"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'button-demo.data.ts', code: demoDataSource }]"
  >
    <ButtonDemo />
  </ComponentPreview>
</template>
