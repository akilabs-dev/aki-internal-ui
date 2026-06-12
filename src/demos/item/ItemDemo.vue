<script setup lang="ts">
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  Plus,
  ShieldAlertIcon,
} from '@lucide/vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'
import { figmaLinks } from '@/figma-links'
import {
  itemBlockClass,
  itemFrameClass,
  itemModels,
  itemMusic,
  itemPeople,
  itemSectionLgClass,
  itemSectionMdClass,
  itemSectionXlClass,
} from './item-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.item"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="itemFrameClass">
      <div :class="itemBlockClass">
        <div class="flex w-full max-w-md flex-col gap-6">
          <Item>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Standard styling with subtle background and borders.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Outlined style with clear borders and transparent background.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Subdued appearance with muted colors for secondary content.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionMdClass">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A simple item with title and description.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline" size="sm" as-child>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon class="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Your profile has been verified.</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon class="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionLgClass">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldAlertIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Security Alert</ItemTitle>
              <ItemDescription>
                New login detected from unknown device.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionLgClass">
          <Item variant="outline">
            <ItemMedia>
              <Avatar class="size-10">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Evil Rabbit</ItemTitle>
              <ItemDescription>Last seen 5 months ago</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                size="icon-sm"
                variant="outline"
                class="rounded-full"
                aria-label="Invite"
              >
                <Plus />
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia>
              <div class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar class="hidden sm:flex">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar class="hidden sm:flex">
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>No Team Members</ItemTitle>
              <ItemDescription>
                Invite your team to collaborate on this project.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Invite
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionMdClass">
          <ItemGroup class="gap-4">
            <Item
              v-for="song in itemMusic"
              :key="song.title"
              variant="outline"
              as-child
              role="listitem"
            >
              <a href="#">
                <ItemMedia variant="image">
                  <img
                    :src="`https://avatar.vercel.sh/${song.title}`"
                    :alt="song.title"
                    width="32"
                    height="32"
                    class="object-cover grayscale"
                  >
                </ItemMedia>
                <ItemContent>
                  <ItemTitle class="line-clamp-1">
                    {{ song.title }} - <span class="text-muted-foreground">{{ song.album }}</span>
                  </ItemTitle>
                  <ItemDescription>{{ song.artist }}</ItemDescription>
                </ItemContent>
                <ItemContent class="flex-none text-center">
                  <ItemDescription>{{ song.duration }}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          </ItemGroup>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionMdClass">
          <ItemGroup>
            <template v-for="(person, index) in itemPeople" :key="person.username">
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage :src="person.avatar" class="grayscale" />
                    <AvatarFallback>{{ person.username.charAt(0) }}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent class="gap-1">
                  <ItemTitle>{{ person.username }}</ItemTitle>
                  <ItemDescription>{{ person.email }}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant="ghost" size="icon" class="rounded-full">
                    <Plus />
                  </Button>
                </ItemActions>
              </Item>
              <ItemSeparator v-if="index !== itemPeople.length - 1" />
            </template>
          </ItemGroup>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionXlClass">
          <ItemGroup class="grid grid-cols-3 gap-4">
            <Item
              v-for="model in itemModels"
              :key="model.name"
              variant="outline"
              as-child
              role="listitem"
            >
              <a href="#">
                <ItemHeader>
                  <img
                    :src="model.image"
                    :alt="model.name"
                    width="128"
                    height="128"
                    class="aspect-square w-full rounded-sm object-cover grayscale"
                  >
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>{{ model.name }}</ItemTitle>
                  <ItemDescription>{{ model.description }}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          </ItemGroup>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div :class="itemSectionMdClass">
          <Item as-child>
            <a href="#">
              <ItemContent>
                <ItemTitle>Visit our documentation</ItemTitle>
                <ItemDescription>
                  Learn how to get started with our components.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon class="size-4" />
              </ItemActions>
            </a>
          </Item>
          <Item variant="outline" as-child>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>External resource</ItemTitle>
                <ItemDescription>
                  Opens in a new tab with security attributes.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ExternalLinkIcon class="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
      </div>

      <div :class="itemBlockClass">
        <div class="flex min-h-64 w-full max-w-md flex-col items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="sm" class="w-fit">
                Select <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-72 [--radius:0.65rem]" align="end">
              <DropdownMenuItem
                v-for="person in itemPeople"
                :key="person.username"
                class="p-0"
              >
                <Item size="sm" class="w-full p-2">
                  <ItemMedia>
                    <Avatar class="size-8">
                      <AvatarImage :src="person.avatar" class="grayscale" />
                      <AvatarFallback>{{ person.username.charAt(0) }}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent class="gap-0.5">
                    <ItemTitle>{{ person.username }}</ItemTitle>
                    <ItemDescription>{{ person.email }}</ItemDescription>
                  </ItemContent>
                </Item>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </div>
</template>
