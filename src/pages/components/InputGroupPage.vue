<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import InputGroupDemo from '@/demos/input-group/InputGroupDemo.vue'
import demoDataSource from '@/demos/input-group/input-group-demo.data.ts?raw'
import vueSource from '@/demos/input-group/InputGroupDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="input-group"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'input-group-demo.data.ts', code: demoDataSource }]"
  >
    <InputGroupDemo />
  </ComponentPreview>
</template>
