<script setup lang="ts">
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from '@lucide/vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationMenuListItem from './NavigationMenuListItem.vue'
import {
  navigationMenuComponents,
  navigationMenuHomeLinks,
  navigationMenuListLinks,
  navigationMenuSimpleLinks,
} from './navigation-menu-demo.data'

const props = withDefaults(
  defineProps<{
    defaultOpen?: string
  }>(),
  {},
)
</script>

<template>
  <NavigationMenu :viewport="false" :default-value="props.defaultOpen">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                  href="/"
                >
                  <div class="mt-4 mb-2 text-lg font-medium">
                    shadcn/ui
                  </div>
                  <p class="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <NavigationMenuListItem
              v-for="link in navigationMenuHomeLinks"
              :key="link.title"
              :title="link.title"
              :href="link.href"
            >
              {{ link.description }}
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <NavigationMenuListItem
              v-for="component in navigationMenuComponents"
              :key="component.title"
              :title="component.title"
              :href="component.href"
            >
              {{ component.description }}
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/docs">Docs</a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>List</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[300px] gap-4">
            <li>
              <NavigationMenuLink
                v-for="link in navigationMenuListLinks"
                :key="link.title"
                as-child
              >
                <a href="#">
                  <div class="font-medium">
                    {{ link.title }}
                  </div>
                  <div class="text-muted-foreground">
                    {{ link.description }}
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink
                v-for="label in navigationMenuSimpleLinks"
                :key="label"
                as-child
              >
                <a href="#">{{ label }}</a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleHelpIcon />
                  Backlog
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleIcon />
                  To Do
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleCheckIcon />
                  Done
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
