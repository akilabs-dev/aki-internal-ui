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

const host = ref<any>(null)
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
  host.value = el && typeof el === 'object' ? el : null
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
  <div :ref="setHost" class="alpine-html-preview w-full min-w-0" />
</template>
