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

  const alpineHtml = extractVueToAlpineHtml(root, props.alpineExtractor)
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
        <div
          ref="previewRef"
          class="bg-card text-card-foreground rounded-lg border p-6 shadow-sm"
        >
          <slot />
        </div>
      </TabsContent>

      <TabsContent value="vue" class="mt-4">
        <CodePanel :code="vueSource" language="vue" />
      </TabsContent>

      <TabsContent
        value="html"
        force-mount
        class="mt-4 space-y-4 data-[state=inactive]:hidden"
      >
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
      </TabsContent>
    </Tabs>
  </section>
</template>
