<script setup lang="ts">
import { buttonCellStyle } from './button-demo.data'
</script>

<template>
  <div
    class="w-full"
    :style="buttonCellStyle()"
  >
    <slot />
  </div>
</template>
