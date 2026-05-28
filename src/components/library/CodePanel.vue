<script setup lang="ts">
import { computed } from 'vue'
import { useCopyCode } from '../../composables/useCopyCode'

const props = defineProps<{
  code: string
  tabLabel: string
}>()

const lines = computed(() => props.code.split('\n'))
const { copied, copy } = useCopyCode()
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-b-xl bg-[#1e1e2e]">
    <div class="flex items-center justify-between border-b border-white/10 px-4 py-2">
      <span class="text-xs font-medium uppercase tracking-wide text-slate-400">{{ tabLabel }}</span>
      <button
        type="button"
        class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors"
        :class="
          copied
            ? 'bg-emerald-600/20 text-emerald-400'
            : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'
        "
        @click="copy(code)"
      >
        {{ copied ? 'Copied!' : 'Copy code' }}
      </button>
    </div>

    <div class="flex-1 overflow-auto">
      <pre class="m-0 flex min-h-full p-4 font-mono text-[13px] leading-relaxed"><code class="flex w-full"><span class="select-none pr-4 text-right text-slate-600" aria-hidden="true"><span v-for="(_, i) in lines" :key="i" class="block">{{ i + 1 }}</span></span><span class="min-w-0 flex-1 text-slate-200"><span v-for="(line, i) in lines" :key="i" class="block whitespace-pre">{{ line }}</span></span></code></pre>
    </div>
  </div>
</template>
