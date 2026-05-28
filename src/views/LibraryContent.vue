<script setup lang="ts">
import { computed } from 'vue'
import LibraryViewer from '../components/library/LibraryViewer.vue'
import { asEntryWithCode, entryFromVariant, hasVariants } from '../library/entry-utils'
import { getEntryById } from '../library/registry'
import { categoryLabels } from '../library/types'

const props = defineProps<{
  activePage: string
}>()

const entry = computed(() => getEntryById(props.activePage))
const multiVariant = computed(() => (entry.value ? hasVariants(entry.value) : false))
const singleEntry = computed(() => (entry.value ? asEntryWithCode(entry.value) : null))
</script>

<template>
  <div v-if="entry && multiVariant" class="space-y-6">
    <header
      class="rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-violet-600">
            {{ categoryLabels[entry.category] }}
          </p>
          <h2 class="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
            {{ entry.title }}
          </h2>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ entry.description }}</p>
        </div>
      </div>
      <div v-if="entry.tags.length" class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="tag in entry.tags"
          :key="tag"
          class="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-200"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <LibraryViewer
      v-for="variant in entry.variants"
      :key="variant.id"
      :entry="entryFromVariant(entry, variant)"
      variant-mode
    />
  </div>

  <LibraryViewer v-else-if="singleEntry" :entry="singleEntry" />

  <section
    v-else
    class="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
  >
    Select a component to open live previews, reference screenshots, and copyable code.
  </section>
</template>
