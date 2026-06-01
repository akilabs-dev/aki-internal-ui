import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'
import { extractAlertDialogToAlpine } from '@/lib/extractors/alert-dialog-to-alpine'
import { extractButtonGroupToAlpine } from '@/lib/extractors/button-group-to-alpine'

export type AlpineExtractorId = 'accordion' | 'alert' | 'alert-dialog' | 'aspect-ratio' | 'avatar' | 'badge' | 'breadcrumb' | 'button' | 'button-group'

export function extractVueToAlpineHtml(
  root: HTMLElement,
  extractor: AlpineExtractorId,
): string {
  switch (extractor) {
    case 'accordion':
      return extractAccordionToAlpine(root)
    case 'alert':
    case 'aspect-ratio':
      return root.innerHTML.trim()
    case 'avatar':
      return root.innerHTML.trim()
    case 'badge':
    case 'breadcrumb':
    case 'button':
      return root.innerHTML.trim()
    case 'button-group':
      return extractButtonGroupToAlpine(root)
    case 'alert-dialog':
      return extractAlertDialogToAlpine(root)
    default:
      return ''
  }
}
