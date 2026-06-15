<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import NativeSelectDemo from '@/demos/native-select/NativeSelectDemo.vue'
import demoDataSource from '@/demos/native-select/native-select-demo.data.ts?raw'
import vueSource from '@/demos/native-select/NativeSelectDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="native-select"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'native-select-demo.data.ts', code: demoDataSource }]"
  >
    <NativeSelectDemo />
  </ComponentPreview>
</template>
