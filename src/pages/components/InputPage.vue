<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import InputDemo from '@/demos/input/InputDemo.vue'
import demoDataSource from '@/demos/input/input-demo.data.ts?raw'
import vueSource from '@/demos/input/InputDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="input"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'input-demo.data.ts', code: demoDataSource }]"
  >
    <InputDemo />
  </ComponentPreview>
</template>
