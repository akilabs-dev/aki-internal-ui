<script setup lang="ts">
import AppLayout from './components/layout/AppLayout.vue'
import LibraryContent from './views/LibraryContent.vue'
</script>

<template>
  <AppLayout v-slot="{ activePage }">
    <LibraryContent :active-page="activePage" />
  </AppLayout>
</template>
