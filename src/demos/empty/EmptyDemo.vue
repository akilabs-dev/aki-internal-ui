<script setup lang="ts">
import {
  ArrowUpRight,
  Bell,
  Cloud,
  FolderCode,
  Plus,
  RefreshCcw,
  Search,
} from '@lucide/vue'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  cloudEmpty,
  emptyFrameClass,
  emptySectionClass,
  notFoundEmpty,
  notificationsEmpty,
  offlineEmpty,
  projectsEmpty,
  teamEmpty,
} from './empty-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.empty"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="emptyFrameClass">
      <div :class="emptySectionClass">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderCode />
            </EmptyMedia>
            <EmptyTitle>{{ projectsEmpty.title }}</EmptyTitle>
            <EmptyDescription>
              {{ projectsEmpty.description }}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div class="flex gap-2">
              <Button>{{ projectsEmpty.primaryAction }}</Button>
              <Button variant="outline">
                {{ projectsEmpty.secondaryAction }}
              </Button>
            </div>
          </EmptyContent>
          <Button variant="link" as-child class="text-muted-foreground" size="sm">
            <a :href="projectsEmpty.learnMoreHref">
              {{ projectsEmpty.learnMoreLabel }} <ArrowUpRight />
            </a>
          </Button>
        </Empty>
      </div>

      <div :class="emptySectionClass">
        <Empty class="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Cloud />
            </EmptyMedia>
            <EmptyTitle>{{ cloudEmpty.title }}</EmptyTitle>
            <EmptyDescription>
              {{ cloudEmpty.description }}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              {{ cloudEmpty.action }}
            </Button>
          </EmptyContent>
        </Empty>
      </div>

      <div :class="emptySectionClass">
        <Empty class="from-muted/50 to-background h-full bg-gradient-to-b from-30%">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Bell />
            </EmptyMedia>
            <EmptyTitle>{{ notificationsEmpty.title }}</EmptyTitle>
            <EmptyDescription>
              {{ notificationsEmpty.description }}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              <RefreshCcw />
              {{ notificationsEmpty.action }}
            </Button>
          </EmptyContent>
        </Empty>
      </div>

      <div :class="emptySectionClass">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Avatar class="size-12">
                <AvatarImage
                  :src="offlineEmpty.avatarSrc"
                  class="grayscale"
                  referrerpolicy="no-referrer"
                />
                <AvatarFallback>{{ offlineEmpty.avatarFallback }}</AvatarFallback>
              </Avatar>
            </EmptyMedia>
            <EmptyTitle>{{ offlineEmpty.title }}</EmptyTitle>
            <EmptyDescription>
              {{ offlineEmpty.description }}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">
              {{ offlineEmpty.action }}
            </Button>
          </EmptyContent>
        </Empty>
      </div>

      <div :class="emptySectionClass">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <div class="*:ring-background flex -space-x-2 *:size-12 *:ring-2 *:grayscale">
                <Avatar
                  v-for="member in teamEmpty.members"
                  :key="member.alt"
                >
                  <AvatarImage
                    :src="member.src"
                    :alt="member.alt"
                    referrerpolicy="no-referrer"
                  />
                  <AvatarFallback>{{ member.fallback }}</AvatarFallback>
                </Avatar>
              </div>
            </EmptyMedia>
            <EmptyTitle>{{ teamEmpty.title }}</EmptyTitle>
            <EmptyDescription>
              {{ teamEmpty.description }}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">
              <Plus />
              {{ teamEmpty.action }}
            </Button>
          </EmptyContent>
        </Empty>
      </div>

      <div :class="emptySectionClass">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>{{ notFoundEmpty.title }}</EmptyTitle>
            <EmptyDescription>
              {{ notFoundEmpty.description }}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <InputGroup class="sm:w-3/4">
              <InputGroupInput :placeholder="notFoundEmpty.searchPlaceholder" />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <EmptyDescription>
              {{ notFoundEmpty.supportText }}
              <a :href="notFoundEmpty.supportHref">{{ notFoundEmpty.supportLabel }}</a>
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  </div>
</template>
