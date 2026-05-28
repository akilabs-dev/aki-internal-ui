<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X } from '@lucide/vue'
import SidebarNav, { type SidebarItem } from '@/components/SidebarNav.vue'
import ThemeModeMenu from '@/components/ThemeModeMenu.vue'
import ThemeStyleMenu from '@/components/ThemeStyleMenu.vue'

const items: SidebarItem[] = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'alert-dialog', label: 'Alert Dialog', disabled: true },
  { id: 'aspect-ratio', label: 'Aspect Ratio', disabled: true },
  { id: 'avatar', label: 'Avatar', disabled: true },
  { id: 'badge', label: 'Badge', disabled: true },
  { id: 'breadcrumb', label: 'Breadcrumb', disabled: true },
  { id: 'button', label: 'Button', disabled: true },
  { id: 'button-group', label: 'Button Group', disabled: true },
  { id: 'calendar', label: 'Calendar', disabled: true },
  { id: 'card', label: 'Card', disabled: true },
  { id: 'carousel', label: 'Carousel', disabled: true },
  { id: 'chart', label: 'Chart', disabled: true },
]

const mobileSidebarOpen = ref(false)
const route = useRoute()
const router = useRouter()

const activeId = computed(() => {
  const path = route.path
  if (path.startsWith('/docs/components/accordion')) return 'accordion'
  if (path.startsWith('/docs/components/alert')) return 'alert'
  return 'accordion'
})

function closeMobileSidebar() {
  mobileSidebarOpen.value = false
}

function onSelectSidebar(id: string) {
  if (id === 'accordion') void router.push('/docs/components/accordion')
  if (id === 'alert') void router.push('/docs/components/alert')
}
</script>

<template>
  <div class="bg-background text-foreground h-svh overflow-hidden">
    <div class="flex h-svh">
      <!-- Desktop sidebar -->
      <div class="hidden md:block">
        <SidebarNav :items="items" :active-id="activeId" @select="onSelectSidebar" />
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
            Components
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
            :items="items"
            :active-id="activeId"
            on-select-close
            class="border-r-0"
            @select="onSelectSidebar"
            @close="closeMobileSidebar"
          />
        </div>
      </div>

      <main class="flex-1 overflow-y-auto">
        <div class="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
          <header class="mb-10 space-y-2">
            <div class="mb-2 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 md:hidden">
                <button
                  type="button"
                  class="hover:bg-muted inline-flex size-9 items-center justify-center rounded-md border"
                  @click="mobileSidebarOpen = true"
                >
                  <Menu class="size-4" />
                </button>
                <span class="text-muted-foreground text-sm font-medium">
                  Components
                </span>
              </div>

              <div class="ml-auto">
                <div class="flex items-center gap-2">
                  <ThemeStyleMenu />
                  <ThemeModeMenu />
                </div>
              </div>
            </div>
            <p class="text-muted-foreground text-sm font-medium tracking-wide uppercase">
              Component playground
            </p>
            <h1 class="font-serif text-3xl font-semibold tracking-tight">
              Preview
            </h1>
            <p class="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Inspect shadcn-vue components live, then view the source and rendered
              HTML from the same demo.
            </p>
          </header>

          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
