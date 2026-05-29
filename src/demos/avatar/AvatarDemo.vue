<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { avatarDemoItems, avatarGroupItems } from './avatar-demo.data'
</script>

<template>
  <div class="flex flex-row flex-wrap items-center gap-12">
    <Avatar
      v-for="item in avatarDemoItems"
      :key="item.id"
    >
      <AvatarImage :src="item.src" :alt="item.alt" />
      <AvatarFallback>{{ item.fallback }}</AvatarFallback>
    </Avatar>

    <div class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      <Avatar
        v-for="item in avatarGroupItems"
        :key="item.id"
      >
        <AvatarImage :src="item.src" :alt="item.alt" />
        <AvatarFallback>{{ item.fallback }}</AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>
