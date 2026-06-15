<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from '@/components/ui/native-select'
import { Separator } from '@/components/ui/separator'
import { figmaLinks } from '@/figma-links'
import {
  departmentGroups,
  nativeSelectDefaults,
  nativeSelectFrameClass,
  nativeSelectFrameStyle,
  nativeSelectRowClass,
  priorityOptions,
  roleOptions,
  statusOptions,
} from './native-select-demo.data'

const status = ref(nativeSelectDefaults.status)
const department = ref(nativeSelectDefaults.department)
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.nativeSelect"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="nativeSelectFrameClass" :style="nativeSelectFrameStyle()">
      <div :class="nativeSelectRowClass">
        <NativeSelect v-model="status">
          <NativeSelectOption
            v-for="option in statusOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </NativeSelectOption>
        </NativeSelect>
      </div>

      <Separator class="bg-[#E5E5E5]" />

      <div :class="nativeSelectRowClass">
        <NativeSelect v-model="department">
          <NativeSelectOption value="">
            Select department
          </NativeSelectOption>
          <NativeSelectOptGroup
            v-for="group in departmentGroups"
            :key="group.label"
            :label="group.label"
          >
            <NativeSelectOption
              v-for="option in group.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>

      <Separator class="bg-[#E5E5E5]" />

      <div :class="nativeSelectRowClass">
        <NativeSelect disabled>
          <NativeSelectOption
            v-for="option in priorityOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </NativeSelectOption>
        </NativeSelect>
      </div>

      <Separator class="bg-[#E5E5E5]" />

      <div :class="nativeSelectRowClass">
        <NativeSelect aria-invalid="true">
          <NativeSelectOption
            v-for="option in roleOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  </div>
</template>
