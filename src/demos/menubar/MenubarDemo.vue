<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  menubarBlockClass,
  menubarDefaults,
  menubarFrameClass,
} from './menubar-demo.data'

const bookmarksBar = ref(menubarDefaults.bookmarksBar)
const fullUrls = ref(menubarDefaults.fullUrls)
const profile = ref(menubarDefaults.profile)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.menubar"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="menubarFrameClass">
      <div :class="menubarBlockClass">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                New Incognito Window
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem v-model:checked="bookmarksBar">
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem v-model:checked="fullUrls">
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Toggle Fullscreen
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Hide Sidebar
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup v-model="profile">
                <MenubarRadioItem value="andy">
                  Andy
                </MenubarRadioItem>
                <MenubarRadioItem value="benoit">
                  Benoit
                </MenubarRadioItem>
                <MenubarRadioItem value="Luis">
                  Luis
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>
                Edit...
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Add Profile...
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  </div>
</template>
