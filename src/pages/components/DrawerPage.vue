<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import DrawerDemo from '@/demos/drawer/DrawerDemo.vue'
import demoDataSource from '@/demos/drawer/drawer-demo.data.ts?raw'
import vueSource from '@/demos/drawer/DrawerDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="drawer"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'drawer-demo.data.ts', code: demoDataSource }]"
  >
    <DrawerDemo />
  </ComponentPreview>
</template>
