import {
  fruitGroup,
  selectCheckSvg,
  selectChevronDownSvg,
  selectContentClass,
  selectFrameClass,
  selectFrameStyle,
  selectFruitPlaceholder,
  selectFruitTriggerClass,
  selectItemClass,
  selectItemIndicatorClass,
  selectLabelClass,
  selectRowClass,
  selectScrollButtonClass,
  selectSectionSeparatorClass,
  selectTimezonePlaceholder,
  selectTimezoneTriggerClass,
  selectTriggerClass,
  selectValuePlaceholderClass,
  selectViewportClass,
  timezoneGroups,
  type SelectGroup,
} from '@/demos/select/select-demo.data'
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
  <a href="${escapeAttr(figmaLinks.select)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildGroupsContent(
  groups: readonly SelectGroup[],
  options: {
    alpine?: boolean
    selectedValue?: string
    showScrollDown?: boolean
  } = {},
): string {
  const groupsHtml = groups
    .map((group) => {
      const items = group.options
        .map((option) => {
          const selected = options.selectedValue === option.value
          const itemAttrs = options.alpine
            ? ` @click="select('${escapeAttr(option.value)}')" :data-state="isSelected('${escapeAttr(option.value)}') ? 'checked' : 'unchecked'"`
            : ` data-state="${selected ? 'checked' : 'unchecked'}"`

          const indicator = options.alpine
            ? `<span class="${selectItemIndicatorClass}"><span x-show="isSelected('${escapeAttr(option.value)}')">${selectCheckSvg}</span></span>`
            : selected
              ? `<span class="${selectItemIndicatorClass}">${selectCheckSvg}</span>`
              : `<span class="${selectItemIndicatorClass}"></span>`

          const itemClass = selected && !options.alpine
            ? `${selectItemClass} bg-accent text-accent-foreground`
            : selectItemClass

          return `<div
  role="option"
  data-slot="select-item"
  class="${itemClass}"
  ${itemAttrs}
>
  ${indicator}
  <span data-slot="select-item-text">${escapeHtml(option.label)}</span>
</div>`
        })
        .join('')

      return `<div data-slot="select-group" role="group">
  <div data-slot="select-label" class="${selectLabelClass}">${escapeHtml(group.label)}</div>
  ${items}
</div>`
    })
    .join('')

  const scrollDown = options.showScrollDown
    ? `<div data-slot="select-scroll-down-button" class="${selectScrollButtonClass}">${selectChevronDownSvg}</div>`
    : ''

  return `<div class="${selectViewportClass}">
  ${groupsHtml}
</div>${scrollDown}`
}

function buildInteractiveSelect(
  alpineKey: string,
  config: {
    placeholder: string
    triggerClass: string
    groups: readonly SelectGroup[]
    showScrollDown?: boolean
  },
): string {
  return `<div data-slot="select" class="relative w-fit" x-data="${alpineKey}">
  <button
    type="button"
    x-ref="trigger"
    role="combobox"
    data-slot="select-trigger"
    class="${selectTriggerClass} ${config.triggerClass}"
    :aria-expanded="open"
    :data-state="open ? 'open' : 'closed'"
    @click="toggle()"
  >
    <span
      data-slot="select-value"
      :class="isPlaceholder() ? '${selectValuePlaceholderClass}' : ''"
      x-text="label()"
    ></span>
    ${selectChevronDownSvg}
  </button>
  <div
    x-ref="content"
    x-show="open"
    x-cloak
    data-slot="select-content"
    :data-state="open ? 'open' : 'closed'"
    class="${selectContentClass} ${config.triggerClass}"
    @click.outside="close()"
    @keydown.escape.window="close()"
  >
    ${buildGroupsContent(config.groups, { alpine: true, showScrollDown: config.showScrollDown })}
  </div>
</div>`
}

export function buildSelectAlpineHtml(): string {
  const frameStyle = selectFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${selectFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    <div class="${selectRowClass}">
      ${buildInteractiveSelect('selectFruitDemo', {
        placeholder: selectFruitPlaceholder,
        triggerClass: selectFruitTriggerClass,
        groups: [fruitGroup],
      })}
      ${buildInteractiveSelect('selectFruitDemo2', {
        placeholder: selectFruitPlaceholder,
        triggerClass: selectFruitTriggerClass,
        groups: [fruitGroup],
      })}
    </div>
    <div data-slot="separator" class="${selectSectionSeparatorClass}" role="none"></div>
    <div class="${selectRowClass}">
      ${buildInteractiveSelect('selectTimezoneDemo', {
        placeholder: selectTimezonePlaceholder,
        triggerClass: selectTimezoneTriggerClass,
        groups: timezoneGroups,
        showScrollDown: true,
      })}
      ${buildInteractiveSelect('selectTimezoneDemo2', {
        placeholder: selectTimezonePlaceholder,
        triggerClass: selectTimezoneTriggerClass,
        groups: timezoneGroups,
        showScrollDown: true,
      })}
    </div>
  </div>
</div>`
}

export function extractSelectToAlpine(_root: HTMLElement): string {
  return formatHtml(buildSelectAlpineHtml())
}
