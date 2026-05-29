<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { alertDemoItems } from './alert-demo.data'
import { figmaLinks } from '@/figma-links'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button as="a" :href="figmaLinks.alert" target="_blank" rel="noreferrer" variant="outline" size="sm">
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>
    <Alert
      v-for="item in alertDemoItems"
      :key="item.id"
      :variant="item.variant"
    >
      <component :is="item.icon" v-if="item.icon" />
      <AlertTitle>{{ item.title }}</AlertTitle>
      <AlertDescription>
        {{ item.description }}
      </AlertDescription>
    </Alert>
  </div>
</template>

