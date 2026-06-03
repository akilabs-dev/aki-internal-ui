<script setup lang="ts">
import {
  carouselDemoDividerClass,
  carouselDemoDividerStyle,
} from './carousel-demo.data'
</script>

<template>
  <hr
    :class="carouselDemoDividerClass"
    :style="carouselDemoDividerStyle()"
  >
</template>
