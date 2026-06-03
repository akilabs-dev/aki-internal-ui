<script setup lang="ts">
import { Code2, Monitor, RotateCw } from '@lucide/vue'
import { computed, defineAsyncComponent, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AlpineHtmlPreview from '@/components/AlpineHtmlPreview.vue'
import ComponentPagination from '@/components/ComponentPagination.vue'
import type { CodePanelTab } from '@/components/CodePanel.vue'
import {
  getAlpineSetupSource,
  hasAlpineSetup as componentHasAlpineSetup,
} from '@/lib/alpine/alpine-setup-snippets'
import { demoDataTabId, DEMO_DATA_TAB_LABEL, type DemoDataSource } from '@/lib/demo-data-sources'
import type { AlpineExtractorId } from '@/lib/vue-to-alpine'
import { extractVueToAlpineHtml } from '@/lib/vue-to-alpine'
import { cn } from '@/lib/utils'

const CodePanel = defineAsyncComponent(() => import('@/components/CodePanel.vue'))

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    vueSource: string
    /** Optional demo data files shown as tabs next to Vue in the code panel */
    demoDataSources?: DemoDataSource[]
    alpineExtractor: AlpineExtractorId
    /** When false, pagination is omitted (use one shared nav on the page). */
    showPagination?: boolean
  }>(),
  {
    showPagination: true,
  },
)

const route = useRoute()

const pageTitle = computed(
  () => props.title ?? (route.meta.title as string | undefined) ?? 'Component',
)

const pageDescription = computed(
  () => props.description ?? (route.meta.description as string | undefined),
)

const pageEyebrow = computed(
  () => (route.meta.eyebrow as string | undefined) ?? 'Components',
)

type ViewId = 'preview' | 'code'
type FrameworkId = 'vue' | 'html'

const activeView = ref<ViewId>('preview')
const framework = ref<FrameworkId>('vue')
const previewRef = ref<HTMLElement | null>(null)
const htmlMarkup = ref('')
const htmlReady = ref(false)
const alpinePreviewKey = ref(0)
const codeTabId = ref('vue')
const showInteractiveHtmlInCode = ref(false)

const needsAlpineSetup = computed(() => componentHasAlpineSetup(props.alpineExtractor))
const needsAlpinePreview = computed(() => needsAlpineSetup.value)
const alpineSource = computed(() => getAlpineSetupSource(props.alpineExtractor) ?? '')

const codePanelTabs = computed<CodePanelTab[]>(() => {
  const tabs: CodePanelTab[] = [
    {
      id: 'vue',
      label: 'Vue',
      language: 'vue',
      code: props.vueSource,
    },
    {
      id: 'html',
      label: 'HTML',
      language: 'html',
      code: htmlMarkup.value,
      emptyLabel: 'Extracting HTML…',
    },
  ]

  if (needsAlpineSetup.value) {
    tabs.push({
      id: 'alpine',
      label: 'Alpine JS',
      language: 'javascript',
      code: alpineSource.value,
      emptyLabel: 'Loading Alpine JS…',
    })
  }

  tabs.push(
    ...(props.demoDataSources ?? []).map((source) => ({
      id: demoDataTabId(source.label),
      label: DEMO_DATA_TAB_LABEL,
      language: 'typescript' as const,
      code: source.code,
    })),
  )

  return tabs
})

const showVueInCard = computed(
  () => activeView.value === 'preview' && framework.value === 'vue',
)

const pillTriggerClass =
  'inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0'

const pillActiveClass =
  'bg-background text-foreground border-border shadow-sm'

const pillInactiveClass =
  'text-muted-foreground hover:text-foreground'

const pillListClass =
  'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]'

/** Shared layout for Vue and HTML preview — keep in sync */
const previewStageClass = 'flex min-h-[280px] w-full flex-col p-8'
const previewContentClass = 'w-full min-w-0'

async function captureHtml() {
  htmlReady.value = false
  await nextTick()
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

  const root = previewRef.value
  if (!root) {
    htmlMarkup.value = ''
    htmlReady.value = true
    return
  }

  const html = extractVueToAlpineHtml(root as unknown as HTMLElement, props.alpineExtractor)
  htmlMarkup.value = html ?? ''
  htmlReady.value = true
}

function syncCodeTabToFramework() {
  codeTabId.value = framework.value === 'vue' ? 'vue' : 'html'
}

async function refreshHtml() {
  alpinePreviewKey.value += 1
  await captureHtml()
}

function selectFramework(id: FrameworkId) {
  framework.value = id
  if (activeView.value === 'code') {
    syncCodeTabToFramework()
  }
}

function selectView(id: ViewId) {
  activeView.value = id
  if (id === 'code') {
    syncCodeTabToFramework()
  }
}

onMounted(() => {
  void captureHtml()
})

watch(framework, () => {
  if (activeView.value === 'code') {
    syncCodeTabToFramework()
  }
})

watch(codeTabId, (id) => {
  if (id !== 'html') {
    showInteractiveHtmlInCode.value = false
  }
})

