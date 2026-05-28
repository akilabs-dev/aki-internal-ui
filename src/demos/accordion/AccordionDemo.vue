<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { accordionDemoSections } from './accordion-demo.data'
</script>

<template>
  <Accordion type="single" collapsible class="w-full" default-value="item-1">
    <AccordionItem
      v-for="section in accordionDemoSections"
      :key="section.value"
      :value="section.value"
    >
      <AccordionTrigger>{{ section.title }}</AccordionTrigger>
      <AccordionContent>
        <p
          v-for="(paragraph, index) in section.paragraphs"
          :key="index"
          :class="{ 'mt-2': index > 0 }"
        >
          {{ paragraph }}
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

