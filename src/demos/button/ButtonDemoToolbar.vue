<script setup lang="ts">
import { ArrowLeftIcon, MoreHorizontalIcon, TagIcon } from '@lucide/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  buttonGroupActionLabels,
  buttonGroupLabelOptions,
  buttonGroupMoreMenuPrimary,
  buttonGroupMoreMenuSecondary,
  buttonGroupSnoozeLabel,
  buttonGroupTrashMenuItem,
} from '@/demos/button-group/button-group-demo.data'

const label = ref('personal')
</script>

<template>
  <ButtonGroup>
    <ButtonGroup class="hidden sm:flex">
      <Button variant="outline" size="icon" aria-label="Go Back">
        <ArrowLeftIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button
        v-for="actionLabel in buttonGroupActionLabels"
        :key="actionLabel"
        variant="outline"
      >
        {{ actionLabel }}
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">
        {{ buttonGroupSnoozeLabel }}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="icon" aria-label="More Options">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="end" class="w-52">
          <DropdownMenuGroup>
            <DropdownMenuItem
              v-for="item in buttonGroupMoreMenuPrimary"
              :key="item.id"
              :variant="item.variant"
            >
              <component :is="item.icon" />
              {{ item.label }}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              v-for="item in buttonGroupMoreMenuSecondary"
              :key="item.id"
              :variant="item.variant"
            >
              <component :is="item.icon" />
              {{ item.label }}
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <TagIcon class="mr-2 size-4" />
                Label As...
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup v-model="label">
                  <DropdownMenuRadioItem
                    v-for="option in buttonGroupLabelOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem :variant="buttonGroupTrashMenuItem.variant">
              <component :is="buttonGroupTrashMenuItem.icon" />
              {{ buttonGroupTrashMenuItem.label }}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  </ButtonGroup>
</template>
