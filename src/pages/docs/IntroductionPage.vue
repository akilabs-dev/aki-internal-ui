<script setup lang="ts">
import DocsPageHeader from '@/components/DocsPageHeader.vue'
</script>

<template>
  <div class="space-y-8">
    <DocsPageHeader />

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        How to use this site
      </h2>
      <ol class="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
        <li>Open a component in the sidebar.</li>
        <li>Use the Preview tab to see it rendered.</li>
        <li>Copy the Vue sample code and place it into your project.</li>
        <li>
          Use <span class="text-foreground">Theme configuration</span> to copy the CSS tokens
          for the current theme style.
        </li>
      </ol>
    </section>
  </div>
</template>
