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
import { extractDataTableToAlpine } from '@/lib/extractors/data-table-to-alpine'
import { extractDialogToAlpine } from '@/lib/extractors/dialog-to-alpine'
import { extractDrawerToAlpine } from '@/lib/extractors/drawer-to-alpine'
import { extractDropdownMenuToAlpine } from '@/lib/extractors/dropdown-menu-to-alpine'
import { extractEmptyToAlpine } from '@/lib/extractors/empty-to-alpine'
import { extractFieldToAlpine } from '@/lib/extractors/field-to-alpine'
import { extractHoverCardToAlpine } from '@/lib/extractors/hover-card-to-alpine'
import { extractInputGroupToAlpine } from '@/lib/extractors/input-group-to-alpine'
import { extractInputOtpToAlpine } from '@/lib/extractors/input-otp-to-alpine'
import { extractInputToAlpine } from '@/lib/extractors/input-to-alpine'
import { extractItemToAlpine } from '@/lib/extractors/item-to-alpine'
import { extractKbdToAlpine } from '@/lib/extractors/kbd-to-alpine'
import { extractLabelToAlpine } from '@/lib/extractors/label-to-alpine'
import { extractMenubarToAlpine } from '@/lib/extractors/menubar-to-alpine'
import { extractNativeSelectToAlpine } from '@/lib/extractors/native-select-to-alpine'
import { extractNavigationMenuToAlpine } from '@/lib/extractors/navigation-menu-to-alpine'
import { extractPaginationToAlpine } from '@/lib/extractors/pagination-to-alpine'
import { extractPopoverToAlpine } from '@/lib/extractors/popover-to-alpine'
import { extractProgressToAlpine } from '@/lib/extractors/progress-to-alpine'
import { extractRadioGroupToAlpine } from '@/lib/extractors/radio-group-to-alpine'

export type AlpineExtractorId = 'accordion' | 'alert' | 'alert-dialog' | 'aspect-ratio' | 'avatar' | 'badge' | 'breadcrumb' | 'button' | 'button-group' | 'calendar' | 'card' | 'carousel' | 'checkbox' | 'collapsible' | 'combobox' | 'command' | 'context-menu' | 'data-table' | 'dialog' | 'drawer' | 'dropdown-menu' | 'empty' | 'field' | 'hover-card' | 'input' | 'input-group' | 'input-otp' | 'item' | 'kbd' | 'label' | 'menubar' | 'native-select' | 'navigation-menu' | 'pagination' | 'popover' | 'progress' | 'radio-group'

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
    case 'data-table':
      return extractDataTableToAlpine(root)
    case 'dialog':
      return extractDialogToAlpine(root)
    case 'drawer':
      return extractDrawerToAlpine(root)
    case 'dropdown-menu':
      return extractDropdownMenuToAlpine(root)
    case 'empty':
      return extractEmptyToAlpine(root)
    case 'field':
      return extractFieldToAlpine(root)
    case 'hover-card':
      return extractHoverCardToAlpine(root)
    case 'input':
      return extractInputToAlpine(root)
    case 'input-group':
      return extractInputGroupToAlpine(root)
    case 'input-otp':
      return extractInputOtpToAlpine(root)
    case 'item':
      return extractItemToAlpine(root)
    case 'kbd':
      return extractKbdToAlpine(root)
    case 'label':
      return extractLabelToAlpine(root)
    case 'menubar':
      return extractMenubarToAlpine(root)
    case 'native-select':
      return extractNativeSelectToAlpine(root)
    case 'navigation-menu':
      return extractNavigationMenuToAlpine(root)
    case 'pagination':
      return extractPaginationToAlpine(root)
    case 'popover':
      return extractPopoverToAlpine(root)
    case 'progress':
      return extractProgressToAlpine(root)
    case 'radio-group':
      return extractRadioGroupToAlpine(root)
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
