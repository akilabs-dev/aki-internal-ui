<script setup lang="ts">
import { computed, ref } from 'vue'
import ComponentPreview from '@/components/ComponentPreview.vue'
import SidebarNav, { type SidebarItem } from '@/components/SidebarNav.vue'
import AccordionDemo from '@/demos/AccordionDemo.vue'
import accordionVueSource from '@/demos/AccordionDemo.vue?raw'

const items: SidebarItem[] = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert', disabled: true },
  { id: 'alert-dialog', label: 'Alert Dialog', disabled: true },
  { id: 'aspect-ratio', label: 'Aspect Ratio', disabled: true },
  { id: 'avatar', label: 'Avatar', disabled: true },
  { id: 'badge', label: 'Badge', disabled: true },
  { id: 'breadcrumb', label: 'Breadcrumb', disabled: true },
  { id: 'button', label: 'Button', disabled: true },
  { id: 'button-group', label: 'Button Group', disabled: true },
  { id: 'calendar', label: 'Calendar', disabled: true },
  { id: 'card', label: 'Card', disabled: true },
  { id: 'carousel', label: 'Carousel', disabled: true },
  { id: 'chart', label: 'Chart', disabled: true },
]

const selected = ref(items[0]!.id)

const preview = computed(() => {
  if (selected.value === 'accordion') {
    return {
      title: 'Accordion',
      description: 'Collapsible sections built with reka-ui and shadcn-vue.',
      alpineExtractor: 'accordion' as const,
      vueSource: accordionVueSource,
      component: AccordionDemo,
    }
  }
  return null
})
</script>

<template>
  <div class="bg-background text-foreground min-h-svh">
    <div class="flex min-h-svh">
      <SidebarNav v-model="selected" :items="items" />

      <main class="flex-1">
        <div class="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
          <header class="mb-10 space-y-2">
            <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
              Component playground
            </p>
            <h1 class="font-serif text-3xl font-semibold tracking-tight">
              Preview
            </h1>
            <p class="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Inspect shadcn-vue components live, then view the source and rendered
              HTML from the same demo.
            </p>
          </header>

          <div v-if="preview">
            <ComponentPreview
              :title="preview.title"
              :description="preview.description"
              :alpine-extractor="preview.alpineExtractor"
              :vue-source="preview.vueSource"
            >
              <component :is="preview.component" />
            </ComponentPreview>
          </div>
          <div
            v-else
            class="text-muted-foreground rounded-lg border p-8 text-sm"
          >
            This component demo isn’t wired yet.
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
