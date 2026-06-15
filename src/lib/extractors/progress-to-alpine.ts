import {
  progressDefaults,
  progressFrameClass,
  progressFrameStyle,
  progressIndicatorClass,
  progressRootClass,
} from '@/demos/progress/progress-demo.data'
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

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.progress)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildProgress(): string {
  return `<div
  data-slot="progress"
  role="progressbar"
  :aria-valuenow="progress"
  aria-valuemin="0"
  aria-valuemax="100"
  class="${progressRootClass} ${progressDefaults.widthClass}"
  x-data="progressDemo"
>
  <div
    data-slot="progress-indicator"
    class="${progressIndicatorClass}"
    :style="\`transform: translateX(-\${100 - progress}%);\`"
  ></div>
</div>`
}

export function buildProgressAlpineHtml(): string {
  const frameStyle = progressFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${progressFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    ${buildProgress()}
  </div>
</div>`
}

export function extractProgressToAlpine(_root: HTMLElement): string {
  return formatHtml(buildProgressAlpineHtml())
}
