import { extractAccordionToAlpine } from '@/lib/extractors/accordion-to-alpine'
import { extractAspectRatioToAlpine } from '@/lib/extractors/aspect-ratio-to-alpine'
import { extractAlertDialogToAlpine } from '@/lib/extractors/alert-dialog-to-alpine'
import { extractAvatarToAlpine } from '@/lib/extractors/avatar-to-alpine'
import { extractBadgeToAlpine } from '@/lib/extractors/badge-to-alpine'
import { extractBreadcrumbToAlpine } from '@/lib/extractors/breadcrumb-to-alpine'
import { extractCalendarToAlpine } from '@/lib/extractors/calendar-to-alpine'
import { extractButtonGroupToAlpine } from '@/lib/extractors/button-group-to-alpine'
import { extractButtonToAlpine } from '@/lib/extractors/button-to-alpine'
import { extractCheckboxToAlpine } from '@/lib/extractors/checkbox-to-alpine'
import { extractCollapsibleToAlpine } from '@/lib/extractors/collapsible-to-alpine'
import { extractCarouselToAlpine } from '@/lib/extractors/carousel-to-alpine'
import { extractComboboxToAlpine } from '@/lib/extractors/combobox-to-alpine'
import { extractCommandToAlpine } from '@/lib/extractors/command-to-alpine'
import { extractContextMenuToAlpine } from '@/lib/extractors/context-menu-to-alpine'

export type AlpineExtractorId = 'accordion' | 'alert' | 'alert-dialog' | 'aspect-ratio' | 'avatar' | 'badge' | 'breadcrumb' | 'button' | 'button-group' | 'calendar' | 'card' | 'carousel' | 'checkbox' | 'collapsible' | 'combobox' | 'command' | 'context-menu'

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
      return extractAspectRatioToAlpine(root)
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
    case 'carousel':
      return extractCarouselToAlpine(root)
    case 'checkbox':
      return extractCheckboxToAlpine(root)
    case 'collapsible':
      return extractCollapsibleToAlpine(root)
    case 'combobox':
      return extractComboboxToAlpine(root)
    case 'command':
      return extractCommandToAlpine(root)
    case 'context-menu':
      return extractContextMenuToAlpine(root)
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
