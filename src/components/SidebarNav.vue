<script setup lang="ts">
import { computed } from 'vue'

export type SidebarItem = {
  id: string
  label: string
  disabled?: boolean
}

const props = defineProps<{
  title?: string
  items: SidebarItem[]
  activeId: string
  onSelectClose?: boolean
  dense?: boolean
}>()

const emit = defineEmits<{
  select: [id: string]
  close: []
}>()

const title = computed(() => props.title ?? 'Components')

function select(id: string, disabled?: boolean) {
  if (disabled) return
  emit('select', id)
  if (props.onSelectClose) {
    emit('close')
  }
}
</script>

<template>
  <section>
    <div :class="props.dense ? 'px-4 py-4' : 'px-4 py-6'">
      <div
        :class="
          props.dense
            ? 'text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase'
            : 'text-muted-foreground mb-3 text-sm font-medium'
        "
      >
        {{ title }}
      </div>

      <nav class="space-y-1">
        <button
          v-for="item in items"
          :key="item.id"
          type="button"
          class="flex w-full items-center rounded-md px-3 py-2 text-left text-sm transition-colors"
          :class="[
            item.disabled
              ? 'text-muted-foreground/50 cursor-not-allowed'
              : 'hover:bg-muted hover:text-foreground',
            item.id === activeId ? 'bg-muted text-foreground' : '',
          ]"
          :disabled="item.disabled"
          @click="select(item.id, item.disabled)"
        >
          {{ item.label }}
        </button>
      </nav>
    </div>
  </section>
</template>

