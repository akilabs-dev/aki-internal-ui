<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AlertDialogDemo from '@/demos/alert-dialog/AlertDialogDemo.vue'
import demoDataSource from '@/demos/alert-dialog/alert-dialog-demo.data.ts?raw'
import vueSource from '@/demos/alert-dialog/AlertDialogDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="alert-dialog"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'alert-dialog-demo.data.ts', code: demoDataSource }]"
  >
    <AlertDialogDemo />
  </ComponentPreview>
</template>
