<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import { figmaLinks } from '@/figma-links'
import {
  radioGroupDefaultValue,
  radioGroupFrameClass,
  radioGroupFrameStyle,
  radioGroupOptions,
  radioGroupRowClass,
} from './radio-group-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.radioGroup"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="radioGroupFrameClass" :style="radioGroupFrameStyle()">
      <RadioGroup :default-value="radioGroupDefaultValue">
        <div
          v-for="option in radioGroupOptions"
          :key="option.id"
          :class="radioGroupRowClass"
        >
          <RadioGroupItem :id="option.id" :value="option.value" />
          <Label :for="option.id">{{ option.label }}</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>
