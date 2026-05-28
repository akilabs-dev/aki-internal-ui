<script setup lang="ts">
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-2">
      <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Usage in your project
      </p>
      <h1 class="font-serif text-3xl font-semibold tracking-tight">
        Copy the sample into your app
      </h1>
      <p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
        Each component page is designed to be copy/paste-friendly. This guide explains
        what you typically need to move over.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        What to copy
      </h2>
      <ul class="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
        <li>
          The demo component file (for example: <code class="text-foreground">AccordionDemo.vue</code>).
        </li>
        <li>
          Any local data file it uses (for example: <code class="text-foreground">accordion-demo.data.ts</code>).
        </li>
        <li>
          Any shadcn-vue UI primitives referenced by the demo (your project should already have them).
        </li>
      </ul>
    </section>

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Common adjustments
      </h2>
      <ul class="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
        <li>
          Update import aliases (this repo uses <code class="text-foreground">@/</code>).
        </li>
        <li>
          Ensure Tailwind scans the folders where you put the copied files.
        </li>
        <li>
          Ensure your theme tokens exist (see <span class="text-foreground">Theme configuration</span>).
        </li>
      </ul>
    </section>
  </div>
</template>

