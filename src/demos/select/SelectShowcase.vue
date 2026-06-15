<script setup lang="ts">
import { computed } from 'vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { SelectGroup as SelectGroupData } from './select-demo.data'

const props = withDefaults(
  defineProps<{
    groups: readonly SelectGroupData[]
    placeholder: string
    triggerClass?: string
    defaultValue?: string
    previewOpen?: boolean
  }>(),
  {
    triggerClass: '',
    defaultValue: undefined,
    previewOpen: false,
  },
)

const isSingleGroup = computed(() => props.groups.length === 1)
</script>

<template>
  <div :class="previewOpen ? 'pointer-events-none select-none' : ''">
    <Select
      :default-value="defaultValue"
      :open="previewOpen ? true : undefined"
    >
      <SelectTrigger :class="triggerClass">
        <SelectValue :placeholder="placeholder" />
      </SelectTrigger>
      <SelectContent>
        <template v-if="isSingleGroup">
          <SelectGroup>
            <SelectLabel>{{ groups[0]!.label }}</SelectLabel>
            <SelectItem
              v-for="option in groups[0]!.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </template>
        <template v-else>
          <SelectGroup
            v-for="group in groups"
            :key="group.label"
          >
            <SelectLabel>{{ group.label }}</SelectLabel>
            <SelectItem
              v-for="option in group.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </template>
      </SelectContent>
    </Select>
  </div>
</template>
