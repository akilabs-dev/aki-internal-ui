<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AlertDemo from '@/demos/alert/AlertDemo.vue'
import vueSource from '@/demos/alert/AlertDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    title="Alert"
    description="Displays important messages and statuses."
    alpine-extractor="alert"
    :vue-source="vueSource"
  >
    <AlertDemo />
  </ComponentPreview>
</template>

