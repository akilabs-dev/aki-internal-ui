<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import DropdownMenuDemo from '@/demos/dropdown-menu/DropdownMenuDemo.vue'
import demoDataSource from '@/demos/dropdown-menu/dropdown-menu-demo.data.ts?raw'
import vueSource from '@/demos/dropdown-menu/DropdownMenuDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="dropdown-menu"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'dropdown-menu-demo.data.ts', code: demoDataSource }]"
  >
    <DropdownMenuDemo />
  </ComponentPreview>
</template>
