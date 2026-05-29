<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AlertDemo from '@/demos/alert/AlertDemo.vue'
import demoDataSource from '@/demos/alert/alert-demo.data.ts?raw'
import vueSource from '@/demos/alert/AlertDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="alert"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'alert-demo.data.ts', code: demoDataSource }]"
  >
    <AlertDemo />
  </ComponentPreview>
</template>
