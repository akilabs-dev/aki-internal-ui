import {
  checkboxCardControlClass,
  checkboxCardGroupClass,
  checkboxCardLabelBaseClass,
  checkboxCardLabelCheckedClass,
  checkboxDemoRows,
  checkboxDemoSeparatorHtml,
  checkboxFrameClass,
  checkboxFrameMaxWidthPx,
  getCheckboxAlpineKey,
  type CheckboxDemoRow,
} from '@/demos/checkbox/checkbox-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const CHECKBOX_BASE =
  'peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'

const INDICATOR_CLASS =
  'grid place-content-center text-current transition-none'

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
  <a
    href="${escapeAttr(figmaLinks.checkbox)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function withClickStop(buttonHtml: string, alpineKey: string): string {
  return buttonHtml.replace(
    `@click="toggle('${alpineKey}')"`,
    `@click.stop="toggle('${alpineKey}')"`,
  )
}

function buildCheckboxButton(
  alpineKey: string,
  options: { disabled?: boolean; extraClass?: string; id?: string } = {},
): string {
  const { disabled = false, extraClass = '', id } = options
  const checkboxClass = [CHECKBOX_BASE, extraClass].filter(Boolean).join(' ')
  const idAttr = id ? ` id="${escapeHtml(id)}"` : ''

  if (disabled) {
    return `<button
      type="button"
      role="checkbox"
      aria-checked="false"
      data-state="unchecked"
      data-slot="checkbox"
      class="${checkboxClass}"
      disabled
      ${idAttr}
    >
      <span data-slot="checkbox-indicator" class="${INDICATOR_CLASS}" hidden></span>
    </button>`
  }

  return `<button
      type="button"
      role="checkbox"
      :aria-checked="isChecked('${alpineKey}') ? 'true' : 'false'"
      :data-state="isChecked('${alpineKey}') ? 'checked' : 'unchecked'"
      data-slot="checkbox"
      class="${checkboxClass}"
      @click="toggle('${alpineKey}')"
      ${idAttr}
    >
      <span
        data-slot="checkbox-indicator"
        class="${INDICATOR_CLASS}"
        x-show="isChecked('${alpineKey}')"
        x-cloak
      >${CHECK_SVG}</span>
    </button>`
}

function buildRow(row: CheckboxDemoRow): string {
  if (row.kind === 'simple') {
    const key = getCheckboxAlpineKey(row.id)!
    return `<div class="flex items-center gap-3">
  ${withClickStop(buildCheckboxButton(key, { id: row.id }), key)}
  <label data-slot="label" class="${LABEL_CLASS} cursor-pointer" @click="toggle('${key}')">${escapeHtml(row.label)}</label>
</div>`
  }

  if (row.kind === 'description') {
    const key = getCheckboxAlpineKey(row.id)!
    return `<div class="flex items-start gap-3">
  ${withClickStop(buildCheckboxButton(key, { id: row.id }), key)}
  <div class="grid gap-2">
    <label data-slot="label" class="${LABEL_CLASS} cursor-pointer" @click="toggle('${key}')">${escapeHtml(row.label)}</label>
    <p class="text-muted-foreground text-sm">${escapeHtml(row.description)}</p>
  </div>
</div>`
  }

  if (row.kind === 'disabled') {
    return `<div class="flex items-start gap-3">
  ${buildCheckboxButton('terms', { disabled: true, id: row.id })}
  <label data-slot="label" class="${LABEL_CLASS} text-muted-foreground">${escapeHtml(row.label)}</label>
</div>`
  }

  const key = getCheckboxAlpineKey(row.id)!
  const button = withClickStop(
    buildCheckboxButton(key, { extraClass: checkboxCardControlClass, id: row.id }),
    key,
  )

  return `<label
  data-slot="label"
  class="${checkboxCardLabelBaseClass}"
  :class="isChecked('${key}') ? '${checkboxCardLabelCheckedClass}' : ''"
  @click="toggle('${key}')"
>
  ${button}
  <div class="grid gap-1.5 font-normal">
    <p class="text-sm leading-none font-medium">${escapeHtml(row.title)}</p>
    <p class="text-muted-foreground text-sm">${escapeHtml(row.description)}</p>
  </div>
</label>`
}

export function buildCheckboxAlpineHtml(): string {
  const [simple, description, disabled, cardUnchecked, cardChecked] =
    checkboxDemoRows.map((row) => buildRow(row))

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div
    x-data="checkboxDemo"
    class="${checkboxFrameClass}"
    style="max-width:${checkboxFrameMaxWidthPx}px"
  >
    ${simple}
    ${checkboxDemoSeparatorHtml}
    ${description}
    ${checkboxDemoSeparatorHtml}
    ${disabled}
    ${checkboxDemoSeparatorHtml}
    <div class="${checkboxCardGroupClass}">
      ${cardUnchecked}
      ${cardChecked}
    </div>
  </div>
</div>`
}

export function extractCheckboxToAlpine(_root: HTMLElement): string {
  return formatHtml(buildCheckboxAlpineHtml())
}
