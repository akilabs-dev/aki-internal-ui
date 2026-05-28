<template>
  <div class="grid w-full max-w-lg gap-4 sm:grid-cols-2">
    <div
      v-for="swatch in swatches"
      :key="swatch.name"
      class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div class="h-20" :style="{ backgroundColor: swatch.hex }" />
      <div class="p-3">
        <p class="text-sm font-semibold text-slate-900">{{ swatch.name }}</p>
        <p class="font-mono text-xs text-slate-500">{{ swatch.hex }}</p>
        <p class="mt-1 text-xs text-slate-400">{{ swatch.usage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const swatches = [
  { name: 'Primary', hex: '#7c3aed', usage: 'Actions, active tabs' },
  { name: 'Heading', hex: '#07074D', usage: 'Form labels, titles' },
  { name: 'Muted text', hex: '#6B7280', usage: 'Placeholders, hints' },
  { name: 'Border', hex: '#e0e0e0', usage: 'Inputs, dividers' },
]
</script>
