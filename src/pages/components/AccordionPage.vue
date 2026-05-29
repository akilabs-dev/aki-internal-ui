<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AccordionDemo from '@/demos/accordion/AccordionDemo.vue'
import vueSource from '@/demos/accordion/AccordionDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="accordion"
    :vue-source="vueSource"
  >
    <AccordionDemo />
  </ComponentPreview>
</template>
