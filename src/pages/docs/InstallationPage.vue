<script setup lang="ts">
import { ref } from 'vue'
import DocsPageHeader from '@/components/DocsPageHeader.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Pm = 'bun' | 'npm' | 'pnpm' | 'yarn'
const pm = ref<Pm>('bun')
</script>

<template>
  <div class="space-y-8">
    <DocsPageHeader />

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
pnpm run dev
</code></pre>
        </TabsContent>

        <TabsContent value="yarn" class="min-w-0">
          <pre class="bg-muted/40 text-foreground overflow-x-auto rounded-lg border p-4 text-sm"><code>yarn install
yarn dev
</code></pre>
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>
