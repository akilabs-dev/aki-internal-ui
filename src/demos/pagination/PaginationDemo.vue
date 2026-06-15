<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { figmaLinks } from '@/figma-links'
import {
  paginationDefaults,
  paginationFrameClass,
  paginationFrameStyle,
} from './pagination-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.pagination"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="paginationFrameClass" :style="paginationFrameStyle()">
      <Pagination
        v-slot="{ page }"
        :items-per-page="paginationDefaults.itemsPerPage"
        :total="paginationDefaults.total"
        :default-page="paginationDefaults.defaultPage"
      >
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />

          <template v-for="(item, index) in items" :key="index">
            <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
            >
              {{ item.value }}
            </PaginationItem>
          </template>

          <PaginationEllipsis :index="4" />

          <PaginationNext />
        </PaginationContent>
      </Pagination>
    </div>
  </div>
</template>
