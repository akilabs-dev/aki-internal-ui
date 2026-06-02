<script setup lang="ts">
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BotIcon,
  AudioLinesIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from '@lucide/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import ButtonGroupSectionDivider from './ButtonGroupSectionDivider.vue'

const voiceEnabled = ref(false)

const CURRENCIES = [
  {
    value: '$',
    label: 'US Dollar',
  },
  {
    value: '€',
    label: 'Euro',
  },
  {
    value: '£',
    label: 'British Pound',
  },
] as const
const currency = ref<(typeof CURRENCIES)[number]['value']>('$')
</script>

<template>
  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <Button variant="secondary" size="sm">
      Copy
    </Button>
    <ButtonGroupSeparator />
    <Button variant="secondary" size="sm">
      Paste
    </Button>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <Button variant="secondary">
      Button
    </Button>
    <ButtonGroupSeparator />
    <Button size="icon" variant="secondary">
      <PlusIcon />
    </Button>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <Input placeholder="Search..." />
    <Button variant="outline" aria-label="Search">
      <SearchIcon />
    </Button>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit [--radius:9999rem]">
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup class="min-w-0 flex-1">
      <InputGroup class="h-9 min-w-[280px] rounded-full">
        <InputGroupInput
          :placeholder="voiceEnabled ? 'Record and send audio...' : 'Send a message...'"
          :disabled="voiceEnabled"
        />
        <InputGroupAddon align="inline-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <InputGroupButton
                  :data-active="voiceEnabled"
                  class="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  :aria-pressed="voiceEnabled"
                  size="icon-xs"
                  aria-label="Voice Mode"
                  @click="voiceEnabled = !voiceEnabled"
                >
                  <AudioLinesIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </InputGroupAddon>
      </InputGroup>
    </ButtonGroup>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <Button variant="outline">
      Follow
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" size="icon" aria-label="More">
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="[--radius:1rem]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <VolumeOffIcon />
            Mute Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CheckIcon />
            Mark as Read
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AlertTriangleIcon />
            Report Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserRoundXIcon />
            Block User
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy Conversation
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete Conversation
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <ButtonGroup class="w-fit">
      <Select v-model="currency">
        <SelectTrigger class="w-14 font-mono">
          <SelectValue>{{ currency }}</SelectValue>
        </SelectTrigger>
        <SelectContent class="min-w-24">
          <SelectItem v-for="item in CURRENCIES" :key="item.value" :value="item.value">
            {{ item.value }}
            <span class="text-muted-foreground">{{ item.label }}</span>
          </SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="10.00" pattern="[0-9]*" />
    </ButtonGroup>
    <ButtonGroup class="w-fit">
      <Button aria-label="Send" size="icon" variant="outline">
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>

  <ButtonGroupSectionDivider />

  <ButtonGroup class="w-fit">
    <Button variant="outline">
      <BotIcon />
      Copilot
    </Button>
    <Popover>
      <PopoverTrigger as-child>
        <Button variant="outline" size="icon" aria-label="Open Popover">
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        class="max-h-[min(28rem,calc(100vh-1rem))] overflow-y-auto rounded-xl p-0 text-sm"
      >
        <div class="px-4 py-3">
          <div class="text-sm font-medium">
            Agent Tasks
          </div>
        </div>
        <Separator />
        <div class="p-4 text-sm *:[p:not(:last-child)]:mb-2">
          <Textarea
            placeholder="Describe your task in natural language."
            class="mb-4 resize-none"
          />
          <p class="font-medium">
            Start a new task with Copilot
          </p>
          <p class="text-muted-foreground">
            Describe your task in natural language. Copilot will work in the
            background and open a pull request for your review.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </ButtonGroup>
</template>
