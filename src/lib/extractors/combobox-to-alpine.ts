import {
  comboboxCommandInputClass,
  comboboxContentClass,
  comboboxDemoRootClass,
  comboboxDemoSectionClass,
  comboboxEmptyLabel,
  comboboxFrameClass,
  comboboxFrameMaxWidthPx,
  comboboxSearchPlaceholder,
  comboboxStatusContentClass,
  comboboxStatusEmptyLabel,
  comboboxStatusFieldLabel,
  comboboxStatusButtonFrameClass,
  comboboxStatusFrameClass,
  comboboxStatusControlClass,
  comboboxStatusGroupClass,
  comboboxStatusLabelClass,
  comboboxStatusOpenPanelClass,
  comboboxStatusSearchPlaceholder,
  comboboxStatusTriggerClass,
  comboboxTaskBadgeLabel,
  comboboxTaskFrameClass,
  comboboxTaskMenuContentClass,
  comboboxTaskMenuDeleteLabel,
  comboboxTaskMenuDeleteShortcut,
  comboboxTaskMenuItems,
  comboboxTaskMenuLabel,
  comboboxTaskMenuSubLabel,
  comboboxTaskRowClass,
  comboboxTaskRowInnerClass,
  comboboxTaskTitle,
  comboboxTriggerClass,
} from '@/demos/combobox/combobox-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const OUTLINE_BUTTON = `inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 ${comboboxTriggerClass}`

const STATUS_OUTLINE_BUTTON = `inline-flex items-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 px-2.5 py-2 ${comboboxStatusTriggerClass}`

const CHEVRONS_UP_DOWN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 opacity-50"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>`

const PLUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`

const SEARCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0 opacity-50"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto size-4 shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>`

const POPOVER_CONTENT = `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 rounded-md border shadow-md outline-hidden ${comboboxContentClass}`

const STATUS_POPOVER_CONTENT = `bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 rounded-md border shadow-md outline-hidden ${comboboxStatusContentClass}`

const COMMAND_ROOT =
  'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md'

const COMMAND_INPUT_WRAPPER =
  'flex h-9 items-center gap-2 border-b px-3'

const COMMAND_INPUT = `placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50 ${comboboxCommandInputClass}`

const COMMAND_LIST = 'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto p-1'

const COMMAND_EMPTY = 'py-6 text-center text-sm'

const COMMAND_ITEM =
  'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground'

const TASK_BADGE =
  'inline-flex items-center justify-center rounded-full border border-transparent bg-primary px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 text-primary-foreground'

const TASK_GHOST_ICON_BUTTON =
  'inline-flex size-8 shrink-0 items-center justify-center rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const TASK_MENU_CONTENT = `bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md ${comboboxTaskMenuContentClass}`

const TASK_MENU_LABEL =
  'px-2 py-1.5 text-sm font-medium text-foreground'

const TASK_MENU_ITEM =
  'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'

const TASK_MENU_ITEM_DESTRUCTIVE =
  `${TASK_MENU_ITEM} text-destructive hover:bg-destructive/10 focus:bg-destructive/10`

const TASK_MENU_SUB_TRIGGER =
  `${TASK_MENU_ITEM} flex w-full items-center [&_svg:last-child]:ml-auto`

const TASK_MENU_SEPARATOR = 'bg-border -mx-1 my-1 h-px'

const TASK_MENU_SHORTCUT =
  'text-muted-foreground ml-auto text-xs tracking-widest'

const MORE_HORIZONTAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const FRAMEWORK_ITEMS_LOOP = `<template x-for="framework in filteredFrameworks()" :key="framework.value">
          <button
            type="button"
            data-slot="command-item"
            class="${COMMAND_ITEM}"
            @click="selectFramework(framework.value)"
          >
            <span x-text="framework.label"></span>
            <span :class="isSelected(framework.value) ? 'opacity-100' : 'opacity-0'">${CHECK_SVG}</span>
          </button>
        </template>`

const STATUS_ITEMS_LOOP = `<template x-for="status in filteredStatuses()" :key="status.value">
          <button
            type="button"
            data-slot="command-item"
            class="${COMMAND_ITEM}"
            @click="selectStatus(status.value)"
            x-text="status.label"
          ></button>
        </template>`

