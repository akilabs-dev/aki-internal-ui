<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import MenubarDemo from '@/demos/menubar/MenubarDemo.vue'
import demoDataSource from '@/demos/menubar/menubar-demo.data.ts?raw'
import vueSource from '@/demos/menubar/MenubarDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="menubar"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'menubar-demo.data.ts', code: demoDataSource }]"
  >
    <MenubarDemo />
  </ComponentPreview>
</template>
