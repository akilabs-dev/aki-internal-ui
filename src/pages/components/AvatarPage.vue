<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import AvatarDemo from '@/demos/avatar/AvatarDemo.vue'
import vueSource from '@/demos/avatar/AvatarDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="avatar"
    :vue-source="vueSource"
  >
    <AvatarDemo />
  </ComponentPreview>
</template>
