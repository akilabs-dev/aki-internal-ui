import {
  drawerFrameClass,
  drawerFrameMaxWidthPx,
  drawerSectionClass,
  moveGoalCancelLabel,
  moveGoalChartData,
  moveGoalDescription,
  moveGoalMax,
  moveGoalMin,
  moveGoalSubmitLabel,
  moveGoalTitle,
  moveGoalTriggerLabel,
  moveGoalUnitLabel,
  profileCancelLabel,
  profileContentClass,
  profileDescription,
  profileNameLabel,
  profileSaveLabel,
  profileTitle,
  profileTriggerLabel,
  profileUsernameLabel,
} from '@/demos/drawer/drawer-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const BUTTON_OUTLINE = `${BUTTON_BASE} border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2`

const BUTTON_PRIMARY = `${BUTTON_BASE} bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2`

const BUTTON_ICON = `${BUTTON_BASE} border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 shrink-0 rounded-full`

const OVERLAY =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80'

const DRAWER_CONTENT =
  'group/drawer-content bg-background fixed z-50 flex h-auto flex-col inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg'

const DRAWER_HANDLE = 'bg-muted mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full'

const DRAWER_HEADER = 'flex flex-col gap-1.5 p-4 text-center'

const DRAWER_TITLE = 'text-lg leading-none font-semibold'

const DRAWER_DESCRIPTION = 'text-muted-foreground text-sm'

const DRAWER_FOOTER = 'mt-auto flex flex-col gap-2 p-4'

const DIALOG_CONTENT =
  'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg'

const DIALOG_HEADER = 'flex flex-col gap-2 text-center sm:text-left'

const DIALOG_FOOTER = 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end'

const LABEL = 'flex items-center gap-2 text-sm leading-none font-medium select-none'

const INPUT =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const CLOSE_BUTTON =
  'ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none'

const MINUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path></svg>`

const PLUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.drawer)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildBarChart(): string {
  const bars = moveGoalChartData
    .map(
      (_item, index) => `<div
      class="bg-foreground w-2 flex-1 opacity-90"
      :style="{ height: barHeight(chartData[${index}].goal) }"
    ></div>`,
    )
    .join('\n      ')

  return `<div class="mt-3 flex h-[120px] items-end justify-center gap-1">
      ${bars}
    </div>`
}

function buildMoveGoalDrawer(): string {
  return `<div
  x-data="moveGoalDrawerDemo"
  data-slot="drawer"
  class="w-fit"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    data-slot="drawer-trigger"
    class="${BUTTON_OUTLINE}"
    @click="openDrawer()"
  >
    ${escapeHtml(moveGoalTriggerLabel)}
  </button>

  <div
    x-show="open"
    x-cloak
    data-slot="drawer-overlay"
    class="${OVERLAY}"
    :data-state="open ? 'open' : 'closed'"
    @click="close()"
    aria-hidden="true"
  ></div>

  <div
    x-show="open"
    x-cloak
    role="dialog"
    aria-modal="true"
    data-slot="drawer-content"
    data-vaul-drawer-direction="bottom"
    class="${DRAWER_CONTENT}"
    :data-state="open ? 'open' : 'closed'"
    @click.stop
  >
    <div class="${DRAWER_HANDLE}"></div>
    <div class="mx-auto w-full max-w-sm">
      <div data-slot="drawer-header" class="${DRAWER_HEADER}">
        <h2 data-slot="drawer-title" class="${DRAWER_TITLE}">${escapeHtml(moveGoalTitle)}</h2>
        <p data-slot="drawer-description" class="${DRAWER_DESCRIPTION}">${escapeHtml(moveGoalDescription)}</p>
      </div>
      <div class="p-4 pb-0">
        <div class="flex items-center justify-center space-x-2">
          <button
            type="button"
            class="${BUTTON_ICON}"
            :disabled="goal <= ${moveGoalMin}"
            @click="decrease()"
          >
            ${MINUS_SVG}
            <span class="sr-only">Decrease</span>
          </button>
          <div class="flex-1 text-center">
            <div class="text-7xl font-bold tracking-tighter" x-text="goal"></div>
            <div class="text-muted-foreground text-[0.70rem] uppercase">${escapeHtml(moveGoalUnitLabel)}</div>
          </div>
          <button
            type="button"
            class="${BUTTON_ICON}"
            :disabled="goal >= ${moveGoalMax}"
            @click="increase()"
          >
            ${PLUS_SVG}
            <span class="sr-only">Increase</span>
          </button>
        </div>
        ${buildBarChart()}
      </div>
      <div data-slot="drawer-footer" class="${DRAWER_FOOTER}">
        <button type="button" class="${BUTTON_PRIMARY}" @click="close()">${escapeHtml(moveGoalSubmitLabel)}</button>
        <button type="button" data-slot="drawer-close" class="${BUTTON_OUTLINE}" @click="close()">${escapeHtml(moveGoalCancelLabel)}</button>
      </div>
    </div>
  </div>
