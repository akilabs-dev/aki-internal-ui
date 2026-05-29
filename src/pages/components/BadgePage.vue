<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import BadgeDemo from '@/demos/badge/BadgeDemo.vue'
import demoDataSource from '@/demos/badge/badge-demo.data.ts?raw'
import vueSource from '@/demos/badge/BadgeDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="badge"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'badge-demo.data.ts', code: demoDataSource }]"
  >
    <BadgeDemo />
  </ComponentPreview>
</template>
