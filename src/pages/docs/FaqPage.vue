<script setup lang="ts">
import DocsPageHeader from '@/components/DocsPageHeader.vue'
</script>

<template>
  <div class="space-y-8">
    <DocsPageHeader />

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        My styles don’t match
      </h2>
      <p class="text-muted-foreground text-sm leading-relaxed">
        Make sure your app has the same CSS variable tokens. Copy them from
        <span class="text-foreground">Theme configuration</span>.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Tailwind classes don’t apply
      </h2>
      <p class="text-muted-foreground text-sm leading-relaxed">
        Check your Tailwind content configuration and restart the dev server after adding new paths.
      </p>
    </section>
  </div>
</template>
