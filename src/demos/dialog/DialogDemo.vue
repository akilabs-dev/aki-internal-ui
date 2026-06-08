<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { figmaLinks } from '@/figma-links'
import {
  dialogFrameClass,
  dialogFrameStyle,
  dialogProfileCancelLabel,
  dialogProfileContentClass,
  dialogProfileDescription,
  dialogProfileNameDefault,
  dialogProfileNameLabel,
  dialogProfileSaveLabel,
  dialogProfileTitle,
  dialogProfileTriggerLabel,
  dialogProfileUsernameDefault,
  dialogProfileUsernameLabel,
  dialogSectionClass,
  dialogShareCloseLabel,
  dialogShareContentClass,
  dialogShareDescription,
  dialogShareLink,
  dialogShareTitle,
  dialogShareTriggerLabel,
} from './dialog-demo.data'

</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.dialog"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="dialogFrameClass" :style="dialogFrameStyle()">
      <div :class="dialogSectionClass">
        <Dialog>
          <form>
            <DialogTrigger as-child>
              <Button variant="outline">
                {{ dialogProfileTriggerLabel }}
              </Button>
            </DialogTrigger>
            <DialogContent :class="dialogProfileContentClass">
              <DialogHeader>
                <DialogTitle>{{ dialogProfileTitle }}</DialogTitle>
                <DialogDescription>
                  {{ dialogProfileDescription }}
                </DialogDescription>
              </DialogHeader>
              <div class="grid gap-4">
                <div class="grid gap-3">
                  <Label for="name-1">{{ dialogProfileNameLabel }}</Label>
                  <Input
                    id="name-1"
                    name="name"
                    :default-value="dialogProfileNameDefault"
                  />
                </div>
                <div class="grid gap-3">
                  <Label for="username-1">{{ dialogProfileUsernameLabel }}</Label>
                  <Input
                    id="username-1"
                    name="username"
                    :default-value="dialogProfileUsernameDefault"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose as-child>
                  <Button variant="outline">
                    {{ dialogProfileCancelLabel }}
                  </Button>
                </DialogClose>
                <Button type="submit">
                  {{ dialogProfileSaveLabel }}
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <div :class="dialogSectionClass">
        <Dialog>
          <DialogTrigger as-child>
            <Button variant="outline">
              {{ dialogShareTriggerLabel }}
            </Button>
          </DialogTrigger>
          <DialogContent :class="dialogShareContentClass">
            <DialogHeader>
              <DialogTitle>{{ dialogShareTitle }}</DialogTitle>
              <DialogDescription>
                {{ dialogShareDescription }}
              </DialogDescription>
            </DialogHeader>
            <div class="flex items-center gap-2">
              <div class="grid flex-1 gap-2">
                <Label for="link" class="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  :default-value="dialogShareLink"
                  readonly
                />
              </div>
            </div>
            <DialogFooter class="sm:justify-start">
              <DialogClose as-child>
                <Button type="button" variant="secondary">
                  {{ dialogShareCloseLabel }}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </div>
</template>
