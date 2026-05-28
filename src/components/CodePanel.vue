<script setup lang="ts">
import { Check, ChevronDown, Copy } from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { Button } from '@/components/ui/button'

const props = defineProps<{
  code: string
  language: 'vue' | 'html' | 'css'
  emptyLabel?: string
  collapsible?: boolean
  defaultCollapsed?: boolean
}>()

const formattedCode = ref('')
const highlightedHtml = ref('')
const isReady = ref(false)
const collapsed = ref(!!props.defaultCollapsed)
const host = ref<HTMLElement | null>(null)
const foldedFrom = ref(new Set<number>())

const isCollapsible = computed(() => props.collapsible !== false)

const { copy, copied } = useClipboard()

async function copyCode() {
  if (!formattedCode.value) return
  await copy(formattedCode.value)
}

function toggleCollapsed() {
  if (!isCollapsible.value) return
  collapsed.value = !collapsed.value
}

async function renderCode(raw: string) {
  if (!raw.trim()) {
    formattedCode.value = ''
    highlightedHtml.value = ''
    isReady.value = false
    return
  }

  isReady.value = false

  const [{ formatCssSource, formatHtmlSource, formatVueSource }, { highlightCodeWithLineNumbers }] = await Promise.all([
    import('@/lib/format-code'),
    import('@/lib/shiki-highlighter'),
  ])

  const formatted = props.language === 'vue'
    ? await formatVueSource(raw)
    : props.language === 'css'
      ? await formatCssSource(raw)
      : await formatHtmlSource(raw)

  formattedCode.value = formatted
  const folds = computeFoldRanges(formatted)
  highlightedHtml.value = await highlightCodeWithLineNumbers(formatted, props.language, folds)
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
  () => [props.code, props.language] as const,
  ([code]) => {
    void renderCode(code)
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
      <span class="code-panel__label text-[#cccccc]">
        {{ language === 'vue' ? 'Vue' : language === 'css' ? 'CSS' : 'HTML' }}
      </span>
      <div class="flex items-center gap-1">
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
        {{ emptyLabel ?? 'Formatting…' }}
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
.code-panel__label {
  font-family: var(--font-code);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
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
