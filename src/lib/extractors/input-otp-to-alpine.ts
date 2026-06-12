import {
  inputOtpBlockClass,
  inputOtpFormClass,
  inputOtpFormDescription,
  inputOtpFormTitle,
  inputOtpFrameClass,
  inputOtpHelperClass,
  inputOtpHelperEmptyText,
  inputOtpHelperPreviewMessage,
} from '@/demos/input-otp/input-otp-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const OTP_ROOT =
  'flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed'

const OTP_GROUP = 'flex items-center'

const SLOT =
  'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none data-[active=true]:z-10 data-[active=true]:ring-[3px]'

const SLOT_FIRST = `${SLOT} rounded-l-md border-l`
const SLOT_LAST = `${SLOT} rounded-r-md`
const SLOT_MID = SLOT

const SEPARATOR =
  'text-muted-foreground flex items-center justify-center [&_svg]:size-4'

const MINUS_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path></svg>'

const LABEL = 'flex items-center gap-2 text-sm leading-none font-medium select-none text-base font-semibold'

const BUTTON_PRIMARY =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2'

const HIDDEN_INPUT =
  'absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]'

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${figmaLinks.inputOtp}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildHiddenInput(inputMode: 'numeric' | 'text' = 'numeric'): string {
  return `<input
  type="text"
  inputmode="${inputMode}"
  autocomplete="one-time-code"
  class="${HIDDEN_INPUT}"
  x-ref="input"
  :maxlength="maxLength"
  :value="otp"
  @input="onInput($event)"
  @focus="onFocus()"
  @blur="onBlur()"
/>`
}

function buildSlot(index: number, position: 'first' | 'middle' | 'last'): string {
  const slotClass = position === 'first' ? SLOT_FIRST : position === 'last' ? SLOT_LAST : SLOT_MID
  return `<div
  data-slot="input-otp-slot"
  class="${slotClass}"
  :data-active="isActive(${index})"
  @click="focusInput()"
  x-text="charAt(${index})"
></div>`
}

function buildSeparatorHtml(): string {
  return `<div data-slot="input-otp-separator" role="separator" class="${SEPARATOR}">${MINUS_SVG}</div>`
}

function buildGroup(indices: number[]): string {
  const slots = indices
    .map((index, i) => {
      const position = i === 0 ? 'first' : i === indices.length - 1 ? 'last' : 'middle'
      return buildSlot(index, position)
    })
    .join('\n        ')

  return `<div data-slot="input-otp-group" class="${OTP_GROUP}">
        ${slots}
      </div>`
}

function buildOtpRoot(content: string, inputMode: 'numeric' | 'text' = 'numeric'): string {
  return `<div
  data-slot="input-otp"
  class="${OTP_ROOT} relative"
  @click="focusInput()"
>
  ${buildHiddenInput(inputMode)}
  ${content}
</div>`
}

function buildBlock(content: string): string {
  return `<div class="${inputOtpBlockClass}">
    ${content}
  </div>`
}

function buildScopedOtp(alpineData: string, content: string, inputMode: 'numeric' | 'text' = 'numeric'): string {
  return `<div x-data="${alpineData}">
  ${buildOtpRoot(content, inputMode)}
</div>`
}

function buildPattern333Content(): string {
  return `${buildGroup([0, 1, 2])}
  ${buildSeparatorHtml()}
  ${buildGroup([3, 4, 5])}`
}

function buildPattern222Content(): string {
  return `${buildGroup([0, 1])}
  ${buildSeparatorHtml()}
  ${buildGroup([2, 3])}
  ${buildSeparatorHtml()}
  ${buildGroup([4, 5])}`
}

function buildPatterns333Block(): string {
  return buildBlock(`${buildScopedOtp('inputOtpField', buildPattern333Content())}
    ${buildScopedOtp('inputOtpPreviewField', buildPattern333Content())}`)
}

function buildPatternsContinuousBlock(): string {
  return buildBlock(`${buildScopedOtp('inputOtpAlphanumericField', buildGroup([0, 1, 2, 3, 4, 5]), 'text')}
    ${buildScopedOtp('inputOtpAlphanumericPreviewField', buildGroup([0, 1, 2, 3, 4, 5]), 'text')}`)
}

function buildPatterns222Block(): string {
  return buildBlock(`${buildScopedOtp('inputOtpField', buildPattern222Content())}
    ${buildScopedOtp('inputOtpPreviewField', buildPattern222Content())}`)
}

function buildHelperBlock(): string {
  const helperEmptyText = inputOtpHelperEmptyText.replace(/'/g, "\\'")

  return buildBlock(`<div class="${inputOtpHelperClass}" x-data="inputOtpHelperDemo">
  ${buildOtpRoot(buildGroup([0, 1, 2, 3, 4, 5]))}
  <div x-text="otp === '' ? '${helperEmptyText}' : 'You entered: ' + otp"></div>
</div>
<div class="${inputOtpHelperClass}" x-data="inputOtpHelperPreviewDemo">
  ${buildOtpRoot(buildGroup([0, 1, 2, 3, 4, 5]))}
  <div>${inputOtpHelperPreviewMessage}</div>
</div>`)
}

function buildFormBlock(): string {
  return buildBlock(`<form class="${inputOtpFormClass}" x-data="inputOtpFormDemo" @submit.prevent="onSubmit($event)">
  <label data-slot="label" class="${LABEL}">${inputOtpFormTitle}</label>
  ${buildOtpRoot(buildGroup([0, 1, 2, 3, 4, 5]))}
  <p class="text-sm text-muted-foreground">${inputOtpFormDescription}</p>
  <button data-slot="button" type="submit" class="${BUTTON_PRIMARY}">Submit</button>
</form>
<form class="${inputOtpFormClass}" x-data="inputOtpFormPreviewDemo" @submit.prevent="onSubmit($event)">
  <label data-slot="label" class="${LABEL}">${inputOtpFormTitle}</label>
  ${buildOtpRoot(buildGroup([0, 1, 2, 3, 4, 5]))}
  <p class="text-sm text-muted-foreground">${inputOtpFormDescription}</p>
  <button data-slot="button" type="submit" class="${BUTTON_PRIMARY}">Submit</button>
</form>`)
}

export function buildInputOtpAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${inputOtpFrameClass}">
    ${buildPatterns333Block()}
    ${buildPatternsContinuousBlock()}
    ${buildPatterns222Block()}
    ${buildHelperBlock()}
    ${buildFormBlock()}
  </div>
</div>`
}

export function extractInputOtpToAlpine(_root: HTMLElement): string {
  return formatHtml(buildInputOtpAlpineHtml())
}
