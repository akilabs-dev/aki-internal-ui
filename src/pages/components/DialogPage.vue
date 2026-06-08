<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import DialogDemo from '@/demos/dialog/DialogDemo.vue'
import demoDataSource from '@/demos/dialog/dialog-demo.data.ts?raw'
import vueSource from '@/demos/dialog/DialogDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="dialog"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'dialog-demo.data.ts', code: demoDataSource }]"
  >
    <DialogDemo />
  </ComponentPreview>
</template>
