<script setup lang="ts">
import { Plus } from '@lucide/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  comboboxCommandInputClass,
  comboboxFrameStyle,
  comboboxStatusButtonFrameClass,
  comboboxStatusContentClass,
  comboboxStatusControlClass,
  comboboxStatusEmptyLabel,
  comboboxStatuses,
  comboboxStatusSearchPlaceholder,
  comboboxStatusTriggerClass,
  comboboxStatusTriggerPlaceholder,
} from './combobox-demo.data'

const statusBtn1Open = ref(false)
const statusBtn1Value = ref('')

const statusBtn2Open = ref(false)
const statusBtn2Value = ref('')

function statusTriggerLabel(value: string) {
  if (!value) return comboboxStatusTriggerPlaceholder
  return (
    comboboxStatuses.find((s) => s.value === value)?.label ??
    comboboxStatusTriggerPlaceholder
  )
}

function onSelectStatus1(selected: string) {
  statusBtn1Value.value = statusBtn1Value.value === selected ? '' : selected
  statusBtn1Open.value = false
}

function onSelectStatus2(selected: string) {
  statusBtn2Value.value = statusBtn2Value.value === selected ? '' : selected
  statusBtn2Open.value = false
}
</script>

<template>
  <div :class="comboboxStatusButtonFrameClass" :style="comboboxFrameStyle()">
    <div :class="comboboxStatusControlClass">
      <Popover v-model:open="statusBtn1Open">
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            size="sm"
            role="combobox"
            :aria-expanded="statusBtn1Open"
            :class="comboboxStatusTriggerClass"
          >
            <Plus v-if="!statusBtn1Value" class="size-4" />
            {{ statusTriggerLabel(statusBtn1Value) }}
          </Button>
        </PopoverTrigger>
        <PopoverContent :class="comboboxStatusContentClass" align="start">
          <Command>
            <CommandInput
              :class="comboboxCommandInputClass"
              :placeholder="comboboxStatusSearchPlaceholder"
            />
            <CommandList>
              <CommandEmpty>{{ comboboxStatusEmptyLabel }}</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  v-for="status in comboboxStatuses"
                  :key="status.value"
                  :value="status.value"
                  @select="(ev) => {
                    onSelectStatus1(ev.detail.value as string)
                  }"
                >
                  {{ status.label }}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>

    <div :class="comboboxStatusControlClass">
      <Popover v-model:open="statusBtn2Open">
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            size="sm"
            role="combobox"
            :aria-expanded="statusBtn2Open"
            :class="comboboxStatusTriggerClass"
          >
            <Plus v-if="!statusBtn2Value" class="size-4" />
            {{ statusTriggerLabel(statusBtn2Value) }}
          </Button>
        </PopoverTrigger>
        <PopoverContent :class="comboboxStatusContentClass" align="start">
          <Command>
            <CommandInput
              :class="comboboxCommandInputClass"
              :placeholder="comboboxStatusSearchPlaceholder"
            />
            <CommandList>
              <CommandEmpty>{{ comboboxStatusEmptyLabel }}</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  v-for="status in comboboxStatuses"
                  :key="status.value"
                  :value="status.value"
                  @select="(ev) => {
                    onSelectStatus2(ev.detail.value as string)
                  }"
                >
                  {{ status.label }}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
