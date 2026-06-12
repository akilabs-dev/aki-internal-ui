<script setup lang="ts">
import {
  ArrowUpIcon,
  BracesIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  CornerDownLeftIcon,
  CreditCardIcon,
  HelpCircle,
  InfoIcon,
  Link2Icon,
  LoaderIcon,
  MailIcon,
  MoreHorizontal,
  PlusIcon,
  RefreshCwIcon,
  Search,
  SearchIcon,
  StarIcon,
} from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { figmaLinks } from '@/figma-links'
import {
  inputGroupBlockClass,
  inputGroupFrameClass,
  inputGroupSectionClass,
  inputGroupSectionClassMd,
  inputGroupSectionClassSm,
} from './input-group-demo.data'

const isFavorite = ref(false)
const source = ref('https://x.com/shadcn')
const { copy, copied } = useClipboard({ source })
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.inputGroup"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="inputGroupFrameClass">
      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClass">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            12 results
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="example.com" class="!pl-1" />
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <InputGroupButton class="rounded-full" size="icon-xs">
                    <InfoIcon class="size-4" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupTextarea placeholder="Ask, Search or Chat..." />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              variant="outline"
              class="rounded-full"
              size="icon-xs"
            >
              <PlusIcon class="size-4" />
            </InputGroupButton>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <InputGroupButton variant="ghost">
                  Auto
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
                class="[--radius:0.95rem]"
              >
                <DropdownMenuItem>Auto</DropdownMenuItem>
                <DropdownMenuItem>Agent</DropdownMenuItem>
                <DropdownMenuItem>Manual</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupText class="ml-auto">
              52% used
            </InputGroupText>
            <Separator orientation="vertical" class="!h-4" />
            <InputGroupButton
              variant="default"
              class="rounded-full"
              size="icon-xs"
              disabled
            >
              <ArrowUpIcon class="size-4" />
              <span class="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="@shadcn" />
          <InputGroupAddon align="inline-end">
            <div class="flex items-center justify-center rounded-full bg-primary text-primary-foreground size-4">
              <CheckIcon class="size-3" />
            </div>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClass">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCardIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <CheckIcon />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon align="inline-end">
            <StarIcon />
            <InfoIcon />
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClass">
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" class="!pl-0.5" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Enter your username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupTextarea placeholder="Enter your message" />
          <InputGroupAddon align="block-end">
            <InputGroupText class="text-xs text-muted-foreground">
              120 characters left
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClass">
        <InputGroup>
          <InputGroupInput placeholder="https://x.com/shadcn" read-only />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              @click="copy('https://x.com/shadcn')"
            >
              <CheckIcon v-if="copied" />
              <CopyIcon v-else />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup class="[--radius:9999px]">
          <Popover>
            <PopoverTrigger as-child>
              <InputGroupAddon>
                <InputGroupButton variant="secondary" size="icon-xs">
                  <InfoIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              class="flex flex-col gap-1 text-sm rounded-xl"
            >
              <p class="font-medium">
                Your connection is not secure.
              </p>
              <p>You should not enter any sensitive information on this site.</p>
            </PopoverContent>
          </Popover>
          <InputGroupAddon class="text-muted-foreground pl-1.5">
            https://
          </InputGroupAddon>
          <InputGroupInput id="input-secure-19" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              @click="isFavorite = !isFavorite"
            >
              <StarIcon
                :data-favorite="isFavorite"
                class="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Type to search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">
              Search
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClassSm">
        <InputGroup>
          <InputGroupInput placeholder="Enter password" type="password" />
          <InputGroupAddon align="inline-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Info"
                    size="icon-xs"
                  >
                    <InfoIcon />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Password must be at least 8 characters</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Your email address" />
          <InputGroupAddon align="inline-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    size="icon-xs"
                  >
                    <HelpCircle />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>We'll use this to send you notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Enter API key" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <InputGroupAddon>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    size="icon-xs"
                  >
                    <HelpCircle />
                  </InputGroupButton>
                </InputGroupAddon>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Click for help with API keys</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClassMd">
        <InputGroup>
          <InputGroupTextarea
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
            class="min-h-[200px]"
          />
          <InputGroupAddon align="block-end" class="border-t">
            <InputGroupText>Line 1, Column 1</InputGroupText>
            <InputGroupButton size="sm" class="ml-auto" variant="default">
              Run <CornerDownLeftIcon />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-start" class="border-b">
            <InputGroupText class="font-mono font-medium">
              <BracesIcon />
              script.js
            </InputGroupText>
            <InputGroupButton class="ml-auto" size="icon-xs">
              <RefreshCwIcon />
            </InputGroupButton>
            <InputGroupButton variant="ghost" size="icon-xs">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClassSm">
        <InputGroup data-disabled>
          <InputGroupInput placeholder="Searching..." disabled />
          <InputGroupAddon align="inline-end">
            <Spinner class="animate-spin" />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup data-disabled>
          <InputGroupInput placeholder="Processing..." disabled />
          <InputGroupAddon>
            <Spinner class="animate-spin" />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup data-disabled>
          <InputGroupInput placeholder="Saving changes..." disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupText>Saving...</InputGroupText>
            <Spinner class="animate-spin" />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup data-disabled>
          <InputGroupInput placeholder="Refreshing data..." disabled />
          <InputGroupAddon>
            <LoaderIcon class="animate-spin" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText class="text-muted-foreground">
              Please wait...
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClassSm">
        <InputGroup>
          <InputGroupInput id="email" placeholder="shadcn" />
          <InputGroupAddon>
            <Label for="email">@</Label>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
          <InputGroupAddon align="block-start">
            <Label for="email-2" class="text-foreground">
              Email
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    class="ml-auto rounded-full"
                    size="icon-xs"
                  >
                    <InfoIcon />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>We'll use this to send you notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClassSm">
        <InputGroup>
          <InputGroupInput placeholder="Enter file name" />
          <InputGroupAddon align="inline-end">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <InputGroupButton
                  variant="ghost"
                  aria-label="More"
                  size="icon-xs"
                >
                  <MoreHorizontal />
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Copy path</DropdownMenuItem>
                <DropdownMenuItem>Open location</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup class="[--radius:1rem]">
          <InputGroupInput placeholder="Enter search query" />
          <InputGroupAddon align="inline-end">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <InputGroupButton variant="ghost" class="!pr-1.5 text-xs">
                  Search In... <ChevronDownIcon class="size-3" />
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="[--radius:0.95rem]">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Blog Posts</DropdownMenuItem>
                <DropdownMenuItem>Changelog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>

      <div :class="inputGroupBlockClass">
        <div :class="inputGroupSectionClass">
        <ButtonGroup class="!gap-0">
          <ButtonGroupText as-child>
            <Label for="url">https://</Label>
          </ButtonGroupText>
          <InputGroup>
            <InputGroupInput id="url" />
            <InputGroupAddon align="inline-end">
              <Link2Icon />
            </InputGroupAddon>
          </InputGroup>
          <ButtonGroupText>.com</ButtonGroupText>
        </ButtonGroup>

        <InputGroup>
          <textarea
            data-slot="input-group-control"
            class="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
            placeholder="Autoresize textarea..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton class="ml-auto" size="sm" variant="default">
              Submit
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        </div>
      </div>
    </div>
  </div>
</template>
