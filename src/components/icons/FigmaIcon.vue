<script setup lang="ts">
interface Props {
  class?: string
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Figma',
})
</script>

<template>
  <svg
    :class="class"
    viewBox="0 0 24 24"
    role="img"
    :aria-label="title"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{{ title }}</title>
    <!-- Simplified Figma mark (5 circles) -->
    <circle cx="9" cy="5" r="4" fill="#F24E1E" />
    <circle cx="15" cy="5" r="4" fill="#FF7262" />
    <circle cx="9" cy="12" r="4" fill="#A259FF" />
    <circle cx="15" cy="12" r="4" fill="#1ABCFE" />
    <circle cx="9" cy="19" r="4" fill="#0ACF83" />
  </svg>
</template>

