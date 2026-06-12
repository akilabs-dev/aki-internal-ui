<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { figmaLinks } from '@/figma-links'
import {
  inputDemoBoxClass,
  inputFieldClass,
  inputFrameClass,
  inputSubscribeRowClass,
} from './input-demo.data'

const subscribeEmail = ref('')
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.input"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="inputFrameClass">
      <div :class="inputDemoBoxClass">
        <Input
          class="max-w-sm"
          type="email"
          placeholder="Email"
        />
        <Input
          class="max-w-sm"
          type="email"
          placeholder="Email"
        />
      </div>

      <div :class="inputFieldClass">
        <Label for="input-picture">Picture</Label>
        <Input
          id="input-picture"
          type="file"
        />
      </div>

      <Input
        class="max-w-sm"
        disabled
        type="email"
        placeholder="Email"
      />

      <div :class="inputFieldClass">
        <Label for="input-email">Email</Label>
        <Input
          id="input-email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div :class="inputDemoBoxClass">
        <form
          :class="inputSubscribeRowClass"
          @submit.prevent
        >
          <Input
            v-model="subscribeEmail"
            class="min-w-0 flex-1"
            type="email"
            placeholder="Email"
          />
          <Button
            type="submit"
            variant="outline"
            class="shrink-0"
          >
            Subscribe
          </Button>
        </form>
        <form
          :class="inputSubscribeRowClass"
          @submit.prevent
        >
          <Input
            v-model="subscribeEmail"
            class="min-w-0 flex-1"
            type="email"
            placeholder="Email"
          />
          <Button
            type="submit"
            variant="outline"
            class="shrink-0"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
