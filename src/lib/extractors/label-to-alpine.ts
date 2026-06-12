import {
  labelBlockClass,
  labelFrameClass,
  labelRowClass,
  labelTermsId,
  labelTermsPreviewId,
  labelTermsText,
} from '@/demos/label/label-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const CHECKBOX_BASE =
  'peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'

const INDICATOR_CLASS = 'grid place-content-center text-current transition-none'

const LABEL_CLASS =
  'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50'

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="M20 6 9 17l-5-5"></path></svg>`

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
  <a href="${escapeAttr(figmaLinks.label)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildCheckboxButton(alpineKey: string, id: string): string {
  return `<button
  type="button"
  role="checkbox"
  :aria-checked="isChecked('${alpineKey}') ? 'true' : 'false'"
  :data-state="isChecked('${alpineKey}') ? 'checked' : 'unchecked'"
  data-slot="checkbox"
  class="${CHECKBOX_BASE}"
  id="${escapeHtml(id)}"
  @click="toggle('${alpineKey}')"
>
  <span
    data-slot="checkbox-indicator"
    class="${INDICATOR_CLASS}"
    x-show="isChecked('${alpineKey}')"
    x-cloak
  >${CHECK_SVG}</span>
</button>`
}

function buildLabelRow(alpineKey: string, id: string): string {
  return `<div class="${labelRowClass}">
  ${buildCheckboxButton(alpineKey, id)}
  <label data-slot="label" for="${escapeHtml(id)}" class="${LABEL_CLASS} cursor-pointer" @click="toggle('${alpineKey}')">${escapeHtml(labelTermsText)}</label>
</div>`
}

function buildDemoBlock(): string {
  return `<div class="${labelBlockClass}" x-data="labelDemo">
  ${buildLabelRow('terms', labelTermsId)}
  ${buildLabelRow('termsPreview', labelTermsPreviewId)}
</div>`
}

export function buildLabelAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${labelFrameClass}">
    ${buildDemoBlock()}
  </div>
</div>`
}

export function extractLabelToAlpine(_root: HTMLElement): string {
  return formatHtml(buildLabelAlpineHtml())
}
