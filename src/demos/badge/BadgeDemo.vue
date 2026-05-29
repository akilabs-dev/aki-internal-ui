<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { badgeSpecialItems, badgeVariantItems } from './badge-demo.data'
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex w-full flex-wrap gap-2">
      <Badge
        v-for="item in badgeVariantItems"
        :key="item.id"
        :variant="item.variant"
      >
        {{ item.label }}
      </Badge>
    </div>

    <div class="flex w-full flex-wrap gap-2">
      <Badge
        v-for="item in badgeSpecialItems"
        :key="item.id"
        :variant="item.variant"
        :class="item.class"
      >
        <component :is="item.icon" v-if="item.icon" />
        {{ item.label }}
      </Badge>
    </div>
  </div>
</template>
