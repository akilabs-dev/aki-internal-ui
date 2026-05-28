<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, ref } from 'vue'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import AlpineHtmlPreview from '@/components/AlpineHtmlPreview.vue'
import { Button } from '@/components/ui/button'
import type { AlpineExtractorId } from '@/lib/vue-to-alpine'
import { extractVueToAlpineHtml } from '@/lib/vue-to-alpine'

const CodePanel = defineAsyncComponent(() => import('@/components/CodePanel.vue'))

const props = defineProps<{
  title: string
  description?: string
  vueSource: string
  alpineExtractor: AlpineExtractorId
}>()

const activeTab = ref('preview')
const previewRef = ref<HTMLElement | null>(null)
const htmlSource = ref('')
const htmlReady = ref(false)
const alpinePreviewKey = ref(0)

const previewSectionRef = ref<HTMLElement | null>(null)
const vueSectionRef = ref<HTMLElement | null>(null)
const htmlSectionRef = ref<HTMLElement | null>(null)

const HTML_PREAMBLE = `<!-- Requires Alpine.js 3 + @alpinejs/collapse (accordionDemo in app) -->
`

const alpinePreviewHtml = computed(() =>
  htmlSource.value.replace(HTML_PREAMBLE, ''),
)

async function captureHtml() {
  htmlReady.value = false
  await nextTick()

  const root = previewRef.value
  if (!root) {
    htmlSource.value = ''
    htmlReady.value = true
    return
  }

  // Vue template refs can be typed as broader element-like objects by tooling;
  // cast to HTMLElement for our extractor boundary.
  const alpineHtml = extractVueToAlpineHtml(root as unknown as HTMLElement, props.alpineExtractor)
  htmlSource.value = alpineHtml ? `${HTML_PREAMBLE}${alpineHtml}` : ''
  htmlReady.value = true
}

function onTabChange(value: string | number) {
  activeTab.value = String(value)
  if (activeTab.value === 'html' && !htmlSource.value) {
    void captureHtml()
  }
}

async function refreshHtml() {
  alpinePreviewKey.value += 1
  await captureHtml()
}

async function goToSection(section: 'preview' | 'vue' | 'html') {
  activeTab.value = section

  if (section === 'html' && !htmlSource.value) {
    await captureHtml()
  }

  await nextTick()

  const el = section === 'preview'
    ? previewSectionRef.value
    : section === 'vue'
      ? vueSectionRef.value
      : htmlSectionRef.value

  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="space-y-4">
    <header class="space-y-1">
      <h2 class="text-xl font-semibold tracking-tight">
        {{ title }}
      </h2>
      <p v-if="description" class="text-muted-foreground text-sm">
        {{ description }}
      </p>
    </header>

    <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem]">
      <Tabs
        :model-value="activeTab"
        class="w-full"
        @update:model-value="onTabChange"
      >
        <TabsList class="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger value="vue">
            Vue
          </TabsTrigger>
          <TabsTrigger value="html">
            HTML
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="preview"
          force-mount
          class="mt-4 data-[state=inactive]:hidden"
        >
          <div ref="previewSectionRef" class="scroll-mt-6">
            <div
              ref="previewRef"
              class="bg-card text-card-foreground rounded-lg border p-6 shadow-sm"
            >
              <slot />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="vue" class="mt-4">
          <div ref="vueSectionRef" class="scroll-mt-6">
            <CodePanel :code="vueSource" language="vue" />
          </div>
        </TabsContent>

        <TabsContent
          value="html"
          force-mount
          class="mt-4 space-y-4 data-[state=inactive]:hidden"
        >
          <div ref="htmlSectionRef" class="scroll-mt-6 space-y-4">
            <div class="flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                @click="refreshHtml"
              >
                Refresh HTML
              </Button>
            </div>

            <AlpineHtmlPreview
              v-if="htmlReady && alpinePreviewHtml"
              :key="alpinePreviewKey"
              :html="alpinePreviewHtml"
            />
            <div
              v-else-if="htmlReady && !alpinePreviewHtml"
              class="text-muted-foreground rounded-lg border p-6 text-sm"
            >
              No HTML extracted.
            </div>
            <div
              v-else
              class="text-muted-foreground rounded-lg border p-6 text-sm"
            >
              Extracting Alpine HTML…
            </div>

            <CodePanel
              :code="htmlSource"
              language="html"
              empty-label="Extracting Alpine HTML…"
            />
          </div>
        </TabsContent>
      </Tabs>

      <aside class="hidden lg:block">
        <div class="sticky top-6">
          <div class="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
            On this page
          </div>
          <nav class="space-y-1">
            <button
              type="button"
              class="hover:bg-muted text-muted-foreground hover:text-foreground w-full rounded-md px-3 py-2 text-left text-sm transition-colors"
              :class="activeTab === 'preview' ? 'bg-muted text-foreground' : ''"
              @click="goToSection('preview')"
            >
              Preview
            </button>
            <button
              type="button"
              class="hover:bg-muted text-muted-foreground hover:text-foreground w-full rounded-md px-3 py-2 text-left text-sm transition-colors"
              :class="activeTab === 'vue' ? 'bg-muted text-foreground' : ''"
              @click="goToSection('vue')"
            >
              Vue code
            </button>
            <button
              type="button"
              class="hover:bg-muted text-muted-foreground hover:text-foreground w-full rounded-md px-3 py-2 text-left text-sm transition-colors"
              :class="activeTab === 'html' ? 'bg-muted text-foreground' : ''"
              @click="goToSection('html')"
            >
              HTML code
            </button>
          </nav>
        </div>
      </aside>
    </div>
  </section>
</template>
