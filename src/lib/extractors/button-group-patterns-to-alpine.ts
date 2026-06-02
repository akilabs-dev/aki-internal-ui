const GROUP_HORIZONTAL =
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"

const GROUP_OUTER = `${GROUP_HORIZONTAL} has-[>[data-slot=button-group]]:gap-2`

const BUTTON_SECONDARY_SM =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-8 gap-1.5 px-3 bg-secondary text-secondary-foreground hover:bg-secondary/80'

const BUTTON_SECONDARY =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80'

const BUTTON_SECONDARY_ICON = `${BUTTON_SECONDARY} size-9 shrink-0 [&_svg]:size-4`

const BUTTON_OUTLINE_ICON = `${BUTTON_SECONDARY.replace('bg-secondary text-secondary-foreground hover:bg-secondary/80', 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50')} size-9 shrink-0 [&_svg]:size-4`

const BUTTON_OUTLINE =
  BUTTON_SECONDARY.replace(
    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  )

const SEPARATOR =
  'bg-input relative !m-0 self-stretch w-px shrink-0 data-[orientation=vertical]:h-auto'

const SEPARATOR_HR = 'bg-border shrink-0 h-px w-full'

const INPUT_IN_GROUP =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex-1 rounded-r-none'

const INPUT_GROUP =
  'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs h-9 min-w-0 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]'

const INPUT_GROUP_CONTROL =
  'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent h-9 px-3 text-sm outline-none disabled:opacity-50'

const INPUT_GROUP_ADDON_END =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm order-last pr-3 has-[>button]:mr-[-0.45rem]'

const INPUT_GROUP_BTN =
  'inline-flex items-center justify-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 hover:bg-accent hover:text-accent-foreground'

const POPOVER_CONTENT =
  'bg-popover text-popover-foreground w-72 overflow-hidden rounded-xl border shadow-md outline-none max-h-[min(28rem,calc(100vh-1rem))] overflow-y-auto'

const POPOVER_ROOT = 'relative w-fit'

const DROPDOWN_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-xl border p-1 shadow-md w-56 [--radius:1rem]'

const DROPDOWN_ITEM =
  'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'

const DROPDOWN_ITEM_DESTRUCTIVE =
  `${DROPDOWN_ITEM} text-destructive hover:bg-destructive/10 focus:bg-destructive/10 [&_svg]:text-destructive`

const SELECT_MENU_CONTENT =
  'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md min-w-24 max-h-[min(18rem,calc(100vh-1rem))] overflow-y-auto'

const SELECT_MENU_ITEM =
  'relative flex w-full cursor-default items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'

const SELECT_MENU_ITEM_INDICATOR =
  'absolute right-2 flex size-3.5 items-center justify-center'

const SELECT_TRIGGER =
  "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\\'size-\\'])]:size-4"

const TEXTAREA =
  'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'

const SVG = {
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>',
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
  audio:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path></svg>',
  chevronDown:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m6 9 6 6 6-6"></path></svg>',
  chevronDownMuted:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 opacity-50"><path d="m6 9 6 6 6-6"></path></svg>',
  bot: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>',
  arrowRight:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M20 6 9 17l-5-5"></path></svg>',
  alertTriangle:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
  volumeOff:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path><path d="m2 2 20 20"></path><path d="M6.343 6.343A5 5 0 0 0 6 9v6a5 5 0 0 0 .343 2.657"></path><path d="M10 8H6a2 2 0 0 0-2 2v4c0 .374.102.723.28 1.02"></path><path d="M10 14.35V19a2 2 0 0 0 3.14 1.64l3.36-2.24"></path><path d="M10 9.65V5a2 2 0 0 1 3.14-1.64l2.01 1.34"></path></svg>',
  userRoundX:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M2 21a8 8 0 0 1 11.873-7"></path><circle cx="10" cy="8" r="5"></circle><path d="m17 17 5 5"></path><path d="m22 17-5 5"></path></svg>',
  share:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>',
  copy:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>',
  trash:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>',
}

const SECTION_DIVIDER =
  '<div class="py-2"><div class="bg-border h-px w-full"></div></div>'

const CURRENCIES = [
  { value: '$', label: 'US Dollar' },
  { value: '€', label: 'Euro' },
  { value: '£', label: 'British Pound' },
] as const

