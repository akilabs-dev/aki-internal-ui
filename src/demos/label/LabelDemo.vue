<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Label } from '@/components/ui/label'
import { figmaLinks } from '@/figma-links'
import {
  labelBlockClass,
  labelFrameClass,
  labelRowClass,
  labelTermsId,
  labelTermsPreviewId,
  labelTermsText,
} from './label-demo.data'

const termsValue = ref(false)
const termsPreviewValue = ref(true)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.label"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="labelFrameClass">
      <div :class="labelBlockClass">
        <div :class="labelRowClass">
          <Checkbox :id="labelTermsId" v-model="termsValue" />
          <Label :for="labelTermsId">{{ labelTermsText }}</Label>
        </div>

        <div :class="labelRowClass">
          <Checkbox :id="labelTermsPreviewId" v-model="termsPreviewValue" />
          <Label :for="labelTermsPreviewId">{{ labelTermsText }}</Label>
        </div>
      </div>
    </div>
  </div>
</template>
