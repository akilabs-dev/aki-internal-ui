<script setup lang="ts">
import { computed, ref } from 'vue'
import { Minus, Plus } from '@lucide/vue'
import { useMediaQuery } from '@vueuse/core'
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  drawerFrameClass,
  drawerFrameStyle,
  drawerSectionClass,
  moveGoalCancelLabel,
  moveGoalChartData,
  moveGoalDefault,
  moveGoalDescription,
  moveGoalMax,
  moveGoalMin,
  moveGoalStep,
  moveGoalSubmitLabel,
  moveGoalTitle,
  moveGoalTriggerLabel,
  moveGoalUnitLabel,
  profileCancelLabel,
  profileContentClass,
  profileDescription,
  profileNameDefault,
  profileNameLabel,
  profileSaveLabel,
  profileTitle,
  profileTriggerLabel,
  profileUsernameDefault,
  profileUsernameLabel,
} from './drawer-demo.data'

const goal = ref(moveGoalDefault)

const isDesktop = useMediaQuery('(min-width: 640px)')

const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Trigger: isDesktop.value ? DialogTrigger : DrawerTrigger,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
  Footer: isDesktop.value ? DialogFooter : DrawerFooter,
  Close: isDesktop.value ? DialogClose : DrawerClose,
}))

const profileOpen = ref(false)

function barHeight(value: number) {
  return `${(value / moveGoalMax) * 100}%`
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.drawer"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="drawerFrameClass" :style="drawerFrameStyle()">
      <div :class="drawerSectionClass">
        <Drawer>
          <DrawerTrigger as-child>
            <Button variant="outline">
              {{ moveGoalTriggerLabel }}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div class="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>{{ moveGoalTitle }}</DrawerTitle>
                <DrawerDescription>{{ moveGoalDescription }}</DrawerDescription>
              </DrawerHeader>
              <div class="p-4 pb-0">
                <div class="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    class="h-8 w-8 shrink-0 rounded-full"
                    :disabled="goal <= moveGoalMin"
                    @click="goal -= moveGoalStep"
                  >
                    <Minus />
                    <span class="sr-only">Decrease</span>
                  </Button>
                  <div class="flex-1 text-center">
                    <div class="text-7xl font-bold tracking-tighter">
                      {{ goal }}
                    </div>
                    <div class="text-muted-foreground text-[0.70rem] uppercase">
                      {{ moveGoalUnitLabel }}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    class="h-8 w-8 shrink-0 rounded-full"
                    :disabled="goal >= moveGoalMax"
                    @click="goal += moveGoalStep"
                  >
                    <Plus />
                    <span class="sr-only">Increase</span>
                  </Button>
                </div>
                <div class="mt-3 flex h-[120px] items-end justify-center gap-1">
                  <div
                    v-for="(item, index) in moveGoalChartData"
                    :key="index"
                    class="bg-foreground w-2 flex-1 opacity-90"
                    :style="{ height: barHeight(item.goal) }"
                  />
                </div>
              </div>
              <DrawerFooter>
                <Button>{{ moveGoalSubmitLabel }}</Button>
                <DrawerClose as-child>
                  <Button variant="outline">
                    {{ moveGoalCancelLabel }}
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div :class="drawerSectionClass">
        <component :is="Modal.Root" v-model:open="profileOpen">
          <component :is="Modal.Trigger" as-child>
            <Button variant="outline">
              {{ profileTriggerLabel }}
            </Button>
          </component>
          <component
            :is="Modal.Content"
            :class="[
              profileContentClass,
              { 'px-2 pb-8 *:px-4': !isDesktop },
            ]"
          >
            <component :is="Modal.Header">
              <component :is="Modal.Title">
                {{ profileTitle }}
              </component>
              <component :is="Modal.Description">
                {{ profileDescription }}
              </component>
            </component>

            <div class="grid gap-4">
              <div class="grid gap-3">
                <Label for="drawer-name">{{ profileNameLabel }}</Label>
                <Input
                  id="drawer-name"
                  name="name"
                  :default-value="profileNameDefault"
                />
              </div>
              <div class="grid gap-3">
                <Label for="drawer-username">{{ profileUsernameLabel }}</Label>
                <Input
                  id="drawer-username"
                  name="username"
                  :default-value="profileUsernameDefault"
                />
              </div>
            </div>

            <component :is="Modal.Footer" class="pt-4">
              <Button type="submit">
                {{ profileSaveLabel }}
              </Button>
              <component :is="Modal.Close" as-child>
                <Button variant="outline">
                  {{ profileCancelLabel }}
                </Button>
              </component>
            </component>
          </component>
        </component>
      </div>
    </div>
  </div>
</template>
