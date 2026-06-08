<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  accountMenuItems,
  accountMenuLabel,
  appearanceMenuItems,
  appearanceMenuLabel,
  dropdownMenuContentClass,
  dropdownMenuFrameClass,
  dropdownMenuFrameStyle,
  dropdownMenuSectionClass,
  dropdownMenuTriggerLabel,
  inviteSubmenuItems,
  positionMenuDefault,
  positionMenuLabel,
  positionMenuOptions,
} from './dropdown-menu-demo.data'

const showStatusBar = ref(appearanceMenuItems.statusBar.defaultChecked)
const showActivityBar = ref(appearanceMenuItems.activityBar.defaultChecked)
const showPanel = ref(appearanceMenuItems.panel.defaultChecked)

const position = ref(positionMenuDefault)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.dropdownMenu"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="dropdownMenuFrameClass" :style="dropdownMenuFrameStyle()">
      <div :class="dropdownMenuSectionClass">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              {{ dropdownMenuTriggerLabel }}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent :class="dropdownMenuContentClass" align="start">
            <DropdownMenuLabel>{{ accountMenuLabel }}</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                {{ accountMenuItems.profile.label }}
                <DropdownMenuShortcut>{{ accountMenuItems.profile.shortcut }}</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {{ accountMenuItems.billing.label }}
                <DropdownMenuShortcut>{{ accountMenuItems.billing.shortcut }}</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {{ accountMenuItems.settings.label }}
                <DropdownMenuShortcut>{{ accountMenuItems.settings.shortcut }}</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {{ accountMenuItems.keyboardShortcuts.label }}
                <DropdownMenuShortcut>{{ accountMenuItems.keyboardShortcuts.shortcut }}</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>{{ accountMenuItems.team.label }}</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>{{ accountMenuItems.inviteUsers.label }}</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>{{ inviteSubmenuItems[0] }}</DropdownMenuItem>
                    <DropdownMenuItem>{{ inviteSubmenuItems[1] }}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{{ inviteSubmenuItems[2] }}</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                {{ accountMenuItems.newTeam.label }}
                <DropdownMenuShortcut>{{ accountMenuItems.newTeam.shortcut }}</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{{ accountMenuItems.github.label }}</DropdownMenuItem>
            <DropdownMenuItem>{{ accountMenuItems.support.label }}</DropdownMenuItem>
            <DropdownMenuItem disabled>
              {{ accountMenuItems.api.label }}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {{ accountMenuItems.logOut.label }}
              <DropdownMenuShortcut>{{ accountMenuItems.logOut.shortcut }}</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div :class="dropdownMenuSectionClass">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              {{ dropdownMenuTriggerLabel }}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent :class="dropdownMenuContentClass" align="start">
            <DropdownMenuLabel>{{ appearanceMenuLabel }}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
              {{ appearanceMenuItems.statusBar.label }}
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
              {{ appearanceMenuItems.activityBar.label }}
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem v-model:checked="showPanel">
              {{ appearanceMenuItems.panel.label }}
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div :class="dropdownMenuSectionClass">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              {{ dropdownMenuTriggerLabel }}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent :class="dropdownMenuContentClass" align="start">
            <DropdownMenuLabel>{{ positionMenuLabel }}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup v-model="position">
              <DropdownMenuRadioItem
                v-for="option in positionMenuOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>
