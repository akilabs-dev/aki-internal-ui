import {
  separatorBaseClass,
  separatorContentClass,
  separatorFrameClass,
  separatorFrameStyle,
  separatorHeaderBlockClass,
  separatorHeaderDescription,
  separatorHeaderDescriptionClass,
  separatorHeaderTitle,
  separatorHeaderTitleClass,
  separatorHorizontalClass,
  separatorNavItems,
  separatorNavRowClass,
  separatorVerticalClass,
} from '@/demos/separator/separator-demo.data'
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
  <a href="${escapeAttr(figmaLinks.separator)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildHorizontalSeparator(): string {
  return `<div data-slot="separator" role="none" data-orientation="horizontal" class="${separatorBaseClass} ${separatorHorizontalClass}"></div>`
}

function buildVerticalSeparator(): string {
  return `<div data-slot="separator" role="none" data-orientation="vertical" class="${separatorBaseClass} ${separatorVerticalClass}"></div>`
}

function buildNavRow(): string {
  const parts = separatorNavItems.flatMap((item, index) => {
    const label = `<div>${escapeHtml(item)}</div>`
    if (index < separatorNavItems.length - 1) {
      return [label, buildVerticalSeparator()]
    }
    return [label]
  })

  return `<div class="${separatorNavRowClass}">
  ${parts.join('')}
</div>`
}

function buildSeparatorDemo(): string {
  return `<div class="${separatorContentClass}">
  <div class="${separatorHeaderBlockClass}">
    <h4 class="${separatorHeaderTitleClass}">${escapeHtml(separatorHeaderTitle)}</h4>
    <p class="${separatorHeaderDescriptionClass}">${escapeHtml(separatorHeaderDescription)}</p>
  </div>
  ${buildHorizontalSeparator()}
  ${buildNavRow()}
</div>`
}

export function buildSeparatorAlpineHtml(): string {
  const frameStyle = separatorFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${separatorFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    ${buildSeparatorDemo()}
  </div>
</div>`
}

export function extractSeparatorToAlpine(_root: HTMLElement): string {
  return formatHtml(buildSeparatorAlpineHtml())
}
