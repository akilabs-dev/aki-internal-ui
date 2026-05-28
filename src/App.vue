<script setup lang="ts">
import { computed, ref } from 'vue'
import { Menu, X } from '@lucide/vue'
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
const mobileSidebarOpen = ref(false)

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

function closeMobileSidebar() {
  mobileSidebarOpen.value = false
}
</script>

<template>
  <div class="bg-background text-foreground min-h-svh">
    <div class="flex min-h-svh">
      <!-- Desktop sidebar -->
      <div class="hidden md:block">
        <SidebarNav v-model="selected" :items="items" />
      </div>

      <!-- Mobile sidebar (drawer) -->
      <div
        v-if="mobileSidebarOpen"
        class="fixed inset-0 z-40 bg-black/40 md:hidden"
        @click="closeMobileSidebar"
      />
      <div
        class="fixed inset-y-0 left-0 z-50 w-72 transform bg-background transition-transform md:hidden"
        :class="mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex items-center justify-between border-b px-4 py-3">
          <div class="text-sm font-medium text-muted-foreground">
            Components
          </div>
          <button
            type="button"
            class="hover:bg-muted inline-flex size-9 items-center justify-center rounded-md"
            @click="closeMobileSidebar"
          >
            <X class="size-4" />
          </button>
        </div>
        <SidebarNav
          v-model="selected"
          :items="items"
          on-select-close
          class="border-r-0"
          @close="closeMobileSidebar"
        />
      </div>

      <main class="flex-1">
        <div class="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
          <header class="mb-10 space-y-2">
            <div class="mb-2 flex items-center gap-3 md:hidden">
              <button
                type="button"
                class="hover:bg-muted inline-flex size-9 items-center justify-center rounded-md border"
                @click="mobileSidebarOpen = true"
              >
                <Menu class="size-4" />
              </button>
              <span class="text-muted-foreground text-sm font-medium">
                Components
              </span>
            </div>
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
