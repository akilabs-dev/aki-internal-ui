<script setup lang="ts">
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-2">
      <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Styling
      </p>
      <h1 class="font-serif text-3xl font-semibold tracking-tight">
        Tailwind + shadcn tokens
      </h1>
      <p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
        These samples assume a shadcn-style token system (CSS variables) and Tailwind
        configured to scan your component files.
      </p>
    </section>

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
        Tailwind content scanning
      </h2>
      <p class="text-muted-foreground text-sm leading-relaxed">
        If you move components into a new folder in your app, make sure Tailwind is
        configured to scan that folder so classes are generated.
      </p>
    </section>
  </div>
</template>

