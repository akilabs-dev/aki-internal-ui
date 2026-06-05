<script setup lang="ts">
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from '@lucide/vue'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  commandEmptyLabel,
  commandFrameClass,
  commandFrameStyle,
  commandInputPlaceholder,
  commandRootClass,
  commandSettingsHeading,
  commandSettingsItems,
  commandShortcutHint,
  commandShortcutHintClass,
  commandSuggestionHeading,
} from './command-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.command"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="commandFrameClass" :style="commandFrameStyle()">
      <p :class="commandShortcutHintClass">
        {{ commandShortcutHint }}
      </p>
      <Command :class="commandRootClass">
        <CommandInput :placeholder="commandInputPlaceholder" />
        <CommandList>
          <CommandEmpty>{{ commandEmptyLabel }}</CommandEmpty>
          <CommandGroup :heading="commandSuggestionHeading">
            <CommandItem value="calendar">
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="emoji">
              <Smile />
              <span>Search emoji</span>
            </CommandItem>
            <CommandItem disabled value="calculator">
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup :heading="commandSettingsHeading">
            <CommandItem
              v-for="item in commandSettingsItems"
              :key="item.value"
              :value="item.value"
            >
              <User v-if="item.value === 'profile'" />
              <CreditCard v-else-if="item.value === 'billing'" />
              <Settings v-else />
              <span>{{ item.label }}</span>
              <CommandShortcut v-if="item.shortcut">
                {{ item.shortcut }}
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  </div>
</template>
