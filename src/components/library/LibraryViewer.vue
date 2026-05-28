<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, toRef, watch } from 'vue'
import {
  screenshotDownloadFilename,
  useCaptureScreenshot,
} from '../../composables/useCaptureScreenshot'
import { useImageExists } from '../../composables/useImageExists'
import type { ScreenshotRect } from '../../composables/useScreenshotRegion'
import type { CodeTab, UsageStack } from '../../library/types'
import type { LibraryEntryWithCode } from '../../library/entry-utils'
import { defaultScreenshotPath } from '../../library/screenshots'
import { categoryLabels } from '../../library/types'
import CodePanel from './CodePanel.vue'
import ScreenshotCaptureOverlay from './ScreenshotCaptureOverlay.vue'

const props = defineProps<{
  entry: LibraryEntryWithCode
  variantMode?: boolean
}>()

type MainTab = 'preview' | 'code'
type PreviewMode = 'live' | 'screenshot'

const mainTab = ref<MainTab>('preview')
const previewMode = ref<PreviewMode>('live')
const codeTab = ref<CodeTab | 'usage'>('html')
const usageStack = ref<UsageStack>('html')
const previewFullscreen = ref(false)

const screenshotUrl = computed(
  () => props.entry.screenshot ?? defaultScreenshotPath(props.entry.id),
)
const hasScreenshot = useImageExists(toRef(() => screenshotUrl.value))
const previewCaptureRef = ref<HTMLElement | null>(null)
const previewStageRef = ref<HTMLElement | null>(null)
const fullscreenCaptureRef = ref<HTMLElement | null>(null)
const fullscreenStageRef = ref<HTMLElement | null>(null)

const { capturing, captureRegion } = useCaptureScreenshot()
const downloadFilename = computed(() => screenshotDownloadFilename(props.entry.id))

type ScreenshotMode = 'off' | 'armed' | 'region'

const screenshotMode = ref<ScreenshotMode>('off')
const selectionRect = ref<ScreenshotRect>({ x: 0, y: 0, width: 200, height: 200 })
const stageBounds = ref({ width: 0, height: 0 })
const regionOpenedAt = ref(0)
let autoSaveTimer: ReturnType<typeof setTimeout> | null = null

/** Pause after last resize before saving (allows several adjustments in a row). */
const AUTO_SAVE_DELAY_MS = 450

const screenshotSelecting = computed(() => screenshotMode.value !== 'off')

function clearAutoSaveTimer() {
  if (autoSaveTimer) {
    clearTimeout(autoSaveTimer)
    autoSaveTimer = null
  }
}

function scheduleAutoSave() {
  clearAutoSaveTimer()
  if (screenshotMode.value !== 'region' || capturing.value) return

  autoSaveTimer = setTimeout(() => {
    autoSaveTimer = null
    if (screenshotMode.value !== 'region' || capturing.value) return
    void confirmScreenshot()
  }, AUTO_SAVE_DELAY_MS)
}

function activeStage() {
  return previewFullscreen.value ? fullscreenStageRef.value : previewStageRef.value
}

function activeCapture() {
  return previewFullscreen.value ? fullscreenCaptureRef.value : previewCaptureRef.value
}

function initSelectionRect() {
  const stage = activeStage()
  const target = activeCapture()
  if (!stage || !target) return

  const sw = stage.offsetWidth
  const sh = stage.offsetHeight
  stageBounds.value = { width: sw, height: sh }

  const stageRect = stage.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  const pad = 12

  selectionRect.value = {
    x: Math.max(0, targetRect.left - stageRect.left - pad),
    y: Math.max(0, targetRect.top - stageRect.top - pad),
    width: Math.min(sw - 16, targetRect.width + pad * 2),
    height: Math.min(sh - 16, targetRect.height + pad * 2),
  }
}

function measureStageBounds() {
  const stage = activeStage()
  if (!stage) return
  stageBounds.value = { width: stage.offsetWidth, height: stage.offsetHeight }
}

async function startScreenshotSelect() {
  screenshotMode.value = 'armed'
  await nextTick()
  measureStageBounds()
}

function showScreenshotRegion() {
  screenshotMode.value = 'region'
  regionOpenedAt.value = Date.now()
  clearAutoSaveTimer()
  initSelectionRect()
}

function onRegionAdjustStart() {
  clearAutoSaveTimer()
}

