<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { alertDemoItems } from './alert-demo.data'
</script>

<template>
  <div class="space-y-4">
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

