<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { LaptopMinimal, Moon, Sun } from '@lucide/vue'
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
import type { ThemeMode } from '@/lib/theme'
import {
  applyTheme,
  getStoredThemeMode,
  storeThemeMode,
} from '@/lib/theme'

const mode = ref<ThemeMode>('system')

const label = computed(() => {
  if (mode.value === 'light') return 'Light'
  if (mode.value === 'dark') return 'Dark'
  return 'System'
})

function setMode(next: string) {
  const value = next as ThemeMode
  mode.value = value
  storeThemeMode(value)
  applyTheme(value)
}

let media: MediaQueryList | null = null
const onSystemChange = () => {
  if (mode.value === 'system') {
    applyTheme('system')
  }
}

onMounted(() => {
  mode.value = getStoredThemeMode()
  applyTheme(mode.value)

  media = window.matchMedia?.('(prefers-color-scheme: dark)') ?? null
  media?.addEventListener?.('change', onSystemChange)
})

onBeforeUnmount(() => {
  media?.removeEventListener?.('change', onSystemChange)
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="gap-2">
        <Sun v-if="mode === 'light'" class="size-4" />
        <Moon v-else-if="mode === 'dark'" class="size-4" />
        <LaptopMinimal v-else class="size-4" />
        {{ label }}
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" class="w-44">
      <DropdownMenuLabel>
        Theme
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup :model-value="mode" @update:model-value="setMode">
        <DropdownMenuRadioItem value="light">
          Light
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">
          Dark
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="system">
          System
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

