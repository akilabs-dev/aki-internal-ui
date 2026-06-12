<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import KbdDemo from '@/demos/kbd/KbdDemo.vue'
import demoDataSource from '@/demos/kbd/kbd-demo.data.ts?raw'
import vueSource from '@/demos/kbd/KbdDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="kbd"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'kbd-demo.data.ts', code: demoDataSource }]"
  >
    <KbdDemo />
  </ComponentPreview>
</template>
