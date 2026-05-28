<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { readLibraryPageIdFromUrl, setLibraryPageIdInUrl } from '../../library/page-url'
import {
  getCommandMenuItems,
  getMenuEntries,
  getNavSections,
  getPageMeta,
} from '../../library/registry'
import { akilabsBrand } from '../../library/brand'
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
import CommandMenu from './CommandMenu.vue'

const navSections = getNavSections()
const commandMenuItems = getCommandMenuItems()
const menuEntries = getMenuEntries()
const defaultPageId = menuEntries[0]?.id ?? ''
const activePage = ref(readLibraryPageIdFromUrl() ?? defaultPageId)
const commandOpen = ref(false)

const defaultMeta = {
  title: akilabsBrand.name,
  subtitle: akilabsBrand.tagline,
} as const

const currentMeta = computed(() => getPageMeta(activePage.value) ?? defaultMeta)

function onNavigate(id: string) {
  if (activePage.value === id) return
  activePage.value = id
  setLibraryPageIdInUrl(id)
}

function syncPageFromUrl() {
  const fromUrl = readLibraryPageIdFromUrl()
  if (fromUrl && fromUrl !== activePage.value) {
    activePage.value = fromUrl
  }
}

function onPopState() {
  syncPageFromUrl()
}

function openCommand() {
  commandOpen.value = true
}

function onGlobalKeydown(e: KeyboardEvent) {
  if (commandMenuItems.length === 0) return
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    commandOpen.value = !commandOpen.value
  }
}

onMounted(() => {
  if (readLibraryPageIdFromUrl()) {
    setLibraryPageIdInUrl(activePage.value, true)
  } else if (defaultPageId) {
    setLibraryPageIdInUrl(activePage.value, true)
  }
  window.addEventListener('keydown', onGlobalKeydown)
  window.addEventListener('popstate', onPopState)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onGlobalKeydown)
  window.removeEventListener('popstate', onPopState)
})
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
    <AppSidebar :sections="navSections" :active-id="activePage" @navigate="onNavigate" />

    <div class="flex min-w-0 flex-1 flex-col">
      <AppNavbar
        :title="currentMeta.title"
        :subtitle="currentMeta.subtitle"
        :show-command="commandMenuItems.length > 0"
        @open-command="openCommand"
      />

      <main class="flex-1 overflow-y-auto p-4 md:p-5">
        <slot :active-page="activePage" />
      </main>
    </div>

    <CommandMenu
      :open="commandOpen"
      :active-id="activePage"
      @close="commandOpen = false"
      @navigate="onNavigate"
    />
  </div>
</template>
