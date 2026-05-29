import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'
import { extractAlertDialogToAlpine } from '@/lib/extractors/alert-dialog-to-alpine'

export type AlpineExtractorId = 'accordion' | 'alert' | 'alert-dialog' | 'aspect-ratio' | 'avatar'

export function extractVueToAlpineHtml(
  root: HTMLElement,
  extractor: AlpineExtractorId,
): string {
  switch (extractor) {
    case 'accordion':
      return extractAccordionToAlpine(root)
    case 'alert':
      return root.innerHTML.trim()
    case 'aspect-ratio':
      return root.innerHTML.trim()
    case 'avatar':
      return root.innerHTML.trim()
    case 'alert-dialog':
      return extractAlertDialogToAlpine(root)
    default:
      return ''
  }
}
