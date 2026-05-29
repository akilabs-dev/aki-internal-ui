<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AccordionDemo from '@/demos/accordion/AccordionDemo.vue'
import demoDataSource from '@/demos/accordion/accordion-demo.data.ts?raw'
import vueSource from '@/demos/accordion/AccordionDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="accordion"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'accordion-demo.data.ts', code: demoDataSource }]"
  >
    <AccordionDemo />
  </ComponentPreview>
</template>
