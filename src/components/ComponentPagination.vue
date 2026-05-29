<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@lucide/vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getComponentDocNeighbors } from '@/lib/component-docs'
import { cn } from '@/lib/utils'

const route = useRoute()

const neighbors = computed(() => getComponentDocNeighbors(route.path))

const linkClass = cn(
  'bg-muted text-foreground hover:bg-muted/80 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
)
</script>

<template>
  <nav
    v-if="neighbors.prev || neighbors.next"
    class="mt-10 flex items-center justify-between gap-4"
    aria-label="Component pagination"
  >
    <RouterLink
      v-if="neighbors.prev"
      :to="neighbors.prev.path"
      :class="linkClass"
    >
      <ArrowLeft class="size-4 shrink-0" aria-hidden="true" />
      {{ neighbors.prev.label }}
    </RouterLink>
    <div v-else aria-hidden="true" />

    <RouterLink
      v-if="neighbors.next"
      :to="neighbors.next.path"
      :class="linkClass"
    >
      {{ neighbors.next.label }}
      <ArrowRight class="size-4 shrink-0" aria-hidden="true" />
    </RouterLink>
  </nav>
</template>
