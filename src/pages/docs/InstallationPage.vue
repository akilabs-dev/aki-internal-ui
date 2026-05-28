<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Pm = 'bun' | 'npm' | 'pnpm' | 'yarn'
const pm = ref<Pm>('bun')
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-2">
      <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Installation
      </p>
      <h1 class="font-serif text-3xl font-semibold tracking-tight">
        Install and run the playground
      </h1>
      <p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
        Use any package manager. Pick one tab and run the commands.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="font-serif text-xl font-semibold tracking-tight">
        Commands
      </h2>

      <Tabs v-model="pm" class="min-w-0">
        <TabsList class="flex flex-wrap justify-start">
          <TabsTrigger value="bun">Bun</TabsTrigger>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger value="yarn">Yarn</TabsTrigger>
        </TabsList>

        <TabsContent value="bun" class="min-w-0">
          <pre class="bg-muted/40 text-foreground overflow-x-auto rounded-lg border p-4 text-sm"><code>bun install
bun run dev
</code></pre>
        </TabsContent>
        <TabsContent value="npm" class="min-w-0">
          <pre class="bg-muted/40 text-foreground overflow-x-auto rounded-lg border p-4 text-sm"><code>npm install
npm run dev
</code></pre>
        </TabsContent>
        <TabsContent value="pnpm" class="min-w-0">
          <pre class="bg-muted/40 text-foreground overflow-x-auto rounded-lg border p-4 text-sm"><code>pnpm install
pnpm dev
</code></pre>
        </TabsContent>
        <TabsContent value="yarn" class="min-w-0">
          <pre class="bg-muted/40 text-foreground overflow-x-auto rounded-lg border p-4 text-sm"><code>yarn
yarn dev
</code></pre>
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>