function buildCopyPaste(): string {
  return `<div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} w-fit">
    <button type="button" data-slot="button" class="${BUTTON_SECONDARY_SM}">Copy</button>
    <div data-slot="button-group-separator" role="separator" data-orientation="vertical" class="${SEPARATOR}"></div>
    <button type="button" data-slot="button" class="${BUTTON_SECONDARY_SM}">Paste</button>
  </div>`
}

function buildSplit(): string {
  return `<div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} w-fit">
    <button type="button" data-slot="button" class="${BUTTON_SECONDARY}">Button</button>
    <div data-slot="button-group-separator" role="separator" data-orientation="vertical" class="${SEPARATOR}"></div>
    <button type="button" data-slot="button" class="${BUTTON_SECONDARY_ICON}" aria-label="Add">${SVG.plus}</button>
  </div>`
}

function buildSearchInput(): string {
  return `<div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} w-fit">
    <input data-slot="input" type="text" placeholder="Search..." class="${INPUT_IN_GROUP}" />
    <button type="button" data-slot="button" class="${BUTTON_OUTLINE_ICON}" aria-label="Search">${SVG.search}</button>
  </div>`
}

function buildMessageInput(): string {
  return `<div x-data="buttonGroupMessageDemo" class="flex w-fit [--radius:9999rem]">
  <div role="group" data-slot="button-group" class="${GROUP_OUTER}">
    <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL}">
      <button type="button" data-slot="button" class="${BUTTON_OUTLINE_ICON}" aria-label="Add">${SVG.plus}</button>
    </div>
    <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} min-w-0 flex-1">
      <div data-slot="input-group" role="group" class="${INPUT_GROUP} min-w-[280px] rounded-full">
        <input
          data-slot="input-group-control"
          type="text"
          class="${INPUT_GROUP_CONTROL}"
          :placeholder="voiceEnabled ? 'Record and send audio...' : 'Send a message...'"
          :disabled="voiceEnabled"
        />
        <div data-slot="input-group-addon" data-align="inline-end" class="${INPUT_GROUP_ADDON_END}">
          <button
            type="button"
            data-size="icon-xs"
            title="Voice Mode"
            class="${INPUT_GROUP_BTN} data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700"
            :data-active="voiceEnabled"
            :aria-pressed="voiceEnabled"
            aria-label="Voice Mode"
            @click="toggleVoice()"
          >${SVG.audio}</button>
        </div>
      </div>
    </div>
  </div>
</div>`
}

function buildFollowDropdown(): string {
  const items = [
    { label: 'Mute Conversation', icon: SVG.volumeOff },
    { label: 'Mark as Read', icon: SVG.check },
    { label: 'Report Conversation', icon: SVG.alertTriangle },
    { label: 'Block User', icon: SVG.userRoundX },
    { label: 'Share Conversation', icon: SVG.share },
    { label: 'Copy Conversation', icon: SVG.copy },
  ]

  const list = items
    .map(
      (it) =>
        `<button type="button" data-slot="dropdown-menu-item" class="${DROPDOWN_ITEM} w-full text-left">${it.icon}<span>${it.label}</span></button>`,
    )
    .join('\n          ')

  return `<div x-data="buttonGroupPopoverDemo" class="${POPOVER_ROOT}" @click.outside="close()">
  <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL}">
    <button type="button" data-slot="button" class="${BUTTON_OUTLINE}">Follow</button>
    <button
      type="button"
      x-ref="trigger"
      data-slot="button"
      class="${BUTTON_OUTLINE_ICON}"
      aria-label="Open Menu"
      @click="toggle()"
      :aria-expanded="open"
    >${SVG.chevronDown}</button>
  </div>
  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="dropdown-menu-content"
    class="${DROPDOWN_CONTENT}"
  >
    <div data-slot="dropdown-menu-group">
      ${list}
    </div>
    <div class="bg-border -mx-1 my-1 h-px"></div>
    <div data-slot="dropdown-menu-group">
      <button type="button" data-slot="dropdown-menu-item" class="${DROPDOWN_ITEM_DESTRUCTIVE} w-full text-left">
        ${SVG.trash}Delete Conversation
      </button>
    </div>
  </div>
</div>`
}

