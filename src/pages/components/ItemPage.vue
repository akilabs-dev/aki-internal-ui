<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ItemDemo from '@/demos/item/ItemDemo.vue'
import demoDataSource from '@/demos/item/item-demo.data.ts?raw'
import vueSource from '@/demos/item/ItemDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="item"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'item-demo.data.ts', code: demoDataSource }]"
  >
    <ItemDemo />
  </ComponentPreview>
</template>
