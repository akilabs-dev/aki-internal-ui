<script setup lang="ts">
import { Check, ChevronDown, Copy } from '@lucide/vue'
import { computed, nextTick, onBeforeUnmount, onUnmounted, ref, watch } from 'vue'
import { Button } from '@/components/ui/button'

export type CodeLanguage = 'vue' | 'html' | 'css' | 'javascript' | 'typescript'

export type CodePanelTab = {
  id: string
  label: string
  language: CodeLanguage
  code: string
  emptyLabel?: string
}

const props = defineProps<{
  /** Single-language mode */
  code?: string
  language?: CodeLanguage
  /** Multi-language mode — tabs in the panel header */
  tabs?: CodePanelTab[]
  emptyLabel?: string
  collapsible?: boolean
  defaultCollapsed?: boolean
}>()

const activeTabId = defineModel<string>('activeTabId', { default: '' })
const formattedCode = ref('')
const highlightedHtml = ref('')
const isReady = ref(false)
const collapsed = ref(!!props.defaultCollapsed)
const host = ref<HTMLElement | null>(null)
const foldedFrom = ref(new Set<number>())

const isCollapsible = computed(() => props.collapsible !== false)
const isTabbed = computed(() => (props.tabs?.length ?? 0) > 0)

const activeTab = computed(() =>
  props.tabs?.find((t) => t.id === activeTabId.value) ?? null,
)

const displayLanguage = computed<CodeLanguage>(() =>
  activeTab.value?.language ?? props.language ?? 'html',
)

const displayCode = computed(() =>
  activeTab.value?.code ?? props.code ?? '',
)

const displayEmptyLabel = computed(() =>
  activeTab.value?.emptyLabel ?? props.emptyLabel,
)

const languageLabel = computed(() => {
  switch (displayLanguage.value) {
    case 'vue':
      return 'Vue'
    case 'css':
      return 'CSS'
    case 'javascript':
      return 'Alpine JS'
    case 'typescript':
      return 'TypeScript'
    default:
      return 'HTML'
  }
})

const copied = ref(false)
let copiedResetTimer: ReturnType<typeof setTimeout> | undefined

async function copyCode() {
  if (!formattedCode.value) return
  await navigator.clipboard.writeText(formattedCode.value)
  copied.value = true
  clearTimeout(copiedResetTimer)
  copiedResetTimer = setTimeout(() => {
    copied.value = false
  }, 2000)
}

onUnmounted(() => {
  clearTimeout(copiedResetTimer)
})

function toggleCollapsed() {
  if (!isCollapsible.value) return
  collapsed.value = !collapsed.value
}

async function renderCode(raw: string, language: CodeLanguage) {
  if (!raw.trim()) {
    formattedCode.value = ''
    highlightedHtml.value = ''
    isReady.value = false
    return
  }

  isReady.value = false

  const { highlightCodeWithLineNumbers } = await import('@/lib/shiki-highlighter')

  const formatted = await (async () => {
    switch (language) {
      case 'vue': {
        const { formatVueSource } = await import('@/lib/format-code')
        return formatVueSource(raw)
      }
      case 'css': {
        const { formatCssSource } = await import('@/lib/format-code')
        return formatCssSource(raw)
      }
      case 'javascript': {
        const { formatJavascriptSource } = await import('@/lib/format-code')
        return formatJavascriptSource(raw)
      }
      case 'typescript': {
        const { formatTypescriptSource } = await import('@/lib/format-code')
        return formatTypescriptSource(raw)
      }
      default: {
        const { formatHtmlSource } = await import('@/lib/format-code')
        return formatHtmlSource(raw)
      }
    }
  })()

  formattedCode.value = formatted
  const folds = computeFoldRanges(formatted)
  highlightedHtml.value = await highlightCodeWithLineNumbers(formatted, language, folds)
  isReady.value = true

  await nextTick()
  foldedFrom.value = new Set()
  syncFoldDom()
}

