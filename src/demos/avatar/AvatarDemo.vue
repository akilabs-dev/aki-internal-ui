<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import { cn } from '@/lib/utils'
import {
  avatarCircularItem,
  avatarGroupItems,
  avatarRoundedLgRadiusPx,
  avatarSizePx,
  avatarSquareItem,
  type AvatarDemoItem,
} from './avatar-demo.data'

function avatarClass(item: Pick<AvatarDemoItem, 'shape'>) {
  return cn(
    'shrink-0 overflow-hidden',
    item.shape === 'rounded-lg' ? 'rounded-lg' : 'rounded-full',
  )
}

function avatarStyle(item: Pick<AvatarDemoItem, 'shape'>) {
  const style: Record<string, string> = {
    width: `${avatarSizePx}px`,
    height: `${avatarSizePx}px`,
  }

  if (item.shape === 'rounded-lg') {
    style.borderRadius = `${avatarRoundedLgRadiusPx}px`
  }

  return style
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button as="a" :href="figmaLinks.avatar" target="_blank" rel="noreferrer" variant="outline" size="sm">
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div class="divide-border divide-y">
      <div class="flex items-center py-6 first:pt-0">
        <Avatar :class="avatarClass(avatarCircularItem)" :style="avatarStyle(avatarCircularItem)">
          <AvatarImage :src="avatarCircularItem.src" :alt="avatarCircularItem.alt" />
          <AvatarFallback>{{ avatarCircularItem.fallback }}</AvatarFallback>
        </Avatar>
      </div>

      <div class="flex items-center py-6">
        <Avatar :class="avatarClass(avatarSquareItem)" :style="avatarStyle(avatarSquareItem)">
          <AvatarImage :src="avatarSquareItem.src" :alt="avatarSquareItem.alt" />
          <AvatarFallback>{{ avatarSquareItem.fallback }}</AvatarFallback>
        </Avatar>
      </div>

      <div class="flex items-center py-6">
        <div class="*:data-[slot=avatar]:ring-background flex shrink-0 -space-x-2 *:data-[slot=avatar]:shrink-0 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar
            v-for="item in avatarGroupItems"
            :key="item.id"
            :class="avatarClass(item)"
            :style="avatarStyle(item)"
          >
            <AvatarImage :src="item.src" :alt="item.alt" />
            <AvatarFallback>{{ item.fallback }}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  </div>
</template>
