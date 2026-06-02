<script setup lang="ts">
/**
 * Docs use NuxtLink + Drawer on mobile. This project uses RouterLink.
 * Mobile: DropdownMenu (install Drawer for full parity with shadcn docs).
 */
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  breadcrumbResponsiveItems,
  breadcrumbResponsiveItemsToDisplay,
} from './breadcrumb-demo.data'

const ITEMS_TO_DISPLAY = breadcrumbResponsiveItemsToDisplay

const open = ref(false)

const items = breadcrumbResponsiveItems

const firstItem = computed(() => items[0])
const collapsedItems = computed(() => items.slice(1, -2))
const tailItems = computed(() => items.slice(-ITEMS_TO_DISPLAY + 1))
const showEllipsis = computed(() => items.length > ITEMS_TO_DISPLAY)
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-if="firstItem">
        <BreadcrumbLink as-child>
          <RouterLink :to="firstItem.href || '/'">
            {{ firstItem.label }}
          </RouterLink>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <template v-if="showEllipsis">
        <BreadcrumbItem>
          <DropdownMenu v-model:open="open">
            <DropdownMenuTrigger
              class="flex items-center gap-1"
              aria-label="Toggle menu"
            >
              <BreadcrumbEllipsis class="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                v-for="(item, index) in collapsedItems"
                :key="index"
              >
                <RouterLink :to="item.href || '#'">
                  {{ item.label }}
                </RouterLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </template>
      <BreadcrumbItem
        v-for="(item, index) in tailItems"
        :key="index"
      >
        <template v-if="item.href">
          <BreadcrumbLink
            as-child
            class="max-w-20 truncate md:max-w-none"
          >
            <RouterLink :to="item.href">
              {{ item.label }}
            </RouterLink>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </template>
        <template v-else>
          <BreadcrumbPage class="max-w-20 truncate md:max-w-none">
            {{ item.label }}
          </BreadcrumbPage>
        </template>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
