<script setup lang="ts">
import {
  ArrowUpIcon,
  ArrowUpRight,
  ChevronRightIcon,
  GitBranchIcon,
} from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { buttonRowPairGapPx, type ButtonDemoRow } from './button-demo.data'

const props = defineProps<{
  row: ButtonDemoRow
  column: 1 | 2
}>()

function pairStyle() {
  return { gap: `${buttonRowPairGapPx}px` }
}
</script>

<template>
  <div
    v-if="row.kind === 'size-pair' && row.label && row.variant && row.textSize && row.iconSize"
    class="flex flex-nowrap items-center"
    :style="pairStyle()"
  >
    <Button :variant="row.variant" :size="row.textSize">
      {{ row.label }}
    </Button>
    <Button
      :variant="row.variant"
      :size="row.iconSize"
      aria-label="Submit"
    >
      <ArrowUpRight />
    </Button>
  </div>

  <Button
    v-else-if="row.kind === 'label' && row.label && row.variant && row.textSize"
    :variant="row.variant"
    :size="row.textSize"
  >
    {{ row.label }}
  </Button>

  <Button
    v-else-if="row.kind === 'destructive'"
    variant="destructive"
  >
    Destructive
  </Button>

  <Button
    v-else-if="row.kind === 'link'"
    variant="link"
    :class="column === 2 ? 'underline' : undefined"
  >
    Link
  </Button>

  <Button
    v-else-if="row.kind === 'chevron-icon'"
    variant="outline"
    size="icon-sm"
    aria-label="Next"
  >
    <ChevronRightIcon />
  </Button>

  <Button
    v-else-if="row.kind === 'new-branch'"
    variant="outline"
    size="sm"
  >
    <GitBranchIcon />
    New Branch
  </Button>

  <Button
    v-else-if="row.kind === 'rounded'"
    variant="outline"
    size="icon"
    class="rounded-full"
    aria-label="Up"
  >
    <ArrowUpIcon />
  </Button>

  <Button
    v-else-if="row.kind === 'spinner' && column === 1"
    size="sm"
    variant="outline"
    disabled
  >
    <Spinner class="animate-spin" />
    Submit
  </Button>
</template>
