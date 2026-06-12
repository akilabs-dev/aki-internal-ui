<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import InputOtpDemo from '@/demos/input-otp/InputOtpDemo.vue'
import demoDataSource from '@/demos/input-otp/input-otp-demo.data.ts?raw'
import vueSource from '@/demos/input-otp/InputOtpDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="input-otp"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'input-otp-demo.data.ts', code: demoDataSource }]"
  >
    <InputOtpDemo />
  </ComponentPreview>
</template>
