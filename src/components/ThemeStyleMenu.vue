<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Palette } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ThemeStyle } from '@/lib/theme'
import {
  applyThemeStyle,
  getStoredThemeStyle,
  storeThemeStyle,
} from '@/lib/theme'

const style = ref<ThemeStyle>('default')

const themeImports = import.meta.glob('@/themes/*.css', { eager: true })

function toId(path: string) {
  const base = path.split('/').pop() || path
  return base.replace(/\.css$/i, '')
}

function toLabel(id: string) {
  return id
    .split('-')
    .map((p) => p.slice(0, 1).toUpperCase() + p.slice(1))
    .join(' ')
}

const themes = computed(() => {
  const ids = Object.keys(themeImports)
    .map(toId)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
  return ids.map((id) => ({ id, label: toLabel(id) }))
})

const label = computed(() => toLabel(style.value))

function setStyle(next: string) {
  const value = next as ThemeStyle
  style.value = value
  storeThemeStyle(value)
  applyThemeStyle(value)
}

onMounted(() => {
  style.value = getStoredThemeStyle()
  applyThemeStyle(style.value)
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="gap-2">
        <Palette class="size-4" />
        {{ label }}
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" class="w-56">
      <DropdownMenuLabel>
        Theme style
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup :model-value="style" @update:model-value="setStyle">
        <DropdownMenuRadioItem
          v-for="t in themes"
          :key="t.id"
          :value="t.id"
        >
          {{ t.label }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

