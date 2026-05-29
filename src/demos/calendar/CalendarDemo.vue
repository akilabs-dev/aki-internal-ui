<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { CalendarDate, fromDate, getLocalTimeZone } from '@internationalized/date'
import { ref, type Ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'
import {
  calendarDemoLayout,
  calendarDemoMaxYear,
  calendarDemoMinYear,
} from './calendar-demo.data'

const date = ref(fromDate(new Date(), getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <div class="flex min-h-[216px] w-full items-center justify-center">
    <Calendar
      v-model="date"
      class="rounded-md border shadow-sm"
      :layout="calendarDemoLayout"
      :min-value="new CalendarDate(calendarDemoMinYear, 1, 1)"
      :max-value="new CalendarDate(calendarDemoMaxYear, 1, 1)"
    />
  </div>
</template>