function buildCurrencySelect(): string {
  const items = CURRENCIES.map(
    (c) => `<button
      type="button"
      class="${SELECT_MENU_ITEM}"
      @click="setCurrency('${c.value}')"
    >
      ${c.value}
      <span class="text-muted-foreground">${c.label}</span>
      <span class="${SELECT_MENU_ITEM_INDICATOR}" x-show="currency === '${c.value}'">${SVG.check}</span>
    </button>`,
  ).join('\n          ')

  return `<div x-data="{
    open: false,
    currency: '$',
    toggle() {
      this.open = !this.open
      if (this.open) requestAnimationFrame(() => requestAnimationFrame(() => this.position()))
    },
    close() { this.open = false },
    setCurrency(v) {
      this.currency = v
      this.close()
    },
    position() {
      const trigger = this.$refs.trigger
      const menu = this.$refs.menu
      if (!trigger || !menu) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      const spaceBelow = window.innerHeight - rect.bottom - offset
      const spaceAbove = rect.top - offset
      const openUp = menu.offsetHeight > spaceBelow && spaceAbove > spaceBelow
      menu.style.position = 'fixed'
      menu.style.top = openUp
        ? \`\\\${Math.max(8, rect.top - menu.offsetHeight - offset)}px\`
        : \`\\\${Math.min(window.innerHeight - 8 - menu.offsetHeight, rect.bottom + offset)}px\`
      menu.style.left = \`\\\${rect.left}px\`
      menu.style.zIndex = '50'
    },
  }" class="w-fit" @click.outside="close()">
  <div role="group" data-slot="button-group" class="${GROUP_OUTER}">
    <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} w-fit">
      <button
        type="button"
        x-ref="trigger"
        aria-label="Currency"
        class="${SELECT_TRIGGER} w-14 font-mono pr-9"
        @click="toggle()"
        :aria-expanded="open"
      >
        <span data-slot="select-value" class="flex items-center gap-2" x-text="currency"></span>
        <span class="text-muted-foreground">${SVG.chevronDownMuted}</span>
      </button>
      <input data-slot="input" type="text" placeholder="10.00" inputmode="numeric" pattern="[0-9]*" class="${INPUT_IN_GROUP}" />
    </div>
    <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL} w-fit">
      <button type="button" data-slot="button" class="${BUTTON_OUTLINE_ICON}" aria-label="Send">${SVG.arrowRight}</button>
    </div>
  </div>
  <div
    x-show="open"
    x-ref="menu"
    x-cloak
    class="${SELECT_MENU_CONTENT}"
  >
    ${items}
  </div>
</div>`
}

function buildPopoverCopilot(): string {
  return `<div x-data="buttonGroupPopoverDemo" class="${POPOVER_ROOT}" @click.outside="close()">
  <div role="group" data-slot="button-group" class="${GROUP_HORIZONTAL}">
    <button type="button" data-slot="button" class="${BUTTON_OUTLINE}">
      <span class="inline-flex items-center gap-2">${SVG.bot} Copilot</span>
    </button>
    <button
      type="button"
      x-ref="trigger"
      data-slot="button"
      class="${BUTTON_OUTLINE_ICON}"
      aria-label="Open Popover"
      @click="toggle()"
      :aria-expanded="open"
    >${SVG.chevronDown}</button>
  </div>
  <div
    x-show="open"
    x-ref="content"
    x-cloak
    data-slot="popover-content"
    class="${POPOVER_CONTENT}"
  >
    <div class="px-4 py-3">
      <div class="text-sm font-medium">Agent Tasks</div>
    </div>
    <div class="${SEPARATOR_HR}"></div>
    <div class="p-4 text-sm *:[p:not(:last-child)]:mb-2">
      <textarea placeholder="Describe your task in natural language." class="${TEXTAREA} mb-4 resize-none"></textarea>
      <p class="font-medium">Start a new task with Copilot</p>
      <p class="text-muted-foreground">
        Describe your task in natural language. Copilot will work in the background and open a pull request for your review.
      </p>
    </div>
  </div>
</div>`
}

export function buildButtonGroupPatternsHtml(): string {
  return `${SECTION_DIVIDER}
    ${buildCopyPaste()}
    ${SECTION_DIVIDER}
    ${buildSplit()}
    ${SECTION_DIVIDER}
    ${buildSearchInput()}
    ${SECTION_DIVIDER}
    ${buildMessageInput()}
    ${SECTION_DIVIDER}
    ${buildFollowDropdown()}
    ${SECTION_DIVIDER}
    ${buildCurrencySelect()}
    ${SECTION_DIVIDER}
    ${buildPopoverCopilot()}`
}
