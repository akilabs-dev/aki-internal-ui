<script setup lang="ts">
import { MoreHorizontal } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  comboboxTaskMenuContentClass,
  comboboxTaskMenuDeleteLabel,
  comboboxTaskMenuDeleteShortcut,
  comboboxTaskMenuItems,
  comboboxTaskMenuLabel,
  comboboxTaskMenuSubItems,
  comboboxTaskMenuSubLabel,
  comboboxTaskBadgeLabel,
  comboboxTaskRowClass,
  comboboxTaskRowInnerClass,
  comboboxTaskTitle,
} from './combobox-demo.data'

const menuOpen = defineModel<boolean>('menuOpen', { default: false })
</script>

<template>
  <div :class="comboboxTaskRowClass">
    <div :class="comboboxTaskRowInnerClass">
      <Badge>{{ comboboxTaskBadgeLabel }}</Badge>
      <span class="truncate text-sm">{{ comboboxTaskTitle }}</span>
    </div>

    <DropdownMenu v-model:open="menuOpen">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="icon" class="size-8 shrink-0" aria-label="Open menu">
          <MoreHorizontal class="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        :class="comboboxTaskMenuContentClass"
      >
        <DropdownMenuLabel>{{ comboboxTaskMenuLabel }}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem
            v-for="item in comboboxTaskMenuItems"
            :key="item.id"
          >
            {{ item.label }}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {{ comboboxTaskMenuSubLabel }}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                v-for="item in comboboxTaskMenuSubItems"
                :key="item.id"
              >
                {{ item.label }}
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          {{ comboboxTaskMenuDeleteLabel }}
          <DropdownMenuShortcut>{{ comboboxTaskMenuDeleteShortcut }}</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