</div>`
}

function buildProfileDialog(): string {
  const body = `<div class="grid gap-4">
  <div class="grid gap-3">
    <label data-slot="label" class="${LABEL}" for="drawer-profile-name">${escapeHtml(profileNameLabel)}</label>
    <input
      data-slot="input"
      id="drawer-profile-name"
      name="name"
      class="${INPUT}"
      x-model="name"
    />
  </div>
  <div class="grid gap-3">
    <label data-slot="label" class="${LABEL}" for="drawer-profile-username">${escapeHtml(profileUsernameLabel)}</label>
    <input
      data-slot="input"
      id="drawer-profile-username"
      name="username"
      class="${INPUT}"
      x-model="username"
    />
  </div>
</div>`

  return `<div
  x-data="drawerProfileDemo"
  data-slot="dialog"
  class="w-fit"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    data-slot="dialog-trigger"
    class="${BUTTON_OUTLINE}"
    @click="openDrawer()"
  >
    ${escapeHtml(profileTriggerLabel)}
  </button>

  <div
    x-show="open"
    x-cloak
    data-slot="dialog-overlay"
    class="${OVERLAY}"
    :data-state="open ? 'open' : 'closed'"
    @click="close()"
    aria-hidden="true"
  ></div>

  <div
    x-show="open"
    x-cloak
    role="dialog"
    aria-modal="true"
    data-slot="dialog-content"
    class="${DIALOG_CONTENT} ${profileContentClass}"
    :data-state="open ? 'open' : 'closed'"
    @click.stop
  >
    <div data-slot="dialog-header" class="${DIALOG_HEADER}">
      <h2 data-slot="dialog-title" class="text-lg leading-none font-semibold">${escapeHtml(profileTitle)}</h2>
      <p data-slot="dialog-description" class="text-muted-foreground text-sm">${escapeHtml(profileDescription)}</p>
    </div>
    ${body}
    <div data-slot="dialog-footer" class="${DIALOG_FOOTER} pt-4">
      <button type="button" class="${BUTTON_PRIMARY}" @click="close()">${escapeHtml(profileSaveLabel)}</button>
      <button type="button" data-slot="dialog-close" class="${BUTTON_OUTLINE}" @click="close()">${escapeHtml(profileCancelLabel)}</button>
    </div>
    <button
      type="button"
      data-slot="dialog-close"
      class="${CLOSE_BUTTON}"
      @click="close()"
    >
      ${X_SVG}
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>`
}

export function buildDrawerAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${drawerFrameClass}" style="max-width:${drawerFrameMaxWidthPx}px">
    <div class="${drawerSectionClass}">
      ${buildMoveGoalDrawer()}
    </div>
    <div class="${drawerSectionClass}">
      ${buildProfileDialog()}
    </div>
  </div>
</div>`
}

export function extractDrawerToAlpine(_root: HTMLElement): string {
  return formatHtml(buildDrawerAlpineHtml())
}
