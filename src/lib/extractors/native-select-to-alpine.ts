import {
  departmentGroups,
  nativeSelectDefaults,
  nativeSelectFrameClass,
  nativeSelectFrameStyle,
  nativeSelectRowClass,
  nativeSelectSeparatorHtml,
  priorityOptions,
  roleOptions,
  statusOptions,
} from '@/demos/native-select/native-select-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const SELECT_WRAPPER_CLASS = 'group/native-select relative w-fit has-[select:disabled]:opacity-50'

const SELECT_CLASS =
  'border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'

const OPTION_CLASS = 'bg-popover text-popover-foreground'

const OPTGROUP_CLASS = 'bg-popover text-popover-foreground'

const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none" aria-hidden="true" data-slot="native-select-icon"><path d="m6 9 6 6 6-6"></path></svg>`

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
  <a href="${escapeAttr(figmaLinks.nativeSelect)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildOptions(
  options: ReadonlyArray<{ value: string, label: string }>,
  selectedValue?: string,
): string {
  return options
    .map((option) => {
      const selected = option.value === selectedValue ? ' selected' : ''
      return `<option data-slot="native-select-option" class="${OPTION_CLASS}" value="${escapeAttr(option.value)}"${selected}>${escapeHtml(option.label)}</option>`
    })
    .join('')
}

function buildNativeSelect(options: {
  attrs?: string
  model?: string
  optionsHtml: string
}): string {
  const modelAttr = options.model ? ` x-model="${options.model}"` : ''
  return `<div class="${SELECT_WRAPPER_CLASS}" data-slot="native-select-wrapper">
  <select
    data-slot="native-select"
    class="${SELECT_CLASS}"
    ${options.attrs ?? ''}${modelAttr}
  >
    ${options.optionsHtml}
  </select>
  ${CHEVRON_DOWN}
</div>`
}

function buildStatusSelect(): string {
  return buildNativeSelect({
    model: 'status',
    optionsHtml: buildOptions(statusOptions, nativeSelectDefaults.status),
  })
}

function buildDepartmentSelect(): string {
  const placeholder = `<option data-slot="native-select-option" class="${OPTION_CLASS}" value="" selected>Select department</option>`
  const groups = departmentGroups
    .map((group) => {
      const groupOptions = group.options
        .map(
          (option) =>
            `<option data-slot="native-select-option" class="${OPTION_CLASS}" value="${escapeAttr(option.value)}">${escapeHtml(option.label)}</option>`,
        )
        .join('')
      return `<optgroup data-slot="native-select-optgroup" class="${OPTGROUP_CLASS}" label="${escapeAttr(group.label)}">${groupOptions}</optgroup>`
    })
    .join('')

  return buildNativeSelect({
    model: 'department',
    optionsHtml: `${placeholder}${groups}`,
  })
}

function buildPrioritySelect(): string {
  return buildNativeSelect({
    attrs: 'disabled',
    optionsHtml: buildOptions(priorityOptions),
  })
}

function buildRoleSelect(): string {
  return buildNativeSelect({
    attrs: 'aria-invalid="true"',
    optionsHtml: buildOptions(roleOptions),
  })
}

function buildDemoStack(): string {
  const frameStyle = nativeSelectFrameStyle()
  return `<div class="${nativeSelectFrameClass}" style="max-width: ${frameStyle.maxWidth}" x-data="nativeSelectDemo">
  <div class="${nativeSelectRowClass}">${buildStatusSelect()}</div>
  ${nativeSelectSeparatorHtml}
  <div class="${nativeSelectRowClass}">${buildDepartmentSelect()}</div>
  ${nativeSelectSeparatorHtml}
  <div class="${nativeSelectRowClass}">${buildPrioritySelect()}</div>
  ${nativeSelectSeparatorHtml}
  <div class="${nativeSelectRowClass}">${buildRoleSelect()}</div>
</div>`
}

export function buildNativeSelectAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  ${buildDemoStack()}
</div>`
}

export function extractNativeSelectToAlpine(_root: HTMLElement): string {
  return formatHtml(buildNativeSelectAlpineHtml())
}
