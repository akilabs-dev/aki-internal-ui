<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import { buttonDemoRows, buttonFrameStyle } from './button-demo.data'
import ButtonDemoCell from './ButtonDemoCell.vue'
import ButtonDemoRowContent from './ButtonDemoRowContent.vue'
import ButtonDemoToolbar from './ButtonDemoToolbar.vue'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.button"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div
      class="grid w-full grid-flow-row grid-cols-2 rounded-xl border border-dashed"
      :style="buttonFrameStyle()"
    >
      <template v-for="row in buttonDemoRows" :key="row.id">
        <ButtonDemoCell
          v-if="row.kind === 'button-group'"
          class="col-span-2"
        >
          <ButtonDemoToolbar />
        </ButtonDemoCell>
        <template v-else>
          <ButtonDemoCell
            v-for="column in 2"
            :key="`${row.id}-${column}`"
          >
            <ButtonDemoRowContent
              :row="row"
              :column="(column as 1 | 2)"
            />
          </ButtonDemoCell>
        </template>
      </template>
    </div>
  </div>
</template>
