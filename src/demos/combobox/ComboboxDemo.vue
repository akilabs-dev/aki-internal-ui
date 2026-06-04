<script setup lang="ts">
import { Check, ChevronsUpDown, Plus } from '@lucide/vue'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'
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
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  comboboxCommandInputClass,
  comboboxContentClass,
  comboboxDemoRootClass,
  comboboxDemoSectionClass,
  comboboxEmptyLabel,
  comboboxFrameClass,
  comboboxFrameStyle,
  comboboxFrameworks,
  comboboxPlaceholder,
  comboboxSearchPlaceholder,
  comboboxStatusContentClass,
  comboboxStatusControlClass,
  comboboxStatusLabelClass,
  comboboxStatusOpenPanelClass,
  comboboxStatusEmptyLabel,
  comboboxStatusFieldLabel,
  comboboxStatusFrameClass,
  comboboxStatusGroupClass,
  comboboxStatuses,
  comboboxStatusSearchPlaceholder,
  comboboxStatusTriggerClass,
  comboboxStatusTriggerPlaceholder,
  comboboxTriggerClass,
} from './combobox-demo.data'
import ComboboxStatusButtonSection from './ComboboxStatusButtonSection.vue'
import ComboboxTaskSection from './ComboboxTaskSection.vue'

const closedOpen = ref(false)
const closedValue = ref('')

const openPreviewOpen = ref(true)
const openPreviewValue = ref('next.js')

const statusClosed1Open = ref(false)
const statusClosed1Value = ref('')

const statusClosed2Open = ref(false)
const statusClosed2Value = ref('')

const closedSelected = computed(() =>
  comboboxFrameworks.find((f) => f.value === closedValue.value),
)

const openPreviewSelected = computed(() =>
  comboboxFrameworks.find((f) => f.value === openPreviewValue.value),
)

function selectClosed(selected: string) {
  closedValue.value = closedValue.value === selected ? '' : selected
  closedOpen.value = false
}

function selectOpenPreview(selected: string) {
  openPreviewValue.value = openPreviewValue.value === selected ? '' : selected
  openPreviewOpen.value = false
}

function onSelectStatus1(selected: string) {
  statusClosed1Value.value =
    statusClosed1Value.value === selected ? '' : selected
  statusClosed1Open.value = false
}

function onSelectStatus2(selected: string) {
  statusClosed2Value.value =
    statusClosed2Value.value === selected ? '' : selected
  statusClosed2Open.value = false
}

function statusTriggerLabel(value: string) {
  if (!value) return comboboxStatusTriggerPlaceholder
  return (
    comboboxStatuses.find((s) => s.value === value)?.label ??
    comboboxStatusTriggerPlaceholder
  )
}
</script>

<template>
  <div :class="comboboxDemoRootClass">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.combobox"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="comboboxFrameClass"  :style="comboboxFrameStyle()">
      <Popover v-model:open="closedOpen">
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            role="combobox"
            :aria-expanded="closedOpen"
            :class="comboboxTriggerClass"
          >
            {{ closedSelected?.label || comboboxPlaceholder }}
            <ChevronsUpDown class="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent :class="comboboxContentClass">
          <Command>
            <CommandInput
              :class="comboboxCommandInputClass"
              :placeholder="comboboxSearchPlaceholder"
            />
            <CommandList>
              <CommandEmpty>{{ comboboxEmptyLabel }}</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  v-for="framework in comboboxFrameworks"
                  :key="framework.value"
                  :value="framework.value"
                  @select="(ev) => {
                    selectClosed(ev.detail.value as string)
                  }"
                >
                  {{ framework.label }}
                  <Check
                    :class="cn(
                      'ml-auto',
                      closedValue === framework.value ? 'opacity-100' : 'opacity-0',
                    )"
                  />
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover v-model:open="openPreviewOpen">
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            role="combobox"
            :aria-expanded="openPreviewOpen"
            :class="comboboxTriggerClass"
          >
            {{ openPreviewSelected?.label || comboboxPlaceholder }}
            <ChevronsUpDown class="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent :class="comboboxContentClass">
          <Command>
            <CommandInput
              :class="comboboxCommandInputClass"
              :placeholder="comboboxSearchPlaceholder"
            />
            <CommandList>
              <CommandEmpty>{{ comboboxEmptyLabel }}</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  v-for="framework in comboboxFrameworks"
                  :key="framework.value"
                  :value="framework.value"
                  @select="(ev) => {
                    selectOpenPreview(ev.detail.value as string)
                  }"
                >
                  {{ framework.label }}
                  <Check
                    :class="cn(
                      'ml-auto',
                      openPreviewValue === framework.value ? 'opacity-100' : 'opacity-0',
                    )"
                  />
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
    <hr>
    <div
      :class="[comboboxDemoSectionClass, comboboxStatusFrameClass]"
      :style="comboboxFrameStyle()"
    >
      <div :class="comboboxStatusGroupClass">
        <span :class="comboboxStatusLabelClass">
          {{ comboboxStatusFieldLabel }}
        </span>
        <div :class="comboboxStatusControlClass">
          <Popover v-model:open="statusClosed1Open">
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              size="sm"
              role="combobox"
              :aria-expanded="statusClosed1Open"
              :class="comboboxStatusTriggerClass"
            >
              <Plus v-if="!statusClosed1Value" class="size-4" />
              {{ statusTriggerLabel(statusClosed1Value) }}
            </Button>
          </PopoverTrigger>
          <PopoverContent :class="comboboxStatusContentClass">
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
      </div>

      <div :class="comboboxStatusGroupClass">
        <span :class="comboboxStatusLabelClass">
          {{ comboboxStatusFieldLabel }}
        </span>
        <div :class="comboboxStatusControlClass">
        <Popover v-model:open="statusClosed2Open">
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              size="sm"
              role="combobox"
              :aria-expanded="statusClosed2Open"
              :class="comboboxStatusTriggerClass"
            >
              <Plus v-if="!statusClosed2Value" class="size-4" />
              {{ statusTriggerLabel(statusClosed2Value) }}
            </Button>
          </PopoverTrigger>
          <PopoverContent :class="comboboxStatusContentClass">
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

      <div :class="comboboxStatusControlClass">
        <div
          data-slot="popover-content"
          data-state="open"
          :class="comboboxStatusOpenPanelClass"
        >
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
                >
                  {{ status.label }}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
    <hr>
    <div :class="comboboxDemoSectionClass">
      <ComboboxTaskSection />
    </div>
    <hr>
    <div :class="comboboxDemoSectionClass">
      <ComboboxStatusButtonSection />
    </div>
  </div>
</template>