watch(activeView, (view) => {
  if (view === 'preview' && !htmlReady.value) {
    void captureHtml()
  }
  if (view === 'code') {
    syncCodeTabToFramework()
    if (!htmlReady.value) {
      void captureHtml()
    }
  }
})
</script>

<template>
  <section class="space-y-6">
    <header class="space-y-2">
      <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        {{ pageEyebrow }}
      </p>
      <h1 class="text-3xl font-bold tracking-tight">
        {{ pageTitle }}
      </h1>
      <p
        v-if="pageDescription"
        class="text-muted-foreground max-w-2xl text-base leading-relaxed"
      >
        {{ pageDescription }}
      </p>
    </header>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div :class="pillListClass">
        <button
          type="button"
          :class="cn(pillTriggerClass, framework === 'vue' ? pillActiveClass : pillInactiveClass)"
          @click="selectFramework('vue')"
        >
          Vue
        </button>
        <button
          type="button"
          :class="cn(pillTriggerClass, framework === 'html' ? pillActiveClass : pillInactiveClass)"
          @click="selectFramework('html')"
        >
          HTML (Alpine.js)
        </button>
      </div>

      <div :class="cn(pillListClass, 'grid grid-cols-2')">
        <button
          type="button"
          :class="cn(pillTriggerClass, activeView === 'preview' ? pillActiveClass : pillInactiveClass)"
          @click="selectView('preview')"
        >
          <Monitor />
          Preview
        </button>
        <button
          type="button"
          :class="cn(pillTriggerClass, activeView === 'code' ? pillActiveClass : pillInactiveClass)"
          @click="selectView('code')"
        >
          <Code2 />
          Code
        </button>
      </div>
    </div>

    <div v-show="activeView === 'preview'" class="space-y-4">
      <div
        class="bg-card text-card-foreground relative min-h-[280px] overflow-visible rounded-xl border shadow-sm"
      >
        <div
          :class="cn(
            previewStageClass,
            !showVueInCard && 'pointer-events-none invisible absolute inset-0 z-0',
          )"
          :aria-hidden="!showVueInCard"
        >
          <div ref="previewRef" :class="previewContentClass">
            <slot />
          </div>
        </div>

        <div
          v-if="!showVueInCard"
          :class="cn(previewStageClass, 'relative z-10')"
        >
          <div :class="previewContentClass">
            <template v-if="needsAlpinePreview">
              <AlpineHtmlPreview
                v-if="htmlReady && htmlMarkup"
                :key="alpinePreviewKey"
                :html="htmlMarkup"
              />
              <p
                v-else-if="htmlReady && !htmlMarkup"
                class="text-muted-foreground text-sm"
              >
                No HTML extracted.
              </p>
              <p v-else class="text-muted-foreground text-sm">
                Extracting HTML…
              </p>
            </template>

            <template v-else>
              <div
                v-if="htmlReady && htmlMarkup"
                class="component-preview-html"
                v-html="htmlMarkup"
              />
              <p
                v-else-if="htmlReady && !htmlMarkup"
                class="text-muted-foreground text-sm"
              >
                No HTML extracted.
              </p>
              <p v-else class="text-muted-foreground text-sm">
                Extracting HTML…
              </p>
            </template>
          </div>
        </div>

        <button
          type="button"
          class="text-muted-foreground hover:text-foreground hover:bg-muted absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-md transition-colors"
          title="Refresh preview"
          @click="refreshHtml"
        >
          <RotateCw class="size-4" />
          <span class="sr-only">Refresh preview</span>
        </button>
      </div>
    </div>

    <div v-show="activeView === 'code'" class="min-w-0">
      <div
        v-if="needsAlpineSetup && codeTabId === 'html'"
        class="mb-3 flex flex-wrap items-center justify-end gap-2"
      >
        <button
          type="button"
          class="text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center rounded-md px-3 py-1.5 text-sm transition-colors"
          @click="showInteractiveHtmlInCode = !showInteractiveHtmlInCode"
        >
          {{ showInteractiveHtmlInCode ? 'Hide' : 'Show' }} interactive HTML preview
        </button>
      </div>

      <div
        v-if="needsAlpineSetup && codeTabId === 'html' && showInteractiveHtmlInCode"
        class="bg-card text-card-foreground mb-4 overflow-visible rounded-xl border p-4"
      >
        <AlpineHtmlPreview
          v-if="htmlReady && htmlMarkup"
          :key="alpinePreviewKey"
          :html="htmlMarkup"
        />
        <p v-else class="text-muted-foreground text-sm">
          Extracting HTML…
        </p>
      </div>

      <CodePanel v-model:active-tab-id="codeTabId" :tabs="codePanelTabs" />
    </div>

    <ComponentPagination v-if="showPagination" />
  </section>
</template>

<style scoped>
.component-preview-html,
.alpine-html-preview {
  width: 100%;
  min-width: 0;
}

.component-preview-html :deep(> *),
.alpine-html-preview :deep(> *) {
  width: 100%;
  min-width: 0;
}
</style>
