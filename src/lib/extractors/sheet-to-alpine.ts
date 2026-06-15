import {
  sheetCloseIconButtonClass,
  sheetCloseIconSvg,
  sheetCloseLabel,
  sheetContentClass,
  sheetDescription,
  sheetDescriptionClass,
  sheetFieldGroupClass,
  sheetFooterClass,
  sheetFormClass,
  sheetFrameClass,
  sheetFrameStyle,
  sheetHeaderClass,
  sheetInputClass,
  sheetLabelClass,
  sheetNameDefault,
  sheetNameId,
  sheetNameLabel,
  sheetOutlineButtonClass,
  sheetOverlayClass,
  sheetPrimaryButtonClass,
  sheetSaveLabel,
  sheetTitle,
  sheetTitleClass,
  sheetTriggerButtonClass,
  sheetTriggerLabel,
  sheetUsernameDefault,
  sheetUsernameId,
  sheetUsernameLabel,
} from '@/demos/sheet/sheet-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

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
  <a href="${escapeAttr(figmaLinks.sheet)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildSheetForm(): string {
  return `<div class="${sheetFormClass}">
  <div class="${sheetFieldGroupClass}">
    <label data-slot="label" class="${sheetLabelClass}" for="${escapeAttr(sheetNameId)}">${escapeHtml(sheetNameLabel)}</label>
    <input data-slot="input" id="${escapeAttr(sheetNameId)}" class="${sheetInputClass}" value="${escapeAttr(sheetNameDefault)}" />
  </div>
  <div class="${sheetFieldGroupClass}">
    <label data-slot="label" class="${sheetLabelClass}" for="${escapeAttr(sheetUsernameId)}">${escapeHtml(sheetUsernameLabel)}</label>
    <input data-slot="input" id="${escapeAttr(sheetUsernameId)}" class="${sheetInputClass}" value="${escapeAttr(sheetUsernameDefault)}" />
  </div>
</div>`
}

function buildSheetFooter(): string {
  return `<div data-slot="sheet-footer" class="${sheetFooterClass}">
  <button type="submit" class="${sheetPrimaryButtonClass}">${escapeHtml(sheetSaveLabel)}</button>
  <button type="button" data-slot="sheet-close" class="${sheetOutlineButtonClass}" @click="close()">${escapeHtml(sheetCloseLabel)}</button>
</div>`
}

function buildInteractiveSheet(): string {
  return `<div
  x-data="sheetDemo"
  data-slot="sheet"
  class="w-fit"
  @keydown.escape.window="close()"
>
  <button
    type="button"
    data-slot="sheet-trigger"
    class="${sheetTriggerButtonClass}"
    @click="openSheet()"
  >
    ${escapeHtml(sheetTriggerLabel)}
  </button>

  <div
    x-show="open"
    x-cloak
    data-slot="sheet-overlay"
    class="${sheetOverlayClass}"
    :data-state="open ? 'open' : 'closed'"
    @click="close()"
    aria-hidden="true"
  ></div>

  <div
    x-show="open"
    x-cloak
    role="dialog"
    aria-modal="true"
    data-slot="sheet-content"
    class="${sheetContentClass}"
    :data-state="open ? 'open' : 'closed'"
    @click.stop
  >
    <div data-slot="sheet-header" class="${sheetHeaderClass}">
      <h2 data-slot="sheet-title" class="${sheetTitleClass}">${escapeHtml(sheetTitle)}</h2>
      <p data-slot="sheet-description" class="${sheetDescriptionClass}">${escapeHtml(sheetDescription)}</p>
    </div>
    ${buildSheetForm()}
    ${buildSheetFooter()}
    <button
      type="button"
      data-slot="sheet-close"
      class="${sheetCloseIconButtonClass}"
      @click="close()"
    >
      ${sheetCloseIconSvg}
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>`
}

export function buildSheetAlpineHtml(): string {
  const frameStyle = sheetFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${sheetFrameClass}" style="max-width: ${frameStyle.maxWidth}; min-height: ${frameStyle.minHeight}">
    ${buildInteractiveSheet()}
  </div>
</div>`
}

export function extractSheetToAlpine(_root: HTMLElement): string {
  return formatHtml(buildSheetAlpineHtml())
}
