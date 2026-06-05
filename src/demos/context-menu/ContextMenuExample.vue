<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ContextMenuContent } from 'reka-ui'
import { ContextMenu } from '@/components/ui/context-menu'
import { cn } from '@/lib/utils'
import ContextMenuPanelItems from './ContextMenuPanelItems.vue'
import {
  contextMenuContentBaseClass,
  contextMenuContentClass,
  contextMenuTriggerClass,
  type ContextMenuDemoState,
} from './context-menu-demo.data'

const showBookmarks = defineModel<ContextMenuDemoState['showBookmarks']>(
  'showBookmarks',
  { required: true },
)
const showFullUrls = defineModel<ContextMenuDemoState['showFullUrls']>(
  'showFullUrls',
  { required: true },
)
const person = defineModel<ContextMenuDemoState['person']>('person', {
  required: true,
})

const open = ref(false)
const x = ref(0)
const y = ref(0)
let ignoreOutsideOnce = false

const contentClass = cn(contextMenuContentBaseClass, contextMenuContentClass)

async function openAt(event: MouseEvent) {
  event.preventDefault()
  x.value = event.clientX
  y.value = event.clientY
  ignoreOutsideOnce = true
  open.value = true
  await nextTick()
  requestAnimationFrame(() => {
    ignoreOutsideOnce = false
  })
}

function close() {
  open.value = false
}

function onPointerDownOutside() {
  if (ignoreOutsideOnce) return
  close()
}
</script>

<template>
  <!-- Inline content at click position — same behavior as HTML/Alpine preview -->
  <div
    class="relative w-fit overflow-visible"
    @keydown.escape.window="close"
  >
    <button
      type="button"
      data-slot="context-menu-trigger"
      :class="contextMenuTriggerClass"
      @click.prevent="openAt"
      @contextmenu.prevent="openAt"
    >
      Right click here
    </button>

    <ContextMenu v-model:open="open" :modal="false">
      <ContextMenuContent
        data-slot="context-menu-content"
        :avoid-collisions="false"
        :class="contentClass"
        :style="{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          zIndex: 50,
          transform: 'none',
        }"
        @pointer-down-outside="onPointerDownOutside"
      >
        <ContextMenuPanelItems
          v-model:show-bookmarks="showBookmarks"
          v-model:show-full-urls="showFullUrls"
          v-model:person="person"
        />
      </ContextMenuContent>
    </ContextMenu>
  </div>
</template>
