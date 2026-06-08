import {
  dialogFrameClass,
  dialogFrameMaxWidthPx,
  dialogProfileCancelLabel,
  dialogProfileContentClass,
  dialogProfileDescription,
  dialogProfileNameLabel,
  dialogProfileSaveLabel,
  dialogProfileTitle,
  dialogProfileTriggerLabel,
  dialogProfileUsernameLabel,
  dialogSectionClass,
  dialogShareCloseLabel,
  dialogShareContentClass,
  dialogShareDescription,
  dialogShareTitle,
  dialogShareTriggerLabel,
} from '@/demos/dialog/dialog-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2'

const BUTTON_OUTLINE = `${BUTTON_BASE} border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50`

const BUTTON_PRIMARY = `${BUTTON_BASE} bg-primary text-primary-foreground hover:bg-primary/90`

const BUTTON_SECONDARY = `${BUTTON_BASE} bg-secondary text-secondary-foreground hover:bg-secondary/80`

const OVERLAY =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80'

const CONTENT_BASE =
  'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg'

const HEADER = 'flex flex-col gap-2 text-center sm:text-left'

const TITLE = 'text-lg leading-none font-semibold'

const DESCRIPTION = 'text-muted-foreground text-sm'

const FOOTER = 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end'

const FOOTER_START = 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-start'

const LABEL = 'flex items-center gap-2 text-sm leading-none font-medium select-none'

const INPUT =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const CLOSE_BUTTON =
  'ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none'

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
    href="${escapeAttr(figmaLinks.dialog)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildDialogShell(
  alpineKey: string,
  triggerLabel: string,
  contentClass: string,
  bodyHtml: string,
  footerHtml: string,
  title: string,
  description: string,
): string {
  return `<div
  x-data="${alpineKey}"
  data-slot="dialog"
  class="w-fit"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    data-slot="dialog-trigger"
    class="${BUTTON_OUTLINE}"
    @click="openDialog()"
  >
    ${escapeHtml(triggerLabel)}
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
    class="${CONTENT_BASE} ${contentClass}"
    :data-state="open ? 'open' : 'closed'"
    @click.stop
  >
    <div data-slot="dialog-header" class="${HEADER}">
      <h2 data-slot="dialog-title" class="${TITLE}">${escapeHtml(title)}</h2>
      <p data-slot="dialog-description" class="${DESCRIPTION}">${escapeHtml(description)}</p>
    </div>
    ${bodyHtml}
    ${footerHtml}
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

function buildProfileDialog(): string {
  const body = `<div class="grid gap-4">
  <div class="grid gap-3">
    <label data-slot="label" class="${LABEL}" for="dialog-name">${escapeHtml(dialogProfileNameLabel)}</label>
    <input
      data-slot="input"
      id="dialog-name"
      name="name"
      class="${INPUT}"
      x-model="name"
    />
  </div>
  <div class="grid gap-3">
    <label data-slot="label" class="${LABEL}" for="dialog-username">${escapeHtml(dialogProfileUsernameLabel)}</label>
    <input
      data-slot="input"
      id="dialog-username"
      name="username"
      class="${INPUT}"
      x-model="username"
    />
  </div>
</div>`

  const footer = `<div data-slot="dialog-footer" class="${FOOTER}">
  <button type="button" data-slot="dialog-close" class="${BUTTON_OUTLINE}" @click="close()">${escapeHtml(dialogProfileCancelLabel)}</button>
  <button type="button" class="${BUTTON_PRIMARY}" @click="close()">${escapeHtml(dialogProfileSaveLabel)}</button>
</div>`

  return buildDialogShell(
    'dialogProfileDemo',
    dialogProfileTriggerLabel,
    dialogProfileContentClass,
    body,
    footer,
    dialogProfileTitle,
    dialogProfileDescription,
  )
}

function buildShareDialog(): string {
  const body = `<div class="flex items-center gap-2">
  <div class="grid flex-1 gap-2">
    <label data-slot="label" class="sr-only" for="dialog-link">Link</label>
    <input
      data-slot="input"
      id="dialog-link"
      class="${INPUT}"
      readonly
      :value="link"
    />
  </div>
</div>`

  const footer = `<div data-slot="dialog-footer" class="${FOOTER_START}">
  <button type="button" data-slot="dialog-close" class="${BUTTON_SECONDARY}" @click="close()">${escapeHtml(dialogShareCloseLabel)}</button>
</div>`

  return buildDialogShell(
    'dialogShareDemo',
    dialogShareTriggerLabel,
    dialogShareContentClass,
    body,
    footer,
    dialogShareTitle,
    dialogShareDescription,
  )
}

export function buildDialogAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${dialogFrameClass}" style="max-width:${dialogFrameMaxWidthPx}px">
    <div class="${dialogSectionClass}">
      ${buildProfileDialog()}
    </div>
    <div class="${dialogSectionClass}">
      ${buildShareDialog()}
    </div>
  </div>
</div>`
}

export function extractDialogToAlpine(_root: HTMLElement): string {
  return formatHtml(buildDialogAlpineHtml())
}
