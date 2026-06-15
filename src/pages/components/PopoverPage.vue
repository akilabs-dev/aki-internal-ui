<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import PopoverDemo from '@/demos/popover/PopoverDemo.vue'
import demoDataSource from '@/demos/popover/popover-demo.data.ts?raw'
import vueSource from '@/demos/popover/PopoverDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="popover"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'popover-demo.data.ts', code: demoDataSource }]"
  >
    <PopoverDemo />
  </ComponentPreview>
</template>
