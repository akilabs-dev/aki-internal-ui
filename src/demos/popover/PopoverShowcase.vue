<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  popoverDimensionFields,
  popoverDimensionsDescription,
  popoverDimensionsTitle,
  popoverTriggerLabel,
} from './popover-demo.data'

const props = withDefaults(
  defineProps<{
    defaultOpen?: boolean
  }>(),
  {
    defaultOpen: false,
  },
)

const open = ref(props.defaultOpen)

watch(
  () => props.defaultOpen,
  (value) => {
    open.value = value
  },
)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button variant="outline">
        {{ popoverTriggerLabel }}
      </Button>
    </PopoverTrigger>
    <PopoverContent align="start" class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">
            {{ popoverDimensionsTitle }}
          </h4>
          <p class="text-muted-foreground text-sm">
            {{ popoverDimensionsDescription }}
          </p>
        </div>
        <div class="grid gap-2">
          <div
            v-for="field in popoverDimensionFields"
            :key="field.id"
            class="grid grid-cols-3 items-center gap-4"
          >
            <Label :for="field.id">{{ field.label }}</Label>
            <Input
              :id="field.id"
              :default-value="field.value"
              class="col-span-2 h-8"
            />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
