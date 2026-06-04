<script setup lang="ts">
import { comboboxFrameStyle, comboboxTaskFrameClass } from './combobox-demo.data'
import ComboboxTaskRow from './ComboboxTaskRow.vue'
</script>

<template>
  <div :class="comboboxTaskFrameClass" :style="comboboxFrameStyle()">
    <ComboboxTaskRow />
    <ComboboxTaskRow />
  </div>
</template>
