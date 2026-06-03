<script setup lang="ts">
import { ChevronsUpDown } from '@lucide/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  collapsibleContentClass,
  collapsibleDemoHiddenItems,
  collapsibleDemoPrimaryItem,
  collapsibleDemoTitle,
  collapsibleFrameClass,
  collapsibleFrameStyle,
  collapsibleHeaderClass,
  collapsibleItemClass,
  collapsibleRootClass,
  collapsibleTitleClass,
} from './collapsible-demo.data'

const collapsedOpen = ref(false)
const expandedOpen = ref(true)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.collapsible"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="collapsibleFrameClass" :style="collapsibleFrameStyle()">
      <Collapsible
        v-model:open="collapsedOpen"
        :class="collapsibleRootClass"
      >
        <div :class="collapsibleHeaderClass">
          <h4 :class="collapsibleTitleClass">
            {{ collapsibleDemoTitle }}
          </h4>
          <CollapsibleTrigger as-child>
            <Button variant="ghost" size="icon" class="size-8">
              <ChevronsUpDown />
              <span class="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div :class="collapsibleItemClass">
          {{ collapsibleDemoPrimaryItem }}
        </div>
        <CollapsibleContent :class="collapsibleContentClass">
          <div
            v-for="item in collapsibleDemoHiddenItems"
            :key="item"
            :class="collapsibleItemClass"
          >
            {{ item }}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        v-model:open="expandedOpen"
        :class="collapsibleRootClass"
      >
        <div :class="collapsibleHeaderClass">
          <h4 :class="collapsibleTitleClass">
            {{ collapsibleDemoTitle }}
          </h4>
          <CollapsibleTrigger as-child>
            <Button variant="ghost" size="icon" class="size-8">
              <ChevronsUpDown />
              <span class="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div :class="collapsibleItemClass">
          {{ collapsibleDemoPrimaryItem }}
        </div>
        <CollapsibleContent :class="collapsibleContentClass">
          <div
            v-for="item in collapsibleDemoHiddenItems"
            :key="item"
            :class="collapsibleItemClass"
          >
            {{ item }}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</template>