const STATUS_ITEMS_DISPLAY_LOOP = `<template x-for="status in filteredStatuses()" :key="status.value">
          <div
            data-slot="command-item"
            class="${COMMAND_ITEM}"
            x-text="status.label"
          ></div>
        </template>`

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
    href="${escapeAttr(figmaLinks.combobox)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildFrameworkCombobox(alpineDataKey: string): string {
  return `<div
  x-data="${alpineDataKey}"
  class="relative w-fit"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    x-ref="trigger"
    data-slot="popover-trigger"
    role="combobox"
    class="${OUTLINE_BUTTON}"
    :aria-expanded="open"
    @click="toggle()"
  >
    <span x-text="selectedLabel"></span>
    ${CHEVRONS_UP_DOWN_SVG}
  </button>
  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="popover-content"
    class="${POPOVER_CONTENT}"
    :data-state="open ? 'open' : 'closed'"
    @click.outside="close()"
  >
    <div data-slot="command" class="${COMMAND_ROOT}">
      <div data-slot="command-input-wrapper" class="${COMMAND_INPUT_WRAPPER}">
        ${SEARCH_SVG}
        <input
          type="text"
          data-slot="command-input"
          class="${COMMAND_INPUT}"
          placeholder="${escapeAttr(comboboxSearchPlaceholder)}"
          x-model="search"
          @keydown.stop
        />
      </div>
      <div data-slot="command-list" class="${COMMAND_LIST}">
        <p
          x-show="filteredFrameworks().length === 0"
          data-slot="command-empty"
          class="${COMMAND_EMPTY}"
        >${escapeHtml(comboboxEmptyLabel)}</p>
        <div data-slot="command-group" role="group">
          ${FRAMEWORK_ITEMS_LOOP}
        </div>
      </div>
    </div>
  </div>
</div>`
}

function buildStatusCombobox(alpineDataKey: string): string {
  return `<div
  x-data="${alpineDataKey}"
  class="${comboboxStatusControlClass}"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    x-ref="trigger"
    data-slot="popover-trigger"
    role="combobox"
    class="${STATUS_OUTLINE_BUTTON}"
    :aria-expanded="open"
    @click="toggle()"
  >
    <span x-show="showStatusPlus">${PLUS_SVG}</span>
    <span x-text="selectedLabel"></span>
  </button>
  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="popover-content"
    class="${STATUS_POPOVER_CONTENT}"
    :data-state="open ? 'open' : 'closed'"
    @click.outside="close()"
  >
    ${buildStatusCommandInner(STATUS_ITEMS_LOOP)}
  </div>
</div>`
}

function buildStatusCommandInner(itemsLoop: string): string {
  return `<div data-slot="command" class="${COMMAND_ROOT}">
      <div data-slot="command-input-wrapper" class="${COMMAND_INPUT_WRAPPER}">
        ${SEARCH_SVG}
        <input
          type="text"
          data-slot="command-input"
          class="${COMMAND_INPUT}"
          placeholder="${escapeAttr(comboboxStatusSearchPlaceholder)}"
          x-model="search"
          @keydown.stop
        />
      </div>
      <div data-slot="command-list" class="${COMMAND_LIST}">
        <p
          x-show="filteredStatuses().length === 0"
          data-slot="command-empty"
          class="${COMMAND_EMPTY}"
        >${escapeHtml(comboboxStatusEmptyLabel)}</p>
        <div data-slot="command-group" role="group">
          ${itemsLoop}
        </div>
      </div>
    </div>`
}

function buildStatusGroup(alpineDataKey: string): string {
  return `<div class="${comboboxStatusGroupClass}">
    <span class="${comboboxStatusLabelClass}">${escapeHtml(comboboxStatusFieldLabel)}</span>
    ${buildStatusCombobox(alpineDataKey)}
  </div>`
}

function buildStatusOpenInlineGroup(): string {
  return `<div class="${comboboxStatusControlClass}">
    <div
      x-data="comboboxStatusOpen"
      data-slot="popover-content"
      data-state="open"
      class="${comboboxStatusOpenPanelClass}"
    >
      ${buildStatusCommandInner(STATUS_ITEMS_DISPLAY_LOOP)}
    </div>
  </div>`
}

