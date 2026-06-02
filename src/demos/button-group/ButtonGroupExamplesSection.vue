<script setup lang="ts">
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
} from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  buttonGroupInnerFrameStyle,
  buttonGroupPaginationLabels,
  buttonGroupSizeRows,
  buttonGroupSizeRowsGapPx,
} from './button-group-demo.data'
import ButtonGroupSectionDivider from './ButtonGroupSectionDivider.vue'
</script>

<template>
  <ButtonGroupSectionDivider />

  <ButtonGroup
    orientation="vertical"
    aria-label="Media controls"
    class="h-fit w-fit"
  >
    <Button variant="outline" size="icon">
      <PlusIcon />
    </Button>
    <Button variant="outline" size="icon">
      <MinusIcon />
    </Button>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <div
    class="flex w-full flex-col rounded-3xl border border-dashed"
    :style="buttonGroupInnerFrameStyle()"
  >
    <div
      class="flex flex-col items-start"
      :style="{ gap: `${buttonGroupSizeRowsGapPx}px` }"
    >
      <ButtonGroup
        v-for="group in buttonGroupSizeRows"
        :key="group.id"
        class="w-fit"
      >
        <Button
          v-for="label in group.labels"
          :key="label"
          variant="outline"
          :size="group.textSize"
        >
          {{ label }}
        </Button>
        <Button variant="outline" :size="group.iconSize">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  </div>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <ButtonGroup>
      <Button
        v-for="page in buttonGroupPaginationLabels"
        :key="page"
        variant="outline"
        size="sm"
      >
        {{ page }}
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button
        variant="outline"
        size="icon-sm"
        aria-label="Previous"
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        variant="outline"
        size="icon-sm"
        aria-label="Next"
      >
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