function onRegionAdjustEnd() {
  scheduleAutoSave()
}

function cancelScreenshotSelect() {
  clearAutoSaveTimer()
  captureError.value = null
  screenshotMode.value = 'off'
}

const captureError = ref<string | null>(null)

async function confirmScreenshot() {
  if (capturing.value) return
  const stage = activeStage()
  const target = activeCapture()
  if (!stage || !target) return
  captureError.value = null
  try {
    await captureRegion(target, stage, selectionRect.value, downloadFilename.value)
    cancelScreenshotSelect()
  } catch {
    captureError.value = 'Screenshot failed — try a smaller area or press Enter to retry.'
  }
}

const isPageLayout = computed(
  () => props.entry.previewLayout === 'page' || previewFullscreen.value,
)

const markupTabs = computed(() => {
  const tabs: { id: CodeTab; label: string }[] = [{ id: 'html', label: 'HTML' }]
  if (props.entry.code.vue) {
    tabs.push({ id: 'vue', label: 'Vue' })
  }
  tabs.push({ id: 'css', label: 'CSS' })
  return tabs
})

const usageStacks: { id: UsageStack; label: string }[] = [
  { id: 'html', label: 'HTML project' },
  { id: 'vue', label: 'Vue project' },
]

const activeCode = computed(() => {
  if (codeTab.value === 'usage') {
    return props.entry.code.usage[usageStack.value]
  }
  const value = props.entry.code[codeTab.value]
  return typeof value === 'string' ? value : ''
})

const codeTabLabel = computed(() => {
  if (codeTab.value === 'usage') {
    return `Usage · ${usageStacks.find((s) => s.id === usageStack.value)?.label ?? 'Project'}`
  }
  return markupTabs.value.find((t) => t.id === codeTab.value)?.label ?? 'CODE'
})

const hasVueSource = computed(() => Boolean(props.entry.code.vue))

function openFullscreen() {
  previewFullscreen.value = true
}

function closeFullscreen() {
  previewFullscreen.value = false
  cancelScreenshotSelect()
}

function onGlobalKeydown(e: KeyboardEvent) {
  if (screenshotMode.value !== 'off') {
    if (e.key === 'Escape') {
      cancelScreenshotSelect()
      return
    }
    if (e.key === 'Enter' && screenshotMode.value === 'region') {
      e.preventDefault()
      clearAutoSaveTimer()
      void confirmScreenshot()
      return
    }
  }
  if (e.key === 'Escape' && previewFullscreen.value) {
    closeFullscreen()
  }
}

watch(
  () => props.entry.id,
  () => {
    mainTab.value = 'preview'
    previewMode.value = 'live'
    codeTab.value = 'html'
    usageStack.value = 'html'
    previewFullscreen.value = false
    cancelScreenshotSelect()
  },
)

watch(hasScreenshot, (available) => {
  if (!available && previewMode.value === 'screenshot') {
    previewMode.value = 'live'
  }
})

watch(hasVueSource, (available) => {
  if (!available && codeTab.value === 'vue') {
    codeTab.value = 'html'
  }
})

watch(mainTab, (tab) => {
  if (tab !== 'preview') {
    closeFullscreen()
    cancelScreenshotSelect()
  }
})

