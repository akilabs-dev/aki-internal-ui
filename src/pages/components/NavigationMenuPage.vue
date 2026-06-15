<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import NavigationMenuDemo from '@/demos/navigation-menu/NavigationMenuDemo.vue'
import demoDataSource from '@/demos/navigation-menu/navigation-menu-demo.data.ts?raw'
import vueSource from '@/demos/navigation-menu/NavigationMenuDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="navigation-menu"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'navigation-menu-demo.data.ts', code: demoDataSource }]"
  >
    <NavigationMenuDemo />
  </ComponentPreview>
</template>
