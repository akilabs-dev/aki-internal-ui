<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import CarouselDemo from '@/demos/carousel/CarouselDemo.vue'
import demoDataSource from '@/demos/carousel/carousel-demo.data.ts?raw'
import vueSource from '@/demos/carousel/CarouselDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="carousel"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'carousel-demo.data.ts', code: demoDataSource }]"
  >
    <CarouselDemo />
  </ComponentPreview>
</template>