watch(previewFullscreen, () => {
  if (screenshotMode.value === 'armed') {
    nextTick(() => measureStageBounds())
  } else if (screenshotMode.value === 'region') {
    nextTick(() => initSelectionRect())
  }
})

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <div class="border-b border-slate-100 px-6 py-4 dark:border-slate-800">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <template v-if="variantMode">
            <h3 class="text-base font-semibold text-slate-900 dark:text-slate-50">
              {{ entry.title }}
            </h3>
            <p v-if="entry.description" class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {{ entry.description }}
            </p>
          </template>
          <template v-else>
            <p class="text-xs font-semibold uppercase tracking-wide text-violet-600">
              {{ categoryLabels[entry.category] }}
            </p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ entry.description }}</p>
          </template>
        </div>
        <div
          v-if="entry.codeLocation"
          class="rounded-lg bg-slate-50 px-3 py-2 font-mono text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300"
        >
          {{ entry.codeLocation }}
        </div>
      </div>
      <div v-if="!variantMode && entry.tags.length" class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="tag in entry.tags"
          :key="tag"
          class="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-200"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="flex border-b border-slate-200 dark:border-slate-800">
      <button
        type="button"
        class="px-8 py-3 text-sm font-semibold transition-colors"
        :class="
          mainTab === 'preview'
            ? 'bg-violet-600 text-white'
            : 'bg-violet-500/30 text-violet-900 hover:bg-violet-500/40 dark:text-violet-100'
        "
        @click="mainTab = 'preview'"
      >
        Preview
      </button>
      <button
        type="button"
        class="px-8 py-3 text-sm font-semibold transition-colors"
        :class="
          mainTab === 'code'
            ? 'bg-violet-600 text-white'
            : 'bg-violet-500/30 text-violet-900 hover:bg-violet-500/40 dark:text-violet-100'
        "
        @click="mainTab = 'code'"
      >
        Code
      </button>
    </div>

    <div v-show="mainTab === 'preview'" class="flex flex-col">
      <div
        class="relative w-full overflow-auto bg-slate-100"
        :class="
          isPageLayout
            ? 'min-h-[calc(100vh-10rem)]'
            : 'flex min-h-[min(70vh,640px)] items-start justify-center p-4 md:p-6'
        "
      >
        <!-- Preview toolbar (top-right) -->
        <div
          v-if="previewMode === 'live' && entry.preview && !screenshotSelecting"
          class="absolute top-3 right-3 z-20 flex flex-wrap justify-end gap-2"
        >
          <button
            type="button"
            class="rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-200"
            @click="startScreenshotSelect"
          >
            Save screenshot
          </button>
          <button
            type="button"
            class="rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-200"
            @click="openFullscreen"
          >
            Full screen
          </button>
        </div>
        <div
          v-else-if="previewMode === 'screenshot' && hasScreenshot"
          class="absolute top-3 right-3 z-20 rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-violet-300 hover:text-violet-700"
        >
          <button type="button" class="contents" @click="openFullscreen">
            Full screen
          </button>
        </div>

        <div
          v-if="previewMode === 'live' && entry.preview"
          ref="previewStageRef"
          class="relative bg-slate-100"
          :class="[
            isPageLayout ? 'min-h-screen w-full' : 'inline-block max-w-full',
            // Reserve space for the top toolbar so it doesn't cover the preview content
            previewMode === 'live' && entry.preview && !screenshotSelecting ? 'pt-16' : '',
          ]"
        >
          <div ref="previewCaptureRef">
            <component :is="entry.preview" />
          </div>
          <ScreenshotCaptureOverlay
            v-if="screenshotSelecting && !previewFullscreen"
            v-model:rect="selectionRect"
            :phase="screenshotMode === 'region' ? 'region' : 'armed'"
            :bounds-width="stageBounds.width"
            :bounds-height="stageBounds.height"
            :saving="capturing"
            :capture-error="captureError"
            @add-region="showScreenshotRegion"
            @adjust-start="onRegionAdjustStart"
            @adjust-end="onRegionAdjustEnd"
            @cancel="cancelScreenshotSelect"
          />
        </div>

        <div
          v-else-if="previewMode === 'screenshot' && hasScreenshot"
          class="pt-16"
        >
          <figure class="w-full max-w-5xl">
            <img
              :src="screenshotUrl"
              :alt="`${entry.title} reference screenshot`"
              class="w-full rounded-lg border border-slate-200 bg-slate-50 shadow-sm"
              loading="lazy"
            />
          </figure>
        </div>

        <p v-else class="p-8 text-xs text-slate-500 dark:text-slate-400">
          No live preview for this entry.
          <span v-if="!hasScreenshot" class="mt-2 block text-slate-400 dark:text-slate-500">
            Add a reference PNG at
            <code class="rounded bg-slate-200 px-1 py-0.5 font-mono dark:bg-slate-800">
              {{ screenshotUrl }}
            </code>
          </span>
        </p>
      </div>
    </div>

    <div v-show="mainTab === 'code'" class="flex min-h-[400px] flex-col">
      <div class="flex flex-wrap gap-0 border-b border-slate-200 bg-white px-2 pt-2 dark:border-slate-800 dark:bg-slate-950">
        <button
          v-for="tab in markupTabs"
          :key="tab.id"
          type="button"
          class="rounded-t-lg px-5 py-2 text-sm font-medium transition-colors"
          :class="
            codeTab === tab.id
              ? 'bg-[#1e1e2e] text-white'
              : 'text-slate-600 hover:bg-slate-100'
          "
          @click="codeTab = tab.id"
        >
          {{ tab.label }}
        </button>
        <button
          type="button"
          class="rounded-t-lg px-5 py-2 text-sm font-medium transition-colors"
          :class="
            codeTab === 'usage'
              ? 'bg-[#1e1e2e] text-white'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
          "
          @click="codeTab = 'usage'"
        >
          Usage
        </button>
      </div>

      <div
        v-if="codeTab === 'usage'"
        class="flex items-center gap-2 border-b border-slate-200 bg-violet-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900/40"
      >
        <span class="text-xs font-medium text-violet-800 dark:text-violet-200">Install in:</span>
        <button
          v-for="stack in usageStacks"
          :key="stack.id"
          type="button"
          class="rounded-md px-3 py-1 text-xs font-semibold transition-colors"
          :class="
            usageStack === stack.id
              ? 'bg-violet-600 text-white'
              : 'bg-white text-violet-700 ring-1 ring-violet-200 hover:bg-violet-100'
          "
          @click="usageStack = stack.id"
        >
          {{ stack.label }}
        </button>
        <span class="ml-auto hidden text-xs text-violet-700 sm:inline dark:text-violet-200">
          <template v-if="hasVueSource">
            Copy markup from <strong>HTML</strong> or the full component from <strong>Vue</strong>
          </template>
          <template v-else>
            Markup always comes from the <strong>HTML</strong> tab
          </template>
        </span>
      </div>

      <p
        v-if="codeTab === 'usage'"
        class="border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-600 sm:hidden dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300"
      >
        <template v-if="hasVueSource">
          Use <strong>HTML</strong> or <strong>Vue</strong> for markup — Usage explains where to put it.
        </template>
        <template v-else>
          Copy markup from the <strong>HTML</strong> tab — Usage only explains where to put it.
        </template>
      </p>

      <CodePanel :code="activeCode" :tab-label="codeTabLabel" />
    </div>

    <Teleport to="body">
      <div
        v-if="
          previewFullscreen &&
          (previewMode === 'screenshot' ? hasScreenshot : entry.preview)
        "
        class="fixed inset-0 z-200 flex flex-col bg-white dark:bg-slate-950"
        role="dialog"
        aria-modal="true"
        :aria-label="`${entry.title} preview`"
      >
        <header
          class="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <span class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {{ entry.title }} —
            {{ previewMode === 'screenshot' ? 'Screenshot' : 'Live preview' }}
          </span>
          <div class="flex items-center gap-2">
            <button
              v-if="previewMode === 'live' && !screenshotSelecting"
              type="button"
              class="rounded-lg border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-800 hover:bg-violet-100 dark:border-violet-500/40 dark:bg-violet-500/15 dark:text-violet-200 dark:hover:bg-violet-500/25"
              @click="startScreenshotSelect"
            >
              Save screenshot
            </button>
            <button
              v-if="!screenshotSelecting"
              type="button"
              class="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              @click="closeFullscreen"
            >
              Exit full screen
              <span class="ml-2 hidden text-slate-500 sm:inline">Esc</span>
            </button>
          </div>
        </header>
        <div class="relative min-h-0 flex-1 overflow-auto bg-slate-50">
          <img
            v-if="previewMode === 'screenshot'"
            :src="screenshotUrl"
            :alt="`${entry.title} reference screenshot`"
            class="mx-auto block max-w-full"
          />
          <div
            v-else
            ref="fullscreenStageRef"
            class="relative min-h-full w-full"
          >
            <div ref="fullscreenCaptureRef" class="bg-slate-50">
              <component :is="entry.preview" />
            </div>
            <ScreenshotCaptureOverlay
              v-if="screenshotSelecting"
              v-model:rect="selectionRect"
              :phase="screenshotMode === 'region' ? 'region' : 'armed'"
              :bounds-width="stageBounds.width"
              :bounds-height="stageBounds.height"
              :saving="capturing"
              :capture-error="captureError"
              @add-region="showScreenshotRegion"
              @adjust-start="onRegionAdjustStart"
              @adjust-end="onRegionAdjustEnd"
              @cancel="cancelScreenshotSelect"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
