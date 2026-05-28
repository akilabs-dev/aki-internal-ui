<script setup lang="ts">
import { Check, Copy } from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'

const props = defineProps<{
  code: string
  language: 'vue' | 'html'
  emptyLabel?: string
}>()

const formattedCode = ref('')
const highlightedHtml = ref('')
const isReady = ref(false)

const { copy, copied } = useClipboard()

async function copyCode() {
  if (!formattedCode.value) return
  await copy(formattedCode.value)
}

async function renderCode(raw: string) {
  if (!raw.trim()) {
    formattedCode.value = ''
    highlightedHtml.value = ''
    isReady.value = false
    return
  }

  isReady.value = false

  const [{ formatHtmlSource, formatVueSource }, { highlightCodeWithLineNumbers }] = await Promise.all([
    import('@/lib/format-code'),
    import('@/lib/shiki-highlighter'),
  ])

  const formatted = props.language === 'vue'
    ? await formatVueSource(raw)
    : await formatHtmlSource(raw)

  formattedCode.value = formatted
  highlightedHtml.value = await highlightCodeWithLineNumbers(formatted, props.language)
  isReady.value = true
}

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
    class="code-panel overflow-hidden rounded-lg border border-[#2b2b2b] shadow-sm"
  >
    <div
      class="code-panel__toolbar flex items-center justify-between gap-2 border-b border-[#2b2b2b] bg-[#252526] px-3 py-2"
    >
      <span class="code-panel__label text-[#cccccc]">
        {{ language === 'vue' ? 'Vue' : 'HTML' }}
      </span>
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

    <div class="code-panel__body relative max-h-[min(70vh,32rem)] overflow-auto bg-[#1e1e1e]">
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
}

.code-panel__highlight :deep(.code-ln__row) {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 1rem;
  padding: 0 0;
}

.code-panel__highlight :deep(.code-ln__gutter) {
  user-select: none;
  text-align: right;
  padding-right: 0.5rem;
  min-width: 2.5rem;
  color: #858585;
  border-right: 1px solid #2b2b2b;
}

.code-panel__highlight :deep(.code-ln__code) {
  padding-left: 0;
  white-space: pre;
}
</style>
