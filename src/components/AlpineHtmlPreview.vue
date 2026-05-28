<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import {
  destroyAlpineOnElement,
  ensureAlpine,
  initAlpineOnElement,
} from '@/lib/alpine/init-alpine'

const props = defineProps<{
  html: string
}>()

const host = ref<HTMLElement | null>(null)
const mountedHtml = ref('')

async function mountAlpine(html: string) {
  const el = host.value
  if (!el) return

  const trimmed = html.trim()
  if (!trimmed) {
    if (mountedHtml.value) {
      destroyAlpineOnElement(el)
      el.innerHTML = ''
      mountedHtml.value = ''
    }
    return
  }

  if (trimmed === mountedHtml.value) {
    return
  }

  destroyAlpineOnElement(el)
  el.innerHTML = trimmed
  await nextTick()
  ensureAlpine()
  initAlpineOnElement(el)
  mountedHtml.value = trimmed
}

function setHost(el: unknown) {
  host.value = el instanceof HTMLElement ? el : null
  if (host.value && props.html.trim()) {
    void mountAlpine(props.html)
  }
}

watch(
  () => props.html,
  (html) => {
    void mountAlpine(html)
  },
)

onBeforeUnmount(() => {
  const el = host.value
  if (!el) return
  destroyAlpineOnElement(el)
  el.innerHTML = ''
  mountedHtml.value = ''
})
</script>

<template>
  <div
    class="bg-card text-card-foreground rounded-lg border p-6 shadow-sm"
  >
    <p class="text-muted-foreground mb-4 text-xs">
      Live preview — Alpine.js
      (<code class="text-foreground">x-collapse</code>,
      <code class="text-foreground">x-show</code>)
    </p>
    <div :ref="setHost" class="alpine-html-preview" />
  </div>
</template>
