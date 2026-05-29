<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AspectRatioDemo from '@/demos/aspect-ratio/AspectRatioDemo.vue'
import vueSource from '@/demos/aspect-ratio/AspectRatioDemo.vue?raw'
</script>

<template>
    <ComponentPreview
    alpine-extractor="aspect-ratio"
    :vue-source="vueSource"
  >
    <AspectRatioDemo />
  </ComponentPreview>
</template>