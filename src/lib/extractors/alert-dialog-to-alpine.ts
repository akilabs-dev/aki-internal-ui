import { alertDialogDemoContent } from '@/demos/alert-dialog/alert-dialog-demo.data'

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-4 py-2'

const BUTTON_DEFAULT = `${BUTTON_BASE} bg-primary text-primary-foreground hover:bg-primary/90`

const BUTTON_OUTLINE = `${BUTTON_BASE} border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50`

const OVERLAY_CLASSES =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80'

const CONTENT_CLASSES =
  'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function buildAlertDialogAlpineHtml(): string {
  const c = alertDialogDemoContent

  return `<div
  x-data="alertDialogDemo"
  data-slot="alert-dialog"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    data-slot="alert-dialog-trigger"
    class="${BUTTON_OUTLINE}"
    @click="openDialog()"
  >
    ${escapeHtml(c.triggerLabel)}
  </button>

  <div
    x-show="open"
    x-cloak
    data-slot="alert-dialog-overlay"
    class="${OVERLAY_CLASSES}"
    :data-state="open ? 'open' : 'closed'"
    @click="close()"
    aria-hidden="true"
  ></div>

  <div
    x-show="open"
    x-cloak
    role="alertdialog"
    aria-modal="true"
    data-slot="alert-dialog-content"
    class="${CONTENT_CLASSES}"
    :data-state="open ? 'open' : 'closed'"
    @click.stop
  >
    <div data-slot="alert-dialog-header" class="flex flex-col gap-2 text-center sm:text-left">
      <h2 data-slot="alert-dialog-title" class="text-lg font-semibold">
        ${escapeHtml(c.title)}
      </h2>
      <p data-slot="alert-dialog-description" class="text-muted-foreground text-sm">
        ${escapeHtml(c.description)}
      </p>
    </div>
    <div
      data-slot="alert-dialog-footer"
      class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
    >
      <button
        type="button"
        data-slot="alert-dialog-cancel"
        class="${BUTTON_OUTLINE} mt-2 sm:mt-0"
        @click="close()"
      >
        ${escapeHtml(c.cancelLabel)}
      </button>
      <button
        type="button"
        data-slot="alert-dialog-action"
        class="${BUTTON_DEFAULT}"
        @click="close()"
      >
        ${escapeHtml(c.actionLabel)}
      </button>
    </div>
  </div>
</div>`
}

export function extractAlertDialogToAlpine(_root: HTMLElement): string {
  return buildAlertDialogAlpineHtml()
}
