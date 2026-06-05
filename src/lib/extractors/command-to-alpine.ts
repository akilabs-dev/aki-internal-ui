import {
  commandEmptyLabel,
  commandFrameClass,
  commandFrameMaxWidthPx,
  commandInputPlaceholder,
  commandRootClass,
  commandSettingsHeading,
  commandSettingsItems,
  commandShortcutHint,
  commandShortcutHintClass,
  commandSuggestionHeading,
  commandSuggestionItems,
} from '@/demos/command/command-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const SEARCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0 opacity-50"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`

const CALENDAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>`

const SMILE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>`

const CALCULATOR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>`

const USER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`

const CREDIT_CARD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>`

const SETTINGS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`

const COMMAND_ROOT =
  'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md'

const COMMAND_INPUT_WRAPPER =
  'flex h-9 items-center gap-2 border-b px-3'

const COMMAND_INPUT =
  'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50'

const COMMAND_LIST = 'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto'

const COMMAND_EMPTY = 'py-6 text-center text-sm'

const COMMAND_GROUP = 'text-foreground overflow-hidden p-1'

const COMMAND_GROUP_HEADING =
  'px-2 py-1.5 text-xs font-medium text-muted-foreground'

const COMMAND_ITEM =
  'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground'

const COMMAND_ITEM_DISABLED =
  `${COMMAND_ITEM} pointer-events-none opacity-50`

const COMMAND_SEPARATOR = 'bg-border -mx-1 h-px'

const COMMAND_SHORTCUT =
  'text-muted-foreground ml-auto text-xs tracking-widest'

const SUGGESTION_ICONS: Record<string, string> = {
  calendar: CALENDAR_SVG,
  emoji: SMILE_SVG,
  calculator: CALCULATOR_SVG,
}

const SETTINGS_ICONS: Record<string, string> = {
  profile: USER_SVG,
  billing: CREDIT_CARD_SVG,
  settings: SETTINGS_SVG,
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.command)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildSuggestionItemsLoop(): string {
  return commandSuggestionItems
    .map((item) => {
      const icon = SUGGESTION_ICONS[item.value] ?? ''
      const itemClass = item.disabled ? COMMAND_ITEM_DISABLED : COMMAND_ITEM
      const clickHandler = item.disabled
        ? ''
        : ` @click="select('${escapeAttr(item.value)}')"`

      return `<template x-if="filteredSuggestions().some((entry) => entry.value === '${escapeAttr(item.value)}')">
        <button
          type="button"
          data-slot="command-item"
          class="${itemClass}"
          ${item.disabled ? 'disabled aria-disabled="true"' : ''}${clickHandler}
        >
          ${icon}
          <span>${escapeHtml(item.label)}</span>
        </button>
      </template>`
    })
    .join('\n        ')
}

function buildSettingsItemsLoop(): string {
  return commandSettingsItems
    .map((item) => {
      const icon = SETTINGS_ICONS[item.value] ?? ''
      const shortcut = item.shortcut
        ? `<span data-slot="command-shortcut" class="${COMMAND_SHORTCUT}">${escapeHtml(item.shortcut)}</span>`
        : ''

      return `<template x-if="filteredSettings().some((entry) => entry.value === '${escapeAttr(item.value)}')">
        <button
          type="button"
          data-slot="command-item"
          class="${COMMAND_ITEM}"
          @click="select('${escapeAttr(item.value)}')"
        >
          ${icon}
          <span>${escapeHtml(item.label)}</span>
          ${shortcut}
        </button>
      </template>`
    })
    .join('\n        ')
}

function buildCommandPalette(): string {
  return `<div
  x-data="commandDemo"
  data-slot="command"
  class="${commandRootClass} ${COMMAND_ROOT}"
>
  <div data-slot="command-input-wrapper" class="${COMMAND_INPUT_WRAPPER}">
    ${SEARCH_SVG}
    <input
      type="text"
      data-slot="command-input"
      class="${COMMAND_INPUT}"
      placeholder="${escapeAttr(commandInputPlaceholder)}"
      x-model="search"
      @keydown.stop
    />
  </div>
  <div data-slot="command-list" class="${COMMAND_LIST}">
    <p
      x-show="showEmpty()"
      data-slot="command-empty"
      class="${COMMAND_EMPTY}"
    >${escapeHtml(commandEmptyLabel)}</p>
    <div
      x-show="filteredSuggestions().length > 0"
      data-slot="command-group"
      role="group"
      class="${COMMAND_GROUP}"
    >
      <div data-slot="command-group-heading" class="${COMMAND_GROUP_HEADING}">
        ${escapeHtml(commandSuggestionHeading)}
      </div>
      ${buildSuggestionItemsLoop()}
    </div>
    <div
      x-show="filteredSuggestions().length > 0 && filteredSettings().length > 0"
      data-slot="command-separator"
      class="${COMMAND_SEPARATOR}"
      role="separator"
    ></div>
    <div
      x-show="filteredSettings().length > 0"
      data-slot="command-group"
      role="group"
      class="${COMMAND_GROUP}"
    >
      <div data-slot="command-group-heading" class="${COMMAND_GROUP_HEADING}">
        ${escapeHtml(commandSettingsHeading)}
      </div>
      ${buildSettingsItemsLoop()}
    </div>
  </div>
</div>`
}

export function buildCommandAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${commandFrameClass}" style="max-width:${commandFrameMaxWidthPx}px">
    <p class="${commandShortcutHintClass}">${escapeHtml(commandShortcutHint)}</p>
    ${buildCommandPalette()}
  </div>
</div>`
}

export function extractCommandToAlpine(_root: HTMLElement): string {
  return formatHtml(buildCommandAlpineHtml())
}
