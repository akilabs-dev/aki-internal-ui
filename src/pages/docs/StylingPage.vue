<script setup lang="ts">
import DocsPageHeader from '@/components/DocsPageHeader.vue'
</script>

<template>
  <div class="space-y-8">
    <DocsPageHeader />

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Theme instructions (shadcn)
      </h2>
      <p class="text-muted-foreground text-sm leading-relaxed">
        Follow the official shadcn theming approach for CSS variables and tokens.
        This project’s <span class="text-foreground">Theme configuration</span> page shows the exact token values
        for the currently selected theme style, so you can copy them into your app.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Tailwind content paths
      </h2>
      <p class="text-muted-foreground text-sm leading-relaxed">
        Ensure Tailwind scans the directories where your components live. If classes are missing,
        add the relevant paths to your Tailwind config.
      </p>
    </section>
  </div>
</template>
