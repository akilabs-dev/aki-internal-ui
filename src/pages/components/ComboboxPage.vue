<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import ComboboxDemo from '@/demos/combobox/ComboboxDemo.vue'
import demoDataSource from '@/demos/combobox/combobox-demo.data.ts?raw'
import vueSource from '@/demos/combobox/ComboboxDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="combobox"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'combobox-demo.data.ts', code: demoDataSource }]"
  >
    <ComboboxDemo />
  </ComponentPreview>
</template>
