import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'

export type AlpineExtractorId = 'accordion' | 'alert'

export function extractVueToAlpineHtml(
  root: HTMLElement,
  extractor: AlpineExtractorId,
): string {
  switch (extractor) {
    case 'accordion':
      return extractAccordionToAlpine(root)
    case 'alert':
      return root.innerHTML.trim()
    default:
      return ''
  }
}