function computeFoldRanges(code: string) {
  const lines = code.replaceAll('\r\n', '\n').split('\n')
  const indents = lines.map((l) => {
    let i = 0
    while (i < l.length && l[i] === ' ') i++
    return i
  })

  function nextNonEmptyIndex(from: number) {
    for (let i = from; i < lines.length; i++) {
      if ((lines[i] ?? '').trim() !== '') return i
    }
    return -1
  }

  const folds: Array<{ from: number; to: number }> = []
  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i] ?? ''
    const indent = indents[i] ?? 0
    if (!line.trim()) continue

    const nextIdx = nextNonEmptyIndex(i + 1)
    if (nextIdx === -1) continue
    const nextIndent = indents[nextIdx] ?? 0
    if (nextIndent <= indent) continue

    let j = nextIdx + 1
    while (j < lines.length) {
      const t = (lines[j] ?? '').trim()
      if (!t) {
        j++
        continue
      }
      if ((indents[j] ?? 0) > indent) {
        j++
        continue
      }
      break
    }
    const to = j - 1
    if (to >= nextIdx) folds.push({ from: i + 1, to: to + 1 })
  }
  return folds
}

function setFold(from: number, to: number, fold: boolean) {
  const root = host.value
  if (!root) return

  const rows = root.querySelectorAll<HTMLElement>('.code-ln__row')
  for (const row of rows) {
    const ln = Number(row.dataset.ln)
    if (!Number.isFinite(ln)) continue
    if (ln <= from || ln > to) continue
    row.style.display = fold ? 'none' : ''
  }

  const fromRow = root.querySelector<HTMLElement>(`.code-ln__row[data-ln="${from}"]`)
  const btn = fromRow?.querySelector<HTMLElement>('.code-ln__fold') ?? null
  if (btn) {
    btn.textContent = fold ? '▸' : '▾'
  }
  fromRow?.classList.toggle('code-ln__row--folded', fold)

  const set = foldedFrom.value
  if (fold) set.add(from)
  else set.delete(from)
}

function syncFoldDom() {
  const root = host.value
  if (!root) return

  const buttons = root.querySelectorAll<HTMLButtonElement>('.code-ln__fold')
  for (const b of buttons) {
    const from = Number(b.dataset.foldFrom)
    const to = Number(b.dataset.foldTo)
    if (!Number.isFinite(from) || !Number.isFinite(to)) continue
    const isFolded = foldedFrom.value.has(from)
    b.textContent = isFolded ? '▸' : '▾'
    const row = root.querySelector<HTMLElement>(`.code-ln__row[data-ln="${from}"]`)
    row?.classList.toggle('code-ln__row--folded', isFolded)
  }
}

function onClick(e: MouseEvent) {
  const root = host.value
  if (!root) return
  const target = e.target as HTMLElement | null
  const btn = target?.closest?.('.code-ln__fold') as HTMLElement | null
  if (!btn) return
  const from = Number(btn.dataset.foldFrom)
  const to = Number(btn.dataset.foldTo)
  if (!Number.isFinite(from) || !Number.isFinite(to)) return
  const isFolded = foldedFrom.value.has(from)
  setFold(from, to, !isFolded)
}

onBeforeUnmount(() => {
  host.value?.removeEventListener('click', onClick)
})

watch(
  () => props.tabs,
  (tabs) => {
    if (!tabs?.length) return
    if (!tabs.some((t) => t.id === activeTabId.value)) {
      activeTabId.value = tabs[0]?.id ?? ''
    }
  },
  { immediate: true },
)

