<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import RadioGroupDemo from '@/demos/radio-group/RadioGroupDemo.vue'
import demoDataSource from '@/demos/radio-group/radio-group-demo.data.ts?raw'
import vueSource from '@/demos/radio-group/RadioGroupDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="radio-group"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'radio-group-demo.data.ts', code: demoDataSource }]"
  >
    <RadioGroupDemo />
  </ComponentPreview>
</template>
