import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'
import { extractAlertDialogToAlpine } from '@/lib/extractors/alert-dialog-to-alpine'
import { extractAvatarToAlpine } from '@/lib/extractors/avatar-to-alpine'
import { extractBadgeToAlpine } from '@/lib/extractors/badge-to-alpine'
import { extractBreadcrumbToAlpine } from '@/lib/extractors/breadcrumb-to-alpine'
import { extractCalendarToAlpine } from '@/lib/extractors/calendar-to-alpine'
import { extractButtonGroupToAlpine } from '@/lib/extractors/button-group-to-alpine'
import { extractButtonToAlpine } from '@/lib/extractors/button-to-alpine'

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
      return extractAvatarToAlpine(root)
    case 'badge':
      return extractBadgeToAlpine(root)
    case 'breadcrumb':
      return extractBreadcrumbToAlpine(root)
    case 'button':
      return extractButtonToAlpine(root)
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