watch(
  () => [displayCode.value, displayLanguage.value] as const,
  ([code, language]) => {
    void renderCode(code, language)
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="code-panel min-w-0 overflow-hidden rounded-lg border border-[#2b2b2b] shadow-sm"
  >
    <div
      class="code-panel__toolbar flex items-center justify-between gap-2 border-b border-[#2b2b2b] bg-[#252526] px-3 py-2"
    >
      <div
        v-if="isTabbed"
        class="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="code-panel__tab shrink-0 rounded px-2.5 py-1 text-xs font-medium transition-colors"
          :class="tab.id === activeTabId
            ? 'bg-[#1e1e1e] text-[#ffffff]'
            : 'text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]'"
          @click="activeTabId = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
      <span v-else class="code-panel__label shrink-0 text-[#cccccc]">
        {{ languageLabel }}
      </span>
      <div class="flex shrink-0 items-center gap-1">
        <Button
          v-if="isCollapsible"
          type="button"
          variant="ghost"
          size="sm"
          class="code-panel__label text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white h-7 px-2"
          @click="toggleCollapsed"
        >
          <ChevronDown
            class="size-3.5 transition-transform"
            :class="collapsed ? '-rotate-90' : 'rotate-0'"
          />
          {{ collapsed ? 'Expand' : 'Collapse' }}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          class="code-panel__label text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white h-7 px-2"
          :disabled="!isReady || !formattedCode"
          @click="copyCode()"
        >
          <Check v-if="copied" class="size-3.5 text-[#89d185]" />
          <Copy v-else class="size-3.5" />
          {{ copied ? 'Copied' : 'Copy' }}
        </Button>
      </div>
    </div>

    <div
      v-show="!collapsed"
      ref="host"
      class="code-panel__body relative max-h-[min(70vh,32rem)] min-w-0 overflow-x-auto overflow-y-auto bg-[#1e1e1e]"
      @click="onClick"
    >
      <div
        v-if="!isReady"
        class="code-panel__content code-panel__content--loading text-[#858585]"
      >
        {{ displayEmptyLabel ?? 'Formatting…' }}
      </div>
      <div
        v-else
        class="code-panel__content code-panel__highlight"
        v-html="highlightedHtml"
      />
    </div>
  </div>
</template>

<style scoped>
.code-panel__label,
.code-panel__tab {
  font-family: var(--font-code);
  letter-spacing: 0.02em;
}

.code-panel__label {
  font-size: 0.75rem;
  font-weight: 500;
}

.code-panel__content {
  padding: 1rem 1.125rem;
  font-family: var(--font-code);
  font-size: var(--code-size);
  line-height: var(--code-leading);
  font-weight: 400;
  font-feature-settings:
    "calt" 1,
    "liga" 1;
  tab-size: 2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.code-panel__content--loading {
  font-size: var(--code-size);
}

.code-panel__highlight :deep(.shiki) {
  margin: 0;
  padding: 0 !important;
  background: transparent !important;
  overflow: visible;
}

.code-panel__highlight :deep(.shiki code) {
  display: block;
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
  font-weight: inherit !important;
  background: transparent !important;
}

.code-panel__highlight :deep(.shiki span) {
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
}

.code-panel__highlight :deep(.shiki--line-numbers) {
  overflow: visible;
}

.code-panel__highlight :deep(.shiki--line-numbers code) {
  display: block;
  min-width: max-content;
}

.code-panel__highlight :deep(.code-ln__row) {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 1rem;
  padding: 0 0;
  min-width: max-content;
}

.code-panel__highlight :deep(.code-ln__gutter) {
  user-select: none;
  text-align: right;
  padding-right: 0.5rem;
  min-width: 2.5rem;
  color: #858585;
  border-right: 1px solid #2b2b2b;
}

.code-panel__highlight :deep(.code-ln__fold),
.code-panel__highlight :deep(.code-ln__fold-spacer) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  color: #858585;
}

.code-panel__highlight :deep(.code-ln__fold) {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.code-panel__highlight :deep(.code-ln__fold:hover) {
  color: #cccccc;
}

.code-panel__highlight :deep(.code-ln__row--folded .code-ln__code) {
  opacity: 0.9;
}

.code-panel__highlight :deep(.code-ln__code) {
  padding-left: 0;
  white-space: pre;
  min-width: max-content;
}
</style>
