<script setup lang="ts">
import { Code2Icon, PlusIcon, TrashIcon } from '@lucide/vue'
import {
  ContextMenuCheckboxItem,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from '@/components/ui/context-menu'
import {
  contextMenuBookmarksLabel,
  contextMenuSubContentClass,
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
</script>

<template>
  <ContextMenuItem inset>
    Back
    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuItem inset disabled>
    Forward
    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuItem inset>
    Reload
    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuSub>
    <ContextMenuSubTrigger inset>
      More Tools
    </ContextMenuSubTrigger>
    <ContextMenuSubContent :class="contextMenuSubContentClass">
      <ContextMenuItem inset>
        Save Page...
        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <PlusIcon />
        Create Shortcut...
      </ContextMenuItem>
      <ContextMenuItem inset>
        Name Window...
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Code2Icon />
        Developer Tools
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <TrashIcon />
        Delete
      </ContextMenuItem>
    </ContextMenuSubContent>
  </ContextMenuSub>
  <ContextMenuSeparator />
  <ContextMenuCheckboxItem v-model="showBookmarks">
    {{ contextMenuBookmarksLabel }}
  </ContextMenuCheckboxItem>
  <ContextMenuCheckboxItem v-model="showFullUrls">
    Show Full URLs
  </ContextMenuCheckboxItem>
  <ContextMenuSeparator />
  <ContextMenuRadioGroup v-model="person">
    <ContextMenuLabel inset>
      People
    </ContextMenuLabel>
    <ContextMenuRadioItem value="pedro">
      Pedro Duarte
    </ContextMenuRadioItem>
    <ContextMenuRadioItem value="colm">
      Colm Tuite
    </ContextMenuRadioItem>
  </ContextMenuRadioGroup>
</template>
