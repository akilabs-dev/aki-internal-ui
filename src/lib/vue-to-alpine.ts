import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'

export type AlpineExtractorId = 'accordion'

export function extractVueToAlpineHtml(
  root: HTMLElement,
  extractor: AlpineExtractorId,
): string {
  switch (extractor) {
    case 'accordion':
      return extractAccordionToAlpine(root)
    default:
      return ''
  }
}
