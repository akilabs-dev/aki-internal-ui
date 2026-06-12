<script setup lang="ts">
import { CalendarDays } from '@lucide/vue'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  hoverCardFrameClass,
  hoverCardProfile,
  hoverCardSectionClass,
} from './hover-card-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.hoverCard"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="hoverCardFrameClass">
      <div :class="hoverCardSectionClass">
        <HoverCard>
          <HoverCardTrigger as-child>
            <Button variant="link">
              {{ hoverCardProfile.handle }}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent class="w-80">
            <div class="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage
                  :src="hoverCardProfile.avatarSrc"
                  :alt="hoverCardProfile.title"
                />
                <AvatarFallback>{{ hoverCardProfile.avatarFallback }}</AvatarFallback>
              </Avatar>
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">
                  {{ hoverCardProfile.title }}
                </h4>
                <p class="text-sm">
                  {{ hoverCardProfile.description }}
                </p>
                <div class="flex items-center pt-2">
                  <CalendarDays class="mr-2 size-4 opacity-70" />
                  <span class="text-xs text-muted-foreground">
                    {{ hoverCardProfile.joined }}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  </div>
</template>
