<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ButtonDemo from '@/demos/button/ButtonDemo.vue'
import vueSource from '@/demos/button/ButtonDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="button"
    :vue-source="vueSource"
  >
    <ButtonDemo />
  </ComponentPreview>
</template>
