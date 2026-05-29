<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X } from '@lucide/vue'
import SidebarNav, { type SidebarItem } from '@/components/SidebarNav.vue'
import ThemeModeMenu from '@/components/ThemeModeMenu.vue'
import ThemeStyleMenu from '@/components/ThemeStyleMenu.vue'
import {
  componentCatalogSidebarItems,
  getComponentPath,
  resolveComponentIdFromPath,
} from '@/lib/component-docs'

const sectionItems: SidebarItem[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'installation', label: 'Installation' },
  { id: 'copy-guide', label: 'Usage in your project' },
  { id: 'styling', label: 'Styling' },
  { id: 'theme-configuration', label: 'Theme configuration' },
  { id: 'faq', label: 'FAQ' },
]

const componentItems: SidebarItem[] = componentCatalogSidebarItems()

const mobileSidebarOpen = ref(false)
const route = useRoute()
const router = useRouter()

const activeComponentId = computed(
  () => resolveComponentIdFromPath(route.path) ?? '',
)

function closeMobileSidebar() {
  mobileSidebarOpen.value = false
}

function onSelectComponent(id: string) {
  const path = getComponentPath(id)
  if (path) void router.push(path)
}

const activeSectionId = computed(() => {
  const path = route.path
  if (path.startsWith('/docs/introduction')) return 'introduction'
  if (path.startsWith('/docs/installation')) return 'installation'
  if (path.startsWith('/docs/copy-guide')) return 'copy-guide'
  if (path.startsWith('/docs/styling')) return 'styling'
  if (path.startsWith('/docs/theme-configuration')) return 'theme-configuration'
  if (path.startsWith('/docs/faq')) return 'faq'
  return ''
})

function onSelectSection(id: string) {
  void router.push(`/docs/${id}`)
}

const hasPageHeader = computed(() => route.path.startsWith('/docs/'))
</script>

<template>
  <div class="bg-background text-foreground h-svh overflow-hidden">
    <div class="flex h-svh">
      <!-- Desktop sidebar -->
      <div class="hidden md:block">
        <div class="h-svh w-64 overflow-y-auto border-r bg-background">
          <SidebarNav
            title="Sections"
            :items="sectionItems"
            :active-id="activeSectionId"
            dense
            class="border-r-0"
            @select="onSelectSection"
          />
          <div class="border-t" />
          <SidebarNav
            title="Components"
            :items="componentItems"
            :active-id="activeComponentId"
            dense
            class="border-r-0"
            @select="onSelectComponent"
          />
        </div>
      </div>

      <!-- Mobile sidebar (drawer) -->
      <div
        v-if="mobileSidebarOpen"
        class="fixed inset-0 z-40 bg-black/40 md:hidden"
        @click="closeMobileSidebar"
      />
      <div
        class="fixed inset-y-0 left-0 z-50 w-72 transform bg-background transition-transform md:hidden"
        :class="mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex items-center justify-between border-b px-4 py-3">
          <div class="text-sm font-medium text-muted-foreground">
            Menu
          </div>
          <button
            type="button"
            class="hover:bg-muted inline-flex size-9 items-center justify-center rounded-md"
            @click="closeMobileSidebar"
          >
            <X class="size-4" />
          </button>
        </div>
        <div class="h-[calc(100svh-3.25rem)] overflow-y-auto">
          <SidebarNav
            title="Sections"
            :items="sectionItems"
            :active-id="activeSectionId"
            on-select-close
            dense
            class="border-r-0"
            @select="onSelectSection"
            @close="closeMobileSidebar"
          />
          <div class="border-t" />
          <SidebarNav
            title="Components"
            :items="componentItems"
            :active-id="activeComponentId"
            on-select-close
            dense
            class="border-r-0"
            @select="onSelectComponent"
            @close="closeMobileSidebar"
          />
        </div>
      </div>

      <main class="flex-1 overflow-y-auto">
        <div class="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
          <header
            class="space-y-2"
            :class="hasPageHeader ? 'mb-6' : 'mb-10'"
          >
            <div
              class="flex items-center justify-between gap-3"
              :class="hasPageHeader ? '' : 'mb-2'"
            >
              <div class="flex items-center gap-3 md:hidden">
                <button
                  type="button"
                  class="hover:bg-muted inline-flex size-9 items-center justify-center rounded-md border"
                  @click="mobileSidebarOpen = true"
                >
                  <Menu class="size-4" />
                </button>
                <span
                  v-if="!hasPageHeader"
                  class="text-muted-foreground text-sm font-medium"
                >
                  Menu
                </span>
              </div>

              <div class="ml-auto">
                <div class="flex items-center gap-2">
                  <ThemeStyleMenu />
                  <ThemeModeMenu />
                </div>
              </div>
            </div>
          </header>

          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
