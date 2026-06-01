<script setup lang="ts">
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
import { breadcrumbDemoSegments } from './breadcrumb-demo.data'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template
        v-for="(segment, index) in breadcrumbDemoSegments"
        :key="segment.id"
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            v-if="segment.type === 'link'"
            :href="segment.href"
          >
            {{ segment.label }}
          </BreadcrumbLink>

          <DropdownMenu v-else-if="segment.type === 'ellipsis'">
            <DropdownMenuTrigger class="flex items-center gap-1">
              <BreadcrumbEllipsis class="size-4" />
              <span class="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                v-for="item in segment.menuItems"
                :key="item.label"
              >
                {{ item.label }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <BreadcrumbPage v-else>
            {{ segment.label }}
          </BreadcrumbPage>
        </BreadcrumbItem>

        <BreadcrumbSeparator v-if="index < breadcrumbDemoSegments.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
