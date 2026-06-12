import {
  inputDemoBoxClass,
  inputEmailId,
  inputFieldClass,
  inputFrameClass,
  inputPictureId,
  inputSubscribeRowClass,
} from '@/demos/input/input-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const INPUT =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const INPUT_FLEX = `${INPUT} min-w-0 flex-1`

const LABEL =
  'flex items-center gap-2 text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50'

const BUTTON_OUTLINE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 px-4 py-2 shrink-0'

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.input)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildEmailInput(attrs = ''): string {
  return `<input data-slot="input" type="email" placeholder="Email" class="${INPUT} max-w-sm" ${attrs} />`
}

function buildEmailPairBox(): string {
  return `<div class="${inputDemoBoxClass}">
  ${buildEmailInput()}
  ${buildEmailInput()}
</div>`
}

function buildPictureField(): string {
  return `<div class="${inputFieldClass}">
  <label data-slot="label" class="${LABEL}" for="${inputPictureId}">Picture</label>
  <input data-slot="input" id="${inputPictureId}" type="file" class="${INPUT}" />
</div>`
}

function buildLabeledEmailField(): string {
  return `<div class="${inputFieldClass}">
  <label data-slot="label" class="${LABEL}" for="${inputEmailId}">Email</label>
  <input data-slot="input" id="${inputEmailId}" type="email" placeholder="Email" class="${INPUT}" />
</div>`
}

function buildSubscribeRow(): string {
  return `<form class="${inputSubscribeRowClass}" @submit.prevent="onSubscribe($event)">
  <input
    data-slot="input"
    type="email"
    placeholder="Email"
    class="${INPUT_FLEX}"
    x-model="subscribeEmail"
    aria-label="Email"
  />
  <button data-slot="button" type="submit" class="${BUTTON_OUTLINE}">Subscribe</button>
</form>`
}

function buildSubscribePairBox(): string {
  return `<div class="${inputDemoBoxClass}">
  ${buildSubscribeRow()}
  ${buildSubscribeRow()}
</div>`
}

export function buildInputAlpineHtml(): string {
  return `<div class="space-y-4" x-data="inputDemo">
  ${buildFigmaLink()}
  <div class="${inputFrameClass}">
    ${buildEmailPairBox()}
    ${buildPictureField()}
    ${buildEmailInput('disabled')}
    ${buildLabeledEmailField()}
    ${buildSubscribePairBox()}
  </div>
</div>`
}

export function extractInputToAlpine(_root: HTMLElement): string {
  return formatHtml(buildInputAlpineHtml())
}
