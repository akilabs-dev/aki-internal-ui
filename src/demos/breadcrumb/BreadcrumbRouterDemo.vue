<script setup lang="ts">
/**
 * Docs use NuxtLink — this project uses vue-router RouterLink (same `as-child` pattern).
 * Nuxt: `import { NuxtLink } from '#components'` and `<NuxtLink to="...">`
 */
import { RouterLink } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { breadcrumbRouterLinks, breadcrumbRouterPage } from './breadcrumb-demo.data'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="link in breadcrumbRouterLinks" :key="link.id">
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <RouterLink :to="link.href">
              {{ link.label }}
            </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </template>
      <BreadcrumbItem>
        <BreadcrumbPage>{{ breadcrumbRouterPage.label }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
