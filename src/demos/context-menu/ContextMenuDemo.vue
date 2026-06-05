<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import ContextMenuExample from './ContextMenuExample.vue'
import {
  contextMenuFrameClass,
  contextMenuFrameStyle,
  type ContextMenuDemoState,
  contextMenuDefaults,
} from './context-menu-demo.data'

const showBookmarks = ref<ContextMenuDemoState['showBookmarks']>(
  contextMenuDefaults.showBookmarks,
)
const showFullUrls = ref<ContextMenuDemoState['showFullUrls']>(
  contextMenuDefaults.showFullUrls,
)
const person = ref<ContextMenuDemoState['person']>(contextMenuDefaults.person)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.contextMenu"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="contextMenuFrameClass" :style="contextMenuFrameStyle()">
      <ContextMenuExample
        v-model:show-bookmarks="showBookmarks"
        v-model:show-full-urls="showFullUrls"
        v-model:person="person"
      />
      <ContextMenuExample
        v-model:show-bookmarks="showBookmarks"
        v-model:show-full-urls="showFullUrls"
        v-model:person="person"
      />
    </div>
  </div>
</template>
