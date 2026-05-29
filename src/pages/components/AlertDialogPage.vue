<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AlertDialogDemo from '@/demos/alert-dialog/AlertDialogDemo.vue'
import vueSource from '@/demos/alert-dialog/AlertDialogDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    title="Alert Dialog"
    description="A modal dialog that interrupts the user with important content and expects a response."
    alpine-extractor="alert-dialog"
    :vue-source="vueSource"
  >
    <AlertDialogDemo />
  </ComponentPreview>
</template>
