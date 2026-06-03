<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import { cn } from '@/lib/utils'
import {
  checkboxCardControlClass,
  checkboxCardGroupClass,
  checkboxCardLabelBaseClass,
  checkboxCardLabelCheckedClass,
  checkboxFrameClass,
  checkboxFrameStyle,
} from './checkbox-demo.data'

const cardUnchecked = ref(false)
const cardChecked = ref(true)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.checkbox"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="checkboxFrameClass" :style="checkboxFrameStyle()">
      <div class="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>

      <Separator />

      <div class="flex items-start gap-3">
        <Checkbox id="terms-2" />
        <div class="grid gap-2">
          <Label for="terms-2">Accept terms and conditions</Label>
          <p class="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>

      <Separator />

      <div class="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <Label for="toggle" class="text-muted-foreground">Enable notifications</Label>
      </div>

      <Separator />

      <div :class="checkboxCardGroupClass">
        <Label
          :class="cn(
            checkboxCardLabelBaseClass,
            cardUnchecked && checkboxCardLabelCheckedClass,
          )"
        >
          <Checkbox
            id="toggle-2"
            v-model="cardUnchecked"
            :class="checkboxCardControlClass"
          />
          <div class="grid gap-1.5 font-normal">
            <p class="text-sm leading-none font-medium">
              Enable notifications
            </p>
            <p class="text-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>

        <Label
          :class="cn(
            checkboxCardLabelBaseClass,
            cardChecked && checkboxCardLabelCheckedClass,
          )"
        >
          <Checkbox
            id="toggle-3"
            v-model="cardChecked"
            :class="checkboxCardControlClass"
          />
          <div class="grid gap-1.5 font-normal">
            <p class="text-sm leading-none font-medium">
              Enable notifications
            </p>
            <p class="text-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
      </div>
    </div>
  </div>
</template>
