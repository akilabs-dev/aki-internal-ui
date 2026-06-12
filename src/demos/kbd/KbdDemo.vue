<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { figmaLinks } from '@/figma-links'
import { kbdBlockClass, kbdFrameClass, kbdSectionClass } from './kbd-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.kbd"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="kbdFrameClass">
      <div :class="kbdBlockClass">
        <div :class="kbdSectionClass">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>⌃</Kbd>
          </KbdGroup>

          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>B</Kbd>
          </KbdGroup>
        </div>
      </div>

      <div :class="kbdBlockClass">
        <p class="text-muted-foreground text-center text-sm">
          Use
          <KbdGroup>
            <Kbd>Ctrl + B</Kbd>
            <Kbd>Ctrl + K</Kbd>
          </KbdGroup>
          to open the command palette
        </p>
      </div>

      <div :class="kbdBlockClass">
        <div class="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" size="sm" class="pr-2">
            Accept <Kbd>⏎</Kbd>
          </Button>
          <Button variant="outline" size="sm" class="pr-2">
            Cancel <Kbd>Esc</Kbd>
          </Button>
        </div>
      </div>

      <div :class="kbdBlockClass">
        <div class="flex flex-wrap justify-center gap-4">
          <ButtonGroup>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button size="sm" variant="outline">
                    Save
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div class="flex items-center gap-2">
                    Save Changes <Kbd>S</Kbd>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button size="sm" variant="outline">
                    Print
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div class="flex items-center gap-2">
                    Print Document
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <Kbd>P</Kbd>
                    </KbdGroup>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ButtonGroup>
        </div>
      </div>

      <div :class="kbdBlockClass">
        <div class="flex w-full max-w-xs flex-col gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  </div>
</template>
