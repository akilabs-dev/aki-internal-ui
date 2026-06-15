<script setup lang="ts">
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { figmaLinks } from '@/figma-links'
import {
  sheetCloseLabel,
  sheetDescription,
  sheetFieldGroupClass,
  sheetFormClass,
  sheetFrameClass,
  sheetFrameStyle,
  sheetNameDefault,
  sheetNameId,
  sheetNameLabel,
  sheetSaveLabel,
  sheetTitle,
  sheetTriggerLabel,
  sheetUsernameDefault,
  sheetUsernameId,
  sheetUsernameLabel,
} from './sheet-demo.data'
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.sheet"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="sheetFrameClass" :style="sheetFrameStyle()">
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline">
            {{ sheetTriggerLabel }}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{{ sheetTitle }}</SheetTitle>
            <SheetDescription>
              {{ sheetDescription }}
            </SheetDescription>
          </SheetHeader>
          <div :class="sheetFormClass">
            <div :class="sheetFieldGroupClass">
              <Label :for="sheetNameId">{{ sheetNameLabel }}</Label>
              <Input :id="sheetNameId" :default-value="sheetNameDefault" />
            </div>
            <div :class="sheetFieldGroupClass">
              <Label :for="sheetUsernameId">{{ sheetUsernameLabel }}</Label>
              <Input :id="sheetUsernameId" :default-value="sheetUsernameDefault" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">
              {{ sheetSaveLabel }}
            </Button>
            <SheetClose as-child>
              <Button variant="outline">
                {{ sheetCloseLabel }}
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
