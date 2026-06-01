<script setup lang="ts">
import ComponentPreview from '@/components/ComponentPreview.vue'
import CalendarDemo from '@/demos/calendar/CalendarDemo.vue'
import demoDataSource from '@/demos/calendar/calendar-demo.data.ts?raw'
import vueSource from '@/demos/calendar/CalendarDemo.vue?raw'
</script>

<template>
  <ComponentPreview
    alpine-extractor="calendar"
    :vue-source="vueSource"
    :demo-data-sources="[{ label: 'calendar-demo.data.ts', code: demoDataSource }]"
  >
    <CalendarDemo />
  </ComponentPreview>
</template>
