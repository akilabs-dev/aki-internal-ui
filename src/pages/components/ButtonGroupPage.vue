<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ButtonGroupDemo from '@/demos/button-group/ButtonGroupDemo.vue'
import demoDataSource from '@/demos/button-group/button-group-demo.data.ts?raw'
import vueSource from '@/demos/button-group/ButtonGroupDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="button-group"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'button-group-demo.data.ts', code: demoDataSource }]"
  >
    <ButtonGroupDemo />
  </ComponentPreview>
</template>
