<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ContextMenuDemo from '@/demos/context-menu/ContextMenuDemo.vue'
import demoDataSource from '@/demos/context-menu/context-menu-demo.data.ts?raw'
import vueSource from '@/demos/context-menu/ContextMenuDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="context-menu"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'context-menu-demo.data.ts', code: demoDataSource }]"
  >
    <ContextMenuDemo />
  </ComponentPreview>
</template>

