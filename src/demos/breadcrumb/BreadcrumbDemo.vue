<script setup lang="ts">
import { SlashIcon } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import BreadcrumbDropdownDemo from './BreadcrumbDropdownDemo.vue'
import BreadcrumbEllipsisDemo from './BreadcrumbEllipsisDemo.vue'
import BreadcrumbResponsiveDemo from './BreadcrumbResponsiveDemo.vue'
import BreadcrumbRouterDemo from './BreadcrumbRouterDemo.vue'
import { breadcrumbDemoLinks, breadcrumbDemoPage } from './breadcrumb-demo.data'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.breadcrumb"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <Breadcrumb>
      <BreadcrumbList>
        <template v-for="link in breadcrumbDemoLinks" :key="link.id">
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a :href="link.href">{{ link.label }}</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
        </template>
        <BreadcrumbItem>
          <BreadcrumbPage>{{ breadcrumbDemoPage.label }}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <BreadcrumbDropdownDemo />

    <BreadcrumbEllipsisDemo />

    <BreadcrumbRouterDemo />

    <BreadcrumbResponsiveDemo />
  </div>
</template>
