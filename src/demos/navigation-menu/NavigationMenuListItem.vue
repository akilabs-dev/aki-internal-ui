<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const props = defineProps<{
  title: string
  href?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        :href="href ?? '#'"
        :class="cn(
          'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
          props.class,
        )"
      >
        <div class="text-sm font-medium leading-none">
          {{ title }}
        </div>
        <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