function buildTaskMenuContent(): string {
  const primaryItems = comboboxTaskMenuItems
    .map(
      (item) => `
        <div data-slot="dropdown-menu-item" class="${TASK_MENU_ITEM}">
          ${escapeHtml(item.label)}
        </div>`,
    )
    .join('')

  return `<div data-slot="dropdown-menu-label" class="${TASK_MENU_LABEL}">
      ${escapeHtml(comboboxTaskMenuLabel)}
    </div>
    <div data-slot="dropdown-menu-group" role="group">${primaryItems}
    </div>
    <div data-slot="dropdown-menu-separator" class="${TASK_MENU_SEPARATOR}"></div>
    <div data-slot="dropdown-menu-group" role="group">
      <div data-slot="dropdown-menu-sub-trigger" class="${TASK_MENU_SUB_TRIGGER}">
        ${escapeHtml(comboboxTaskMenuSubLabel)}
        ${CHEVRON_RIGHT_SVG}
      </div>
    </div>
    <div data-slot="dropdown-menu-separator" class="${TASK_MENU_SEPARATOR}"></div>
    <div data-slot="dropdown-menu-item" data-variant="destructive" class="${TASK_MENU_ITEM_DESTRUCTIVE}">
      ${escapeHtml(comboboxTaskMenuDeleteLabel)}
      <span data-slot="dropdown-menu-shortcut" class="${TASK_MENU_SHORTCUT}">${escapeHtml(comboboxTaskMenuDeleteShortcut)}</span>
    </div>`
}

function buildTaskRow(alpineDataKey: string): string {
  return `<div
  x-data="${alpineDataKey}"
  class="${comboboxTaskRowClass}"
  @keydown.escape.window="close()"
>
  <div class="${comboboxTaskRowInnerClass}">
    <span data-slot="badge" class="${TASK_BADGE}">${escapeHtml(comboboxTaskBadgeLabel)}</span>
    <span class="truncate text-sm">${escapeHtml(comboboxTaskTitle)}</span>
  </div>
  <div class="relative inline-flex shrink-0">
    <button
      type="button"
      x-ref="trigger"
      data-slot="dropdown-menu-trigger"
      class="${TASK_GHOST_ICON_BUTTON}"
      :aria-expanded="open"
      aria-label="Open menu"
      @click="toggle()"
    >
      ${MORE_HORIZONTAL_SVG}
    </button>
    <div
      x-show="open"
      x-ref="content"
      x-cloak
      data-slot="dropdown-menu-content"
      class="${TASK_MENU_CONTENT}"
      :data-state="open ? 'open' : 'closed'"
      @click.outside="close()"
    >
      ${buildTaskMenuContent()}
    </div>
  </div>
</div>`
}

function buildStatusButtonSection(): string {
  return `<div class="${comboboxStatusButtonFrameClass}" style="max-width:${comboboxFrameMaxWidthPx}px">
    ${buildStatusCombobox('comboboxStatusBtnClosed')}
    ${buildStatusCombobox('comboboxStatusBtnOpen')}
  </div>`
}

function buildTaskSection(): string {
  return `<div class="${comboboxTaskFrameClass}" style="max-width:${comboboxFrameMaxWidthPx}px">
    ${buildTaskRow('comboboxTaskClosed')}
    ${buildTaskRow('comboboxTaskOpen')}
  </div>`
}

function buildStatusSection(): string {
  return `<div class="${comboboxDemoSectionClass} ${comboboxStatusFrameClass}" style="max-width:${comboboxFrameMaxWidthPx}px">
    ${buildStatusGroup('comboboxStatusClosed')}
    ${buildStatusGroup('comboboxStatusClosed2')}
    ${buildStatusOpenInlineGroup()}
  </div>`
}

export function buildComboboxAlpineHtml(): string {
  return `<div class="${comboboxDemoRootClass}">
  ${buildFigmaLink()}
  <div class="${comboboxFrameClass}" style="max-width:${comboboxFrameMaxWidthPx}px">
    ${buildFrameworkCombobox('comboboxDemoClosed')}
    ${buildFrameworkCombobox('comboboxDemoOpen')}
  </div>
  <hr>
  ${buildStatusSection()}
  <hr>
  <div class="${comboboxDemoSectionClass}">
    ${buildTaskSection()}
  </div>
  <hr>
  <div class="${comboboxDemoSectionClass}">
    ${buildStatusButtonSection()}
  </div>
</div>`
}

export function extractComboboxToAlpine(_root: HTMLElement): string {
  return formatHtml(buildComboboxAlpineHtml())
}
