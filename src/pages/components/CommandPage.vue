<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import CommandDemo from '@/demos/command/CommandDemo.vue'
import demoDataSource from '@/demos/command/command-demo.data.ts?raw'
import vueSource from '@/demos/command/CommandDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="command"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'command-demo.data.ts', code: demoDataSource }]"
  >
    <CommandDemo />
  </ComponentPreview>
</template>
