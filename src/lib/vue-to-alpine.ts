import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'
import { extractAlertDialogToAlpine } from '@/lib/extractors/alert-dialog-to-alpine'
import { extractCalendarToAlpine } from '@/lib/extractors/calendar-to-alpine'
import { extractButtonGroupToAlpine } from '@/lib/extractors/button-group-to-alpine'

export type AlpineExtractorId = 'accordion' | 'alert' | 'alert-dialog' | 'aspect-ratio' | 'avatar' | 'badge' | 'breadcrumb' | 'button' | 'button-group' | 'calendar' | 'card'

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
    case 'badge':
      return root.innerHTML.trim()
    case 'breadcrumb':
      return root.innerHTML.trim()
    case 'button':
      return root.innerHTML.trim()
    case 'card':
      return root.innerHTML.trim()
    case 'calendar':
      return extractCalendarToAlpine(root)
    case 'button-group':
      return extractButtonGroupToAlpine(root)
    case 'alert-dialog':
      return extractAlertDialogToAlpine(root)
    default:
      return ''
  }
}
