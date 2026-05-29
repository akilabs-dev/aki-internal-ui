<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AvatarDemo from '@/demos/avatar/AvatarDemo.vue'
import demoDataSource from '@/demos/avatar/avatar-demo.data.ts?raw'
import vueSource from '@/demos/avatar/AvatarDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="avatar"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'avatar-demo.data.ts', code: demoDataSource }]"
  >
    <AvatarDemo />
  </ComponentPreview>
</template>
