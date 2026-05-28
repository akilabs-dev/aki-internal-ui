<script setup lang="ts">
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-2">
      <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        FAQ
      </p>
      <h1 class="font-serif text-3xl font-semibold tracking-tight">
        Troubleshooting
      </h1>
      <p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
        Common issues when copying samples into your own project.
      </p>
    </section>

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
        Ensure Tailwind scans the directory where you placed the copied components.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Imports fail for <code class="text-foreground">@/</code>
      </h2>
      <p class="text-muted-foreground text-sm leading-relaxed">
        Update import aliases or replace <code class="text-foreground">@/</code> paths with relative imports in your app.
      </p>
    </section>
  </div>
</template>

