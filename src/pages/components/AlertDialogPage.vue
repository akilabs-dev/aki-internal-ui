<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AlertDialogDemo from '@/demos/alert-dialog/AlertDialogDemo.vue'
import vueSource from '@/demos/alert-dialog/AlertDialogDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="alert-dialog"
    :vue-source="vueSource"
  >
    <AlertDialogDemo />
  </ComponentPreview>
</template>
