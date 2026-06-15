import {
  scrollAreaArtworks,
  scrollAreaCaptionClass,
  scrollAreaCaptionNameClass,
  scrollAreaFigureClass,
  scrollAreaFrameClass,
  scrollAreaFrameStyle,
  scrollAreaHorizontalClass,
  scrollAreaHorizontalContentClass,
  scrollAreaHorizontalStyle,
  scrollAreaImageClass,
  scrollAreaImageWrapClass,
  scrollAreaRootClass,
  scrollAreaSectionSeparatorClass,
  scrollAreaTagClass,
  scrollAreaTags,
  scrollAreaTagsTitleClass,
  scrollAreaTagSeparatorClass,
  scrollAreaVerticalClass,
  scrollAreaVerticalViewportClass,
  scrollAreaHorizontalViewportClass,
} from '@/demos/scroll-area/scroll-area-demo.data'
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
  <a href="${escapeAttr(figmaLinks.scrollArea)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function buildTagsContent(): string {
  const rows = scrollAreaTags
    .map(
      (tag) => `<div class="${scrollAreaTagClass}">${escapeHtml(tag)}</div>
<div data-slot="separator" class="${scrollAreaTagSeparatorClass}" role="none"></div>`,
    )
    .join('')

  return `<div class="p-4">
  <h4 class="${scrollAreaTagsTitleClass}">Tags</h4>
  ${rows}
</div>`
}

function buildVerticalScrollArea(): string {
  return `<div data-slot="scroll-area" class="${scrollAreaRootClass} ${scrollAreaVerticalClass}">
  <div data-slot="scroll-area-viewport" class="${scrollAreaVerticalViewportClass}">
    ${buildTagsContent()}
  </div>
</div>`
}

function buildArtworkFigure(artwork: (typeof scrollAreaArtworks)[number]): string {
  return `<figure class="${scrollAreaFigureClass}">
  <div class="${scrollAreaImageWrapClass}">
    <img
      src="${escapeAttr(artwork.src)}"
      alt="${escapeAttr(`Photo by ${artwork.artist}`)}"
      class="${scrollAreaImageClass}"
      width="110"
      height="147"
    />
  </div>
  <figcaption class="${scrollAreaCaptionClass}">
    Photo by <span class="${scrollAreaCaptionNameClass}">${escapeHtml(artwork.artist)}</span>
  </figcaption>
</figure>`
}

function buildHorizontalScrollArea(): string {
  const figures = scrollAreaArtworks.map(buildArtworkFigure).join('')
  const horizontalStyle = scrollAreaHorizontalStyle()

  return `<div data-slot="scroll-area" class="${scrollAreaRootClass} ${scrollAreaHorizontalClass} overflow-hidden" style="max-width: ${horizontalStyle.maxWidth}">
  <div data-slot="scroll-area-viewport" class="${scrollAreaHorizontalViewportClass}">
    <div class="${scrollAreaHorizontalContentClass}">
      ${figures}
    </div>
  </div>
</div>`
}

function buildSectionSeparator(): string {
  const horizontalStyle = scrollAreaHorizontalStyle()

  return `<div data-slot="separator" class="${scrollAreaSectionSeparatorClass}" style="max-width: ${horizontalStyle.maxWidth}" role="none"></div>`
}

export function buildScrollAreaAlpineHtml(): string {
  const frameStyle = scrollAreaFrameStyle()

  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${scrollAreaFrameClass}" style="max-width: ${frameStyle.maxWidth}">
    ${buildVerticalScrollArea()}
    ${buildSectionSeparator()}
    ${buildHorizontalScrollArea()}
  </div>
</div>`
}

export function extractScrollAreaToAlpine(_root: HTMLElement): string {
  return formatHtml(buildScrollAreaAlpineHtml())
}
