<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { figmaLinks } from '@/figma-links'
import ScrollAreaHorizontal from './ScrollAreaHorizontal.vue'
import {
  scrollAreaArtworks,
  scrollAreaCaptionClass,
  scrollAreaCaptionNameClass,
  scrollAreaFigureClass,
  scrollAreaFrameClass,
  scrollAreaFrameStyle,
  scrollAreaHorizontalContentClass,
  scrollAreaHorizontalStyle,
  scrollAreaImageClass,
  scrollAreaImageWrapClass,
  scrollAreaSectionSeparatorClass,
  scrollAreaTagClass,
  scrollAreaTags,
  scrollAreaTagsTitleClass,
  scrollAreaVerticalClass,
} from './scroll-area-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.scrollArea"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="scrollAreaFrameClass" :style="scrollAreaFrameStyle()">
      <ScrollArea :class="scrollAreaVerticalClass">
        <div class="p-4">
          <h4 :class="scrollAreaTagsTitleClass">
            Tags
          </h4>
          <template v-for="tag in scrollAreaTags" :key="tag">
            <div :class="scrollAreaTagClass">
              {{ tag }}
            </div>
            <Separator class="my-2" />
          </template>
        </div>
      </ScrollArea>

      <Separator :class="scrollAreaSectionSeparatorClass" :style="scrollAreaHorizontalStyle()" />

      <ScrollAreaHorizontal :style="scrollAreaHorizontalStyle()">
        <div :class="scrollAreaHorizontalContentClass">
          <figure
            v-for="artwork in scrollAreaArtworks"
            :key="artwork.artist"
            :class="scrollAreaFigureClass"
          >
            <div :class="scrollAreaImageWrapClass">
              <img
                :src="artwork.src"
                :alt="`Photo by ${artwork.artist}`"
                :class="scrollAreaImageClass"
                width="110"
                height="147"
              >
            </div>
            <figcaption :class="scrollAreaCaptionClass">
              Photo by
              <span :class="scrollAreaCaptionNameClass">{{ artwork.artist }}</span>
            </figcaption>
          </figure>
        </div>
      </ScrollAreaHorizontal>
    </div>
  </div>
</template>
