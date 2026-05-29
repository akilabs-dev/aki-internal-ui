<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  eyebrow?: string
  title?: string
  headline?: string
  description?: string
}>()

const route = useRoute()

const displayEyebrow = computed(
  () => props.eyebrow ?? (route.meta.eyebrow as string | undefined) ?? 'Docs',
)

const displayTitle = computed(
  () =>
    props.headline
    ?? props.title
    ?? (route.meta.headline as string | undefined)
    ?? (route.meta.title as string | undefined)
    ?? '',
)

const displayDescription = computed(
  () => props.description ?? (route.meta.description as string | undefined) ?? '',
)
</script>

<template>
  <header class="space-y-2">
    <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
      {{ displayEyebrow }}
    </p>
    <h1 class="text-3xl font-bold tracking-tight">
      {{ displayTitle }}
    </h1>
    <p
      v-if="displayDescription"
      class="text-muted-foreground max-w-2xl text-base leading-relaxed"
    >
      {{ displayDescription }}
    </p>
  </header>
</template>
